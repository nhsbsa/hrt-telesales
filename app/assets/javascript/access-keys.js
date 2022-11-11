// Start page

const certificateNumberInput = document.querySelector("[name=certificate-number]");
const lastNameInput = document.querySelector("[name=last-name]");
const dobDayInput = document.querySelector("[name=dob-day]");
const postcodeInput = document.querySelector("[name=postcode]");

window.addEventListener("keydown", (event) => {
  // Certificate number input
  if (event.altKey === true && event.code === "KeyA") {
    if (certificateNumberInput !== document.activeElement) {
      certificateNumberInput.focus();
      event.preventDefault();
    }
  }
  // Last name input
  if (event.altKey === true && event.code === "KeyZ") {
    if (lastNameInput !== document.activeElement) {
      lastNameInput.focus();
      event.preventDefault();
    }
  }
  // DOB day input
  if (event.altKey === true && event.code === "KeyX") {
    if (dobDayInput !== document.activeElement) {
      dobDayInput.focus();
      event.preventDefault();
    }
  }
  // Postcode input
  if (event.altKey === true && event.code === "KeyC") {
    if (postcodeInput !== document.activeElement) {
      postcodeInput.focus();
      event.preventDefault();
    }
  }
  // Access keys button
  if (event.altKey === true && event.code === "KeyT") {
    document.getElementById("access-keys-button").click();
  }
  // Submit keys button
  if (event.altKey === true && event.code === "KeyI") {
    document.getElementById("submit-button").click();
  }
  // Cancel button
  if (event.altKey === true && event.code === "KeyM") {
    document.getElementById("cancel-button").click();
  }
});

// Search results

window.addEventListener("keydown", (event) => {
  // Back button
  if (event.altKey === true && event.code === "KeyO") {
    document.getElementById("back-button").click();
  }
  // New application button
  if (event.altKey === true && event.code === "KeyY") {
    document.getElementById("new-application-button").click();
  }
});

// Customer details

const addressLineOne = document.querySelector("[name=address-line-1]");
const addressLineTwo = document.querySelector("[name=address-line-2]");
const townOrCity = document.querySelector("[name=address-town]");
const appFirstName = document.querySelector("[name=app-first-name]");
const appLastName = document.querySelector("[name=app-last-name]");
const appDobDay = document.querySelector("[name=app-dob-day]");
const appEmail = document.querySelector("[name=app-email]");
const appTelephone = document.querySelector("[name=app-telephone]");
const appNhsNumber = document.querySelector("[name=app-nhs-number]");
const appStartDay = document.querySelector("[name=start-day]");
const appNotes = document.querySelector("[name=app-notes]");

window.addEventListener("keydown", (event) => {
  // Address line 1
  if (event.altKey === true && event.code === "Digit1") {
    if (addressLineOne !== document.addressLineOne) {
      addressLineOne.focus();
      event.preventDefault();
    }
  }
  // Address line 2
  if (event.altKey === true && event.code === "Digit2") {
    if (addressLineTwo !== document.activeElement) {
      addressLineTwo.focus();
      event.preventDefault();
    }
  }
  // Town or city
  if (event.altKey === true && event.code === "Digit3") {
    if (townOrCity !== document.activeElement) {
      townOrCity.focus();
      event.preventDefault();
    }
  }
  // Get address button
  if (event.altKey === true && event.code === "KeyP") {
    document.getElementById("get-address-button").click();
  }
  // Applicant first name
  if (event.altKey === true && event.code === "KeyS") {
    if (appFirstName !== document.activeElement) {
      appFirstName.focus();
      event.preventDefault();
    }
  }
  // Applicant last name
  if (event.altKey === true && event.code === "KeyA") {
    if (appLastName !== document.activeElement) {
      appLastName.focus();
      event.preventDefault();
    }
  }
  // Applicant DOB
  if (event.altKey === true && event.code === "KeyX") {
    if (appDobDay !== document.activeElement) {
      appDobDay.focus();
      event.preventDefault();
    }
  }
  // Applicant email address
  if (event.altKey === true && event.code === "KeyG") {
    if (appEmail !== document.activeElement) {
      appEmail.focus();
      event.preventDefault();
    }
  }
  // Applicant telephone number
  if (event.altKey === true && event.code === "KeyC") {
    if (appTelephone !== document.activeElement) {
      appTelephone.focus();
      event.preventDefault();
    }
  }
  // Applicant NHS number
  if (event.altKey === true && event.code === "KeyV") {
    if (appNhsNumber !== document.activeElement) {
      appNhsNumber.focus();
      event.preventDefault();
    }
  }
  // Certificate start date
  if (event.altKey === true && event.code === "KeyE") {
    if (appStartDay !== document.activeElement) {
      appStartDay.focus();
      event.preventDefault();
    }
  }
  // Cert fulfillment email
  if (event.altKey === true && event.code === "KeyL") {
    document.getElementById("cert-1").click();
  }
  // Cert fulfillment post
  if (event.altKey === true && event.code === "KeyN") {
    document.getElementById("cert-2").click();
  }
  // Applicant notes
  if (event.altKey === true && event.code === "KeyB") {
    if (appNotes !== document.activeElement) {
      appNotes.focus();
      event.preventDefault();
    }
  }
});
