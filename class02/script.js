//asynchronous vs synchronous

//sequential code
console.log("Start"); //1
console.log("Middle"); //2
console.log("End"); //3

// in sequential manner, coderuns in on
// order each line compute and complete before the next one

//now we can look at deferred execution

console.log("=====");
console.log("now with time interval");

//we could use setTimeOut(), to run the code
// after a certain amount of time

console.log("callback functions");
function doSeomethingLater(callback) {
  console.log("Doing setup...");

  callback(); // argument/ parameter callback
  // is a function, not an integer or
  // any other data type

  setTimeout(callback, 2000);
}
// we have to pass the function as an argument
// to the doSomethingLater function
doSeomethingLater(() => {
  console.log("Nice to meet you!");
});
//
// in the case of a callback, our function needs to be
// wrapped around an arrow function
/**
 * function(() => {
 *    whatever you want to do.
 * });
 */

// arrow function == lambda function!
// a continuation is the next piece of work the program
// should do

// it's  often represented as a function to run later.

/**
 * DOM Review!
 */

//const title = document.querySelector("#title");
const title = document.getElementById("title");
const description = document.querySelector("title");
const output = document.getElementById("output");

console.log(title);
console.log(description);
console.log(description.textContent); // just the content
console.log(output);

// to update the DOM content
output.textContent = "I would like to have one red banana.";

const topics = ["Big Ben", "Statue of Liberty", "Chichen"];
const topicList = document.getElementById("topic-list");
for (let topic of topics) {
  const li = document.createElement("li");
  li.textContent = topic;
  topicList.appendChild(li);
}

/**
 * Event handling!
 */
const button = document.getElementById("my-button");
console.log(button);
button.addEventListener("click", () => {
  console.log("Button is clicked");
  output.textContent = "Oh hello there!";
});

// the example above is also a continuation/callback

// now let's read an input on click!
const nameInput = document.getElementById("name-input");

button.addEventListener("click", () => {
  //get the value
  const name = nameInput.value.trim();
  //display the value
  output.textContent = "Oh hello " + name;
});

/**
 * iNput event
 */
// allows us to see what the use is typing
const previewOutput = document.getElementById("preview-output");

// typing/input as an event
nameInput.addEventListener("input", () => {
  console.log(nameInput.textContent);
  console.log("typing ..");

  previewOutput.textContent = `Typing ${nameInput.value}`;
});
