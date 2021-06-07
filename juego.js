let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById('user-score');
const cpuScore_span = document.getElementById('comp-score');
const resultdiv = document.getElementById('result');
const restart = document.getElementById('restart');

// const scoreBoard_div

const opciones = ['📃', '🌚', '✂️'];
const opcionesElement = document.getElementsByClassName('opcion');
const result = document.getElementById('result');

function play(opcion) {
  const randomInt = Math.floor(Math.random() * (3 - 0)) + 0;
  const pcResult = opciones[randomInt];
  console.log(pcResult, opcion);
  const resultado = getWinner(pcResult, opcion);
  console.log(resultado);
  resultdiv.innerHTML = resultado;
}

function restartGame() {
  userScore = 0;
  cpuScore = 0;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
}

restart.addEventListener('click', restartGame);

function Win() {
  userScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  if (userScore >= 10) win = 'userScore';
  alert('YOU WIN, CONGRATULATIONS!');
}

function draw() {
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = getWinner;
}

Array.from(opcionesElement).forEach(function (boton) {
  boton.addEventListener('click', function (e) {
    play(e.target.innerText);
  });
});

//options
function getWinner(pcOption, playerOption) {
  if (pcOption === playerOption) {
    return 'Empate!';
  }

  if (pcOption === '🌚' && playerOption === '📃') {
    userScore++;
    userScore_span.innerHTML = userScore;
    return 'Tu ganas!!';
  }

  if (pcOption === '📃' && playerOption === '🌚') {
    cpuScore++;
    cpuScore_span.innerHTML = cpuScore;
    return 'Pierdo!!';
  }

  if (pcOption === '🌚' && playerOption === '✂️') {
    cpuScore++;
    cpuScore_span.innerHTML = cpuScore;
    return 'Pierdes :(';
  }

  if (pcOption === '✂️' && playerOption === '🌚') {
    userScore++;
    userScore_span.innerHTML = userScore;
    return 'Tu ganas!!';
  }

  if (pcOption === '✂️' && playerOption === '📃') {
    cpuScore++;
    cpuScore_span.innerHTML = cpuScore;
    return 'Pierdes :(';
  }

  if (pcOption === '📃' && playerOption === '✂️') {
    userScore++;
    userScore_span.innerHTML = userScore;
    return 'Tu ganas!!';
  }
}

// papel > piedra > tijera
// papel < tijera
// piedra > tijera
