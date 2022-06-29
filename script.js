let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let name = document.getElementById("name");
let back = document.getElementById("back");

box1.addEventListener("mouseenter", function () {
  this.style.color = "#aa80ff";
});
box1.addEventListener("mouseleave", function () {
  this.style.color = "black";
});

box2.addEventListener("mouseenter", function () {
  this.style.color = "#aa80ff";
});
box2.addEventListener("mouseleave", function () {
  this.style.color = "black";
});
name.addEventListener("mouseenter", function () {
  this.style.color = "#aa80ff";
});
name.addEventListener("mouseleave", function () {
  this.style.color = "black";
});
back.addEventListener("mouseenter", function () {
  this.style.color = "#aa80ff";
});
back.addEventListener("mouseleave", function () {
  this.style.color = "black";
});
