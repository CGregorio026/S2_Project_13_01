"use strict";
// stricco mode
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Christian Gregorio
   Date:   3.14.19
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
// load the init function upon opening the window
window.onload = init;

function init() {
      //the querySelector is used to target an object collection in the span#stars element
      var stars = document.querySelectorAll("span#stars img");

      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightStars);
      }

      // in response with the keyup event, run the update count
      document.getElementById("comment").addEventListener("keyup", updateCount);
}


function lightStars(e) {
      //declare a variable which meets the alt attribute of the event object
      var starNumber = e.target.alt;
      //create the same variable as the var above.
      var stars = document.querySelectorAll("span#stars img");
      //creates a loop that detects which stars are selected, and lights them up by changing the image..
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }
      //checks which stars are not selected, and keeps them the same color by keeping it the same image
      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }
      // inside the rating, change the value of the content to the star number, and the amount of stars.
      document.getElementById("rating").value = starNumber + " star(s)";
      //finds out when the mouse leaves the images of the stars, and turns off the stars if they are not selected.
      e.target.addEventListener("mouseleave", turnOffStars);
      //when clicked, removes the event listener to prevent the stars from being deselected if not explicitly deselected.
      e.target.addEventListener("click", function () {
            e.target.removeEventListener("mouseleave", turnOffStars);
      });
}

function turnOffStars(e) {
      //...creates that same variable we've been using...
      var stars = document.querySelectorAll("span#stars img");
      //sets a variable which rewrites how many stars a rating has, and whenever it removes stars, unlights that star by changing the image.
      for (var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png";
            document.getElementById("rating").innerHTML = "";
      }
}

function updateCount() {
      //take the value of the comment input box and put in in a variable
      var commentText = document.getElementById("comment").value;
      // count how many characters are in the text by calling in the function and using the comment text as a parameter
      var charCount = countCharacters(commentText);

      var wordCountBox = document.getElementById("wordCount");
      // the value of the input box is changed to this.
      wordCountBox.value = charCount + "/1000";
      //if else statement; if the character count is more than 1000, the background gets changed to red, and the color of the background is changed to white. Otherwise, the background is white and the color of the text is changed to black.
      if (charCount > 1000) {
            wordCountBox.style.color = "white";
            wordCountBox.style.backgroundColor = "red";

      } else {
            wordCountBox.style.color = "black";
            wordCountBox.style.backgroundColor = "white";

      }
}


/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}