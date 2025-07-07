const comChoiceEl = document.getElementById('com-choice');
const myChoiceEl = document.getElementById('my-choice');
const resultEl = document.getElementById('result');
const buttons = document.querySelectorAll('.btn');

const choices = ['rock', 'paper', 'scissors'];

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    const userChoice = e.target.dataset.choice;
    const computerChoice = getComputerChoice();

    myChoiceEl.textContent = userChoice;
    comChoiceEl.textContent = computerChoice;

    const result = getResult(userChoice, computerChoice);
    resultEl.textContent = result;
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(user, computer) {
  if (user === computer) return 'It\'s a Draw';

  const winMap = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };

  return winMap[user] === computer ? 'You Win' : 'You Lose';
}