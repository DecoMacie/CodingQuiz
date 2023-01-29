// Access toggle switch HTML element
var buttonStart = document.querySelector("#start");
var container = document.querySelector(".container");

var timeEl = document.querySelector(".timer");

// Selects element by id
// var mainEl = document.getElementById("main");

var secondsLeft = 0;

function setTime() {
  // Sets interval in variable
  secondsLeft = 60;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}

// Set default start to false
var start = false;

// Listen for a click event on toggle switch
buttonStart.addEventListener("click", function() {
  // If start is dark, apply light background
  if (start === false) {
    start = true;
    setTime();
    // container.setAttribute("class", "light");
  }
  // If start is light, apply dark background 
  else {
    start = false;
    // container.setAttribute("class", "dark");
  }
});
