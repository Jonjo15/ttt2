let Gameboard = (function() {
    //dom manipulation
    let divs = document.querySelectorAll(".divs");
    let inputDiv = document.querySelector(".inputDiv");
    let player0neInput = document.querySelector("#playerOne");
    let playerTwoInput = document.querySelector("#playerTwo");
    let submitButton = document.querySelector("#submit");
    let resetButton = document.querySelector("#reset");
    let scorePara = document.querySelector(".scorePara");
    let winnerAnnouncement = document.querySelector(".winnerAnnouncement");

    //gamelogic variables 
    let playersArray = [];
    let currentPlayer;
    let numOfTies = 0;
    let moveCount = 0;
    let winningMoves = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8], [2,4,6]];
    let gameOver = true;
    let previousPlayer;

    //events
    divs.forEach((div) => {
        div.addEventListener("click", (e) => {
            if (!gameOver && !e.target.classList.contains("marked") && moveCount < 9) {
                e.target.textContent = currentPlayer.move;
                console.log(currentPlayer.name);
                currentPlayer.playedMoves.push(+e.target.dataset.position);
                e.target.classList.add("marked");
                if (checkIfSomeoneWon(currentPlayer.playedMoves)) {
                    //alert("YAAAAAAAAAAAAA");
                    currentPlayer.wins += 1;
                    //announceWin
                    //resetBoard
                    //updateScoreBoard

                }
                
                changeCurrentPlayer();

            }
            
        })
    });

    submitButton.addEventListener("click", (e) => {
        createPlayer(player0neInput.value, "X");
        createPlayer(playerTwoInput.value, "O");
        currentPlayer = playersArray[0];
        inputDiv.style.display = "none";
        updateScoreBoard();
        clearInputs();
        gameOver = false;
        //submitFunction();
    });

    resetButton.addEventListener("click", (e) => {
        //resetFunction();
        inputDiv.style.display = "flex";
    });

    //player Factory
    let Player= function(name, move) {
        this.playedMoves = [];
        this.wins = 0;
        this.name = name;
        this.move = move;
    }

    //helper functions
    function clearInputs() {
        player0neInput.value = "";
        playerTwoInput.value = "";
    }

    function changeCurrentPlayer() {
        if (currentPlayer.name == playersArray[0].name) {
            currentPlayer = playersArray[1];
        }
        else {
            currentPlayer = playersArray[0];
        }
    }
    function createPlayer(name, move) {
        let playa = new Player(name, move);
        playersArray.push(playa);
    }
    function checkIfSomeoneWon(movesArray) {
        let bool = false;
        winningMoves.forEach((move) => {
            let count = 0;
            move.forEach((sign) => {
                if (movesArray.includes(sign)) {
                    count += 1;
                    if (count == 3) {
                        bool = true;
                        return bool;
                    }
                }
            });
        });
        return bool;
    }
    
    function updateScoreBoard() {
        scorePara.textContent = playersArray[0].name + ": " + playersArray[0].wins + ", Ties: " + numOfTies + ", " + playersArray[1].name + ": " + playersArray[1].wins;

        //if game over display playagain button and announce winner
        
    }
    return {playersArray, currentPlayer}
})();