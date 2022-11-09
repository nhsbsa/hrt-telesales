// Start page

window.addEventListener("keydown", (event) => {
  if (event.altKey == true && event.code == "KeyT") {
    // Access keys button
    document.getElementById("access-keys-button").click();
  } else if (event.altKey == true && event.code == "KeyA") {
    // Certificate number input
    document.getElementById("certificate-number").focus();
  } else if (event.altKey == true && event.code == "KeyZ") {
    // Last name input
    document.getElementById("last-name").focus();
  } else if (event.altKey == true && event.code == "KeyX") {
    // DOB input
    document.getElementById("dob-day").focus();
  } else if (event.altKey == true && event.code == "KeyC") {
    // Postcode input
    document.getElementById("postcode").focus();
  } else if (event.altKey == true && event.code == "KeyI") {
    // Submit button
    document.getElementById("submit-button").click();
  } else if (event.altKey == true && event.code == "Key") {
    // Cancel button
    document.getElementById("cancel-button").click();
  }
});
