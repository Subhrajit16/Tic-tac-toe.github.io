let input = document.querySelectorAll('.cell')
let winner = document.querySelector('.winner')
let win = new Audio("win.mp3")
let tie = new Audio("tie.mp3")
let ting = new Audio("ting.mp3")
let player1 = 'X'
let player2 = 'O'
let playerTurn = player1;
let emptyCell = 9;
const restartBtn = document.getElementById("restart-btn");


// Game function+++++++
const playGame = () => {
    input.forEach((cell) => {


        cell.addEventListener('click', clickHandelar)
  
    })
}

//click handelar+++++++

function clickHandelar(e) {
    if (e.target.innerHTML == '') {        // jodi cell ta faka thake tobei input hobe
        e.target.innerHTML = playerTurn;
        emptyCell--;
        ting.play()

        if (checkWin()) {
            // console.log(`${playerTurn} win`)
            win.play();
            winner.innerHTML = `${playerTurn} is Winner!!!`
            disable();
        }
        else if (checkTie()) {
            // console.log("Tie")
            tie.play()
            winner.innerHTML = `Game is Draw!!!`
        }
        switchPlayer();
        document.getElementById("showTurn").innerHTML = playerTurn;
    }
}


playGame();

// Winning Function++++++++
let checkWin = () => {
    const winCondition = [
        [0, 1, 2, 1, 5, 0],
        [3, 4, 5, 1, 15, 0],
        [6, 7, 8, 1, 25, 0],
        [0, 3, 6, 6, 2, 0],   //6 2 0
        [1, 4, 7, 18, 2, 0], // 18 2 0
        [2, 5, 8, 30, 2, 0], //30 2 0
        [0, 4, 8, 4, 3, 40], //4 3 40
        [2, 4, 6, 1, 15, 140]
    ];

    for (let i = 0; i < winCondition.length; i++) {
        let [pos1, pos2, pos3, pos4, pos5, pos6] = winCondition[i] //array destructuring

        if (input[pos1].textContent !== "" && input[pos1].textContent == input[pos2].textContent && input[pos2].textContent == input[pos3].textContent) {

            if ((pos1 == 0 && pos2 == 3 && pos3 == 6) || (pos1 == 1 && pos2 == 4 && pos3 == 7) || (pos1 == 2 && pos2 == 5 && pos3 == 8)) {
                document.querySelector(".lineCol").style.height = "27vw"
                document.querySelector(".lineCol").style.transform = `translate(${pos4}vw,${pos5}vw) rotate(${pos6}deg`;
            }

            else if ((pos1 == 0 && pos2 == 4 && pos3 == 8)) {
                document.querySelector(".lineDia").style.width = "35vw"
                document.querySelector(".lineDia").style.transform = `translate(${pos4}vw,${pos5}vw) rotate(${pos6}deg`
            }

            else {
                document.querySelector(".line").style.width = "34vw"
                document.querySelector(".line").style.transform = `translate(${pos4}vw,${pos5}vw) rotate(${pos6}deg`;
            }

            return true;
        }
    }

    return false;
}

// Tie Function+++++++++++++
let checkTie = () => {
    if (emptyCell == 0 && !checkWin()) {
        return true;
    }

    else {
        return false;
    }
}


//REMOVE   EL+++++++++++++++

const disable = () => {
    input.forEach((cell)=>{
        cell.removeEventListener('click', clickHandelar)
    });
}

//restart+++++
restartBtn.addEventListener('click', () => {
    location.reload();
})


// switch player function
function switchPlayer() {
    if (playerTurn === player1) {
        playerTurn = player2;
    }
    else {
        playerTurn = player1;
    }
}
