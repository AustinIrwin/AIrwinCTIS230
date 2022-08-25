//Goal: Change color and size of text when the mouse moves over it
//and change back when the mouse moves off

//Step 1: Get the element of interest to store + prepare for an event

ourText = document.getElementById("newtext");
// stores whatever element has the id newtext


//Step 2: attached an event listener on ourText, looking for the 
//mouse to scroll over the 
ourText.addEventListener("mouseover", onMouseOver);

function onMouseOver() {
  ourText.style.color = "green";
  ourText.style.fontSize = "3em";
  ourText.innerHTML = "And we changed the text";
}

//Step 3: Create a new event listener to respond to mouse off

ourText.addEventListener("mouseout", hilariousMouse)

function hilariousMouse() {
  ourText.style.color = "black";
  ourText.style.fontSize = "1em"; //1em is the standard font size
  ourText.innerHTML = "<strong>And we changed it back</strong>";
  
}


// get and store button#mybutton
ourButton = document.getElementById("mybutton");

//create event listener for clicks
ourButton.addEventListener("click", SMASH);

function SMASH() {
    ourText.innerHTML = "I clicked the button";
}