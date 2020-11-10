function myFunction() {
    var element = document.body;
    var night = document.querySelectorAll("section .one");
    var dark = document.querySelectorAll(".sec-2 div");
    var black = document.querySelectorAll(".top")
    element.classList.toggle("open");

    var i;
    for (i = 0; i < night.length; i++) {
        night[i].classList.toggle("night");
    }
    for (i = 0; i < dark.length; i++) {
        dark[i].classList.toggle("night");
    }
    for (i = 0; i < black.length; i++) {
        black[i].classList.toggle("num");
    }


 }