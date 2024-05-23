// DOM Manipulation
// Selecting Elements

// get element by id
const title = document.getElementById("title");
console.log(title);

// get element by class
const listItems = document.getElementsByClassName("list-items");
console.log(listItems);

// get elements by tag tag name
const list = document.getElementsByTagName("ul");
console.log(list);

// query selector
const first = document.querySelector("li");
console.log(first);

// query selector for all items
const all = document.querySelectorAll("li");
console.log(all);
