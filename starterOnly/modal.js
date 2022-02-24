const MIN_LENGTH_CHAR = 2; // Minimum of characters allowed

/* ========================== Dom elements ========================== */
// Navigation menu //
const topnav = document.querySelector(".topnav");
const burgerMenu = document.getElementById("burgerMenu");

// Modal Form //
const modalBtn = document.querySelectorAll(".modal-btn");
const modalbg = document.querySelector(".bground");
const modalThanks = document.querySelector("#modal-thanks");
const closeBtn = document.querySelector(".close");
const redBtnClose = document.querySelector(".btn-close");

// form
const form = document.querySelector(".form");
const formData = document.querySelectorAll(".formData"); //container label & inputs

// inputs
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthDate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const radioButtons = document.querySelectorAll(".checkbox-input[type=radio]");
const TermsOfUse = document.querySelector("#checkbox1");
const newsLetter = document.querySelector("#checkbox2");

// errors inputs
const errForm = document.querySelector("#err-form");
const errFirst = document.querySelector("#err-first-name");
const errLast = document.querySelector("#err-last-name");
const errorEmail = document.querySelector("#err-email");
const errorBirthDate = document.querySelector("#err-birthdate");
const errorQuantity = document.querySelector("#err-quantity");
const errorRadio = document.querySelector("#err-radio");
const errorTerms = document.querySelector("#err-terms");

/* ==================================================== functions ==================================================== */

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// hide modal form
function hideModal() {
  modalbg.style.display = "none";
}

// global error msg hidden display
errForm.style.display = "none";

function checkInputs() {
  // if the verification of all inputs is true, display modal thanks
  if (
    errorCheckLength(firstName, errFirst) &&
    errorCheckLength(lastName, errLast) &&
    checkEmail() &&
    checkDate() &&
    checkQuantity() &&
    checkRadioBtn() &&
    checkTermsOfUse()
  ) {
    form.style.display = "none"
    modalThanks.style.display = "block"
    modalThanks.classList.add('modal-thanks')

    // capture of data of form and show it in the console.
    console.log("Prénom: ", firstName.value);
    console.log("Nom: ", lastName.value);
    console.log("email: ", email.value);
    console.log("Date de naissance: ", birthDate.value);
    console.log("Nombre tournois: ", quantity.value);
    console.log("Ville: ", true);
    console.log("Conditions d'utilisations: ", TermsOfUse.checked);
    console.log("Newsletter: ", newsLetter.checked);
  }
  else {
    // global error msg display
    errForm.style.display = "block";
    errForm.classList.add('error-msg')
  }


  // check length of characters & add msg err
  function errorCheckLength(inputName, id) {
    if (inputName.value.trim().length < MIN_LENGTH_CHAR) {
      id.classList.add('error-msg')
      inputName.classList.add('error')
      return false
    }
    else {
      id.classList.remove('error-msg')
      inputName.classList.remove('error')
      return true
    }
  }
  // name validation
  errorCheckLength(firstName, errFirst);
  errorCheckLength(lastName, errLast);

  // email validation
  function checkEmail() {
    if (!validateEmail(email.value)) {
      errorEmail.classList.add('error-msg')
      email.classList.add('error')
      return false;
    }
    else {
      errorEmail.classList.remove('error-msg')
      email.classList.remove('error')
      return true;
    }
  }
  checkEmail();

  // date birthday validation

  let birthDateIsValid = false;
  function validateDate() {
    let date = new Date();
    function dateFormated(chain) {
      let newDate = new Date(chain).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "numeric",
        day: "numeric"
      })
      return newDate;
    };
    let today = dateFormated(date);
    console.log(today);


    let diffAge = (date - new Date(birthDate.value)) / (1000 * 60 * 60 * 24 * 365.25);
    console.log(diffAge);

    if (diffAge >= 5 && diffAge < 80) {
      birthDateIsValid = true;
    }

  }


  function checkDate() {
    validateDate();
    if (birthDateIsValid === false) {
      errorBirthDate.classList.add('error-msg')
      birthDate.classList.add('error')
      return false;
    }
    else {

      errorBirthDate.classList.remove('error-msg')
      birthDate.classList.remove('error')
      return true;
    }
  }
  checkDate();

  // quantity game tournament validation
  function checkQuantity() {
    if (quantity.value < 0 || quantity.value === "") {
      errorQuantity.classList.add('error-msg')
      quantity.classList.add('error')
      return false;
    }
    else {
      errorQuantity.classList.remove('error-msg')
      quantity.classList.remove('error')
      return true;
    }
  }
  checkQuantity();

  // Radio buttons validation
  function checkRadioBtn() {

    for (let radio of radioButtons) {
      if (radio.checked === false) {
        errorRadio.classList.add('error-msg')
      }
      else if (radio.checked === true) {
        errorRadio.classList.remove('error-msg');
        return true;
      }
    }
    return false;
  }
  checkRadioBtn();

  // Terms of Use validation
  function checkTermsOfUse() {
    if (!TermsOfUse.checked) {
      errorTerms.classList.add('error-msg')
      return false;
    }
    else {
      errorTerms.classList.remove('error-msg')
      return true;
    }
  }
  checkTermsOfUse();
}

function validateDate(birthDate) {
  let reg = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
  return reg.test(birthDate);
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
redBtnClose.addEventListener("click", hideModal);

// launch the check error func, onchange event
form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs()
});