const student = [
  {
    id: 1,
    name: "Mary Brown",
    program: "Web Design",
    semester: "Winter 2026",
    bio: "Web Developer",
  },
  {
    id: 2,
    name: "James Bond",
    program: "Cybersecurity",
    semester: "Winter 2026",
    bio: "Cybersecurity Specialist",
  },
  {
    id: 3,
    name: "Tom Jones",
    program: "Web Design",
    semester: "Winter 2026",
    bio: "Frontend Developer",
  },
];

const courses = [
  { code: "WIP2", title: "Web Interface Programming 2" },
  { code: "AWP", title: "Advanced Programming" },
  { code: "DB2", title: "Database Management Systems 2" },
];

// DOM References
const studentBtn = document.getElementById("load-student-btn");
const courseBtn = document.getElementById("load-courses-btn");
const clearBtn = document.getElementById("clear-btn");
const status = document.getElementById("status");
const studentData = document.getElementById("student-container");
const courseData = document.getElementById("courses-container");

console.log(student);
function getStudentData() {
  let promise = new Promise((resolve, reject) => {
    if (auth == true) {
      resolve(student);
    } else {
      reject("Authentication failed");
    }
  });
  return promise;
}

//testing
getStudentData()
  .then((student) => {
    console.log(student);
  })
  .catch((error) => {
    console.log(error);
  });
