// starts when page loads
window.onload = function() {
    $("#start").click(run);
    $("#start").html("Start")
    $("#nextQuestion").click(nextQuestion);
  
    $("#questionArea").hide();
    $("#buttonA").hide();
    $("#buttonB").hide();
    $("#buttonC").hide();
    $("#buttonD").hide();
    $("#nextQuestion").hide();
  
    $("#buttonA").click(buttonClicked);
    $("#buttonB").click(buttonClicked);
    $("#buttonC").click(buttonClicked);
    $("#buttonD").click(buttonClicked);
  
    $("#nextQuestion").hide();
  
  };
  
  
  // variables
  var number = 30;
  var start;
  var displayQuestion = false;
  var Correct = 0;
  var incorrect = 0;
  var noResponse = 9;
  var currentQuestion = 0;
  var questionCounter = 0;
  
  
  var questions = [{
      question: "Who is the two time?",
      choices: ["A. LilyPichu", "B. Dr. Disrespect", "C. Shroud", "D. Summt1G"],
      correctAnswer: 1,
  }, 
  {
      question: "Who won the 1993 Blockbuster Games Tournament?",
      choices: ["The Doc", "SodaPoppin", "Lirki", "TimTheTatman"],
      correctAnswer: 0,
  }, 
  {
      question: "Who won the 1994 Blockbuster Games Tournament?",
      choices: ["Ninja", "Shroud", "Dr. Disrespect", "Faker"],
      correctAnswer: 2,
  }, 
  {
      question: "What does Dr. Disrespect drive?",
      choices: ["1990 Lamborghini Diablo VT", "1995 Ford Mustang", "2017 Tesla Model S ", "1994 Acura Integra"],
      correctAnswer: 0,
  }, 
  {
      question: "What is on the Doc's face?",
      choices: ["Awesomeness", "a fake mustache", "a mighty fine mustache", "Venomous Ethiopian Caterpillar"],
      correctAnswer: 3,

  },
   {
      question: "What is the Venomous Ethiopian Caterpillar on Doc's face called?",
      choices: ["Champion", "The Hog", "Slick Daddy", "Summit"],
      correctAnswer: 2,
 
  }, 
  {
      question: "What is Dr. Disrespect's wife name?",
      choices: ["Mrs. Pacwoman", "Mrs. Assasin", "Ms. Muppet", "Angela Rodriguez"],
      correctAnswer: 1,

  }, 
  {
      question: "What is Dr. Disrespects motto?",
      choices: ["Violence, Speed, Momentum", "Respect Women", "Wassap Bros!", "Where's my cookie!?"],
      correctAnswer: 0,

  }, 
  {
      question: "Who's better with the sniper than Dr. Disrespect",
      choices: ["Your mom", "Shroud", "Me", "Nobody!"],
      correctAnswer: 3,

  }];
  
  //shows start button an hides answer buttons and starts countdown
  function run() {
    
    start = setInterval(decrement, 1000);
    $("#start").hide();
    $("#buttonA").show();
    $("#buttonB").show();
    $("#buttonC").show();
    $("#buttonD").show();
  
    displayCurrentQuestion();
  }
  
  //timer
  function decrement() {
    number--;
    $("#timer").html("<h2>" + number + "</h2>");
    if (number === 0) {
      clearInterval(start);
      submitIncorrectAnswer();
    }
  }
  
  function buttonClicked(e){
    
    var value = $(this).attr("index");
    
    //correct answer chosens then counters go up or down.
    if (value == questions[questionCounter].correctAnswer){
      Correct++;
      noResponse--;
      clearInterval(start);
      submitCorrectAnswer();
      questionCounter++;
    }
  
    //wrong answer is chosen
    else {
      incorrect++;
      noResponse--;
      clearInterval(start);
      submitIncorrectAnswer();
      questionCounter++;
    }
  }
  //shows questions, if no questions left stops
  
  function displayCurrentQuestion () {
    if (questionCounter >= 9){
      stop();
    }
    else{
      console.log(questions[questionCounter].question);
      $("#question").html(questions[questionCounter].question);
      $("#buttonA").html(questions[questionCounter].choices[0]);
      $("#buttonB").html(questions[questionCounter].choices[1]);
      $("#buttonC").html(questions[questionCounter].choices[2]);
      $("#buttonD").html(questions[questionCounter].choices[3]);
      $("#nextQuestion").hide();
    }
  }
  //if correct answer is chosen shows response
  function submitCorrectAnswer () {
    $("#nextQuestion").show();
    $("#nextQuestion").html("Next Question");
    $("#buttonA").hide();
    $("#buttonB").hide();
    $("#buttonC").hide();
    $("#buttonD").hide();
  
      var correctAnswerDiv = $("<div>");
      correctAnswerDiv.html("YahYahYahYahYah! You're Killing it!");
      $("#question").html(correctAnswerDiv);
      correctAnswerDiv.attr("class", "answerDisplay");
  
  }
  
  //if wrong answer is chosen shows response
  function submitIncorrectAnswer () {
    $("#nextQuestion").show();
    $("#nextQuestion").html("Next Question");
    $("#buttonA").hide();
    $("#buttonB").hide();
    $("#buttonC").hide();
    $("#buttonD").hide();
    
  
      var incorrectAnswerDiv = $("<div>");
      incorrectAnswerDiv.html("Wrong! What was that?! You aint got nothing on me you blond bang kid!");
      $("#question").html(incorrectAnswerDiv);
      incorrectAnswerDiv.attr("class", "answerDisplay");
  
  }
  
  //resets timer and moves to next question
  function nextQuestion () {
    number = 30;
    run();
  }
  
  function stop() {
    clearInterval(start);
    $("#buttonA").hide();  
    $("#buttonB").hide();
    $("#buttonC").hide();
    $("#buttonD").hide();
    $("#start").hide();
    $("#sumbit").hide();
    $("#nextQuestion").hide();
  
    //updates score screen. Cant seem to get scores to be on different lines. 

    var updateCorrect = "<div>Correct:" + Correct + "</div>";
    var updateIncorrect = "<div>Incorrect:    " + incorrect + "</div>";
    var updateNoResponse = "<div>Unanswered:" + noResponse + "</div>";
  
    $("#question").html(updateCorrect + updateIncorrect + updateNoResponse);
  

    //try again button resets game.
    $("#start").show();
    $("#start").html("Try again");
    reset();
    $("#start").click(run);
  
  }
  
  function reset() {
    number = 30;
    start;
    displayQuestion = false;
    Correct = 0;
    incorrect = 0;
    noResponse = 9;
    currentQuestion = 0;
    questionCounter = 0;
  }