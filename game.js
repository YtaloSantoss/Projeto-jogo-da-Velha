// iniciar minhas variáveis

//9 posições dos quadrados vazias 
let board = ['','','','','','','','',''];

//vez do jogador 0 ou 1
let playerTime = 0;

//marcação o ou x
let symbols = ['o','x'];


function handleMove(position) {

    if (board[position] == '') {
        board[position] = symbols[playerTime];
    

        if (playerTime == 0){
        playerTime= 1;
        } else {
        playerTime = 0;
        }

    }
}
