
const xCords = [400,200,20]
const platSizes =[150, 100, 75]

export default class Platform {
  constructor(game) {
    let cord = Math.floor(Math.random() * 3) + 0;
    let mix = Math.floor(Math.random() * 3) + 0;
    this.img = document.getElementById('imgPlatform');
    this.game = game;
    this.position =  { x: xCords[cord] ,y:10}
    this.width = platSizes[mix];
    this.height = 20;
    this.velocity_y = 0
  };

    // fall(){
    //   this.position.y += 1;
    // }

  draw(ctx) {
      // ctx.fillStyle = 'white'
      ctx.drawImage(this.img,this.position.x, this.position.y += this.velocity_y , this.width, this.height);    
        
  };
  
  update(dt) {
    this.velocity_y = 1;
  }
}
