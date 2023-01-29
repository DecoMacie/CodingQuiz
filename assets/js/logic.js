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

    question.insertAdjacentText("afterend",quizQuestions[clickCount].q);
    var ul = document.createElement("ul");
    ul.setAttribute("class","choices");
    choice.appendChild(ul);

    var list = quizQuestions[clickCount].a;
    for (i = 0; i < list.length; i++){
        var li = document.createElement("li");
        var l = document.createTextNode(list[i].text);
        li.appendChild(l);
        ul.appendChild(li);
    }

    // var li = document.createElement("li");
    // var l = document.createTextNode("stsrttt");
    // li.appendChild(list);
    // ul.appendChild(li);
    //   li.innerText = item;
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

