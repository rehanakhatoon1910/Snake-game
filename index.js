//game constants and variables
let direction={x:0, y:0};
const foodSound=new Audio('food.mp3');
const gameOverSound=new Audio('gameover.mp3');
const moveSound=new Audio('move.mp3');
const musicSound=new Audio('music.mp3');
let speed=2;
let lastPaintTime=0;
let snakeArr=[
    {
        x:13, y:15
    }
]
food={x:6,y:7};
//Game functions
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime-lastPaintTime)/1000<1/speed){
        return;
    }
   lastPaintTime=ctime;
   gameEngine();

}

function gameEngine(){
    // part1:updating snakeArray and food


    //part2:display the snake and food
    //displaying snake
    board.innerHTML="";
    snakeArr.forEach((e,index)=>{
        snakeElement= document.createElement('div');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        snakeElement.classList.add('snake')
        if(index===0){
            snakeElement.classList.add('head');
        }
        board.appendChild(snakeElement);
    })
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);
    //displaying food
}












//main logic starts here
window.requestAnimationFrame(main);
