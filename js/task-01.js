// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories,
//  тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль
//  текст заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >,
//   вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості
//  навігації по DOM.

const listUl = document.querySelectorAll("#categories > li");
console.log("Number of categories: " + listUl.length);
listUl.forEach(function (item) {
  const nameCategory = item.querySelector("h2");
  const countEl = item.querySelectorAll("ul>li");
  console.log(
    `Category: ${nameCategory.textContent} Elements: ${countEl.length}`
  );
});
