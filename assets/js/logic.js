// Access toggle switch HTML element
var buttonStart = document.querySelector("#start");
var container = document.querySelector(".wrapper");

var timeEl = document.querySelector(".timer");

var secondsLeft = 0;

// TIMER CODE START
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
// TIMER CODE END

// START BUTTON CODE START
// Set default button start to false
var start = false;

// Listen for a click event on toggle switch
buttonStart.addEventListener("click", function() {
  // If start is false
  if (start === false) {
    start = true;
    setTime();
    container.setAttribute("class", "hide");
  }
  // If start is true 
  else {
    start = false;
    // container.setAttribute("class", "dark");
  }
});
// START BUTTON CODE END
