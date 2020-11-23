
// initialise the gameBoard and display it 
const gameBoard = (() => {
    const gameboard = ['X', 'X', 'O', 'O', 'O', 'X', 'X', 'O', 'O'];
    const displayBoard = () => {
        const board = document.getElementById('board');
        const buildGrid = (() => {
            board.style.setProperty('--grid-rows', 3);
            board.style.setProperty('--grid-cols', 3);
            for (c = 0; c < 9; c++) {
                let cell = document.createElement('div');
                cell.innerHTML = gameboard[c];
                board.appendChild(cell).className = "grid-item";
            }
        })();
    };
    return {
        //board: gameboard,
        display: displayBoard(),
    };
})();

console.log(gameBoard.board);

// check state of the game winner / draw / valid move 
const gameState = (() => {

})();

// player factory function
const player = (name, sign) => {
    return { name, sign };
};

// Create two players
const X = player("eli", "X");
const O = player("ela", "O");
console.log(X.name, X.sign);
console.log(O.name, O.sign);

// play and restart the game

const play = (() => {
    const startGame = () => {
        // start game logic
    };
    const restartGame = () => {
        // restart the game logic
    };
    

    return {
        start: startGame(),
        restart: restartGame()
    };
})();
