const PROMPT_DELAY = 1000;

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

startBtn.addEventListener('click', colorize);
stopBtn.addEventListener('click', stopColorize);

let intervalId = null;

function colorize() {
  startBtn.setAttribute('disabled', 'disabled');
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, PROMPT_DELAY);
}

function stopColorize() {
  clearInterval(intervalId);
  startBtn.removeAttribute('disabled', 'disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
