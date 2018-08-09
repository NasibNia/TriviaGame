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
	console.log(array);
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



$("#start-btn").on("click", function() {
    
    $(".card-body").slideUp("slow");





});





});





// <div class="form-check form-check-inline">  what was the turning point in the history of mankind that settled them down instead nomad life?

// 				  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
// 				  <label class="form-check-label" for="exampleRadios1">
// 				    Default radio
// 				  </label>
// 			</div>