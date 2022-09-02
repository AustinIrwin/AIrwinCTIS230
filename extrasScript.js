thumbnail = document.getElementById("robo");
bigImage = document.getElementById("bigRobo");

thumbnail.addEventListener("click", expand);
bigImage.addEventListener("click", hide);

function expand() {
    bigImage.classList.remove("dontShow");
}

function hide() {
    bigImage.classList.add("dontShow");
}