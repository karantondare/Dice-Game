// Create variables for the game state
const player1Dice = document.getElementById('player1Dice');
const player2Dice = document.getElementById('player2Dice');
const player1Scoreboard = document.getElementById('player1Scoreboard');
const player2Scoreboard = document.getElementById('player2Scoreboard');
const message = document.getElementById('message');
const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');

let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

function showDisplayButton() {
  rollBtn.style.display = 'none';
  resetBtn.style.display = 'block';
}

rollBtn.addEventListener('click', function () {
  const randomNum = Math.floor(Math.random() * 6) + 1;

  // 1. Find out which players turn it is
  // 2. log out the value e.g. "Player 1 rolled 5"
  // 3. Switch the turn back to the other player

  if (player1Turn) {
    player1Dice.textContent = randomNum;
    player1Turn = false;
    player1Score += randomNum;
    player1Scoreboard.textContent = player1Score;
    message.textContent = 'Player 2 Turn';
    player2Dice.classList.add('active');
    player1Dice.classList.remove('active');
  } else {
    player2Dice.textContent = randomNum;
    player1Turn = true;
    player2Score += randomNum;
    player2Scoreboard.textContent = player2Score;
    message.textContent = 'Player 1 Turn';
    player1Dice.classList.add('active');
    player2Dice.classList.remove('active');
  }

  if (player1Score >= 20) {
    message.textContent = 'Player 1 has won! 🥳';
    showDisplayButton();
  } else if (player2Score >= 20) {
    message.textContent = 'Player 2 has won! 🎉';
    showDisplayButton();
  }
});

resetBtn.addEventListener('click', function () {
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;

  player1Scoreboard.textContent = player1Score;
  player2Scoreboard.textContent = player2Score;
  player1Dice.textContent = '-';
  player2Dice.textContent = '-';
  message.textContent = 'Player 1 Turn';
  player1Dice.classList.add('active');
  player2Dice.classList.remove('active');

  resetBtn.style.display = 'none';
  rollBtn.style.display = 'block';
});
