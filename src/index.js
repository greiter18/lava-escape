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
let mute = false;
let clock = setInterval(() => score += 10 , 750)
let game = new Game(GAME_WIDTH, GAME_HEIGHT, canvas, score, clock , mute)
let lastTime = 0;
localStorage.setItem('highScore', 150);
highscore.innerHTML = localStorage.getItem('highScore')


 function gameLoop(timestamp){
  let dt = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.update(dt);
  game.draw(ctx)
  requestAnimationFrame(gameLoop);
}
// let start = document.getElementById('startScreen')
// start.addEventListener('click',gameLoop)
let start = document.getElementById('open_modal')
start.addEventListener('click',() => {
  gameLoop()
  document.getElementById('open_modal').style.display = 'none';
  document.getElementById('gameScreen').style.display = 'block';
})

let muteButton = document.querySelector('.muteButton')
muteButton.addEventListener('click', () => {
  muteButton.classList.toggle('clickedMute')
  let sounds = document.querySelectorAll('.sound')
  for(let i = 0; i < sounds.length; i++){
    sounds[i].muted === true ? sounds[i].muted = false : sounds[i].muted = true  
  }
})
// gameLoop();

})

