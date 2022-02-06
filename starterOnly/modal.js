// DOM Elements
const topnav = document.querySelector(".topnav");
const burgerMenu = document.getElementById("burgerMenu");

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

// toggle class "responsive" onclick on the burger btn 
burgerMenu.addEventListener("click", () => {
  topnav.classList.toggle('responsive');
});


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// hide modal form
function hideModal() {
  modalbg.style.display = "none";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch the hiden modal event
closeBtn.addEventListener("click", hideModal);