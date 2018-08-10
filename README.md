

<!-- Put the name of the project after the # -->
<!-- the # means h1  -->
# Nasib in the Sapiens Land!

<!-- Put a description of what the project is -->

This fun project is all about diving deeper into the sea of javaScript and jQuery to create dynamic websites!

Using the sweet language of javascript and the rich library of jQuery and its powerful built-in functions, I created this Trivia quiz in which DOM is manipulated in real-time and interacts dynamically with the user.
Users takes the quiz and is provided with a feedback. Also a timer is set for the quiz time.
 

# Link to deployed site
<!-- make a link to the deployed site --> 
<!-- [What the user will see](the link to the deployed site) -->

[NASIB in jQuery Sapiens Land](https://nasibnia.github.io/TriviaGame/.)


# Images
<!-- take a picture of the image and add it into the readme  -->
<!-- ![image title](path or link to image) -->
![wire frame](assets/images/IMG_1665.JPG)



# technology used
<!-- make a list of technology used -->
<!-- what you used for this web app, like html css -->

<!-- 
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item. 
-->
- HTML
- css
- Bootstrap
- jquery
- javascript



# code snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

```
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


```


# Learning points
<!-- Learning points where you would write what you thought was helpful -->
- html
- css
- Bootstrap
- event listening functions
- on-click events
- jquery
- javascript
- DOM manipulation




# Author 
<!-- make a link to the deployed site and have your name as the link -->
Nasibeh Nourbakhshnia
(www.linkedin.com/in/nasibehnourbakhshnia)

# License