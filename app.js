// DOM Manipulation

// Traversal

let ul = document.querySelector("ul");

console.log(ul.parentNode.parentNode);
console.log(ul.parentElement.parentElement);

let html = document.documentElement;

console.log(html.parentNode); // returns the html node itself
console.log(html.parentElement); // returns none
