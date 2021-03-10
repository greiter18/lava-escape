export default class Lava {
  constructor(game){
    this.width = 500;
    this.height = 30;
    this.img = document.getElementById('lava')
  }

   draw(ctx) {
    ctx.drawImage(this.img,0, 680, this.width, this.height);     
  };
}