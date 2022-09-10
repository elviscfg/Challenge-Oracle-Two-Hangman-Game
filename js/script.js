//Seletores
let words = ["ALURA", "ORACLE", "FORCA", "HMTL", "JAVASCRIPT", "LOGICA"];
let board = document.getElementById("forca").getContext('2d')
let secretWord = "";

function selectSecretWord (){
    let word = words[Math.floor(Math.random() * words.length)];
    secretWord = word;
    console.log(secretWord);
}


function createButton (msg, clas, func) {
    var button = document.createElement('button');
    button.textContent = msg;
    button.classList.add(clas);
    button.addEventListener('click', func)
    

    return button;
}


function renderButtons() {
    var divButtons = document.querySelector('.box-buttons');
    divButtons.innerHTML = '';

    var buttonStartGame = createButton("Começar a jogar", "button-start", startGameScreen);
    //var buttonNewWord = createButton("Adicionar nova palavra", "button-word", renderNewWordScreen);
    
    divButtons.appendChild(buttonStartGame);
    //divButtons.appendChild(buttonNewWord);
}

function drawCanvas (){
    board.lineWidth = 8;
    board.lneCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "#F3F5FC";
    board.strokeStyle = "#0A3871";

    //manipulação
    board.fillRect(0, 0, 1200, 800);
    board.beginPath();
    board.moveTo(900, 500);
    board.lineTo(650, 500);
    board.stroke();
    board.closePath();
}

function drawLines() {
    board.lineWidth = 6;
    board.lneCap = "round";
    board.lineJoin = "round";
    board.fillStyle = "#F3F5FC";
    board.strokeStyle = "#0A3871";

    let largura = 600/secretWord.length
    for(let i = 0; i < secretWord.length; i++) {
        board.moveTo(500 + (largura*i), 640);
        board.lineTo(550 + (largura*i), 640);
    }
    board.stroke();
    board.closePath();
}

function startGameScreen() {
    document.getElementById("div-hide").style.display = "none";
    document.getElementById("canvas-screen-hide").style.display = "block";
    selectSecretWord();
    drawCanvas()
    drawLines();
}

function firstScreen() {
    document.getElementById("canvas-screen-hide").style.display = "none";
    renderButtons();
}

firstScreen();
