import Game from "./scripts/game"
import "./styles/index.scss"

window.addEventListener('load', () => {
let canvas = document.getElementById('gameScreen');
let ctx = canvas.getContext("2d");
canvas.height = 700;
canvas.width = 500;
const GAME_WIDTH = 500;
const GAME_HEIGHT = 700;
let score = 0;
let clock = setInterval(() => score += 10 , 750)
let game = new Game(GAME_WIDTH, GAME_HEIGHT, canvas, score, clock)
let lastTime = 0;

 function gameLoop(timestamp){
  let dt = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(dt);
  game.draw(ctx)
  requestAnimationFrame(gameLoop);
}
let start = document.getElementById('startScreen')
start.addEventListener('click',gameLoop)
start.addEventListener('click', () => console.log('clicked'))
// gameLoop();

})

