$(document).ready(function(){

var qa = [{ question	: " what was the turning point in the history of mankind that settled them down instead nomad life?",
			answer		: "agriculture",
			list		: ["agriculture" , "invention of gun", "ronecanse" , "industrial revolution"]
			},
		   { question 	: "About how many years ago the most recent Ice Age ended?",
		   	answer		: "11 thousands",
		   	list		: ["2 million", "500 thousands", "1000", "11 thousands"]
		   },
		   {question 	: "which of the following is the very unique capability of human being that other species do not own?",
		   	answer		: "myth-making",
		   	list		: ["food hunting", "social life", "reproduction", "myth-making"]	
		   },
		   {question 	: "what is the main root of any large-scale human cooperation?",
		   	answer		: "common myth",
		   	list		: ["common myth", "survivability", "empathy" , "hunger"]
		   },
];

var score = 0;
var NumberOfQ = qa.length;
//create an array that shows how many questions are answered
var touchArray =[];
//initiallizing the touchArray to all false 
thouchInitial();
var initialTime = 20;
var clockRunning = false;
var timeRemained = true;
var intervalId;


// Defininf the watch object
var watch = {
	
  time: 0,
  reset: function() {

    watch.time = 0;
    $("#timer").text("");
  },
  start: function() {

    // Using setInterval to start the count here and setting the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(watch.count, 1000);
      clockRunning = true;
    }
  },

  count: function() {
    // increment time by 1, remember we cant use "this" here.
    watch.time++;
    console.log(watch.time);
    if (watch.time <= initialTime ){
    	$("#timer").html('<h3> Remaining Time :' + (initialTime-parseInt(watch.time))+ '</h3>');
    } else{
    	$("#timer").empty();
    }
    
  },
 };

 var timeout = setTimeout(function() {
        timeRemained = false;
        // $("#timer").text("No Time Left");
      }, initialTime+'000');




//initiallizing the touchArray to all false 
function thouchInitial(){
	
	 var i = 0;
	 while( i < qa.length){
	 	touchArray.push(false);
	 	i++;
	 }
}


// creates a random order of numbers btw 0 to n ; and returns them in an array.
function randomOrder(int) {
	var randArray = [];
	var array = [];
	// console.log(array);
	 var i = 0;
	 while( i < int){
	 	array.push(i);
	 	i++;
	 }

	i = int;
	while (i > 0 ){
		var rand = Math.floor(Math.random() * i);
		randArray.push(array[rand]);
		array.splice(rand,1);
		i--;
	}
	console.log(randArray);
	return randArray;
}
// the function that shows whether all questions are touched


$("#start-btn").on("click", function() {
    
	


    // hiding the initial message of the page
    $(".card-body").slideUp("slow");

    // creating the form on the page; the radio button options would be reordered randomly every time that page loads
    $(".card").empty();
    
    

    for (var i = 0 ; i < qa.length ; i++){


    	console.log(qa[i].question);
    	
    	var ansNums = qa[i].list.length;
    	
    	var reorder = randomOrder(ansNums);
    	var ques = qa[i].question;	

    	var $form = $('<form>').text(ques);
    	
    	// $form.addClass("card-body");

    	for (var j=0 ; j < ansNums; j ++){
	    	var $label = $('<label>').text(qa[i].list[reorder[j]]);
	    	
	       	$label.addClass("Qblock");
	       	// $label.attr("value", i);


	    	var $input = $('<input type="radio">').attr({value: i, name: ques});
	    	var $checkmark = $('<span>').addClass("checkmark");

	    	//Insert the input into the label
			$input.appendTo($label);
			$checkmark.appendTo($label);

			//Insert the label into the DOM - replace body with the required position
			$label.appendTo($form);

		}
		$('.form-area').append($form);

		// load the watch
		watch.start();

    }
    
	$('.form-area').append('<button class="btn btn-secondary hvr-float-shadow mr-0 " id="submit-btn"> SUBMIT</button>')
	// Start the watch
	 


});

$(document).on('click', ".Qblock", function(){

	if(timeRemained){
		// console.log(this.textContent);
		// console.log($(this).val());
		console.log($(this.firstChild.nextSibling).val());

		var whichQuestion = $(this.firstChild.nextSibling).val();
		var correctAns = qa[whichQuestion].answer;
		//Update the touchArray
		touchArray[whichQuestion]= true;
		console.log("touch array is "+ touchArray);

		console.log(correctAns);

		if (this.textContent == correctAns){
			console.log("Correct Answer");
			score++;
		} else {
			console.log("Wrong");
		}
		console.log("score is :" +score);
		
		//===========================
		// change the submit button color AND flash it couple of times when all the questions are answered ; 
		// love this feature! :)
		if (touchArray.indexOf(false) === -1){
			$("#submit-btn").attr("style" , "background-color:green");
			$("#submit-btn").animate({opacity: '1'}, "fast");
			$("#submit-btn").animate({opacity: '0.3'}, "fast");
			$("#submit-btn").animate({opacity: '1'}, "fast");
			$("#submit-btn").animate({opacity: '0.3'}, "fast");
			$("#submit-btn").animate({opacity: '1'}, "fast");
			$("#submit-btn").animate({opacity: '0.3'}, "fast");
			$("#submit-btn").animate({opacity: '1'}, "fast");

			// for some reason the loop didn't work
			// var i=0;
			// while (i<3){
			//     $("#submit-btn").animate({opacity: '1'}, "fast");
			//     $("#submit-btn").animate({opacity: '0.3'}, "fast");
			// }
		}
		//============================
		} else {
		//sliding up the window!
		$(".form-area").slideUp("slow");
		$(".form-area").empty();
		showResults();
		}
});

$(document).on('click', "#submit-btn" , function(){


if(timeRemained){	

	$("#timer").slideUp("slow");
	//first check to see if all the questions are answered and if not BUZZ the button
	if (touchArray.indexOf(false) === -1){
		$("#submit-btn").attr("style" , "background-color:green");

		//sliding up the window!
		$(".form-area").slideUp("slow");
		$(".form-area").empty();
		showResults();


	} else{

		// Shake the submit button so the user knows there are questions left
		var i=0;
		while (i<5){
		    // $(this).animate({opacity: '1'}, "fast");
		    // $(this).animate({opacity: '0.3'}, "fast");
		    $(this).animate({right: '3%'}, "fast");
		    $(this).animate({right: '7%'}, "fast");
        	i++;
    	}
    	$(this).animate({right: '5%'}, "fast");

	}
}
});

function showResults(){
	var correctness = score/NumberOfQ*100;
	var message = "";
	console.log("inside showResults")
	// $(".form-area").append('<h1> Thanks for taking our Quiz </h1>');
	if (correctness > 80){
		message = "WOW, GOOD JOB!"
	} else if (correctness >= 40 && correctness <= 80){
		message = "Not Bad!, you have some idea about what happened to you in the past!"
	} else {
		message = "DUDE!, you have little knowledge about your ancestors!"
	}
	 console.log("score is : " + score);
	 console.log("number of questions is : " + NumberOfQ);

	$(".results").append('<h1 id="message">' + message +'</h1>');
	// $(".results").appen('<div>')
	$(".results").append('<div id="message2"> You Scored <span id="stat" >'  + score + ' </span> out of <span id="stat">'+ NumberOfQ +' </span> and answered <span id="stat"> ' + correctness + ' </span>percent correct! </div>');
	
	console.log ('<div id="message2"> You Scored <span id="stat" '  + score + ' </span> out of <span id="stat">'+ NumberOfQ +' </span> and answered <span id="stat" ' + correctness + ' </span>percent correct! </div>');

	var i=0;
	while (i<10){
	    // $(this).animate({opacity: '1'}, "fast");
	    // $(this).animate({opacity: '0.3'}, "fast");
	    $(".results").animate({right: '10%'}, "fast");
	    $(".results").animate({right: '20%'}, "fast");
    	i++;
	}
	$(".results").animate({right: '15%'}, "fast");


}





});


