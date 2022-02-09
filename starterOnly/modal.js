const MIN_LENGTH = 2;

/* ========================== Dom elements ========================== */

// Navigation menu //
const topnav = document.querySelector(".topnav");
const burgerMenu = document.getElementById("burgerMenu");

// Modal Form //
const modalBtn = document.querySelectorAll(".modal-btn");
const modalbg = document.querySelector(".bground");
const closeBtn = document.querySelector(".close");

const form = document.querySelector(".form");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");

const errorEmail = document.querySelector("#err-email");
const errFirst = document.querySelector("#err-first-name");
const errLast = document.querySelector("#err-last-name");

/* ==================================================== functions ==================================================== */

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// hide modal form
function hideModal() {
  modalbg.style.display = "none";
}

// check length of characters & add msg err
function errorCheckLength(inputName, id) {
  if (inputName.value.trim().length < MIN_LENGTH) {
    id.classList.add('error-msg')
    inputName.classList.add('error')
  }
  else {
    id.classList.remove('error-msg')
    inputName.classList.remove('error')
  }
}

function validateEmail(email) {
  let reg = /\S+@\S+\.\S+/;
  return reg.test(email);
}

/* ==================================================== main ==================================================== */

// toggle class "responsive" onclick on the burger btn 
burgerMenu.addEventListener("click", () => {
  topnav.classList.toggle('responsive');
});

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch the close modal event
closeBtn.addEventListener("click", hideModal);

// launch the check error func, onsubmit event 
form.addEventListener('submit', (e) => {
  e.preventDefault();

  errorCheckLength(firstName, errFirst);
  errorCheckLength(lastName, errLast);
  if (!validateEmail(email.value)) {
    errorEmail.classList.add('error-msg')
  }
  else {
    errorEmail.classList.remove('error-msg')
  }

});