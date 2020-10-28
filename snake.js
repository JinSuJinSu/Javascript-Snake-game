const cvs = document.getElementById('snake');
const ctx = cvs.getContext('2d');

const box = 40;

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



//create the apple

let apple = {
    x: Math.floor(Math.random() * 14 + 1) * box,
    y: Math.floor(Math.random() * 12 + 1) * box
}

//create the score

let score = 0;



let d;

//control the snake

document.addEventListener('keydown', event => {
    if (event.keyCode === 37 && d!=='RIGHT') {
        d = 'LEFT';
    } else if (event.keyCode == 38 && d !== 'DOWN') {
        d = 'UP';
    } else if (event.keyCode == 39 && d !== 'LEFT') {
        d = 'RIGHT';
    } else if (event.keyCode == 40 && d !== 'UP') {
        d = 'DOWN';
    }
})





//draw everything to the canvas

function draw() {
    ctx.drawImage(ground_img, 0, 0);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(snake[i].x,snake[i].y,box, box)

        ctx.strokeStyle = 'black';
        ctx.strokeRect(snake[i].x,snake[i].y,box,box)
    }
    ctx.drawImage(apple_img, apple.x, apple.y);

    //old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    //remove the tail
    snake.pop();

    //which direction
    if (d === 'LEFT') snakeX -= 10;
    if (d === 'UP') snakeY -= 10;
    if (d === 'RIGHT') snakeX += 10;
    if (d === 'DOWN') snakeY += 10;

    // add new Head

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);


    ctx.fillStyle = 'white'
    ctx.font = '45px Changa one';
    ctx.fillText(score, 2 * box, 1.6 * box)


  


}


// call draw function every 100 ms

let game = setInterval(draw, 100)



