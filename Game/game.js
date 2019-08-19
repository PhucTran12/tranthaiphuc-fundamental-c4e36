const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// create the unit
const box = 20;

  
// load images

const ground = new Image();
ground.src = "bg.png";

const foodImg = new Image();
foodImg.src = "food.png";


// load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";

// create the snake

let snake = [];

snake[0] = {
    x : 10 * box,
    y : 10 * box
};

// create the food

let food = {
    x : Math.floor(Math.random()*38 + 1) * box,
    y : (Math.floor(Math.random()*30) +7) * box
}

// create the score var

let score = 0;

//control the snake

let d;

document.addEventListener("keydown",direction); 

function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
        left.play();
        d = "LEFT";
    }else if(key == 38 && d != "DOWN"){
        up.play();
        d = "UP";
    }else if(key == 39 && d != "LEFT"){
        right.play();
        d = "RIGHT";
    }else if(key == 40 && d != "UP"){
        down.play();
        d = "DOWN";
    }
}

// cheack collision function
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}


// let array = [];
// for(let i = 1; i < 4; i ++){
    //     ctx.fillStyle = "red";
    //     ctx.fillRect((27 + i*3)*box, 4*box, 2*box, 2*box);
    //     array.push(ctx.fillStyle[i]);
    // }
    // console.dir(array)
    // console.log(array)
    // draw everything to the canvas
    
    function draw(){
        
        ctx.drawImage(ground,0,0);
        
        for( let i = 0; i < snake.length ; i++){
            ctx.fillStyle = ( i == 0 )? "red" : "white";
            ctx.fillRect(snake[i].x,snake[i].y,box,box);
            
            ctx.strokeStyle = "black";
            ctx.strokeRect(snake[i].x,snake[i].y,box,box);
        }
        
        ctx.drawImage(foodImg, food.x, food.y);
        
        // old head position
        let snakeX = snake[0].x;
        let snakeY = snake[0].y;
        
        // which direction
        if( d == "LEFT") snakeX -= box;
        if( d == "UP") snakeY -= box;
        if( d == "RIGHT") snakeX += box;
        if( d == "DOWN") snakeY += box;
        
        // if the snake eats the food
        if(snakeX == food.x && snakeY == food.y){
            score++;
            eat.play();
            food = {
                x : Math.floor(Math.random()*38 + 1) * box,
                y : (Math.floor(Math.random()*30) +7) * box
            }
            // we don't remove the tail
        }else{
            // remove the tail
            snake.pop();
        }
        
        // add new Head
        
        let newHead = {
            x : snakeX,
            y : snakeY
        }
        
    // game over
    
    if(snakeX < box || snakeX > 39 * box-1 || snakeY < 7*box || snakeY > 36*box || collision(newHead,snake)){
        clearInterval(game);
        dead.play();
        // array.shift()
        over();
        setTimeout( function() {refresh()} ,1000);       
    }
    let checkBox = document.getElementById("checkbox")
    document.createElement('div')
    let stGame = document.getElementById('startgame')  
    stGame.addEventListener(`click`, function(){
        checkBox.style.display = "none"
    })
    
    snake.unshift(newHead);
    
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score,2*box,6*box);
}

// call draw function every 100 ms

let game = setInterval(draw,100);
