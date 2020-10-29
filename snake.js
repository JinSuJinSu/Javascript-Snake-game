const cvs = document.getElementById('snake');
const ctx = cvs.getContext('2d');

const apple_length = 40;

const ground_img = new Image();
ground_img.src = 'ground.png';

// ground width, height = 680
let ground_width = 680
let ground_height = 680



const apple_img = new Image();
apple_img.src = 'apple.png';


//create the snake

let snake = [];
snake[0] = {
    x: 9 * apple_length,
    y: 10 * apple_length
}



//create the apple

let apple = {
        x: Math.floor(Math.random() * 17) * apple_length,
        y: Math.floor(Math.random() * 17) * apple_length
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
        ctx.fillRect(snake[i].x,snake[i].y,apple_length, apple_length)

        ctx.strokeStyle = 'black';
        ctx.strokeRect(snake[i].x,snake[i].y,apple_length,apple_length)
    }
    ctx.drawImage(apple_img, apple.x, apple.y);

    //old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

 
    //which direction
    if (d === 'LEFT') snakeX -= 5;
    if (d === 'UP') snakeY -= 5;
    if (d === 'RIGHT') snakeX += 5;
    if (d === 'DOWN') snakeY += 5;

    if (snakeX === apple.x && snakeY === apple.y) {
        score++;
        apple = {
            x: Math.floor(Math.random() * 17) * apple_length,
            y: Math.floor(Math.random() * 17) * apple_length
        }
        }else {
            snake.pop(); 
    }


    // add new Head

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

    // game over
    if (snakeX < 0 || snakeX > ground_width - apple_length || snakeY < 0 || snakeY > ground_height - apple_length) {
        score = 1000
    }




    ctx.fillStyle = 'white'
    ctx.font = '45px Changa one';
    ctx.fillText(score, 2 * apple_length, 1.6 * apple_length)


  


}


// call draw function every 100 ms

let game = setInterval(draw, 100)



