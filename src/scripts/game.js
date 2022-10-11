import Platform from "./platforms";
import Player from "./player";
import Gem from "./gem";
import StartPlatform from "./startPlatform"
import Lava from "./lava"

export default class Game {
  constructor(gameWidth, gameHeight,canvas,score, clock, mute){
    this.canvas = canvas;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.score = 0;
    this.clock = clock;
    this.platforms = [new StartPlatform(this)];
    this.player = new Player(this);
    this.paused = false;
    this.gems = [new Gem(this)];
    this.mute = mute;
    this.restartGame = this.restartGame.bind(this);
    this.sound = document.getElementById('scream');
    this.lava = new Lava(this);
    
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
      this.score += 1
    }
    player_score.innerHTML = this.score
  }

  update(deltaTime){
    if(!this.paused){
      [...this.gems,...this.platforms,this.player].forEach(object => object.update(deltaTime));
      this.updateScore();
      this.addPlatform();
      this.addGem();
    }
  }

  draw(ctx){
    if(!this.paused){
      [...this.gems,...this.platforms,this.player,this.lava].forEach(object => object.draw(ctx))
    }
  }

  gameOver(){
    this.paused = true;
      //this.sound.play()
    // console.log('mute-----------',this.mute)
    document.getElementById('close_modal').style.display = 'block';
    document.getElementById('gameScreen').style.display = 'none';
    // console.log('clock---------------',this.clock)
    clearInterval(this.clock)
    const finalScore = document.getElementById('endScore')
    // console.log('score---------------',this.score)
    finalScore.innerHTML = 'Score  : ' + this.score;
    if(this.score > localStorage.getItem('highScore')){
      localStorage.setItem('highScore', this.score)
      highscore.innerHTML = localStorage.getItem('highScore')
    }
    let restartButton = document.getElementById('restartButton')
    restartButton.addEventListener('click',this.restartGame)
  }

  restartGame(){
    this.score = 0;
    this.paused = false;
    this.platforms = [new StartPlatform(this)];
    this.player = new Player(this);
    this.gems = [new Gem(this)];
    document.getElementById('close_modal').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
  }
}