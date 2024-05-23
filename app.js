// DOM Manipulation

const title = document.querySelector("#main-heading");
console.log(title);

title.style.color = "red"; // turns title red

const listItems = document.querySelectorAll(".list-items");
console.log(listItems);

listItems.forEach((item) => {
  item.style.fontSize = "1.5rem";
});

// creating elements
const ul = document.querySelector("ul");
const li = document.createElement("li");

ul.append(li);

// Modifying text
li.innerText = "x-men";

li.setAttribute("class", "list-items");

// get attribute

console.log(title.getAttribute("id"));
