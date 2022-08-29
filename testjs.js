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


myCard = document.getElementById("card");

function SMASH() {
  ourText.innerHTML = "I clicked the button";
  ourText.style.fontSize = "2em";
  myCard.style.display = "block";

}


//get the textfield with the id myinput
ourInput = document.getElementById("myinput"); //new text
ourHeading = document.getElementById("header"); // to modify

//textfield learns what listener is connected to its events
ourInput.addEventListener("change", changeText); //if the text changes
ourInput.addEventListener("blur", changeText); //the text field loses focus
//'focus' when we are typing into box
// when we click out of it, it loses 'focus'
//       This is a blur event

function changeText() {
  // get input
  newtext = ourInput.value;
  ourHeading.innerHTML = newtext;
}

myCardImage = document.getElementById("cardimage");
myCard.addEventListener("click", changeImage);

function changeImage() {
  if (myCard.style.position == "") { // if original posiiton
    myCard.style.position = "absolute";
    myCard.style.top = "100px";
    myCard.style.left = "100px";
    myCardImage.style.width = "80px"; //
    myCardImage.src = "Images/2_of_diamonds.png";
  }
  else {
    myCard.style.position = ""; // "" for a property means use 
    myCard.style.top = ""; //       oringinal value
    myCard.style.left = "";
    myCardImage.style.width = "auto"; //full width
    myCardImage.src = "Images/2_of_clubs.png"
  }

}