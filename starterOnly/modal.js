// function editNav() {
//   var x = document.getElementById("myTopnav");
//   if (x.className === "topnav") {
//     x.className += " responsive";
//   } else {
//     x.className = "topnav";
//   }
// }


// DOM Elements
const topnav = document.querySelector(".topnav");
const burgerMenu = document.querySelector(".icon");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

burgerMenu.addEventListener("click", () => {
  topnav.classList.toggle('responsive');
});

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


