// create a function that checks password
// takes a password as a parameter
// it returns a Promise
// It compares the entered password with your password
// based on that has a reject or resolvved (with a string value)

// call the function with 3 different  passwords
// all shouve have a .then() and .catch()

let password1 = "234KDb";
let password2 = "ABCdef";
let password3 = "kdfk9K";

function check_password(password) {
  //const myPassword = "ABCdef";
  const promise = new Promise((resolve, reject) => {
    if (password1 == password) {
      setTimeout(() => {
        resolve("Login successfully!"); // condition passed
      }, 2000);
    } else {
      reject("Password is invalid"); // condition didn't pass
    }
  });
  return promise;
}

check_password(password1)
  .then((result) => {
    // if condition passed
    console.log(result);
  })
  .catch((error) => {
    // if condition didn't pass
    console.log(error);
  });

check_password(password2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

check_password(password3)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
