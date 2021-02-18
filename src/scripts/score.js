export default class Score{
  constructor(){
  this.score = 0;
  this.player_score = document.getElementById('player_score');
  this.player_score.innerHTML = this.score
  this.addScore = setInterval(() => this.score += 10, 500 )
  }
  // addScore(){
  //   setInterval (() => { 
  //       this.score += 10
  //    }, 500); 
  // }

} 