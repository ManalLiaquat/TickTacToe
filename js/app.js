$(document).ready(function() {
    // default player turn
   var turn ="X"; 
    // Array stores value that we will check later for a winner
    var turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    // default computer turn
    var compTurn = "O";
    // keeps track if it is the computer's turn
    var gameOn  = false;
    // keeps track of computer turn so no loop
    var count=0;
    // change player's turn to X and computer's to O
    $("#turnX").click(function(){
        turn="O";
        compTurn="X";
        $("#turnX").removeClass("btn-danger");
        $("#turnO").addClass("btn-danger");
        reset();
    });
    $("#turnO").click(function(){
        turn="X";
        compTurn="O";
        $("#turnO").removeClass("btn-danger");
        $("#turnX").addClass("btn-danger");
        reset();
    });

    function computerTurn() {
        // used to break while loop
        var taken = false;
        while (taken === false && count !== 5) {
            // generate computers random turn
            var computersMove = (Math.random()*10).toFixed();
            var move = $("#"+computersMove).text();
            if (move === "#") {
                $("#" + computersMove).text(compTurn);
                taken = true;
                turns[computersMove] = compTurn;
            }
        }
    }
    function playerTurn(turn, id) {
        var spotTaken = $("#"+id).text();
        if (spotTaken === "#") {
            count++;
            turns[id] = turn;
            $("#"+id).text(turn);
            winCondition(turns, turn);
            if (gameOn === false) {
                computerTurn();
                winCondition(turns, compTurn);
            }
        }
    }
    function winCondition(turnsArray, currentTurn) {
        if (turnsArray[0] === currentTurn && turnsArray[1] === currentTurn && turnsArray[2] === currentTurn) {
          gameOn = true;
          reset();
          alert("Player " + currentTurn + " wins! (top row across 0,1 and 2 spots)");
        } else if (turnsArray[2] === currentTurn && turnsArray[4] === currentTurn && turnsArray[6] === currentTurn) {
          gameOn = true;
          reset();
          alert("Player " + currentTurn + " wins! (top row across 2,4 and 6 spots)");
        } else if (turnsArray[0] === currentTurn && turnsArray[3] === currentTurn && turnsArray[6] === currentTurn) {
          gameOn = true;
          reset();
          alert("Player " + currentTurn + " wins! (top row across 0,3 and 6 spots)");
        } else if (turnsArray[0] === currentTurn && turnsArray[4] === currentTurn && turnsArray[8] === currentTurn) {
          gameOn = true;
          reset();
          alert("Player " + currentTurn + " wins! (top row across 0,4 and 8 spots)");
        } else if (turnsArray[1] === currentTurn && turnsArray[4] === currentTurn && turnsArray[7] === currentTurn) {
          gameOn = true;
          reset();
          alert("Player " + currentTurn + " wins! (top row across 1,4 and 7 spots)");
        } else if (turnsArray[2] === currentTurn && turnsArray[5] === currentTurn && turnsArray[8] === currentTurn) {
          gameOn = true;
          reset();
          alert("Player " + currentTurn + " wins! (top row across 2,5 and 8 spots)");
        } else if (turnsArray[3] === currentTurn && turnsArray[4] === currentTurn && turnsArray[5] === currentTurn) {
          gameOn = true;
          reset();
          alert("Player " + currentTurn + " wins! (top row across 3,4 and 5 spots)");
        } else if (turnsArray[6] === currentTurn && turnsArray[7] === currentTurn && turnsArray[8] === currentTurn) {
          gameOn = true;
          reset();
          alert("Player " + currentTurn + " wins! (top row across 6,7 and 8 spots)");
        }
        else{
            gameOn = false;
        }
    }

    $(".tic").click(function() {
       var slot = $(this).attr("id");
        playerTurn(turn, slot);
    });
    function reset() {
        turns = ["#", "#", "#","#","#","#","#","#","#"];
        count=0;
        $(".tic").text("#");
        gameOn = true;
    }

});