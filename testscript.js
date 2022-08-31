/******************** INTRO (1) */


//this stores the element from the HTML file in the Javascipt file
myitem = document.getElementById("firsttest");
//this creates an event listener for myitem, listening for a click
myitem.addEventListener("click", onClick)
myitem.addEventListener("mouseout", mouseOut)

//when myitem is clicked the event listener is activated
// and this funtion executes
function onClick() {
    //this changes the color of myitem, and thus the text on the page green
    myitem.style.color = "green";
    myitem.style.backgroundColor = "black";
}

function mouseOut() {
    myitem.style.color = "";
    myitem.style.backgroundColor = "";
}


/*************** Buttons (2) ********************** */

// I spent lots of time trying to make buttons work with li
//  Items in my list on the Extracurriculars page but no 
// button interactivity worked at all, and it also made any
// following buttons stop working as well
/*
dropbutton = document.getElementById("dropbutton");
info = document.getElementsByClassName("info");
test = document.getElementById("test")

dropbutton.addEventListener("click", BLAM);

function BLAM() {
    test.style.color = "red";
    if (info.style.display =="") {
        info.style.display="none";
    }
    else {
        info.style.display ="";
    }
}  */

thebutton = document.getElementById("thebutton");
otheritem =document.getElementById("buttontest");

thebutton.addEventListener("click", onButtonClick)

function onButtonClick() {
    otheritem.style.color="red";
}


imgbutton = document.getElementById("imgbutton");
imgitem = document.getElementById("antelope");

imgbutton.addEventListener("click", BAM)

function BAM() {
    if (imgitem.style.display == "")
    {
        imgitem.style.display = "none";
    }
    else {
        imgitem.style.display="";
    }
}


/****************************INPUT (3)************ */

//otheritem = document.getElementById("otheritem")


textentry = document.getElementById("myinput");
textentry.addEventListener("change", onChange);

function onChange() {
    newtext = myinput.value;
    otheritem.innerHTML = newtext;
}


/******************** Image more interactive (4) */

imgitem.addEventListener("click", shrink);

function shrink() {
    imgitem.style.height = "100px";
}