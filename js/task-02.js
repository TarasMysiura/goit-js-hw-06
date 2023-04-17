const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>.
//    Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const list = document.querySelector("#ingredients");

const fragment = document.createDocumentFragment();

ingredients.forEach(function (ingredient) {
  const item = document.createElement("li");
  item.textContent = ingredient;
  fragment.appendChild(item);  
});

list.append(fragment);
