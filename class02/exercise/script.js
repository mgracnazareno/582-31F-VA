// Load in the dom elements
// nameInput
const nameInput = document.getElementById("name-input");
// greet button
const greetBtn = document.getElementById("greet-button");
// output
const output = document.getElementById("output");
// 2. Add an event listener to button
greetBtn.addEventListener("click", () => {
  // continuation function for it should be:
  // 1. take the input value and trim it
  const inputValue = nameInput.value.trim();
  // 2. (condition) validate that the input is not an empty string
  if (inputValue === "") {
    // if it is --> update output text to : Please enter something
    // 3. after 100ms, update the output with: Hello, Input_value
    output.textContent = "Please enter something";
    // this gets us out of the function and ignores whatever's after!
    return;
  }
  setTimeout(() => {
    output.textContent = `Hello, ${inputValue}`;
  }, 1000);
});
