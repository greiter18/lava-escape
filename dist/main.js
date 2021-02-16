!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.r(e);var o=[400,200,20],r=[150,100,75],a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var i=Math.floor(3*Math.random())+0,n=Math.floor(3*Math.random())+0;this.img=document.getElementById("imgPlatform"),this.game=e,this.position={x:o[i],y:10},this.width=r[n],this.height=20}var e,i,a;return e=t,(i=[{key:"fall",value:function(){this.position.y+=1}},{key:"draw",value:function(t){t.fillStyle="white",t.drawImage(this.img,this.position.x,this.position.y,this.width,this.height)}},{key:"update",value:function(t){this.fall()}}])&&n(e.prototype,i),a&&n(e,a),t}();function s(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var h=function(){function t(e){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.game=e,this.img=document.getElementById("imgPlayer"),this.platforms=e.platforms,this.canvas=e.canvas,this.width=80,this.height=80,this.gameWidth=e.gameWidth,this.gameHeight=e.gameHeight,this.onGround=!1,this.onPlatform=!1,this.velocity_y=0,this.position={x:e.gameWidth/2-this.width/2,y:e.gameHeight-this.height},document.addEventListener("keydown",(function(t){i.canvas.keys=i.canvas.keys||[],i.canvas.keys[t.key]=!0,i.canvas.keys[" "]&&(i.onPlatform||i.onGround)&&(i.velocity_y-=50,i.onGround=!1,i.onPlatform=!1)})),document.addEventListener("keyup",(function(t){i.canvas.keys[t.key]=!1}))}var e,i,n;return e=t,(i=[{key:"draw",value:function(t){t.fillStyle="blue",t.drawImage(this.img,this.position.x,this.position.y+=this.velocity_y,this.width,this.height),console.log(this.position.y,this.position.y+this.height)}},{key:"checkLandedOnPlatform",value:function(t){return this.position.y+this.height>t-10&&this.position.y+this.height<=t}},{key:"checkWithinPlatform",value:function(t){var e=t.width,i=t.position.x,n=i+e,o=this.game.player.position.x;return o>i&&o<n}},{key:"gravity",value:function(){this.onGround||this.onPlatform||(this.velocity_y+=5,console.log(this.velocity_y))}},{key:"update",value:function(t){var e=this;t&&(this.canvas.keys&&this.canvas.keys.ArrowLeft&&(this.position.x+=-10),this.canvas.keys&&this.canvas.keys.ArrowRight&&(this.position.x+=10),!this.onGround&&this.velocity_y>=0&&this.position.y+this.height>=this.gameHeight&&(this.onGround=!0,this.velocity_y=0,this.position.y=this.gameHeight-this.height),this.position.x<0&&(this.position.x=0),this.position.x+this.width>this.gameWidth&&(this.position.x=this.gameWidth-this.width),this.onPlatform=!1,this.game.platforms.forEach((function(t){e.checkLandedOnPlatform(t.position.y)&&e.checkWithinPlatform(t)&&!e.onGround&&e.velocity_y>=1&&(console.log("on platform"),e.onPlatform=!0,e.velocity_y=1,console.log("on platform"))})),this.gravity())}}])&&s(e.prototype,i),n&&s(e,n),t}();function l(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function c(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Math.floor(3*Math.random());var f=function(){function t(e,i,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=n,this.gameWidth=e,this.gameHeight=i,this.platforms=[new a(this)],this.player=new h(this)}var e,i,n;return e=t,(i=[{key:"addPlatform",value:function(){this.platforms[this.platforms.length-1].position.y>=100&&this.platforms.push(new a(this)),this.platforms.length>50&&this.platforms.shift()}},{key:"update",value:function(t){[].concat(l(this.platforms),[this.player]).forEach((function(e){return e.update(t)})),this.addPlatform()}},{key:"draw",value:function(t){[].concat(l(this.platforms),[this.player]).forEach((function(e){return e.draw(t)}))}}])&&c(e.prototype,i),n&&c(e,n),t}();i(0);window.addEventListener("load",(function(){var t=document.getElementById("gameScreen"),e=t.getContext("2d");t.height=700,t.width=500;var i=new f(500,700,t),n=0;!function t(o){var r=o-n;n=o,e.clearRect(0,0,500,700),i.update(r),i.draw(e),requestAnimationFrame(t)}()}))}]);
//# sourceMappingURL=main.js.map