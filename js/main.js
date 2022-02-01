let turn = "x";

let title = document.querySelector(".title");
let bxs = document.getElementsByClassName("box");

function point(id) {
  if (turn === "x" && document.getElementById(id).innerHTML === "") {
    document.getElementById(id).innerHTML = "X";
    turn = "o";
  } else if (turn === "o" && document.getElementById(id).innerHTML === "") {
    document.getElementById(id).innerHTML = "O";
    turn = "x";
  }

  if (turn === "x") {
    title.innerHTML = "X Turn";
  } else if (turn === "o") {
    title.innerHTML = "O Turn";
  }

  document.getElementById(id).style.pointerEvents = "none";

  check();
  draw();
}

function check() {
  var boxes = [];

  for (i = 1; i < 10; i++) {
    boxes[i] = document.querySelector("#box" + i).innerHTML;
  }

  // Horizontal
  if (boxes[1] == boxes[2] && boxes[2] == boxes[3] && boxes[1] != "") {
    win(boxes[1], boxes[2], boxes[3]);
  } else if (boxes[4] === boxes[5] && boxes[5] === boxes[6] && boxes[4] != "") {
    win(boxes[4], boxes[5], boxes[6]);
  } else if (boxes[7] === boxes[8] && boxes[8] === boxes[9] && boxes[7] != "") {
    win(boxes[7], boxes[8], boxes[9]);
  }

  // Vertical
  if (boxes[1] == boxes[4] && boxes[4] == boxes[7] && boxes[1] != "") {
    win(boxes[1], boxes[4], boxes[7]);
  } else if (boxes[2] === boxes[5] && boxes[5] === boxes[8] && boxes[2] != "") {
    win(boxes[2], boxes[5], boxes[8]);
  } else if (boxes[3] === boxes[6] && boxes[6] === boxes[9] && boxes[3] != "") {
    win(boxes[3], boxes[6], boxes[9]);
  }

  // Diagonally
  if (boxes[1] == boxes[5] && boxes[5] == boxes[9] && boxes[1] != "") {
    win(boxes[1], boxes[5], boxes[9]);
  } else if (boxes[3] === boxes[5] && boxes[5] === boxes[7] && boxes[3] != "") {
    win(boxes[3], boxes[5], boxes[7]);
  }
}

function win(num1, num2, num3) {
  title.innerHTML = `${num1} Won!`;

  // Boxes
  let box1 = (document.querySelector("#box1").style.pointerEvents = "none");
  let box2 = (document.querySelector("#box2").style.pointerEvents = "none");
  let box3 = (document.querySelector("#box3").style.pointerEvents = "none");
  let box4 = (document.querySelector("#box4").style.pointerEvents = "none");
  let box5 = (document.querySelector("#box5").style.pointerEvents = "none");
  let box6 = (document.querySelector("#box6").style.pointerEvents = "none");
  let box7 = (document.querySelector("#box7").style.pointerEvents = "none");
  let box8 = (document.querySelector("#box8").style.pointerEvents = "none");
  let box9 = (document.querySelector("#box9").style.pointerEvents = "none");

  setTimeout(function () {
    location.reload();
  }, 1000);
}

function draw() {
  let boxes2 = [];

  for (i = 1; i < 10; i++) {
    boxes2[i] = document.querySelector("#box" + i).innerHTML;
  }

  if (
    boxes2[1] != "" &&
    boxes2[2] != "" &&
    boxes2[3] != "" &&
    boxes2[4] != "" &&
    boxes2[5] != "" &&
    boxes2[6] != "" &&
    boxes2[7] != "" &&
    boxes2[8] != "" &&
    boxes2[9] != ""
  ) {
    title.innerHTML = "Draw!";
    setTimeout(function () {
      location.reload();
    }, 1000);
  }
}

// if (state === "game") {
// } else if (state === "win") {

// }
