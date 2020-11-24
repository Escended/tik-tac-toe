
// initialise the gameBoard and display it 
const gameBoard = (() => {
    // Initialise a board with null values for easy indexing
    const gameboard = [null, null, null, null, null, null, null, null, null];
    const displayBoard = () => {
        const board = document.getElementById('board');
        const buildGrid = (() => {
            board.style.setProperty('--grid-rows', 3);
            board.style.setProperty('--grid-cols', 3);

            for (c = 0; c < 9; c++) {
                // Separate div for each 'cell' and set an index attribute
                // to allow us to index into the gameboard array with set value
                let cell = document.createElement('div');
                board.appendChild(cell).className = "grid-item";
                cell.setAttribute('data-index', c + 1);
            }
        })();
    };
    return {
        board: gameboard,
        display: displayBoard(),
    };
})();

//console.log(gameBoard.board);

// check state of the game winner / draw / valid move 
const gameState = (() => {
    const board = gameBoard.board;
    let winner = false;
    const checkWinner = () => {
        if (!winner) {
            if (checkHorizontal()) {
                winner = true;
            } else if (checkVertical()) {
                winner = true;
            } else if (checkDiagonal()) {
                winner = true;
            }
            // winner = checkHorizontal();
            // winner = checkVertical();
            // winner = checkDiagonal();
            //console.log(winner);
            return winner;
        }
        //console.log(winner);

    }
    const checkHorizontal = () => {
        //console.log(gameBoard.board)
        for (let i = 0; i < 9; i += 3) {

            if (board[i] !== null) {
                if (board[i] === board[i + 1] && board[i] === board[i + 2]) {
                    console.log(`winner: ${board[i]}`);
                    return true;
                }
            }
        }
    };

    const checkVertical = () => {
        for (let i = 3; i < 6; i++) {
            if (board[i] !== null) {
                if (board[i] === board[i - 3] && board[i] === board[i + 3]) {
                    console.log(`winner vert: ${board[i]}`);
                    return true;
                }
            }
        }
    };

    const checkDiagonal = () => {
        if (board[4] !== null) {
            if ((board[4] === board[0] && board[4] === board[8]) ||
                (board[4] === board[2] && board[4] === board[6])) {
                console.log(`winner diag: ${board[4]}`);
                return true;
            }
        }
    }

    return {
        check: checkWinner,
    }
})();

// player factory function
const player = (name, sign) => {
    const info = () => {
        const name = document.querySelectorAll
    };
    return { name, sign };
};




// play and restart the game

const play = (() => {
    // Create two players
    const X = player("eli", "X");
    const O = player("ela", "O");
    const cells = document.querySelectorAll('div.grid-item');
    const startGame = () => {
        // start game logic
        addMark();
    };

    const restartGame = () => {
        // restart the game logic
        const btn = document.querySelector('button');
        btn.addEventListener('click', (e) => {
            //location.reload();
            //console.log(e); 
            gameBoard.board = [null, null, null, null, null, null, null, null, null];
            console.log(gameBoard.board);
            cells.forEach( (cell) => {
                cell.innerText = "";
            });
            gameState.winner = false;
            startGame();
            console.log(gameState.winner);
        });
    };

    const addMark = () => {
        console.log("working");
        let currentMark = null;
        cells.forEach((cell) => {
            cell.addEventListener('click', (e) => {
                //console.log(e);
                // Ensure the cell is empty
                const state = gameState.check();
                //console.log(state);
                if (!state && state !== undefined) {
                    if (e.target.innerText === '') {
                        if (currentMark === 'X') {
                            currentMark = 'O';
                        } else if (currentMark === 'O') {
                            currentMark = 'X';
                        } else {
                            // Always start with crosses
                            currentMark = 'X';
                        };
                        e.target.innerText = currentMark;
                        // get the data attribute of the clicked cell and target
                        // take thge value of the attribute as index for gameboard
                        let index = e.target.getAttribute('data-index') - 1;
                        gameBoard.board[index] = e.target.innerText;
                    }
                    const state = gameState.check();
                }
            });
        });
    };

    const freezeGame = () => {
        cells.forEach((cell) => {
            cell.setAttribute("disabled", "disabled");
        })
    };

    return {
        start: startGame(),
        restart: restartGame(),
        mark: addMark,
    };
})();

