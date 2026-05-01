const student = {
  id: 1,
  name: "Mary Brown",
  program: "Advanced Programming",
  semester: "Winter 2026",
  bio: "Web Developer",
};

const courses = [
  { code: "WIP2", title: "Web Interface Programming 2" },
  { code: "AWP", title: "Advanced Programming" },
  { code: "DB2", title: "Database Management Systems 2" },
];

// DOM References
const studentBtn = document.getElementById("load-student-btn");
const courseBtn = document.getElementById("load-courses-btn");
const clearBtn = document.getElementById("clear-btn");
const statusText = document.getElementById("status");
const studentData = document.getElementById("student-container");
const courseData = document.getElementById("courses-container");

function getStudentData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (student) {
        resolve(student);
      } else {
        reject("No students registered!");
      }
    }, 1000);
  });
  return promise;
}

function renderStudent(student) {
  studentData.innerHTML = `
  <h3>Student Profile</h3>
  <p><strong>Name: </strong>${student.name}</p>
  <p><strong>Program: </strong> ${student.program}</p>
  <p><strong>Semester: </strong>${student.semester}</p>
  <p><strong>Bio: </strong> ${student.bio}</p>`;
}

studentBtn.addEventListener("click", () => {
  // console.log("Button Clicked!");
  statusText.textContent = "Loading Students...";

  getStudentData()
    .then((student) => {
      renderStudent(student);
      statusText.textContent = "Student loaded successfully!";
    })
    .catch((error) => {
      console.log(error);
    });
});

function getCoursesData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (courses.length > 0) {
        resolve(courses);
      } else {
        reject("Courses failed to load!");
      }
    }, 1000);
  });
  return promise;
}

function renderCourses(courses) {
  courseData.innerHTML = "";
  const heading = document.createElement("h3");
  heading.textContent = "Courses";
  courseData.append(heading);

  const list = document.createElement("ul");
  courses.forEach((course) => {
    const li = document.createElement("li");

    const codeSpan = document.createElement("strong");
    codeSpan.textContent = course.code;
    li.append(codeSpan);
    li.append(` - ${course.title}`);

    list.append(li);
  });

  courseData.append(list);
}

courseBtn.addEventListener("click", () => {
  statusText.textContent = "Loading courses ...";

  getCoursesData(courses)
    .then((courses) => {
      renderCourses(courses);
      statusText.textContent = "Courses loaded successfully!";
    })
    .catch((error) => {
      statusText.textContent = error;
    });
});

clearBtn.addEventListener("click", () => {
  studentData.innerHTML = "";
  courseData.innerHTML = "";
  statusText.textContent = "Ready";
});
