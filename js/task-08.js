// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обробка відправлення форми form.login-form повинна відбуватися відповідно
//  до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
//  що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
//  де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
//  Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми
//  методом reset.

const form = document.querySelector(".login-form");

const useremail = document.querySelector('[name="email"]');

const password = document.querySelector('[name="password"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const elements = {
    email: useremail.value,
    pass: password.value,
  };
  if (useremail.value.trim() === "" || password.value.trim() === "") {
    return alert("Увага, усі поля повинні бути заповнені!");
  }
  console.log(elements);
form.reset();
});
