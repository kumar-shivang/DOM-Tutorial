// DOM Manipulation
// Event Listners

const btn2 = document.querySelector("#btn-2");

function alertbtn() {
  alert("Button 2 pressed");
}

btn2.addEventListener("click", alertbtn);

const box3 = document.querySelector("#box-3");

box3.addEventListener("mouseover", () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((element) => {
    element.style.backgroundColor = "pink";
  });
});

box3.addEventListener("mouseout", () => {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => (box.style.backgroundColor = "transparent"));
});
