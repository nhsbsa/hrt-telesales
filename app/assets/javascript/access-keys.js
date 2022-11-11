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
  if (event.altKey === true && event.code === "Digit0") {
    document.getElementById("back-button").click();
  }
  // New application button
  if (event.altKey === true && event.code === "KeyY") {
    document.getElementById("new-application-button").click();
  }
});
