let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF6984";

function moveDodgerLeft() {
  let leftString = dodger.style.left.slice(0, -2);
  let leftNum = parseInt(leftString);
  if (leftNum > 0) {
    dodger.style.left = `${leftNum - 1}px`;
  }
}

function moveDodgerRight() {
  let leftString = dodger.style.left.slice(0, -2);
  let leftNum = parseInt(leftString);
  if (leftNum < (400 - dodger.offsetWidth)) {
    dodger.style.left = `${leftNum + 1}px`;
  }
}

document.addEventListener("keydown", function(pressed) {
  if (pressed.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (pressed.key === "ArrowRight") {
    moveDodgerRight();
  }
})
