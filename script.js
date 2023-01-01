console.log('Welcome to My TicTacToe')
let reset = document.getElementById('reset');
var isClickable = true;
let turn = 'X';

let isGameOver = false;

//function to change turn

const changeTurn = () => {
    return (turn === 'X') ? '0' : 'X';
}


//function if win
const gameWin = () => {


    let wins = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8],
    ]
    wins.forEach(e => {
        let boxtext = document.getElementsByClassName('boxtext');

        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            isGameOver = true;
            let infoText = document.querySelector('.info-text');
            let turn = changeTurn();
            infoText.innerText = boxtext[e[0]].innerText + " is won."
            isClickable = false;

            boxtext[e[0]].parentElement.style.backgroundColor = 'blue'
            boxtext[e[1]].parentElement.style.backgroundColor = 'blue'
            boxtext[e[2]].parentElement.style.backgroundColor = 'blue'

        }
    })
}

// Game logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (isClickable) {
            if (boxtext.innerText === "") {
                boxtext.innerText = turn;
                turn = changeTurn();
                gameWin();
                let infoText = document.querySelector('.info-text');
                if (!isGameOver) {
                    infoText.innerText = 'Turn for ' + turn;
                }

            }
        }
    })


})

reset.addEventListener('click', () => {
    isClickable = true;
    let boxes = document.querySelectorAll('.box');
    Array.from(boxes).forEach(e => {
        e.style.backgroundColor = 'white'

    })
    let boxtext = document.getElementsByClassName('boxtext');
    for (i = 0; i < boxtext.length; i++) {
        boxtext[i].innerText = ''
        isGameOver = false;
        let infoText = document.querySelector('.info-text');
        infoText.innerText = 'Turn for X'
        turn = 'X';


    }
})
