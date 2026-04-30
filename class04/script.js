// Promises and javascript objects as returns

let student = { id: 1, name: "Alice", role: "Student" };

console.log(student);

let auth = true;

function loadUserData() {
  let promise = new Promise((resolve, reject) => {
    if (auth == true) {
      resolve(student);
    } else {
      reject("Authentication Failed");
    }
  });
  return promise;
  console.log(promise);
}

loadUserData()
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error);
  });

// API --> Appliation Programming Interface
// API : a set of rules and protocols that allow different
// software applications to communicate with one another

// An important aspect of why use Promises:
// The term --> concurrency
// Modern computers can multiple code at the same time!

// Promises wrap these eventual outcomes for us, so that
// we don't have to wait until the outcome is present.

/**
 * Chains in Promises
 */

// This is a simple chain in how promises can be used.
Promise.resolve(5) // once resolved  sent to .then()
  .then((result) => {
    // console.log(result * 2)
    console.log(`Step 1: ${result}`);
    return result * 2; // process and sent it to the next .then()
  })
  .then((result) => {
    console.log(`Step 2: ${result}`);
    console.log(result); // final step.
    return result;
  })
  .then((result) => {
    let newResult = result * 100;
    console.log(`Step 3: ${newResult}`);
    console.log(newResult);
  });

// Let's try with our student

output = document.getElementById("output");

loadUserData()
  .then((user) => {
    console.log(`Username: ${user.name}`);
    return user.name;
  })
  .then((name) => {
    return name.toUpperCase();
  })
  .then((name) => {
    //we print
    output.textContent = `Hello, ${name}!`;
    // console.log(`Hellow, ${name}!`);
  })
  .catch((error) => {
    // catch is a good  idea to make sure errors are handled
    output.textContent = error;
  });
