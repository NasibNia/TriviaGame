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

var score = 0;

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

					        // <button class="btn btn-primary hvr-float-shadow " id="start-btn"> START</button> 


    }

	$('.form-area').append('<button class="btn btn-primary hvr-float-shadow mr-0 " id="submit-btn"> SUBMIT</button>')



});

$(document).on('click', ".Qblock", function(){
		// console.log(this.textContent);
		// console.log($(this).val());
		console.log($(this.firstChild.nextSibling).val());

		var whichQuestion = $(this.firstChild.nextSibling).val();
		var correctAns = qa[whichQuestion].answer;

		console.log(correctAns);

		if (this.textContent == correctAns){
			console.log("Correct Answer");
			score++;
		} else {
			console.log("Wrong");
		}
		console.log("score is :" +score);
	});


});
