let boxClick = document.querySelectorAll(".game_boxes");
let newGame = document.querySelector(".btn");
let innerIcon = document.querySelectorAll(".fa-solid");
let InfoWinner = document.querySelector(".info_winner");
let InfoBox = document.querySelector(".D_none-box");
let InfoBoxLine = document.querySelector(".info_box");

InfoBoxLine.addEventListener("click", () => {
  InfoBox.style.display = "none";
  for (let i = 0; i < innerIcon.length; i++) {
    innerIcon[i].classList.remove("fa-x", "fa-o");
  };
});


function orderNum() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let pattern of winPatterns) {
    if (
      innerIcon[pattern[0]].classList.contains("fa-x") &&
      innerIcon[pattern[1]].classList.contains("fa-x") &&
      innerIcon[pattern[2]].classList.contains("fa-x")
    ) {
      InfoBox.style.display = "block";
      InfoWinner.innerHTML = `"X" mutloq g'olib`;
    };

    if (
      innerIcon[pattern[0]].classList.contains("fa-o") &&
      innerIcon[pattern[1]].classList.contains("fa-o") &&
      innerIcon[pattern[2]].classList.contains("fa-o")
    ) {
      InfoBox.style.display = "block";
      InfoWinner.innerHTML = `"O" mutloq g'olib`;
    };

  }
};
orderNum();


function clickChange() {
  const xOrY = document.querySelector("#or");
  currentPlayer = "x";

  for (let i = 0; i < boxClick.length; i++) {
    boxClick[i].addEventListener("click", boxClickMoment);
    function boxClickMoment(e) {
      let innerIcon = e.target.querySelector(".fa-solid");

      if (!innerIcon.classList.contains("fa-x") && !innerIcon.classList.contains("fa-o")) {
        if (currentPlayer === "x") {
          innerIcon.classList.add("fa-x");
          currentPlayer = "o";
          orderNum();
        } else if (currentPlayer === "o") {
          innerIcon.classList.add("fa-o");
          currentPlayer = "x";
          orderNum();
        }
      };

      if (currentPlayer === "x") {
        xOrY.innerHTML = "X";
        xOrY.style.color = "red";
      } else if (currentPlayer === "o") {
        xOrY.innerHTML = "O";
        xOrY.style.color = "green";
      };

    };
  };

  newGame.addEventListener("click", () => {
    for (let i = 0; i < innerIcon.length; i++) {
      innerIcon[i].classList.remove("fa-x", "fa-o");
    };
  });

}

clickChange()











