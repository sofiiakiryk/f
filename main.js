let player = document.querySelector(".player");
let mgLeft = 0;
let mgTop = 0;
let step = 30;
function moveTop() {
  mgTop -= step;
}

function moveBottom() {
  mgTop += step;
}

function moveLeft() {
  mgLeft -= step;
}

function moveRight() {
  mgLeft += step;
}

function movePlayer() {
  player.style.marginTop = mgTop + "px";
  player.style.marginLeft = mgLeft + "px";
}

document.addEventListener("keydown", (event) => {
  console.log(event.code);
  if (event.code === "KeyW") {
    moveTop();
  } else if (event.code === "KeyD") {
    moveRight();
  } else if (event.code === "KeyA") {
    moveLeft();
  } else if (event.code === "KeyS") {
    moveBottom();
  }
  movePlayer();
});
