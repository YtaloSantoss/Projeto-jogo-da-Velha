// iniciar minhas variáveis
//9 posições dos quadrados vazias 
let board = ['','','','','','','','',''];
//vez do jogador 0 ou 1
let playerTime = 0;
//marcação o ou x
let symbols = ['o','x'];
//fim do jogo se for verdade acaba o jogo pois tem um vencedor
let gameOver = false;




function handleMove(position) {

    if (gameOver) {
        return;
    }

    if (board[position] == '') {
        board[position] = symbols[playerTime];
    
        gameOver = isWin();

        if (gameOver == false) {
          
            playerTime = (playerTime == 0) ? 1 : 0;
        }
    }

    return gameOver
}

function isWin() {

    let winStates = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6], 
    ]

    for (let i = 0; i < winStates.length; i++){
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            board[pos1] !='') {
               
                return true;
            }
    }
    return false;
}