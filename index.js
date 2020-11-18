// Your code here
document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});


function moveDodgerLeft() {
    let dodger = document.getElementById("dodger");
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    console.log(dodger.style.left);
    dodger.style.left = `${left -1}px`;
    }



function moveDodgerRight() {
    let dodger = document.getElementById("dodger");
    let leftNumbers = dodger.style.left.replace("px","");
    let left = parseInt(leftNumbers, 10);
    console.log(dodger.style.left);
    dodger.style.left = `${left + 1}px`;
    }