let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");

box1.addEventListener("mouseenter", function () {
  this.style.color = "red";
});
box1.addEventListener("mouseleave", function () {
  this.style.color = "black";
});

box2.addEventListener("mouseenter", function () {
  this.style.color = "red";
});
box2.addEventListener("mouseleave", function () {
  this.style.color = "black";
});
