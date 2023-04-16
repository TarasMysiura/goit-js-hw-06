// Напиши скрипт, який під час набору тексту в інпуті
//  input#name - input(подія input), підставляє його поточне значення в
//   span#name - output.Якщо інпут порожній, у спані повинен відображатися
//    рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

let inputValue = document.querySelector("#name-input");

const userName = document.querySelector("#name-output");

console.log(userName.innerHTML);

inputValue.addEventListener("input", (event) => {
  userName.textContent =
    event.currentTarget.value.trim() === ""
      ? "Anonymous"
      : event.currentTarget.value;
});
