var qNum = 1;

function rightAnswer() {
  alert("correct!");
  qNum = qNum + 1;
  nextQuestion();
}

function wrongAnswer() {
  alert("Incorrect, try again");
}

function nextQuestion() {
  switch (qNum) {
    case 2:
      document.getElementById("q1").style.display = "none";
      document.getElementById("q2").style.display = "inherit";
      document.getElementById("answersOne").style.display = "none";
      document.getElementById("answersTwo").style.display = "inherit";
      break;

    case 3:
      document.getElementById("q2").style.display = "none";
      document.getElementById("q3").style.display = "inherit";
      document.getElementById("answersTwo").style.display = "none";
      document.getElementById("answersThree").style.display = "inherit";
      break;

    case 4:
      break;
  }
}