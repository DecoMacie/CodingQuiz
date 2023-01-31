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

function startQuiz(clickCount){
    // Sets interval in variable
    
    
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
        li.id = "opt" + i;
        var l = document.createTextNode(list[i].text);
        // alert(list[i].isCorrect);
        li.appendChild(l);
        li.addEventListener("click", function() {rightWrong()}, false);
        // li.onclick = rightWrong(list[i].isCorrect);
        // li.onclick = rightWrong();
        ul.appendChild(li);
    }

    alert(li[0])

    var opt1 = document.getElementById('opt0');
    var opt2 = document.getElementById('opt1');
    var opt3 = document.getElementById('opt2');
    var opt4 = document.getElementById('opt3');

    // opt1.addEventListener("click", function() {rightWrong()}, false);

    // var li = document.createElement("li");
    // var l = document.createTextNode("stsrttt");
    // li.appendChild(list);
    // ul.appendChild(li);
    //   li.innerText = item;
}

// function rightWrong(optionSel){
function rightWrong(){

    // if (optionSel === true){
    //     alert("Right");
    // }
    // else{
    //     alert("Wrong");
    // }
    console.log(opt1)
}
// START BUTTON CODE START
// Set default button start to false
// var start = false;
var clickCount = 0;
// Listen for a click event on toggle switch
buttonStart.addEventListener("click", function() {
  // If start is false
   if (clickCount <= quizQuestions.length) {
    secondsLeft = 6;
    start = true;
    setTime();
    startQuiz(clickCount);
    // console.log(container.children[1]);
  }
  // If start is true 
  else {
    start = false;
    // container.setAttribute("class", "dark");
  }
});
// START BUTTON CODE END

