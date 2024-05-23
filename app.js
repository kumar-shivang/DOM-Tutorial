// DOM Manipulation

const title = document.querySelector("#main-heading");
console.log(title);

title.style.color = "red"; // turns title red

const listItems = document.querySelectorAll(".list-items");
console.log(listItems);

listItems.forEach((item) => {
  item.style.fontSize = "1.5rem";
});
