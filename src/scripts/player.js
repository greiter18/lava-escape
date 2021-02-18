import Game from './game';

export default class Player {
  constructor(game) {
    this.game = game;
    this.img = document.getElementById('imgPlayer');
    this.sound = document.getElementById('jump')
    this.platforms = game.platforms
    this.canvas = game.canvas
    this.width = 80;
    this.height = 80;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.onGround = false
    this.onPlatform = false
    this.velocity_y = 0;
    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height};
    document.addEventListener('keydown', e => {
      this.canvas.keys = (this.canvas.keys || []);
      this.canvas.keys[e.key] = true;
      if(this.canvas.keys[' '] && (this.onPlatform || this.onGround )){
        this.velocity_y -= 50
        this.onGround = false
        this.onPlatform = false
        this.sound.play()
      }
    })
    document.addEventListener('keyup', e => {
      this.canvas.keys[e.key] = false;
    })
  };

     draw(ctx){
      ctx.fillStyle = 'blue'
      ctx.drawImage(this.img,this.position.x, this.position.y += this.velocity_y, this.width, this.height);
      // console.log(this.position.y, this.position.y + this.height)
    };

    checkLandedOnPlatform(yCord){
        return ((this.position.y + this.height  > (yCord - 10) ) && (this.position.y + this.height <= yCord) )
        
      }

    checkWithinPlatform(platform){
      let platWidth = platform.width
      let platPos = platform.position.x
      let platEndPos = platPos + platWidth
      let playerPost = this.game.player.position.x 
      return playerPost > platPos && playerPost < platEndPos;
    }

    gravity(){
       if (!this.onGround && !this.onPlatform) {
        this.velocity_y += 5
        // console.log(this.velocity_y)
      }
    }
  
    update(dt) {
      if (!dt) return;
      //controller logic
      if (this.canvas.keys && this.canvas.keys['ArrowLeft']) {this.position.x += -8}
      if (this.canvas.keys && this.canvas.keys['ArrowRight']) {this.position.x += 8}
      //level collission logic
      //height check
      if((!this.onGround && this.velocity_y >= 0) && ((this.position.y + this.height) >= this.gameHeight )){
        this.onGround = true
        this.velocity_y = 0
        this.position.y = (this.gameHeight - this.height)
      }
      //width check
      if (this.position.x < 0) this.position.x = 0
      if (this.position.x + this.width > this.gameWidth) {
        this.position.x = this.gameWidth - this.width
      }
      //checking if player is on platform 
      this.onPlatform = false
      this.game.platforms.forEach(platform => {
        if(this.checkLandedOnPlatform(platform.position.y) && this.checkWithinPlatform(platform)) console.log('landed')
        if (this.checkLandedOnPlatform(platform.position.y) && this.checkWithinPlatform(platform) && 
        !this.onGround && this.velocity_y >= 1) {
          this.onPlatform = true
          this.velocity_y = platform.velocity_y
        } 
      });
     this.gravity();
       
    };
}
