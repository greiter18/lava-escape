import Platform from "./platforms";
import Player from "./player";
import Score from "./score";
import Coin from "./coins";

export default class Game {

  constructor(gameWidth, gameHeight,canvas){
    this.canvas = canvas;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.platforms = [new Platform(this)];
    this.player = new Player(this);
    this.score = new Score(this);
    this.coins = [new Coin(this)];
  }

  addPlatform(){
    if (this.platforms[this.platforms.length - 1].position.y >= 100){
    this.platforms.push(new Platform(this));
  }
    if (this.platforms.length > 50){
      this.platforms.shift();
    }
}

addCoin(){
  if(this.coins.length < 2){
    this.coins.push(new Coin(this))
  }
}

  update(deltaTime){
    [...this.platforms,this.player].forEach(object => object.update(deltaTime));
    this.addPlatform();
    this.addCoin();
  }

  draw(ctx){
    [...this.platforms,this.player].forEach(object => object.draw(ctx))
  }

  gameOver(){
    document.getElementById('close_modal').style.display = 'block';
  }
};