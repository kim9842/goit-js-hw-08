function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeButton = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const bodyColor = document.body;

changeButton.addEventListener("click", () => {
  const newHexColor = getRandomHexColor();
  bodyColor.style.backgroundColor = newHexColor;
  colorName.textContent = newHexColor;
});
