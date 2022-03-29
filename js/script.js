let boxes = document.querySelectorAll('.box')
let board = [
    '-', '-', '-',
    '-', '-', '-',
    '-', '-', '-'
]

/*
    '0', '1', '2',
    '3', '4', '5',
    '6', '7', '8'
*/


let count = 9 // কাউন্টার
let stopPlay = false // খেলা শেষ নাকী চলবে
let player = 1 // কোন প্লেয়ার খেলবে? তা নির্ধারণ করবে

function createCircle() {
    let circle = document.createElement('div')
    circle.className = 'circle'
    return circle
}

let OX = 'O'

function checkEXEorZERO() {
    if (OX === 'O') {
        OX = 'X'
        return 'X'
    } else {
        OX = 'O'
        return 'O'
    }
}

// change box background and stop play game
function changeBackground(box1, box2, box3) {
    for (let i = 0; i < 3; i++) {
        arguments[i].style.background = 'green'
        arguments[i].style.color = 'white'
    }

    // খেলা শেষ
    stopPlay = true
}

// Bot play function
function Bot() {
    let randomClick = Math.floor(Math.random() * 9)

    if (board[randomClick] === '-') {
        afterClickInBox(boxes[randomClick], randomClick)
    } else {
        Bot()
    }
}

// যদি উইনার হয় তাহলে খেলা শেষ অন্যথায় কন্টিনিউ করবে
function checkWinOrContinue(box) {
    if ((board[0] === 'O' && board[1] === 'O' && board[2] === 'O') || (board[0] === 'X' && board[1] === 'X' && board[2] === 'X')) {
        changeBackground(boxes[0], boxes[1], boxes[2])
    }
    else if ((board[0] === 'O' && board[3] === 'O' && board[6] === 'O') || (board[0] === 'X' && board[3] === 'X' && board[6] === 'X')) {
        changeBackground(boxes[0], boxes[3], boxes[6])
    }
    else if ((board[0] === 'O' && board[4] === 'O' && board[8] === 'O') || (board[0] === 'X' && board[4] === 'X' && board[8] === 'X')) {
        changeBackground(boxes[0], boxes[4], boxes[8])
    }
    else if ((board[2] === 'O' && board[5] === 'O' && board[8] === 'O') || (board[2] === 'X' && board[5] === 'X' && board[8] === 'X')) {
        changeBackground(boxes[2], boxes[5], boxes[8])
    }
    else if ((board[2] === 'O' && board[4] === 'O' && board[6] === 'O') || (board[2] === 'X' && board[4] === 'X' && board[6] === 'X')) {
        changeBackground(boxes[2], boxes[4], boxes[6])
    }
    else if ((board[1] === 'O' && board[4] === 'O' && board[7] === 'O') || (board[1] === 'X' && board[4] === 'X' && board[7] === 'X')) {
        changeBackground(boxes[1], boxes[4], boxes[7])
    }
    else if ((board[3] === 'O' && board[4] === 'O' && board[5] === 'O') || (board[3] === 'X' && board[4] === 'X' && board[5] === 'X')) {
        changeBackground(boxes[3], boxes[4], boxes[5])
    }
    else if ((board[6] === 'O' && board[7] === 'O' && board[8] === 'O') || (board[6] === 'X' && board[7] === 'X' && board[8] === 'X')) {
        changeBackground(boxes[6], boxes[7], boxes[8])
    }
}

function afterClickInBox(box, index) {
    console.log('clicked')
    if (!box.hasChildNodes()) {

        let check = checkEXEorZERO() // X বসবে? নাকী O বসবে? সেটা চেক করবে। এবং যা বসবে সেই মান রিটার্ন করবে

        box.append(check) // চেক করা মানের ভ্যালু বক্সে অ্যাপেন্ড করবে
        board[index] = check // বোর্ড অ্যারের মধ্যে চেক করা মানের ভ্যালু বসাবে
        checkWinOrContinue(box) // যদি উইনার হয় তাহলে খেলা শেষ অন্যথায় কন্টিনিউ করবে
    }
}

function playFirstPlayer() {
    if (count === 0 || stopPlay) {
        // খেলা শেষ
    }
    else if (count <= 9) {
        Bot()
        count--
        playSecoundPlayer()
        // setTimeout(playSecoundPlayer, 1000)
    }
}

function playSecoundPlayer() {
    if (count === 0 || stopPlay) {
        // খেলা শেষ
    }
    else if (count <= 9) {
        Bot()
        count--
        playFirstPlayer()
        // setTimeout(playFirstPlayer, 1000)
    }
}

// playFirstPlayer()
// setTimeout(playFirstPlayer, 1000)

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        afterClickInBox(box, index)
    })
})