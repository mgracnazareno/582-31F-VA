// let's load in DOM
const button = document.getElementById("load_button");
const output = document.getElementById("output");
const input_field = document.getElementById("inp");

function input_check(str) {
  let promise = new Promise((resolve, reject) => {
    if (str == "Hello") {
      setTimeout(() => {
        resolve("Content Loaded");
      }, 3000);
    } else {
      setTimeout(() => {
        resolve("Content didnt load");
      }, 3000);
    }
  });
  return promise;
}

// let's add our function to the button
button.addEventListener("click", () => {
  //first we update the text
  output.textContent = "Loading...";

  // then we update with the actual result
  //   input_check().then((result) => {
  //     output.textContent = result;
  //   });
  input_check()
    .then((result) => {
      output.textContent = result;
      input_field.value = "";
    })
    .catch((error) => {
      output.textContent = error;
      input_field = "";
    });
});
