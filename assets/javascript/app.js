$(function() {
	console.log("Javascript and JQuery loaded.");

	var time = 10;

    var interval;

    var lives = 3;

    var questions = [{
	    question: "Who directed Alien?",
	    choices: ["Ellen Ripley", "J.J. Abrams", "George Lucas", "Ridley Scott"],
	    correctAnswer: 4
		}, {
	    question: "Who is the main actor in Blade Runner?",
	    choices: ["Harrison Ford", "Carrie Fisher", "Mark Hamill", "William Shatner"],
	    correctAnswer: 1
		}, {
	    question: "Leonard Nimoy plays what famous Sci-fi character?",
	    choices: ["Captain Kirk", "Spock", "Scotty", "Obi-Wan Kenobi"],
	    correctAnswer: 2
		}, {
	    question: "In Gattaca, what does the main character want to be?",
	    choices: ["Astronaut", "Scientist", "Soldier", "Senator"],
	    correctAnswer: 1
		}, {
	    question: "In the movie, 'The Fifth Element' what color is the main character's hair?",
	    choices: ["Black", "Brown", "Blonde", "Orange"],
	    correctAnswer: 4
		}, {
	    question: "Darth Vader is also known by what name?",
	    choices: ["Jar-Jar Binks", "Jango Fett", "Anakin Skywalker", "The Emporer"],
	    correctAnswer: 3
		}];

	var questionNumber = 0;

	var correct = -1;

	var score = 0;

// ------------------------------- Timer ------------------------------- //

    function run() {
      interval = setInterval(ticker, 1000);
    }

    function ticker() {
    time--;
    $("#time").html(time);
    	if (time <= 0) {
    		stop();
    		wrong("Out of time!!!");
      }
    }

    function stop() {
      clearInterval(interval);
    }

    // ------------------------------- Question Maker ------------------------------- //
		
    function quizzer() {
    	questionNumber++;
    	if (questionNumber === questions.length) {
    		endGame(1);
    	}
    	$("#question").text(questions[questionNumber].question);
    	$("#qa").text(questions[questionNumber].choices[0]);
    	$("#qb").text(questions[questionNumber].choices[1]);
    	$("#qc").text(questions[questionNumber].choices[2]);
    	$("#qd").text(questions[questionNumber].choices[3]);
    	correct = questions[questionNumber].correctAnswer;
    	stop();
    	time = 10;
    	run();
    }

	// ------------------------------- Game Stuff ------------------------------- //

    $("#begin").click(function(){
    	questionNumber = -1;
    	console.log("Begin");
    	$("#start").css("display", "none");
    	$("#questions").css("display", "inline");
    	quizzer();
    });

    function right() {
    	stop();
    	alert("Correct!");
    	score++;
    	quizzer();
    	console.log(score);
    }

    function wrong(x) {
    	lives--;
    	$("#lives").html(lives);
    	if (lives <= 0){
    		endGame(0);
    		return;
    	}
    	stop();
    	alert(x);
    	quizzer();
    }

    function endGame(x) {
    	stop();
    	if (x === 1){
    		alert("You Won! ... Your score was : " + score + "/" + questions.length);
    		$("#questions").css("display", "none");
    		$("#winner").css("display", "inline");
    		$("#finalscore").html(score);
    		if (score >= 6) {
    			$("#won").text("Perfect! You should be quizzing me!");
    		}
    	} else {
    		alert("You Lost! ... Your score was : " + score + "/" + questions.length);
    		$("#questions").css("display", "none");
    		$("#loser").css("display", "inline");
    		$("#finalscore").html(score);
    		if (score <= 2) {
    			$("#lost").text("You did really bad...");
    		}
    	}
    }

	// ------------------------------- Game Answers ------------------------------- //    

    $("#qa").click(function() {
    	if (1 === correct) {
    		right();
    	} else {
    		wrong("Incorrect...");
    	}
    });

    $("#qb").click(function() {
    	if (2 === correct) {
    		right();
    	} else {
    		wrong("Incorrect...");
    	}
    });

    $("#qc").click(function() {
    	if (3 === correct) {
    		right();
    	} else {
    		wrong("Incorrect...");
    	}
    });

    $("#qd").click(function() {
    	if (4 === correct) {
    		right();
    	} else {
    		wrong("Incorrect...");
    	}
    });

});