console.debug("Hello World");

// variables
//let gives us the possibility to change a value
let number = 10;
number = number + 1;
console.log(number);

// const means the variable should not change
const courseName = "Web Interface Programming";
// courseName = "Mary" ; constant cannot be change
console.log(courseName);

let numbers = [1, 2, 3];
console.log(numbers);

// in this case, an array is assigned to const grades
// we cannot change the variable name grades itself
// but we can manipulate the array
const grades = [80, 90, 100];
grades.push(75); // we're not changing the variable, just using the array
console.log(grades);

// JavaScript Object
const student = {
  name: "Lii",
  grade: 87,
};

console.log(student);
console.log(student.name);
console.log(student.grade);

/**Block Scope
 * Scope protects variables and prevents accidental misuse.
 */
a = 5;

if (a == 5) {
  let message = "You guessed the number right!!!";
  console.log(message);
}

// WARNING: this wouldn't work, because message is
// in the conditional's scropt and not accessible
// console.log(message)

function showUser() {
  const username = "Mina";
  console.log(`${username} is logged in!`);
}

showUser();

// WARNING: this wouldn't work, because message is
// in the conditional's scropt and not accessible
// console.log(username);

/**
 * Mini check in
 */

// let or const
page = 1; //page can change
maxItems = 20; //  maxItems could not change!
categories = ["movies", "books"]; //categories stay the same

/**
 * Functions
 */

function greetUser(name) {
  // this is a void function
  console.log("hello " + name + " i hope you're good");
}

//const name = "Nora";
//greetUser(name);

// const result = add(3, 5);
// console.log("result is " + result);

// a void function, execute whatever it's supposed to
// but it doesn't return any values
// hence, it can't be assigned to a variable

// let a = greetUser() doesn't work, since greetUser doesn't return anything

// BUT, a return function can be assigned to a variable
// Because, it returns a value!
// let number1 = add(10, 20);

// Mini Exercise :
const name = "Jane";
const lastName = "Doe";

const fullName = getFullName(name, lastName);
// 1.
// write a RETURN function that adds name and
// lastname (with a space) and returns it to fullName
function getFullName(name, lastname) {
  return `${name} ${lastname}`;
}

// 2.
// write a function that greets the user calling their fullname
function greetings(str) {
  console.log(str);
}

// call function
console.log(getFullName(name, lastName));
greetings(fullName);
document.getElementById("title").innerText = fullName;

function calculateTotal(price, quantity) {
  return price * quantity;
}

function formatPrice(amount) {
  return "$" + amount.toFixed(2);
}

const totalPrice = calculateTotal(20.99, 3);
console.log(totalPrice);
console.log(formatPrice(totalPrice));

/**
 * Arrays and loops
 */

const fruits = ["apple", "banana", "orange"];
console.log(fruits);
console.log(fruits[0]); // first element
console.log(fruits.length); // length
console.log(fruits[fruits.length - 1]); //last element

// loop through an array!
fruits.forEach(function (fruit) {
  console.log(fruit);
});

console.log("--------");
fruits.forEach((fruit) => console.log(fruit));

console.log("--------");
for (const fruit of fruits) {
  console.log(fruit);
}

console.log("--------");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("--------");
i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

/**
 * find function
 * finds the first occurence that passes the condition
 */

const prices = [10, 20, 30, 40];
const firstBigPrice = prices.find(function (price) {
  return price > 25;
});

/** filter function
 *
 */
// create an array of all elements that pass the condition within the array
const expensivePrices = prices.filter(function (price) {
  return price > 25;
});
console.log(expensivePrices);

/**Map function
 *
 */
//transform each item in the array and stores it in a new array
const formattedPrices = prices.map(function (price) {
  return "$" + price;
});
console.log(formattedPrices);

/**objects
 *
 */
console.log("---------");

const product = {
  name: "Keyboard",
  price: "49.99",
  inStock: true,
  describe: function () {
    return this.name + " csots $" + this.price;
  },
};

console.log(product.name);
console.log(product.describe);
