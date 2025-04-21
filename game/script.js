console.log('script.js loaded');
let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let heading = document.querySelector('h1');
let playerO = document.querySelector('#ScoreO');
let playerX = document.querySelector('#ScoreX');;
let playerOName = document.querySelector('#playerO');
let playerXName = document.querySelector('#PlayerX');
let playerName = prompt('Enter your name: ');
let playerName2 = prompt('Enter your name: ');
playerOName.innerHTML = playerName;
playerXName.innerHTML = playerName2;
let scoreO = 0;
let scoreX = 0;
let message = ''

boxes[0].setAttribute('style', 'border-top-left-radius: 30px;')
boxes[2].setAttribute('style', 'border-top-right-radius: 30px;')
boxes[6].setAttribute('style', 'border-bottom-left-radius: 30px;')
boxes[8].setAttribute('style', 'border-bottom-right-radius: 30px;')
let turnO = true;
let turnX = false;

const winPatterns = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6]  // Diagonal from top-right to bottom-left
];

boxes.forEach((boxes) => {
    boxes.addEventListener('click', () => {
        console.log('box clicked');
        if (turnO) {
            boxes.innerHTML = 'O';
            turnO = false;
            turnX = true;

        } else if (turnX) {
            boxes.innerHTML = 'X';
            turnX = false;
            turnO = true;
        }
        boxes.disabled = true;
        checkWinner();
    });
});
function gameOver() {
    boxes.forEach((boxes) => {
        boxes.innerHTML = '';
        boxes.disabled = false;
        boxes.style.backgroundColor = '#204B57';
        turnO = true;
    });
    playerO.innerHTML = 0;
    playerX.innerHTML = 0;
    message = 'Tic Tac Toe';
    heading.innerHTML = message;
}
const checkWinner = () => {
    for(patters of winPatterns) {
        let box1 = boxes[patters[0]].innerHTML;
        let box2 = boxes[patters[1]].innerHTML;
        let box3 = boxes[patters[2]].innerHTML;

        if(box1 === '' || box2 === '' || box3 === '') {  
            continue;
        }
        if(box1 === box2 && box2 === box3) {
            message = `Player ${box1} wins!`;
            heading.innerHTML = message;
            boxes[patters[0]].style.backgroundColor = 'green';
            boxes[patters[1]].style.backgroundColor = 'green';
            boxes[patters[2]].style.backgroundColor = 'green';
            boxes.forEach((boxes) => {
                boxes.disabled = true;
            }); 
            if (box1 === 'O') {
                scoreO++;
                playerO.innerHTML = scoreO;
            } else {
                scoreX++;
                playerX.innerHTML = scoreX;
            }
            return; // Exit the function after a winner is found
        }
    }

    // Check for a draw
    let isDraw = true;
    boxes.forEach((box) => {
        if (box.innerHTML === '') { 
            isDraw = false; 
        }  
    });

    if (isDraw) {
        message = "It's a draw!";
        heading.innerHTML = message;
        boxes.forEach((box) => {
            box.disabled = true;
        });
    }
            
    }
reset.addEventListener('click', () => {
    boxes.forEach((boxes) => {
        boxes.innerHTML = '';
        boxes.disabled = false;
        boxes.style.backgroundColor = '#204B57';
        heading.innerHTML = 'Tic Tac Toe';

    });
    turnO = true;
 });
