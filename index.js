let body = document.body;

// ************************ Darkmode Button Toggle ************************ //
let darkModeButton = document.getElementById("theme-swapper");

darkModeButton.addEventListener("click", (evt) => {
  body.classList.toggle("dark-mode");
});

// ************************ Swap Text Button ***************************** //
let counter = 0;
let buttonText = ["one", "two", "three"];
let swapTextButton = document.getElementById("swap-button-text");

swapTextButton.addEventListener("click", (evt) => {
  if (counter < buttonText.length) {
    swapTextButton.textContent = `You clicked the button ${buttonText[counter]} time(s)`;
  } else {
    swapTextButton.textContent = `You have clicked this button more than ${buttonText.length} times`;
  }
  counter++;
});
