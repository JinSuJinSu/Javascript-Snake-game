const cvs = document.getElementById('snake');
const ctx = cvs.getContext('2d');

const box = 32;

const ground_img = new Image();
ground_img.src = 'ground.png';

const apple_img = new Image();
apple_img.src = 'apple.png';


//create the snake

let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
}

//make extra code

//create the apple

let apple = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

//create the score

let score = 0;



let snakeX = snake[0].x;
let snakeY = snake[0].y;


//control the snake
document.addEventListener('keydown', direction => {
    if (event.keyCode == 37) {
        snakeX -= box/2;
    } else if (event.keyCode == 38) {
        snakeY -= box/2;
    } else if (event.keyCode == 39) {
        snakeX += box/2;
    } else if (event.keyCode == 40) {
        snakeY += box/2;
    }
})


//draw everything to the canvas

function draw() {
    ctx.drawImage(ground_img, 0, 0);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(snakeX,snakeY,box, box)

        ctx.strokeStyle = 'black';
        ctx.strokeRect(snakeX,snakeY,box,box)
    }
    ctx.drawImage(apple_img, apple.x, apple.y);

    ctx.fillStyle = 'white'
    ctx.font = '45px Changa one';
    ctx.fillText(score, 2 * box, 1.6 * box)


    snake.pop();


    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);


}


// call draw function every 100 ms

let game = setInterval(draw,100)