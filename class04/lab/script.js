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

// DOM References
const studentBtn = document.getElementById("load-student-btn");
const courseBtn = document.getElementById("load-courses-btn");
const clearBtn = document.getElementById("clear-btn");
const status = document.getElementById("status");
const studentData = document.getElementById("student-container");
const courseData = document.getElementById("courses-container");

studentBtn.addEventListener("click");

function getStudentData() {
  let promise = new Promise((resolve, reject) => {});
}
