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
const listH2El = document.querySelectorAll("#categories h2");
console.log(listH2El);
const listUlUl = document.querySelectorAll("#categories > li > ul");
console.log(listUlUl);
// const countEl = document.querySelectorAll("h2 + ul");
// console.log(countEl.querySelectorAll(li));

listUlUl.forEach(function (item2) {
    let countEl = '';
    let name = '';
    listH2El.forEach(function (item1, index) {
        countEl = document.querySelectorAll("li > ul");
        name = item1.textContent;
    
  });console.log(`Category: ${name} Elements: ${countEl.length}`);
});
