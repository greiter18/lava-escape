import Game from './game';

export default class Player {
  constructor(game) {
    this.game = game;
    this.platforms = game.platforms
    this.canvas = game.canvas
    this.width = 20;
    this.height = 40;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height 
    };
    this.x_velocity = 

    this.jumping = true;
    this.onPlatform = false;
    this.movingDown = false;
    this.img = document.getElementById('yuffie');
    document.addEventListener('keydown', e => {
      this.canvas.keys = (this.canvas.keys || []);
      this.canvas.keys[e.key] = true;
    })
    document.addEventListener('keyup', e => {
      this.canvas.keys[e.key] = false;
    })
  };

  // drawSprite(img,sX,sY,sW,sH,dX,dY,dW,dH){
  //   ctx.drawImage(img,sX,sY,sW,sH,dX,dY,dW,dH);
  // }
     draw(ctx){
      ctx.fillStyle = 'white'
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    };

    checkLandedOnPlatform(yCord){
        //return (this.position.y + this.height  > yCord - 2 && this.position.y + this.height <= yCord );
        return this.game.player.position.y + this.height === yCord
      }

    checkWithinPlatform(platform){
      let platWidth = platform.width
      let platPos = platform.position.x
      let platEndPos = platPos + platWidth
      let playerPost = this.game.player.position.x 
      return playerPost > platPos && playerPost < platEndPos;
    }

    jump(){
      this.position.y -= 150
    };
    superJump(){
      this.position.y -= 250
    };

    gravity(){
      this.position.y += 5
    };

    platformDrop(){
      if(this.onPlatform) this.position.y += 1
    }

    // playerFalling(){
    //   if(previous frame this.position.y < current frame.position.y){
    //     falling = true
    //   } else {
    //     falling = false
    //   }
    // }

    update(dt) {
      if (!dt) return;
      //moving logic
      if (this.canvas.keys && this.canvas.keys['ArrowLeft']) {this.position.x += -10}
      if (this.canvas.keys && this.canvas.keys['ArrowRight']) {this.position.x += 10}
      if ((this.canvas.keys && this.canvas.keys[' ']) && (this.jumping === true) && (this.canvas.keys && !this.canvas.keys['ArrowUp'])){    //jumping logic
        this.jump();
        this.jumping = false;
      }
      if (this.canvas.keys && this.canvas.keys['ArrowUp']) {//super jump logic
        if((this.canvas.keys && this.canvas.keys[' ']) && (this.jumping === true)){
          this.superJump();
          this.jumping = false;
        }
      }
      
      //level collission logic
      if (this.position.y < 0) this.position.y = 0
      if (this.position.y + this.height > this.gameHeight) {
        this.position.y = this.gameHeight - this.height
        this.jumping = true
      }
    
      if (this.position.x < 0) this.position.x = 0
      if (this.position.x + this.width > this.gameWidth) {
        this.position.x = this.gameWidth - this.width
      }
      //checking if player on platform 
      this.game.platforms.forEach(platform => {
        if (this.checkLandedOnPlatform(platform.position.y) && this.checkWithinPlatform(platform)) {
          this.position.y = platform.position.y + this.height
          this.onPlatform = true;
          this.jumping = true
          console.log(this.onPlatform);
        } 
        //this.onPlatform = false;
      });
     
      
      if (!this.onPlatform) {
        this.gravity()
      } else {
        this.position.y += 1
      } //gravity trigger
      
    };
}
