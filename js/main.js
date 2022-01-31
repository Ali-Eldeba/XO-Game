let turn = "x";

let title = document.querySelector(".title");

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

  check();
}

function check() {
  let boxes = [];

  for (i = 1; i < 10; i++) {
    boxes[i] = document.querySelector("#box" + i).innerHTML;
  }

  // Horizontal
  if (boxes[1] == boxes[2] && boxes[2] == boxes[3] && boxes[1] != "") {
    win(boxes[1], boxes[2], boxes[3]);
  } else if (boxes[4] === boxes[5] && boxes[5] === boxes[6] && boxes[4] != "") {
    win(boxes[4], boxes[5], boxes[6]);
  } else if (boxes[7] === boxes[8] && boxes[8] === boxes[9] && boxes[7] != "") {
    location.reload();
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
  setTimeout(function () {
    location.reload();
  }, 1000);
}
