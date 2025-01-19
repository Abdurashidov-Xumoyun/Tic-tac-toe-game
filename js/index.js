

let boxClick = document.querySelectorAll(".game_boxes");
let newGame = document.querySelector(".btn");
let innerIcon = document.querySelectorAll(".fa-solid");

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
        } else if (currentPlayer === "o"){
          innerIcon.classList.add("fa-o");
          currentPlayer = "x";
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
    innerIcon[i].classList.remove("fa-x");
    innerIcon[i].classList.remove("fa-o"); 
  };
});











