import Platform from "./platforms";
import Player from "./player";

let mix = Math.floor(Math.random() * 3) + 0
export default class Game {

  constructor(gameWidth, gameHeight,canvas){
    this.canvas = canvas;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.platforms = [new Platform(this)];
    this.player = new Player(this);
   
  }

  addPlatform(){
    if (this.platforms[this.platforms.length - 1].position.y >= 100){
    this.platforms.push(new Platform(this));
  }
    if (this.platforms.length > 50){
      this.platforms.shift();
    }
}

  update(deltaTime){
    [...this.platforms,this.player].forEach(object => object.update(deltaTime));
    this.addPlatform();
  }

  draw(ctx){
    [...this.platforms,this.player].forEach(object => object.draw(ctx))
    console.log(this.platforms.length)
  }

};