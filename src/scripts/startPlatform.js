export default class StartPlatform {
  constructor(game) {
    this.img = document.getElementById('imgPlatform');
    this.game = game;
    this.position =  { x: 10/ 2 ,y:200}
    this.width = 600;
    this.height = 20;
    this.velocity_y = 0
  };

  draw(ctx) {
    ctx.drawImage(this.img,this.position.x, this.position.y += this.velocity_y , this.width, this.height);            
  };
  
  update(dt) {
    this.velocity_y = 1;
  }
}
