// Access toggle switch HTML element
var buttonStart = document.querySelector("#start");
var container = document.querySelector(".wrapper");

var timeEl = document.querySelector(".timer");

var secondsLeft = 0;

// TIMER function CODE START
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      console.log(quizQuestions)
    }

  }, 1000);
}
// TIMER function CODE END

function startQuiz(){
    // Sets interval in variable
    secondsLeft = 6;
    var clickCount = 0;
    var question = document.getElementById("question-title");
    var choice = document.getElementById("choices")
    container.children[0].setAttribute("class", "hide");
    container.children[1].setAttribute("class", "start");

    
    // let ul = question.createElement("ul");
    //   li.innerText = item;
      question.insertAdjacentText("afterend",quizQuestions[clickCount].q);
}

// START BUTTON CODE START
// Set default button start to false
var start = false;

// Listen for a click event on toggle switch
buttonStart.addEventListener("click", function() {
  // If start is false
  if (start === false) {
    start = true;
    setTime();
    startQuiz();
    // console.log(container.children[1]);
  }
  // If start is true 
  else {
    start = false;
    // container.setAttribute("class", "dark");
  }
});
// START BUTTON CODE END

