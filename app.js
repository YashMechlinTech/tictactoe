let boxes = document.querySelectorAll(".box");

let resetbutton = document.querySelector("#reset-btn");

let turnO = true; //player x and player y

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      checkWinner();
    } else {
      box.innerText = "X";
      turnO = true;
      checkWinner();
    }
    box.disabled = true;
  });
  box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "#ADD8E6";
  });
  box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "white";
  });
  
});

const checkWinner = () => {
  for (let patterns of winPatterns) {
    let pos1 = boxes[patterns[0]].innerText;
    let pos2 = boxes[patterns[1]].innerText;
    let pos3 = boxes[patterns[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        if (pos1 == "X") {
          setTimeout("alert('player X is winner ');", 1);
          location.reload();
        } else {
          setTimeout("alert('player O is winner ');", 1);
          location.reload();
        }
      }
    }
  }
};

resetbutton.addEventListener("click", () => {
  location.reload();
});

resetbutton.addEventListener("mouseover", () => {
    resetbutton.style.backgroundColor='#ADD8E6'
  });
  resetbutton.addEventListener("mouseout", () => {
    resetbutton.style.backgroundColor='white'
  });
  
  