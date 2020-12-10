
var buttonDivs = document.querySelectorAll('.cell')
var buttonReset = document.querySelector('.reset')
var go_counter = 0;
var gameCounter = 0;
var gameCounterVariable = document.querySelector('.counter-game-number')

var player1Count= 0
var player2Count = 0
var player1GameCount= document.querySelector('.counter-1')
var player2 = document.querySelector('.counter-2')

var game_over = document.querySelector('.game-over');
var player_1_win_message = document.querySelector('.player-1-victory')
var player_2_win_message = document.querySelector('.player-2-victory')

function addLetterXfirst (event) {
    if (go_counter % 2 == 0) {
        event.target.textContent = 'X';
    } else {
        event.target.textContent = 'O';
    }
    go_counter++;
    checkVictory();
}
function addLetterOfirst (event) {
    if (go_counter % 2 == 0) {
        event.target.textContent = 'O';
    } else {
        event.target.textContent = 'X';
    }
    go_counter++;
    checkVictory();
}
function reset_game() {
  for (var i = 0; i < buttonDivs.length; i++) {
      buttonDivs[i].textContent = '';
      buttonDivs[i].removeEventListener('click', addLetterOfirst)
      buttonDivs[i].removeEventListener('click', addLetterXfirst)
  }
  if (gameCounter == 0 || gameCounter == 2 || gameCounter == 4) {
      for(var i = 0; i < buttonDivs.length; i++) {
          buttonDivs[i].addEventListener('click', addLetterOfirst)
      }
  } else if (gameCounter == 1 || gameCounter == 3 || gameCounter == 5)  {
      console.log('X direction first')
      for(var i = 0; i < buttonDivs.length; i++) {
          buttonDivs[i].addEventListener('click', addLetterXfirst)
      }
  }   
  go_counter = 0;
}
function revealElement(element) {
  element.classList.remove('hidden');
}
function checkVictory() {
  for(var j = 0; j < buttonDivs.length; j++) {
      if (buttonDivs[0].textContent == "X" && buttonDivs[1].textContent == "X" && buttonDivs[2].textContent == "X") {
          player2Victory() 
          victoryMessageX()
          break
      }
      if (buttonDivs[0].textContent == "O" && buttonDivs[1].textContent == "O" && buttonDivs[2].textContent == "O") {
          player1Victory()
          victoryMessageO()
          break
      }
      if (buttonDivs[3].textContent == "X" && buttonDivs[4].textContent == "X" && buttonDivs[5].textContent == "X") {
          player2Victory()
          victoryMessageX()
          break
      }
      if (buttonDivs[3].textContent == "O" && buttonDivs[4].textContent == "O" && buttonDivs[5].textContent == "O") {
          player1Victory()
          victoryMessageO()
          break
      }
      if (buttonDivs[6].textContent == "X" && buttonDivs[7].textContent == "X" && buttonDivs[8].textContent == "X") {
          player2Victory()
          victoryMessageX()
          break
      }
      if (buttonDivs[6].textContent == "O" && buttonDivs[7].textContent == "O" && buttonDivs[8].textContent == "O") {
          player1Victory()
          victoryMessageO()
          break
      }
      if (buttonDivs[0].textContent == "X" && buttonDivs[3].textContent == "X" && buttonDivs[6].textContent == "X") {
          player2Victory()
          victoryMessageX()
          break
      }
      if (buttonDivs[0].textContent == "O" && buttonDivs[3].textContent == "O" && buttonDivs[6].textContent == "O") {
          player1Victory()
          victoryMessageO()
          break
      }
      if (buttonDivs[1].textContent == "X" && buttonDivs[4].textContent == "X" && buttonDivs[7].textContent == "X") {
          player2Victory()
          victoryMessageX()
          break
      }
      if (buttonDivs[1].textContent == "O" && buttonDivs[4].textContent == "O" && buttonDivs[7].textContent == "O") {
          player1Victory()
          victoryMessageO()
          break
      }
      if (buttonDivs[2].textContent == "X" && buttonDivs[5].textContent == "X" && buttonDivs[8].textContent == "X") {
          player2Victory()
          victoryMessageX()         
          break
      }
      if (buttonDivs[2].textContent == "O" && buttonDivs[5].textContent == "O" && buttonDivs[8].textContent == "O") {
          player1Victory()
          victoryMessageO()
          break
      }
      if (buttonDivs[0].textContent == "X" && buttonDivs[4].textContent == "X" && buttonDivs[8].textContent == "X") {
          player2Victory()
          victoryMessageX()
          break
      }
      if (buttonDivs[0].textContent == "O" && buttonDivs[4].textContent == "O" && buttonDivs[8].textContent == "O") {
          player1Victory()
          victoryMessageO()
          break
      }
      if (buttonDivs[2].textContent == "X" && buttonDivs[4].textContent == "X" && buttonDivs[6].textContent == "X") {
          player2Victory()
          victoryMessageX()
          break
      }
      if (buttonDivs[2].textContent == "O" && buttonDivs[4].textContent == "O" && buttonDivs[6].textContent == "O") {
          player1Victory()
          victoryMessageO()
          break
      }
      if (go_counter == 9){
          gameCounter++;
          gameCounterVariable.innerText = gameCounter;
          drawMessage()
          break
      }
  } if (gameCounter == 5) {
      game_over.classList.remove('hidden');
      endGame();
  } if (player1Count > 2) {
      player2OverallWin();
      endGame();
  } if (player2Count > 2) {
      player2OverallWin();
      endGame;
  }
}
function victoryMessageO() {
  console.log("The O Empire Reigns");
}
function victoryMessageX() {
 console.log("The X's have it")
}
function drawMessage() {
  console.log("It's a draw!")
}
function endGame() {
  for (var i = 0; i < buttonDivs.length; i++) {
      
      buttonDivs[i].textContent =  "*"
      
  }
}
function player2Victory() {
  gameCounter++;
  gameCounterVariable.innerText = gameCounter;
  player2Count++;
  player2.innerText = player2Count;
}
function player1Victory() {
  gameCounter++;
  gameCounterVariable.innerText = gameCounter;
  player1Count++;
  player1GameCount.innerText = player1Count;
}
function player1OverallWin() {
  player_1_win_message.classList.remove('hidden');
}
function player2OverallWin() {
  player_2_win_message.classList.remove('hidden');
}

if (gameCounter == 0 || gameCounter == 2 || gameCounter == 4) {
    for(var i = 0; i < buttonDivs.length; i++) {
        buttonDivs[i].addEventListener('click', addLetterOfirst)
    }
} else if (gameCounter == 1 || gameCounter == 3 || gameCounter == 5)  {
    for(var i = 0; i < buttonDivs.length; i++) {
        buttonDivs[i].addEventListener('click', addLetterXfirst)
    }
}       

buttonReset.addEventListener('click', reset_game)













