import Platform from "./platforms";
import Player from "./player";
import Gem from "./gem";
import StartPlatform from "./startPlatform"

export default class Game {
  constructor(gameWidth, gameHeight,canvas,score, clock){
    this.canvas = canvas;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.score = 0;
    this.clock = clock;
    this.platforms = [new StartPlatform(this)];
    this.player = new Player(this);
    this.paused = false;
    this.gems = [new Gem(this)];
    this.restartGame = this.restartGame.bind(this);
  }

  addPlatform(){
    if (this.platforms[this.platforms.length - 1].position.y >= 100){
    this.platforms.push(new Platform(this));
  }
    if (this.platforms.length > 50){
      this.platforms.shift();
    }
  }

  addGem(){
    if(this.gems.length < 1)
      this.gems.push(new Gem(this))
  }
  updateScore(){
    const player_score = document.getElementById('score');
    if(!this.paused){
      this.score += .5
    }
    player_score.innerHTML = this.score
  }

  
  update(deltaTime){
    [...this.gems,...this.platforms,this.player].forEach(object => object.update(deltaTime));
    this.updateScore();
    this.addPlatform();
    this.addGem();
  }

  draw(ctx){
    [...this.gems,...this.platforms,this.player].forEach(object => object.draw(ctx))
  }

  gameOver(){
    this.paused = true;
    document.getElementById('close_modal').style.display = 'block';
    document.getElementById('gameScreen').style.display = 'none';
    console.log('clock---------------',this.clock)
    clearInterval(this.clock)
    const finalScore = document.getElementById('endScore')
    console.log('score---------------',this.score)
    finalScore.innerHTML = 'Score  : ' + this.score
    let restartButton = document.getElementById('restartButton')
    restartButton.addEventListener('click',this.restartGame)
  }

  restartGame(){
    this.score = 0;
    this.paused = false;
     this.platforms = [new StartPlatform(this)];
    this.player = new Player(this);
    document.getElementById('close_modal').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
  }
}