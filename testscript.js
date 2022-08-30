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