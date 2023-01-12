let body = document.body;
console.log("body", body);

let darkModeButton = document.getElementById("theme-swapper");
console.log("darkModeButton", darkModeButton);
darkModeButton.addEventListener("click", (evt) => {
  body.classList.toggle("dark-mode");
});
