let Gameboard = (function() {
    //dom manipulation
    let divs = document.querySelectorAll(".divs");
    let player0neInput = document.querySelector("#playerOne");
    let playerTwoInput = document.querySelector("#playerTwo");
    let submitButton = document.querySelector("#submit");
    let resetButton = document.querySelector("#reset");

    //events
    divs.forEach((div) => {
        div.addEventListener("click", (e) => {
            alert();
        })
    });

    submitButton.addEventListener("click", (e) => {
        //submitFunction();
    });

    resetButton.addEventListener("click", (e) => {
        //resetFunction();
    });

    //player Factory
    let Player= function(name, move) {
        this.playedMoves = [];
        this.name = name;
        this.move = move;
    }
})();