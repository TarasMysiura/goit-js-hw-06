// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories,
//  тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль
//  текст заголовку елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >,
//   вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості
//  навігації по DOM.

// const listUl = document.querySelectorAll("#categories > li");
// console.log("Number of categories: " + listUl.length);
// listUl.forEach(function (item) {
//   const nameCategory = item.querySelector("h2");
//   const countEl = item.querySelectorAll("ul>li");
//   console.log(
//     `Category: ${nameCategory.textContent} Elements: ${countEl.length}`
//   );
// });

const listUl = document.getElementById("categories");
const newArray = listUl.children;

console.log(`Number of categories: ${newArray.length}`);

const categoryList = listUl.querySelectorAll(".item");

categoryList.forEach((item) => {
  const categoryName = item.querySelector("h2").textContent;
  const categoryCount = item.querySelectorAll("li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryCount}`);
});
