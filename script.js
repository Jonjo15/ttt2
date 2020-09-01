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
    let gameOver = true;
    let previousPlayer;

    //events
    divs.forEach((div) => {
        div.addEventListener("click", (e) => {
            if (!gameOver) {
                console.log(e.target.dataset.position);
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

    function createPlayer(name, move) {
        let playa = new Player(name, move);
        playersArray.push(playa);
    }
    function updateScoreBoard() {
        scorePara.textContent = playersArray[0].name + ": " + playersArray[0].wins + ", Ties: " + numOfTies + ", " + playersArray[1].name + ": " + playersArray[1].wins;

        //if game over display playagain button and announce winner
        
    }
    return {playersArray}
})();