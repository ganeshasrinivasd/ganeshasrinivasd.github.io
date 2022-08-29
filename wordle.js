var height = 6;
var width = 5;
var row = 0;
var column = 0;
var gameOver = false;
var word = "STACK";

window.onload = function () {
  begin_game();
};

function begin_game() {
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      let tile = document.createElement("span");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      tile.innerText = "";
      document.getElementById("board").appendChild(tile);
    }
  }

  document.addEventListener("keyup", (e) => {
    if (gameOver) return;

    if ("KeyA" <= e.code && e.code <= "KeyZ") {
      if (column < width) {
        let currTile = document.getElementById(
          row.toString() + "-" + column.toString()
        );
        if (currTile.innerText == "") {
          currTile.innerText = e.code[3];
          column += 1;
        }
      }
    } else if (e.code == "Backspace") {
      if (0 < column && column <= width) {
        column -= 1;
      }
      let currTile = document.getElementById(
        row.toString() + "-" + column.toString()
      );
      currTile.innerText = "";
    } else if (e.code == "Enter") {
      update();
      row += 1;
      column = 0;
    }

    if (!gameOver && row == height) {
      gameOver = true;
      document.getElementById("answer").innerText = word;
    }
  });
}

function update() {
  let correct = 0;
  for (let c = 0; c < width; c++) {
    let currTile = document.getElementById(row.toString() + "-" + c.toString());
    let letter = currTile.innerText;

    if (word[c] == letter) {
      currTile.classList.add("correct");
      correct += 1;
    } else if (word.includes(letter)) {
      currTile.classList.add("present");
    } else {
      currTile.classList.add("absent");
    }

    if (correct == width) {
      gameOver = true;
    }
  }
}
