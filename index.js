(function() {
  'use strict';

  // YOUR CODE HERE
var stopCtrl = document.getElementsByClassName("button")[0];
var stopLight = document.getElementsByClassName("bulb")[0];

stopCtrl.addEventListener("click", function () {
  stopLight.classList.toggle("stop");
});

var slowCtrl = document.getElementsByClassName("button")[1];
var slowLight = document.getElementsByClassName("bulb")[1];

slowCtrl.addEventListener("click", function () {
  slowLight.classList.toggle("slow");
});

var goCtrl = document.getElementsByClassName("button")[2];
var goLight = document.getElementsByClassName("bulb")[2];

goCtrl.addEventListener("click", function () {
  goLight.classList.toggle("go");
});

document.querySelector(".button").onmouseenter = function (event) {
  console.log("test");
};
})();
