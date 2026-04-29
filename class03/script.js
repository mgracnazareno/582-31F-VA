// Promises

// javascript is often asynchronous

console.log("Hello");
console.log("Bye");

// this is not  normal top-to-bottom flow!
// console.log("Start");
// setTimeout(() => {
//   console.log("Middle");
// }, 1000); // some work is delayed here
// console.log("End");
// let's transition to promises

// When asynchronouse programs become more complex
// we want and NEED a clearer structure

// A promise, lets us say
// this work is happening, it will eventually succeed or fail
// based on that, it does something after.

// We have an object of type Promise
// it represents a state (PromiseState) --> resolve/fulfilled
// it has a PromiseResult --> the string in this case
//const promise = Promise.resolve("Hello from a resolved promise");
//console.log(promise);

// A Promise is an object representing the eventual result of an asynchronous operation

// In simpler words: A promise is a value that is not ready yet, but will be ready later -- or may fail!

// const failedPromise = Promise.reject("Something went wrong");
// console.log(failedPromise);

/**
 * A promise has a three states:
 * 1. pending : still waiting
 * 2. fulfilled : completed successfully
 * 3. rejected : failed
 */

// visually:
//      pending --> fulfilled or pending --> rejected

// IMPORTANT: conceptuqal distinction
const value = Promise.resolve(42);
// here we are not giving 42 directly. We're making a Promise object
console.log(value);

// Consuming Promises with .then() and .catch()

// .then() runs when the promise is fulfilled. it receives the resolved value!

// .catch() runs when the promise is rejected
// it receives the error or rejection reason

// Basic Resolved Promise
Promise.resolve("Hello World").then((result) => {
  console.log(result);
});

// Basic rejected Promise
Promise.reject("Failed to load").catch((error) => {
  console.log(error);
});

// Both success and failure flow

const success = true;

// we're promising an outcome based on success or reject
const myPromise = new Promise((resolve, reject) => {
  if (success == true) {
    resolve("Operation successful"); //this can hold any value
  } else {
    reject("Operation failed");
  }
});

myPromise
  .then((result) => {
    //for when it/s resolved
    console.log("--------");
    console.log(result);
  })
  .catch((error) => {
    //for when it's rejected
    console.log("---------");
    console.log(error);
  });

// IMPORTANT
// A Promise is not magic
// It is often wrapping asynchronous work.
// such as a timer, or HTTP request, etc

// Delayed success or failure
const success2 = false;

const myPromise2 = new Promise((resolve, reject) => {
  if (success2 == true) {
    setTimeout(() => {
      resolve("Data loaded");
    }, 1000);
  } else {
    setTimeout(() => {
      resolve("Data didn't load");
    }, 1000);
  }
});

// uncaught --> didnt catch ! (doesnt have a catch)

myPromise2
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    //catch here is useful to handle errors
    console.log(error);
  });

// number = 10;

// let's have a promise inside of a function
function checkNumber(newNumber) {
  const promise = new Promise((resolve, reject) => {
    if (newNumber > 10) {
      resolve("Number is greater than 10");
    } else {
      reject("Number is 10 or less");
    }
  });

  return promise;
}

console.log("----------");
let number = 10;
let number2 = 15;

checkNumber(number)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

checkNumber(number2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
