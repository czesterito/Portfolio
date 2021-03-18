let open_space = document.getElementById("space-popup");
let space_btn = document.getElementById("space-btn");
let space_close_btn = document.getElementById("space-close-btn");
let open_piano = document.getElementById("piano-popup");
let piano_btn = document.getElementById("piano-btn");
let piano_close_btn = document.getElementById("piano-close-btn");

space_btn.onclick = function (){
    open_space.style.display = "block";
}

space_close_btn.onclick = function (){
    open_space.style.display = "none";
}

piano_btn.onclick = function (){
    open_piano.style.display = "block";
}

piano_close_btn.onclick = function (){
    open_piano.style.display = "none";
}

let burger = document.getElementsByClassName("hamburger")[0];
let phone_menu = document.getElementsByClassName("phone-menu")[0];
let cancel = document.getElementById("cancel");

burger.addEventListener("click", function (){
    phone_menu.style.display = "block";
    burger.style.display = "none";
})

cancel.onclick = function (){
    phone_menu.style.display = "none";
    burger.style.display = "flex";
}