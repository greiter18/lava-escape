import Platform from "./platforms";
import Player from "./player";
// import Score from "./score";
import Gem from "./gem";

export default class Game {
  constructor(gameWidth, gameHeight,canvas,score){
    this.canvas = canvas;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.score = score;
    this.platforms = [new Platform(this)];
    this.player = new Player(this);
    this.gems = [new Gem(this)];
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
    if(this.gems.length <= 4)
      this.gems.push(new Gem(this))
  }

  update(deltaTime){
    [...this.gems,...this.platforms,this.player].forEach(object => object.update(deltaTime));
    this.addPlatform();
    this.addGem();
  }

  draw(ctx){
    [...this.gems,...this.platforms,this.player].forEach(object => object.draw(ctx))
  }

  gameOver(){
    document.getElementById('close_modal').style.display = 'block';
  }
};