// Selección de elementos y configuración inicial
const ball = document.getElementById('ball');
const paddle1 = document.getElementById('paddle1');
const paddle2 = document.getElementById('paddle2');
const player1ScoreElem = document.getElementById('player1-score');
const player2ScoreElem = document.getElementById('player2-score');

let ballX = 390, ballY = 190; // Posición inicial de la pelota
let ballSpeedX = 3, ballSpeedY = 3; // Velocidad inicial de la pelota
let paddle1Y = 160, paddle2Y = 160; // Posiciones iniciales de las paletas
let player1Score = 0, player2Score = 0; // Puntuación inicial
const paddleSpeed = 5;
const gameHeight = 400, gameWidth = 800, paddleHeight = 80;

// Controles activos
const keys = {
    a: false,
    z: false,
    ArrowUp: false,
    ArrowDown: false
};

// Manejo de teclas
document.addEventListener('keydown', (e) => {
    if (e.key in keys) keys[e.key] = true;
});

document.addEventListener('keyup', (e) => {
    if (e.key in keys) keys[e.key] = false;
});

// Movimiento de las paletas
function movePaddles() {
    if (keys.a && paddle1Y > 0) paddle1Y -= paddleSpeed;
    if (keys.z && paddle1Y < gameHeight - paddleHeight) paddle1Y += paddleSpeed;
    if (keys.ArrowUp && paddle2Y > 0) paddle2Y -= paddleSpeed;
    if (keys.ArrowDown && paddle2Y < gameHeight - paddleHeight) paddle2Y += paddleSpeed;

    paddle1.style.top = `${paddle1Y}px`;
    paddle2.style.top = `${paddle2Y}px`;
}

// Movimiento de la pelota
function moveBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Rebote superior/inferior
    if (ballY <= 0 || ballY >= gameHeight - 15) {
        ballSpeedY *= -1;
    }

    // Rebote en las paletas
    if (
        (ballX <= 20 && ballY >= paddle1Y && ballY <= paddle1Y + paddleHeight) ||
        (ballX >= gameWidth - 30 && ballY >= paddle2Y && ballY <= paddle2Y + paddleHeight)
    ) {
        ballSpeedX *= -1;
    }

    // Golpe fuera de la pantalla: puntuación
    if (ballX < 0) {
        player2Score++;
        resetBall();
    } else if (ballX > gameWidth) {
        player1Score++;
        resetBall();
    }

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
}

// Restablecer la pelota al centro
function resetBall() {
    ballX = 390;
    ballY = 190;
    ballSpeedX *= -1; // Cambia de dirección para el saque
    updateScore();
}

// Actualizar la puntuación en pantalla
function updateScore() {
    player1ScoreElem.textContent = player1Score;
    player2ScoreElem.textContent = player2Score;
}

// Bucle principal del juego
function gameLoop() {
    movePaddles();
    moveBall();
    requestAnimationFrame(gameLoop);
}

// Iniciar el juego
gameLoop();
