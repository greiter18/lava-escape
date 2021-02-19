
export default class Coin{
  cosntructor(game){
    let xcord = Math.floor(Math.random() * 450) + 25;
    let ycord = Math.floor(Math.random() * 600) + 100;
    this.height = 20;
    this.width = 20;
    this.imng = document.getElementById('coin');
    this.position = {x: xCords[xcord], y: yCords[ycord]}
  }


  draw(ctx) {
      ctx.drawImage(this.img,this.position.x, this.position.y, this.width, this.height);     
  };
  update(ctx) {
           
  };
}