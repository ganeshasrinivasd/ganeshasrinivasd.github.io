let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
let combination = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
let xTurn = true;
let count = 0;

const disable_button = () => {
  btnRef.forEach((element) => (element.disabled = true));

  popupRef.classList.remove("hide");
};

const enable_button = () => {
  btnRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });

  popupRef.classList.add("hide");
};

const winFunction = (letter) => {
  disable_button();
  if (letter == "X") {
    msgRef.innerHTML = "Player <em>'X'</em>   WON";
  } else {
    msgRef.innerHTML = "Player <em>'O'</em>   WON";
  }
};

const drawFunction = () => {
  disable_button();
  msgRef.innerHTML = "DRAW : Well Played, Better Luck Next Time";
};

newgameBtn.addEventListener("click", () => {
  count = 0;
  enable_button();
});
restartBtn.addEventListener("click", () => {
  count = 0;
  enable_button();
});

const winChecker = () => {
  for (let i of combination) {
    let [element1, element2, element3] = [
      btnRef[i[0]].innerText,
      btnRef[i[1]].innerText,
      btnRef[i[2]].innerText,
    ];
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        winFunction(element1);
      }
    }
  }
};

btnRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      element.innerText = "X";
      element.disabled = true;
    } else {
      xTurn = true;
      element.innerText = "O";
      element.disabled = true;
    }
    count += 1;
    if (count == 9) {
      drawFunction();
    }

    winChecker();
  });
});

window.onload = enable_button;
