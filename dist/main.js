/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ "./src/scripts/game.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_1__);


window.addEventListener('load', function () {
  var canvas = document.getElementById('gameScreen');
  var ctx = canvas.getContext("2d");
  canvas.height = 700;
  canvas.width = 500;
  var GAME_WIDTH = 500;
  var GAME_HEIGHT = 700;
  var score = 0;
  var mute = false;
  var clock = setInterval(function () {
    return score += 10;
  }, 750);
  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__["default"](GAME_WIDTH, GAME_HEIGHT, canvas, score, clock, mute);
  var lastTime = 0;
  localStorage.setItem('highScore', 1500);
  highscore.innerHTML = localStorage.getItem('highScore');

  function gameLoop(timestamp) {
    var dt = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.update(dt);
    game.draw(ctx);
    requestAnimationFrame(gameLoop);
  }

  var start = document.getElementById('open_modal');
  start.addEventListener('click', function () {
    gameLoop();
    document.getElementById('open_modal').style.display = 'none';
    document.getElementById('gameScreen').style.display = 'block';
  });
  var muteButton = document.querySelector('.muteButton');
  muteButton.addEventListener('click', function () {
    muteButton.classList.toggle('clickedMute');
    var sounds = document.querySelectorAll('.sound');

    for (var i = 0; i < sounds.length; i++) {
      sounds[i].muted === true ? sounds[i].muted = false : sounds[i].muted = true;
    }
  });
});

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _platforms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platforms */ "./src/scripts/platforms.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/scripts/player.js");
/* harmony import */ var _gem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gem */ "./src/scripts/gem.js");
/* harmony import */ var _startPlatform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startPlatform */ "./src/scripts/startPlatform.js");
/* harmony import */ var _lava__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lava */ "./src/scripts/lava.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Game = /*#__PURE__*/function () {
  function Game(gameWidth, gameHeight, canvas, score, clock, mute) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.score = 0;
    this.clock = clock;
    this.platforms = [new _startPlatform__WEBPACK_IMPORTED_MODULE_3__["default"](this)];
    this.player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    this.paused = false;
    this.gems = [new _gem__WEBPACK_IMPORTED_MODULE_2__["default"](this)];
    this.mute = mute;
    this.restartGame = this.restartGame.bind(this);
    this.sound = document.getElementById('scream');
    this.lava = new _lava__WEBPACK_IMPORTED_MODULE_4__["default"](this);
  }

  _createClass(Game, [{
    key: "addPlatform",
    value: function addPlatform() {
      if (this.platforms[this.platforms.length - 1].position.y >= 100) {
        this.platforms.push(new _platforms__WEBPACK_IMPORTED_MODULE_0__["default"](this));
      }

      if (this.platforms.length > 50) {
        this.platforms.shift();
      }
    }
  }, {
    key: "addGem",
    value: function addGem() {
      if (this.gems.length < 1) this.gems.push(new _gem__WEBPACK_IMPORTED_MODULE_2__["default"](this));
    }
  }, {
    key: "updateScore",
    value: function updateScore() {
      var player_score = document.getElementById('score');

      if (!this.paused) {
        this.score += 1;
      }

      player_score.innerHTML = this.score;
    }
  }, {
    key: "update",
    value: function update(deltaTime) {
      if (!this.paused) {
        [].concat(_toConsumableArray(this.gems), _toConsumableArray(this.platforms), [this.player]).forEach(function (object) {
          return object.update(deltaTime);
        });
        this.updateScore();
        this.addPlatform();
        this.addGem();
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      if (!this.paused) {
        [].concat(_toConsumableArray(this.gems), _toConsumableArray(this.platforms), [this.player, this.lava]).forEach(function (object) {
          return object.draw(ctx);
        });
      }
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      this.paused = true; //this.sound.play()
      // console.log('mute-----------',this.mute)

      document.getElementById('close_modal').style.display = 'block';
      document.getElementById('gameScreen').style.display = 'none'; // console.log('clock---------------',this.clock)

      clearInterval(this.clock);
      var finalScore = document.getElementById('endScore'); // console.log('score---------------',this.score)

      finalScore.innerHTML = 'Score  : ' + this.score;

      if (this.score > localStorage.getItem('highScore')) {
        localStorage.setItem('highScore', this.score);
        highscore.innerHTML = localStorage.getItem('highScore');
      }

      var restartButton = document.getElementById('restartButton');
      restartButton.addEventListener('click', this.restartGame);
    }
  }, {
    key: "restartGame",
    value: function restartGame() {
      this.score = 0;
      this.paused = false;
      this.platforms = [new _startPlatform__WEBPACK_IMPORTED_MODULE_3__["default"](this)];
      this.player = new _player__WEBPACK_IMPORTED_MODULE_1__["default"](this);
      this.gems = [new _gem__WEBPACK_IMPORTED_MODULE_2__["default"](this)];
      document.getElementById('close_modal').style.display = 'none';
      document.getElementById('gameScreen').style.display = 'block';
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/scripts/gem.js":
/*!****************************!*\
  !*** ./src/scripts/gem.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gem; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Gem = /*#__PURE__*/function () {
  function Gem(game) {
    _classCallCheck(this, Gem);

    this.sound = document.getElementById('gemSound');
    var xcord = Math.floor(Math.random() * 450) + 25;
    var ycord = Math.floor(Math.random() * 500) + 100;
    this.height = 25;
    this.width = 25;
    this.img = document.getElementById('gem');
    this.position = {
      x: xcord,
      y: ycord
    };
    this.player = game.player;
    this.game = game;
    this.score = game.score;
    this.mute = game.mute;
  }

  _createClass(Gem, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "removeGem",
    value: function removeGem() {
      var index = this.game.gems.indexOf(this);
      this.game.gems.splice(index, 1);
      this.game.score += 200;
      this.sound.play();
    } //Player gem collission logic

  }, {
    key: "playerGemHeight",
    value: function playerGemHeight(playerY) {
      // console.log('height--------------',this.position.y + this.height)
      // return ((yCord - 8) > this.position.y + this.height  && this.position.y + this.height)
      // return (this.position.y + this.height > (player + 60) && this.position.y + this.height)
      return this.position.y + this.height <= playerY && playerY + 50 >= this.position.y; // return (this.position.y)
    }
  }, {
    key: "playerGemwidth",
    value: function playerGemwidth(player) {
      // debugger
      var playWidth = player.width; // player width

      var playPos = player.position.x; // player left side

      var playEndPos = playWidth + playPos; // player right side

      var gemPost = this.position.x; // gem x start position

      return playEndPos > gemPost && playPos < gemPost + this.width;
    }
  }, {
    key: "update",
    value: function update(ctx) {
      // if(this.playerGemHeight(this.player.position.y) && this.playerGemwidth(this.player)) {
      if (this.player.position.y + this.player.height >= this.position.y + this.height && // bottom of player is greater than the bottom of gem
      this.player.position.y <= this.position.y + this.height && this.player.position.x + this.player.width >= this.position.x && this.player.position.x <= this.position.x + this.width) {
        // debugger
        this.removeGem();
      }
    }
  }]);

  return Gem;
}();



/***/ }),

/***/ "./src/scripts/lava.js":
/*!*****************************!*\
  !*** ./src/scripts/lava.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lava; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Lava = /*#__PURE__*/function () {
  function Lava(game) {
    _classCallCheck(this, Lava);

    this.width = 500;
    this.height = 30;
    this.img = document.getElementById('lava');
  }

  _createClass(Lava, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.img, 0, 680, this.width, this.height);
    }
  }]);

  return Lava;
}();



/***/ }),

/***/ "./src/scripts/platforms.js":
/*!**********************************!*\
  !*** ./src/scripts/platforms.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Platform; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var xCords = [400, 200, 20];
var platSizes = [150, 100, 75];

var Platform = /*#__PURE__*/function () {
  function Platform(game) {
    _classCallCheck(this, Platform);

    var cord = Math.floor(Math.random() * 3) + 0;
    var mix = Math.floor(Math.random() * 3) + 0;
    this.img = document.getElementById('imgPlatform');
    this.game = game;
    this.position = {
      x: xCords[cord],
      y: 10
    };
    this.width = platSizes[mix];
    this.height = 20;
    this.velocity_y = 0;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.img, this.position.x, this.position.y += this.velocity_y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update(dt) {
      this.velocity_y = 1;
    }
  }]);

  return Platform;
}();



/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/scripts/game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Player = /*#__PURE__*/function () {
  function Player(game) {
    var _this = this;

    _classCallCheck(this, Player);

    this.game = game;
    this.img = document.getElementById('imgPlayer');
    this.sound = document.getElementById('jump');
    this.platforms = game.platforms;
    this.startPlatform = game.startPlatform;
    this.canvas = game.canvas;
    this.mute = game.mute;
    this.width = 50;
    this.height = 60;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.onGround = false;
    this.onPlatform = false;
    this.velocity_y = 0;
    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      // y: game.gameHeight - this.height};
      y: 20
    };
    document.addEventListener('keydown', function (e) {
      _this.canvas.keys = _this.canvas.keys || [];
      _this.canvas.keys[e.key] = true;

      if (_this.canvas.keys[' '] && (_this.onPlatform || _this.onGround)) {
        _this.velocity_y -= 40;
        _this.onGround = false;
        _this.onPlatform = false;

        _this.sound.play();
      }
    });
    document.addEventListener('keyup', function (e) {
      _this.canvas.keys[e.key] = false;
    });
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = 'blue';
      ctx.drawImage(this.img, this.position.x, this.position.y += this.velocity_y, this.width, this.height);
    }
  }, {
    key: "checkLandedOnPlatform",
    value: function checkLandedOnPlatform(yCord) {
      return this.position.y + this.height > yCord - 8 && this.position.y + this.height <= yCord + 50; //platform height
    }
  }, {
    key: "checkWithinPlatform",
    value: function checkWithinPlatform(platform) {
      var platWidth = platform.width; //platform width

      var platPos = platform.position.x; // plaform left side position

      var platEndPos = platPos + platWidth; // plaftorm right side position

      var playerPost = this.game.player.position.x; //players x position

      return playerPost > platPos - 50 && playerPost < platEndPos;
    }
  }, {
    key: "gravity",
    value: function gravity() {
      if (!this.onGround && !this.onPlatform) {
        this.velocity_y += 3.5; // console.log(this.velocity_y)
      }
    }
  }, {
    key: "gameOn",
    value: function gameOn() {
      if (this.onGround) {
        this.gameOver();
      }
    }
  }, {
    key: "update",
    value: function update(dt) {
      var _this2 = this;

      if (!dt) return; //controller logic

      if (this.canvas.keys && this.canvas.keys['ArrowLeft']) {
        this.position.x += -8;
      }

      if (this.canvas.keys && this.canvas.keys['ArrowRight']) {
        this.position.x += 8;
      }

      if (this.canvas.keys && this.canvas.keys['ArrowDown'] && this.onPlatform) {
        this.position.y += 50;
      } // if (this.canvas.keys && this.canvas.keys['ArrowUp']){
      //   this.game.paused = !this.game.paused
      // }
      // if (this.canvas.keys && this.canvas.keys['ArrowUp']) {
      //   this.game.gameOver()
      // }
      //level collission logic
      //height check


      if (!this.onGround && this.velocity_y >= 0 && this.position.y + this.height >= this.gameHeight) {
        this.onGround = true;
        this.velocity_y = 0;
        this.position.y = this.gameHeight - this.height; // console.log('game over man')

        this.game.gameOver();
      } //width check
      // if (this.position.x < 0) this.position.x = 0
      // if (this.position.x + this.width > this.gameWidth) {
      //   this.position.x = this.gameWidth - this.width
      // }


      if (this.position.x < 0) this.position.x = this.gameWidth - this.width;

      if (this.position.x > this.gameWidth) {
        this.position.x = 0;
      } //checking if player is on platform 


      this.onPlatform = false;
      this.platforms.forEach(function (platform) {
        // if (this.checkLandedOnPlatform(platform.position.y) && this.checkWithinPlatform(platform) && 
        // !this.onGround && this.velocity_y >= 1) {
        //   this.onPlatform = true
        //   this.velocity_y = platform.velocity_y
        // } 
        // -20 bottom of player is greater than the bottom of gem
        if (_this2.position.y + _this2.height >= platform.position.y - 10 && _this2.position.y + _this2.height <= platform.position.y + 30 && _this2.position.x + _this2.width >= platform.position.x && _this2.position.x <= platform.position.x + platform.width && !_this2.onGround && _this2.velocity_y >= 1) {
          _this2.position.y = Math.abs(_this2.height - platform.position.y);
          _this2.onPlatform = true;
          _this2.velocity_y = platform.velocity_y;
          console.log("Player; ".concat(_this2.position.y));
          console.log("Height; ".concat(_this2.height));
          console.log("Platform: ".concat(platform.position.y));
          debugger;
        }
      });
      this.gravity();
    }
  }]);

  return Player;
}();



/***/ }),

/***/ "./src/scripts/startPlatform.js":
/*!**************************************!*\
  !*** ./src/scripts/startPlatform.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StartPlatform; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StartPlatform = /*#__PURE__*/function () {
  function StartPlatform(game) {
    _classCallCheck(this, StartPlatform);

    this.img = document.getElementById('imgPlatform');
    this.game = game;
    this.position = {
      x: 10 / 2,
      y: 200
    };
    this.width = 600;
    this.height = 20;
    this.velocity_y = 0;
  }

  _createClass(StartPlatform, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.img, this.position.x, this.position.y += this.velocity_y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update(dt) {
      this.velocity_y = 1;
    }
  }]);

  return StartPlatform;
}();



/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2VtLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2xhdmEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcGxhdGZvcm1zLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zdGFydFBsYXRmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsInNjb3JlIiwibXV0ZSIsImNsb2NrIiwic2V0SW50ZXJ2YWwiLCJnYW1lIiwiR2FtZSIsImxhc3RUaW1lIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImhpZ2hzY29yZSIsImlubmVySFRNTCIsImdldEl0ZW0iLCJnYW1lTG9vcCIsInRpbWVzdGFtcCIsImR0IiwiY2xlYXJSZWN0IiwidXBkYXRlIiwiZHJhdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0YXJ0Iiwic3R5bGUiLCJkaXNwbGF5IiwibXV0ZUJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzb3VuZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsIm11dGVkIiwiZ2FtZVdpZHRoIiwiZ2FtZUhlaWdodCIsInBsYXRmb3JtcyIsIlN0YXJ0UGxhdGZvcm0iLCJwbGF5ZXIiLCJQbGF5ZXIiLCJwYXVzZWQiLCJnZW1zIiwiR2VtIiwicmVzdGFydEdhbWUiLCJiaW5kIiwic291bmQiLCJsYXZhIiwiTGF2YSIsInBvc2l0aW9uIiwieSIsInB1c2giLCJQbGF0Zm9ybSIsInNoaWZ0IiwicGxheWVyX3Njb3JlIiwiZGVsdGFUaW1lIiwiZm9yRWFjaCIsIm9iamVjdCIsInVwZGF0ZVNjb3JlIiwiYWRkUGxhdGZvcm0iLCJhZGRHZW0iLCJjbGVhckludGVydmFsIiwiZmluYWxTY29yZSIsInJlc3RhcnRCdXR0b24iLCJ4Y29yZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInljb3JkIiwiaW1nIiwieCIsImRyYXdJbWFnZSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInBsYXkiLCJwbGF5ZXJZIiwicGxheVdpZHRoIiwicGxheVBvcyIsInBsYXlFbmRQb3MiLCJnZW1Qb3N0IiwicmVtb3ZlR2VtIiwieENvcmRzIiwicGxhdFNpemVzIiwiY29yZCIsIm1peCIsInZlbG9jaXR5X3kiLCJzdGFydFBsYXRmb3JtIiwib25Hcm91bmQiLCJvblBsYXRmb3JtIiwiZSIsImtleXMiLCJrZXkiLCJmaWxsU3R5bGUiLCJ5Q29yZCIsInBsYXRmb3JtIiwicGxhdFdpZHRoIiwicGxhdFBvcyIsInBsYXRFbmRQb3MiLCJwbGF5ZXJQb3N0IiwiZ2FtZU92ZXIiLCJhYnMiLCJjb25zb2xlIiwibG9nIiwiZ3Jhdml0eSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFNO0FBQ3RDLE1BQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWI7QUFDQSxNQUFJQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBQ0FKLFFBQU0sQ0FBQ0ssTUFBUCxHQUFnQixHQUFoQjtBQUNBTCxRQUFNLENBQUNNLEtBQVAsR0FBZSxHQUFmO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLEdBQW5CO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLEdBQXBCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQSxNQUFJQyxJQUFJLEdBQUcsS0FBWDtBQUNBLE1BQUlDLEtBQUssR0FBR0MsV0FBVyxDQUFDO0FBQUEsV0FBTUgsS0FBSyxJQUFJLEVBQWY7QUFBQSxHQUFELEVBQXFCLEdBQXJCLENBQXZCO0FBQ0EsTUFBSUksSUFBSSxHQUFHLElBQUlDLHFEQUFKLENBQVNQLFVBQVQsRUFBcUJDLFdBQXJCLEVBQWtDUixNQUFsQyxFQUEwQ1MsS0FBMUMsRUFBaURFLEtBQWpELEVBQXlERCxJQUF6RCxDQUFYO0FBQ0EsTUFBSUssUUFBUSxHQUFHLENBQWY7QUFDQUMsY0FBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLEVBQWtDLElBQWxDO0FBQ0FDLFdBQVMsQ0FBQ0MsU0FBVixHQUFzQkgsWUFBWSxDQUFDSSxPQUFiLENBQXFCLFdBQXJCLENBQXRCOztBQUdDLFdBQVNDLFFBQVQsQ0FBa0JDLFNBQWxCLEVBQTRCO0FBQzNCLFFBQUlDLEVBQUUsR0FBR0QsU0FBUyxHQUFHUCxRQUFyQjtBQUNBQSxZQUFRLEdBQUdPLFNBQVg7QUFFQW5CLE9BQUcsQ0FBQ3FCLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CakIsVUFBcEIsRUFBZ0NDLFdBQWhDO0FBQ0FLLFFBQUksQ0FBQ1ksTUFBTCxDQUFZRixFQUFaO0FBQ0FWLFFBQUksQ0FBQ2EsSUFBTCxDQUFVdkIsR0FBVjtBQUNBd0IseUJBQXFCLENBQUNOLFFBQUQsQ0FBckI7QUFDRDs7QUFFQyxNQUFJTyxLQUFLLEdBQUczQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBWjtBQUNBMEIsT0FBSyxDQUFDN0IsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBK0IsWUFBTTtBQUNuQ3NCLFlBQVE7QUFDUnBCLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQzJCLEtBQXRDLENBQTRDQyxPQUE1QyxHQUFzRCxNQUF0RDtBQUNBN0IsWUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDMkIsS0FBdEMsQ0FBNENDLE9BQTVDLEdBQXNELE9BQXREO0FBQ0QsR0FKRDtBQU1BLE1BQUlDLFVBQVUsR0FBRzlCLFFBQVEsQ0FBQytCLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBakI7QUFDQUQsWUFBVSxDQUFDaEMsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBTTtBQUN6Q2dDLGNBQVUsQ0FBQ0UsU0FBWCxDQUFxQkMsTUFBckIsQ0FBNEIsYUFBNUI7QUFDQSxRQUFJQyxNQUFNLEdBQUdsQyxRQUFRLENBQUNtQyxnQkFBVCxDQUEwQixRQUExQixDQUFiOztBQUNBLFNBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHRixNQUFNLENBQUNHLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXNDO0FBQ3BDRixZQUFNLENBQUNFLENBQUQsQ0FBTixDQUFVRSxLQUFWLEtBQW9CLElBQXBCLEdBQTJCSixNQUFNLENBQUNFLENBQUQsQ0FBTixDQUFVRSxLQUFWLEdBQWtCLEtBQTdDLEdBQXFESixNQUFNLENBQUNFLENBQUQsQ0FBTixDQUFVRSxLQUFWLEdBQWtCLElBQXZFO0FBQ0Q7QUFDRixHQU5EO0FBT0QsQ0F6Q0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCekIsSTtBQUNuQixnQkFBWTBCLFNBQVosRUFBdUJDLFVBQXZCLEVBQWtDekMsTUFBbEMsRUFBeUNTLEtBQXpDLEVBQWdERSxLQUFoRCxFQUF1REQsSUFBdkQsRUFBNEQ7QUFBQTs7QUFDMUQsU0FBS1YsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS3dDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLaEMsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLRSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLK0IsU0FBTCxHQUFpQixDQUFDLElBQUlDLHNEQUFKLENBQWtCLElBQWxCLENBQUQsQ0FBakI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsSUFBSUMsK0NBQUosQ0FBVyxJQUFYLENBQWQ7QUFDQSxTQUFLQyxNQUFMLEdBQWMsS0FBZDtBQUNBLFNBQUtDLElBQUwsR0FBWSxDQUFDLElBQUlDLDRDQUFKLENBQVEsSUFBUixDQUFELENBQVo7QUFDQSxTQUFLdEMsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS3VDLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDQSxTQUFLQyxLQUFMLEdBQWFsRCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBLFNBQUtrRCxJQUFMLEdBQVksSUFBSUMsNkNBQUosQ0FBUyxJQUFULENBQVo7QUFFRDs7OztrQ0FJWTtBQUNYLFVBQUksS0FBS1gsU0FBTCxDQUFlLEtBQUtBLFNBQUwsQ0FBZUosTUFBZixHQUF3QixDQUF2QyxFQUEwQ2dCLFFBQTFDLENBQW1EQyxDQUFuRCxJQUF3RCxHQUE1RCxFQUFnRTtBQUNoRSxhQUFLYixTQUFMLENBQWVjLElBQWYsQ0FBb0IsSUFBSUMsa0RBQUosQ0FBYSxJQUFiLENBQXBCO0FBQ0Q7O0FBQ0MsVUFBSSxLQUFLZixTQUFMLENBQWVKLE1BQWYsR0FBd0IsRUFBNUIsRUFBK0I7QUFDN0IsYUFBS0ksU0FBTCxDQUFlZ0IsS0FBZjtBQUNEO0FBQ0Y7Ozs2QkFFTztBQUNOLFVBQUcsS0FBS1gsSUFBTCxDQUFVVCxNQUFWLEdBQW1CLENBQXRCLEVBQ0UsS0FBS1MsSUFBTCxDQUFVUyxJQUFWLENBQWUsSUFBSVIsNENBQUosQ0FBUSxJQUFSLENBQWY7QUFDSDs7O2tDQUVZO0FBQ1gsVUFBTVcsWUFBWSxHQUFHMUQsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQXJCOztBQUNBLFVBQUcsQ0FBQyxLQUFLNEMsTUFBVCxFQUFnQjtBQUNkLGFBQUtyQyxLQUFMLElBQWMsQ0FBZDtBQUNEOztBQUNEa0Qsa0JBQVksQ0FBQ3hDLFNBQWIsR0FBeUIsS0FBS1YsS0FBOUI7QUFDRDs7OzJCQUVNbUQsUyxFQUFVO0FBQ2YsVUFBRyxDQUFDLEtBQUtkLE1BQVQsRUFBZ0I7QUFDZCxxQ0FBSSxLQUFLQyxJQUFULHNCQUFpQixLQUFLTCxTQUF0QixJQUFnQyxLQUFLRSxNQUFyQyxHQUE2Q2lCLE9BQTdDLENBQXFELFVBQUFDLE1BQU07QUFBQSxpQkFBSUEsTUFBTSxDQUFDckMsTUFBUCxDQUFjbUMsU0FBZCxDQUFKO0FBQUEsU0FBM0Q7QUFDQSxhQUFLRyxXQUFMO0FBQ0EsYUFBS0MsV0FBTDtBQUNBLGFBQUtDLE1BQUw7QUFDRDtBQUNGOzs7eUJBRUk5RCxHLEVBQUk7QUFDUCxVQUFHLENBQUMsS0FBSzJDLE1BQVQsRUFBZ0I7QUFDZCxxQ0FBSSxLQUFLQyxJQUFULHNCQUFpQixLQUFLTCxTQUF0QixJQUFnQyxLQUFLRSxNQUFyQyxFQUE0QyxLQUFLUSxJQUFqRCxHQUF1RFMsT0FBdkQsQ0FBK0QsVUFBQUMsTUFBTTtBQUFBLGlCQUFJQSxNQUFNLENBQUNwQyxJQUFQLENBQVl2QixHQUFaLENBQUo7QUFBQSxTQUFyRTtBQUNEO0FBQ0Y7OzsrQkFFUztBQUNSLFdBQUsyQyxNQUFMLEdBQWMsSUFBZCxDQURRLENBRU47QUFDRjs7QUFDQTdDLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixFQUF1QzJCLEtBQXZDLENBQTZDQyxPQUE3QyxHQUF1RCxPQUF2RDtBQUNBN0IsY0FBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDMkIsS0FBdEMsQ0FBNENDLE9BQTVDLEdBQXNELE1BQXRELENBTFEsQ0FNUjs7QUFDQW9DLG1CQUFhLENBQUMsS0FBS3ZELEtBQU4sQ0FBYjtBQUNBLFVBQU13RCxVQUFVLEdBQUdsRSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBbkIsQ0FSUSxDQVNSOztBQUNBaUUsZ0JBQVUsQ0FBQ2hELFNBQVgsR0FBdUIsY0FBYyxLQUFLVixLQUExQzs7QUFDQSxVQUFHLEtBQUtBLEtBQUwsR0FBYU8sWUFBWSxDQUFDSSxPQUFiLENBQXFCLFdBQXJCLENBQWhCLEVBQWtEO0FBQ2hESixvQkFBWSxDQUFDQyxPQUFiLENBQXFCLFdBQXJCLEVBQWtDLEtBQUtSLEtBQXZDO0FBQ0FTLGlCQUFTLENBQUNDLFNBQVYsR0FBc0JILFlBQVksQ0FBQ0ksT0FBYixDQUFxQixXQUFyQixDQUF0QjtBQUNEOztBQUNELFVBQUlnRCxhQUFhLEdBQUduRSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBcEI7QUFDQWtFLG1CQUFhLENBQUNyRSxnQkFBZCxDQUErQixPQUEvQixFQUF1QyxLQUFLa0QsV0FBNUM7QUFDRDs7O2tDQUVZO0FBQ1gsV0FBS3hDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBS3FDLE1BQUwsR0FBYyxLQUFkO0FBQ0EsV0FBS0osU0FBTCxHQUFpQixDQUFDLElBQUlDLHNEQUFKLENBQWtCLElBQWxCLENBQUQsQ0FBakI7QUFDQSxXQUFLQyxNQUFMLEdBQWMsSUFBSUMsK0NBQUosQ0FBVyxJQUFYLENBQWQ7QUFDQSxXQUFLRSxJQUFMLEdBQVksQ0FBQyxJQUFJQyw0Q0FBSixDQUFRLElBQVIsQ0FBRCxDQUFaO0FBQ0EvQyxjQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUMyQixLQUF2QyxDQUE2Q0MsT0FBN0MsR0FBdUQsTUFBdkQ7QUFDQTdCLGNBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQzJCLEtBQXRDLENBQTRDQyxPQUE1QyxHQUFzRCxPQUF0RDtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3pGa0JrQixHO0FBQ25CLGVBQVluQyxJQUFaLEVBQWlCO0FBQUE7O0FBQ2YsU0FBS3NDLEtBQUwsR0FBYWxELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFiO0FBQ0EsUUFBSW1FLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixHQUEzQixJQUFrQyxFQUE5QztBQUNBLFFBQUlDLEtBQUssR0FBR0gsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixHQUEzQixJQUFrQyxHQUE5QztBQUNBLFNBQUtuRSxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS29FLEdBQUwsR0FBV3pFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUFYO0FBQ0EsU0FBS29ELFFBQUwsR0FBZ0I7QUFBQ3FCLE9BQUMsRUFBRU4sS0FBSjtBQUFXZCxPQUFDLEVBQUVrQjtBQUFkLEtBQWhCO0FBQ0EsU0FBSzdCLE1BQUwsR0FBYy9CLElBQUksQ0FBQytCLE1BQW5CO0FBQ0EsU0FBSy9CLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtKLEtBQUwsR0FBYUksSUFBSSxDQUFDSixLQUFsQjtBQUNBLFNBQUtDLElBQUwsR0FBWUcsSUFBSSxDQUFDSCxJQUFqQjtBQUNEOzs7O3lCQUVJUCxHLEVBQUs7QUFDUkEsU0FBRyxDQUFDeUUsU0FBSixDQUFjLEtBQUtGLEdBQW5CLEVBQXVCLEtBQUtwQixRQUFMLENBQWNxQixDQUFyQyxFQUF3QyxLQUFLckIsUUFBTCxDQUFjQyxDQUF0RCxFQUF5RCxLQUFLakQsS0FBOUQsRUFBcUUsS0FBS0QsTUFBMUU7QUFDRDs7O2dDQUVTO0FBQ1YsVUFBSXdFLEtBQUssR0FBRyxLQUFLaEUsSUFBTCxDQUFVa0MsSUFBVixDQUFlK0IsT0FBZixDQUF1QixJQUF2QixDQUFaO0FBQ0EsV0FBS2pFLElBQUwsQ0FBVWtDLElBQVYsQ0FBZWdDLE1BQWYsQ0FBc0JGLEtBQXRCLEVBQTRCLENBQTVCO0FBQ0EsV0FBS2hFLElBQUwsQ0FBVUosS0FBVixJQUFtQixHQUFuQjtBQUNBLFdBQUswQyxLQUFMLENBQVc2QixJQUFYO0FBQ0EsSyxDQUVGOzs7O29DQUNrQkMsTyxFQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGFBQVUsS0FBSzNCLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQixLQUFLbEQsTUFBeEIsSUFBcUM0RSxPQUF0QyxJQUFzREEsT0FBTyxHQUFHLEVBQVgsSUFBa0IsS0FBSzNCLFFBQUwsQ0FBY0MsQ0FBN0YsQ0FKc0IsQ0FLdEI7QUFDRDs7O21DQUNjWCxNLEVBQU87QUFDcEI7QUFDQSxVQUFJc0MsU0FBUyxHQUFHdEMsTUFBTSxDQUFDdEMsS0FBdkIsQ0FGb0IsQ0FFUzs7QUFDN0IsVUFBSTZFLE9BQU8sR0FBR3ZDLE1BQU0sQ0FBQ1UsUUFBUCxDQUFnQnFCLENBQTlCLENBSG9CLENBR1k7O0FBQ2hDLFVBQUlTLFVBQVUsR0FBR0YsU0FBUyxHQUFHQyxPQUE3QixDQUpvQixDQUlpQjs7QUFDckMsVUFBSUUsT0FBTyxHQUFHLEtBQUsvQixRQUFMLENBQWNxQixDQUE1QixDQUxvQixDQUtVOztBQUM5QixhQUFPUyxVQUFVLEdBQUdDLE9BQWIsSUFBd0JGLE9BQU8sR0FBR0UsT0FBTyxHQUFHLEtBQUsvRSxLQUF4RDtBQUNEOzs7MkJBRU1ILEcsRUFBSztBQUNWO0FBQ0UsVUFBSSxLQUFLeUMsTUFBTCxDQUFZVSxRQUFaLENBQXFCQyxDQUFyQixHQUF5QixLQUFLWCxNQUFMLENBQVl2QyxNQUFyQyxJQUErQyxLQUFLaUQsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLEtBQUtsRCxNQUF2RSxJQUFrRjtBQUNsRixXQUFLdUMsTUFBTCxDQUFZVSxRQUFaLENBQXFCQyxDQUFyQixJQUEwQixLQUFLRCxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS2xELE1BRGpELElBRUEsS0FBS3VDLE1BQUwsQ0FBWVUsUUFBWixDQUFxQnFCLENBQXJCLEdBQXlCLEtBQUsvQixNQUFMLENBQVl0QyxLQUFyQyxJQUE4QyxLQUFLZ0QsUUFBTCxDQUFjcUIsQ0FGNUQsSUFHQSxLQUFLL0IsTUFBTCxDQUFZVSxRQUFaLENBQXFCcUIsQ0FBckIsSUFBMkIsS0FBS3JCLFFBQUwsQ0FBY3FCLENBQWQsR0FBa0IsS0FBS3JFLEtBSHJELEVBSUM7QUFDRDtBQUNBLGFBQUtnRixTQUFMO0FBQWlCO0FBQ3BCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3JEa0JqQyxJO0FBQ25CLGdCQUFZeEMsSUFBWixFQUFpQjtBQUFBOztBQUNmLFNBQUtQLEtBQUwsR0FBYSxHQUFiO0FBQ0EsU0FBS0QsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLcUUsR0FBTCxHQUFXekUsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQVg7QUFDRDs7Ozt5QkFFS0MsRyxFQUFLO0FBQ1RBLFNBQUcsQ0FBQ3lFLFNBQUosQ0FBYyxLQUFLRixHQUFuQixFQUF1QixDQUF2QixFQUEwQixHQUExQixFQUErQixLQUFLcEUsS0FBcEMsRUFBMkMsS0FBS0QsTUFBaEQ7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUSCxJQUFNa0YsTUFBTSxHQUFHLENBQUMsR0FBRCxFQUFLLEdBQUwsRUFBUyxFQUFULENBQWY7QUFDQSxJQUFNQyxTQUFTLEdBQUUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEVBQVgsQ0FBakI7O0lBRXFCL0IsUTtBQUNuQixvQkFBWTVDLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsUUFBSTRFLElBQUksR0FBR25CLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsQ0FBM0IsSUFBZ0MsQ0FBM0M7QUFDQSxRQUFJa0IsR0FBRyxHQUFHcEIsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixDQUEzQixJQUFnQyxDQUExQztBQUNBLFNBQUtFLEdBQUwsR0FBV3pFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFYO0FBQ0EsU0FBS1csSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS3lDLFFBQUwsR0FBaUI7QUFBRXFCLE9BQUMsRUFBRVksTUFBTSxDQUFDRSxJQUFELENBQVg7QUFBbUJsQyxPQUFDLEVBQUM7QUFBckIsS0FBakI7QUFDQSxTQUFLakQsS0FBTCxHQUFha0YsU0FBUyxDQUFDRSxHQUFELENBQXRCO0FBQ0EsU0FBS3JGLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS3NGLFVBQUwsR0FBa0IsQ0FBbEI7QUFDRDs7Ozt5QkFFSXhGLEcsRUFBSztBQUNSQSxTQUFHLENBQUN5RSxTQUFKLENBQWMsS0FBS0YsR0FBbkIsRUFBdUIsS0FBS3BCLFFBQUwsQ0FBY3FCLENBQXJDLEVBQXdDLEtBQUtyQixRQUFMLENBQWNDLENBQWQsSUFBbUIsS0FBS29DLFVBQWhFLEVBQTZFLEtBQUtyRixLQUFsRixFQUF5RixLQUFLRCxNQUE5RjtBQUNEOzs7MkJBRU1rQixFLEVBQUk7QUFDVCxXQUFLb0UsVUFBTCxHQUFrQixDQUFsQjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkg7O0lBRXFCOUMsTTtBQUNuQixrQkFBWWhDLElBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDaEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBSzZELEdBQUwsR0FBV3pFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFYO0FBQ0EsU0FBS2lELEtBQUwsR0FBYWxELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFiO0FBQ0EsU0FBS3dDLFNBQUwsR0FBaUI3QixJQUFJLENBQUM2QixTQUF0QjtBQUNBLFNBQUtrRCxhQUFMLEdBQXFCL0UsSUFBSSxDQUFDK0UsYUFBMUI7QUFDQSxTQUFLNUYsTUFBTCxHQUFjYSxJQUFJLENBQUNiLE1BQW5CO0FBQ0EsU0FBS1UsSUFBTCxHQUFZRyxJQUFJLENBQUNILElBQWpCO0FBQ0EsU0FBS0osS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLRCxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUttQyxTQUFMLEdBQWlCM0IsSUFBSSxDQUFDMkIsU0FBdEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCNUIsSUFBSSxDQUFDNEIsVUFBdkI7QUFDQSxTQUFLb0QsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLSCxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS3JDLFFBQUwsR0FBZ0I7QUFDZHFCLE9BQUMsRUFBRTlELElBQUksQ0FBQzJCLFNBQUwsR0FBaUIsQ0FBakIsR0FBcUIsS0FBS2xDLEtBQUwsR0FBYSxDQUR2QjtBQUVkO0FBQ0FpRCxPQUFDLEVBQUU7QUFIVyxLQUFoQjtBQUlBdEQsWUFBUSxDQUFDRixnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFBZ0csQ0FBQyxFQUFJO0FBQ3hDLFdBQUksQ0FBQy9GLE1BQUwsQ0FBWWdHLElBQVosR0FBb0IsS0FBSSxDQUFDaEcsTUFBTCxDQUFZZ0csSUFBWixJQUFvQixFQUF4QztBQUNBLFdBQUksQ0FBQ2hHLE1BQUwsQ0FBWWdHLElBQVosQ0FBaUJELENBQUMsQ0FBQ0UsR0FBbkIsSUFBMEIsSUFBMUI7O0FBQ0EsVUFBRyxLQUFJLENBQUNqRyxNQUFMLENBQVlnRyxJQUFaLENBQWlCLEdBQWpCLE1BQTBCLEtBQUksQ0FBQ0YsVUFBTCxJQUFtQixLQUFJLENBQUNELFFBQWxELENBQUgsRUFBK0Q7QUFDN0QsYUFBSSxDQUFDRixVQUFMLElBQW1CLEVBQW5CO0FBQ0EsYUFBSSxDQUFDRSxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsYUFBSSxDQUFDQyxVQUFMLEdBQWtCLEtBQWxCOztBQUNBLGFBQUksQ0FBQzNDLEtBQUwsQ0FBVzZCLElBQVg7QUFDRDtBQUNGLEtBVEQ7QUFVQS9FLFlBQVEsQ0FBQ0YsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQWdHLENBQUMsRUFBSTtBQUN0QyxXQUFJLENBQUMvRixNQUFMLENBQVlnRyxJQUFaLENBQWlCRCxDQUFDLENBQUNFLEdBQW5CLElBQTBCLEtBQTFCO0FBQ0QsS0FGRDtBQUdEOzs7O3lCQUVPOUYsRyxFQUFJO0FBQ1JBLFNBQUcsQ0FBQytGLFNBQUosR0FBZ0IsTUFBaEI7QUFDQS9GLFNBQUcsQ0FBQ3lFLFNBQUosQ0FBYyxLQUFLRixHQUFuQixFQUF3QixLQUFLcEIsUUFBTCxDQUFjcUIsQ0FBdEMsRUFBeUMsS0FBS3JCLFFBQUwsQ0FBY0MsQ0FBZCxJQUFtQixLQUFLb0MsVUFBakUsRUFBNkUsS0FBS3JGLEtBQWxGLEVBQXlGLEtBQUtELE1BQTlGO0FBQ0Q7OzswQ0FFcUI4RixLLEVBQU07QUFDMUIsYUFBUyxLQUFLN0MsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLEtBQUtsRCxNQUF2QixHQUFrQzhGLEtBQUssR0FBRyxDQUEzQyxJQUFvRCxLQUFLN0MsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLEtBQUtsRCxNQUF2QixJQUFpQzhGLEtBQUssR0FBRyxFQUFyRyxDQUQwQixDQUNxSztBQUM5TDs7O3dDQUVpQkMsUSxFQUFTO0FBQzNCLFVBQUlDLFNBQVMsR0FBR0QsUUFBUSxDQUFDOUYsS0FBekIsQ0FEMkIsQ0FDSTs7QUFDL0IsVUFBSWdHLE9BQU8sR0FBR0YsUUFBUSxDQUFDOUMsUUFBVCxDQUFrQnFCLENBQWhDLENBRjJCLENBRU87O0FBQ2xDLFVBQUk0QixVQUFVLEdBQUdELE9BQU8sR0FBR0QsU0FBM0IsQ0FIMkIsQ0FHVTs7QUFDckMsVUFBSUcsVUFBVSxHQUFHLEtBQUszRixJQUFMLENBQVUrQixNQUFWLENBQWlCVSxRQUFqQixDQUEwQnFCLENBQTNDLENBSjJCLENBSWtCOztBQUM3QyxhQUFPNkIsVUFBVSxHQUFJRixPQUFPLEdBQUcsRUFBeEIsSUFBK0JFLFVBQVUsR0FBR0QsVUFBbkQ7QUFDRDs7OzhCQUVRO0FBQ04sVUFBSSxDQUFDLEtBQUtWLFFBQU4sSUFBa0IsQ0FBQyxLQUFLQyxVQUE1QixFQUF3QztBQUN2QyxhQUFLSCxVQUFMLElBQW1CLEdBQW5CLENBRHVDLENBRXZDO0FBQ0Q7QUFDRjs7OzZCQUVPO0FBQ04sVUFBRyxLQUFLRSxRQUFSLEVBQWlCO0FBQ2YsYUFBS1ksUUFBTDtBQUNEO0FBQ0Y7OzsyQkFFTWxGLEUsRUFBSTtBQUFBOztBQUNULFVBQUksQ0FBQ0EsRUFBTCxFQUFTLE9BREEsQ0FFVDs7QUFDQSxVQUFJLEtBQUt2QixNQUFMLENBQVlnRyxJQUFaLElBQW9CLEtBQUtoRyxNQUFMLENBQVlnRyxJQUFaLENBQWlCLFdBQWpCLENBQXhCLEVBQXVEO0FBQUMsYUFBSzFDLFFBQUwsQ0FBY3FCLENBQWQsSUFBbUIsQ0FBQyxDQUFwQjtBQUFzQjs7QUFDOUUsVUFBSSxLQUFLM0UsTUFBTCxDQUFZZ0csSUFBWixJQUFvQixLQUFLaEcsTUFBTCxDQUFZZ0csSUFBWixDQUFpQixZQUFqQixDQUF4QixFQUF3RDtBQUFDLGFBQUsxQyxRQUFMLENBQWNxQixDQUFkLElBQW1CLENBQW5CO0FBQXFCOztBQUM5RSxVQUFJLEtBQUszRSxNQUFMLENBQVlnRyxJQUFaLElBQW9CLEtBQUtoRyxNQUFMLENBQVlnRyxJQUFaLENBQWlCLFdBQWpCLENBQXBCLElBQXFELEtBQUtGLFVBQTlELEVBQTBFO0FBQUMsYUFBS3hDLFFBQUwsQ0FBY0MsQ0FBZCxJQUFtQixFQUFuQjtBQUFzQixPQUx4RixDQU1UO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFVBQUksQ0FBQyxLQUFLc0MsUUFBTixJQUFrQixLQUFLRixVQUFMLElBQW1CLENBQXRDLElBQThDLEtBQUtyQyxRQUFMLENBQWNDLENBQWQsR0FBa0IsS0FBS2xELE1BQXhCLElBQW1DLEtBQUtvQyxVQUF4RixFQUFxRztBQUNuRyxhQUFLb0QsUUFBTCxHQUFnQixJQUFoQjtBQUNBLGFBQUtGLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxhQUFLckMsUUFBTCxDQUFjQyxDQUFkLEdBQW1CLEtBQUtkLFVBQUwsR0FBa0IsS0FBS3BDLE1BQTFDLENBSG1HLENBSW5HOztBQUNBLGFBQUtRLElBQUwsQ0FBVTRGLFFBQVY7QUFDRCxPQXBCUSxDQXVCVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxVQUFJLEtBQUtuRCxRQUFMLENBQWNxQixDQUFkLEdBQWtCLENBQXRCLEVBQXlCLEtBQUtyQixRQUFMLENBQWNxQixDQUFkLEdBQWtCLEtBQUtuQyxTQUFMLEdBQWlCLEtBQUtsQyxLQUF4Qzs7QUFDekIsVUFBSSxLQUFLZ0QsUUFBTCxDQUFjcUIsQ0FBZCxHQUFrQixLQUFLbkMsU0FBM0IsRUFBc0M7QUFDcEMsYUFBS2MsUUFBTCxDQUFjcUIsQ0FBZCxHQUFrQixDQUFsQjtBQUNELE9BL0JRLENBZ0NUOzs7QUFDQSxXQUFLbUIsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFdBQUtwRCxTQUFMLENBQWVtQixPQUFmLENBQXVCLFVBQUF1QyxRQUFRLEVBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBSSxNQUFJLENBQUM5QyxRQUFMLENBQWNDLENBQWQsR0FBa0IsTUFBSSxDQUFDbEQsTUFBdkIsSUFBaUMrRixRQUFRLENBQUM5QyxRQUFULENBQWtCQyxDQUFsQixHQUFzQixFQUF4RCxJQUNBLE1BQUksQ0FBQ0QsUUFBTCxDQUFjQyxDQUFkLEdBQWtCLE1BQUksQ0FBQ2xELE1BQXZCLElBQWlDK0YsUUFBUSxDQUFDOUMsUUFBVCxDQUFrQkMsQ0FBbEIsR0FBc0IsRUFEdkQsSUFFQSxNQUFJLENBQUNELFFBQUwsQ0FBY3FCLENBQWQsR0FBa0IsTUFBSSxDQUFDckUsS0FBdkIsSUFBZ0M4RixRQUFRLENBQUM5QyxRQUFULENBQWtCcUIsQ0FGbEQsSUFHQSxNQUFJLENBQUNyQixRQUFMLENBQWNxQixDQUFkLElBQW9CeUIsUUFBUSxDQUFDOUMsUUFBVCxDQUFrQnFCLENBQWxCLEdBQXNCeUIsUUFBUSxDQUFDOUYsS0FIbkQsSUFJRCxDQUFDLE1BQUksQ0FBQ3VGLFFBSkwsSUFJaUIsTUFBSSxDQUFDRixVQUFMLElBQW1CLENBSnZDLEVBSXlDO0FBQ3JDLGdCQUFJLENBQUNyQyxRQUFMLENBQWNDLENBQWQsR0FBa0JlLElBQUksQ0FBQ29DLEdBQUwsQ0FBUyxNQUFJLENBQUNyRyxNQUFMLEdBQWMrRixRQUFRLENBQUM5QyxRQUFULENBQWtCQyxDQUF6QyxDQUFsQjtBQUNBLGdCQUFJLENBQUN1QyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsZ0JBQUksQ0FBQ0gsVUFBTCxHQUFrQlMsUUFBUSxDQUFDVCxVQUEzQjtBQUVBZ0IsaUJBQU8sQ0FBQ0MsR0FBUixtQkFBdUIsTUFBSSxDQUFDdEQsUUFBTCxDQUFjQyxDQUFyQztBQUNBb0QsaUJBQU8sQ0FBQ0MsR0FBUixtQkFBdUIsTUFBSSxDQUFDdkcsTUFBNUI7QUFDQXNHLGlCQUFPLENBQUNDLEdBQVIscUJBQXlCUixRQUFRLENBQUM5QyxRQUFULENBQWtCQyxDQUEzQztBQUNGO0FBQ0c7QUFDTixPQXJCRDtBQXNCRCxXQUFLc0QsT0FBTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzVIZ0JsRSxhO0FBQ25CLHlCQUFZOUIsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLNkQsR0FBTCxHQUFXekUsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQVg7QUFDQSxTQUFLVyxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLeUMsUUFBTCxHQUFpQjtBQUFFcUIsT0FBQyxFQUFFLEtBQUksQ0FBVDtBQUFZcEIsT0FBQyxFQUFDO0FBQWQsS0FBakI7QUFDQSxTQUFLakQsS0FBTCxHQUFhLEdBQWI7QUFDQSxTQUFLRCxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtzRixVQUFMLEdBQWtCLENBQWxCO0FBQ0Q7Ozs7eUJBRUl4RixHLEVBQUs7QUFDUkEsU0FBRyxDQUFDeUUsU0FBSixDQUFjLEtBQUtGLEdBQW5CLEVBQXVCLEtBQUtwQixRQUFMLENBQWNxQixDQUFyQyxFQUF3QyxLQUFLckIsUUFBTCxDQUFjQyxDQUFkLElBQW1CLEtBQUtvQyxVQUFoRSxFQUE2RSxLQUFLckYsS0FBbEYsRUFBeUYsS0FBS0QsTUFBOUY7QUFDRDs7OzJCQUVNa0IsRSxFQUFJO0FBQ1QsV0FBS29FLFVBQUwsR0FBa0IsQ0FBbEI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkgsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCJcbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIlxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZVNjcmVlbicpO1xubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5jYW52YXMuaGVpZ2h0ID0gNzAwO1xuY2FudmFzLndpZHRoID0gNTAwO1xuY29uc3QgR0FNRV9XSURUSCA9IDUwMDtcbmNvbnN0IEdBTUVfSEVJR0hUID0gNzAwO1xubGV0IHNjb3JlID0gMDtcbmxldCBtdXRlID0gZmFsc2U7XG5sZXQgY2xvY2sgPSBzZXRJbnRlcnZhbCgoKSA9PiBzY29yZSArPSAxMCAsIDc1MClcbmxldCBnYW1lID0gbmV3IEdhbWUoR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQsIGNhbnZhcywgc2NvcmUsIGNsb2NrICwgbXV0ZSlcbmxldCBsYXN0VGltZSA9IDA7XG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaFNjb3JlJywgMTUwMCk7XG5oaWdoc2NvcmUuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hTY29yZScpXG5cblxuIGZ1bmN0aW9uIGdhbWVMb29wKHRpbWVzdGFtcCl7XG4gIGxldCBkdCA9IHRpbWVzdGFtcCAtIGxhc3RUaW1lO1xuICBsYXN0VGltZSA9IHRpbWVzdGFtcDtcblxuICBjdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgZ2FtZS51cGRhdGUoZHQpO1xuICBnYW1lLmRyYXcoY3R4KVxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufVxuXG4gIGxldCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuX21vZGFsJyk7XG4gIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgZ2FtZUxvb3AoKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuX21vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZVNjcmVlbicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9KVxuXG4gIGxldCBtdXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm11dGVCdXR0b24nKVxuICBtdXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG11dGVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnY2xpY2tlZE11dGUnKVxuICAgIGxldCBzb3VuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc291bmQnKVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzb3VuZHMubGVuZ3RoOyBpKyspe1xuICAgICAgc291bmRzW2ldLm11dGVkID09PSB0cnVlID8gc291bmRzW2ldLm11dGVkID0gZmFsc2UgOiBzb3VuZHNbaV0ubXV0ZWQgPSB0cnVlICBcbiAgICB9XG4gIH0pXG59KVxuXG4iLCJpbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4vcGxhdGZvcm1zXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IEdlbSBmcm9tIFwiLi9nZW1cIjtcbmltcG9ydCBTdGFydFBsYXRmb3JtIGZyb20gXCIuL3N0YXJ0UGxhdGZvcm1cIlxuaW1wb3J0IExhdmEgZnJvbSBcIi4vbGF2YVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihnYW1lV2lkdGgsIGdhbWVIZWlnaHQsY2FudmFzLHNjb3JlLCBjbG9jaywgbXV0ZSl7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lV2lkdGg7XG4gICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLmNsb2NrID0gY2xvY2s7XG4gICAgdGhpcy5wbGF0Zm9ybXMgPSBbbmV3IFN0YXJ0UGxhdGZvcm0odGhpcyldO1xuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzKTtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2VtcyA9IFtuZXcgR2VtKHRoaXMpXTtcbiAgICB0aGlzLm11dGUgPSBtdXRlO1xuICAgIHRoaXMucmVzdGFydEdhbWUgPSB0aGlzLnJlc3RhcnRHYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JlYW0nKTtcbiAgICB0aGlzLmxhdmEgPSBuZXcgTGF2YSh0aGlzKTtcbiAgICBcbiAgfVxuXG5cblxuICBhZGRQbGF0Zm9ybSgpe1xuICAgIGlmICh0aGlzLnBsYXRmb3Jtc1t0aGlzLnBsYXRmb3Jtcy5sZW5ndGggLSAxXS5wb3NpdGlvbi55ID49IDEwMCl7XG4gICAgdGhpcy5wbGF0Zm9ybXMucHVzaChuZXcgUGxhdGZvcm0odGhpcykpO1xuICB9XG4gICAgaWYgKHRoaXMucGxhdGZvcm1zLmxlbmd0aCA+IDUwKXtcbiAgICAgIHRoaXMucGxhdGZvcm1zLnNoaWZ0KCk7XG4gICAgfVxuICB9XG5cbiAgYWRkR2VtKCl7XG4gICAgaWYodGhpcy5nZW1zLmxlbmd0aCA8IDEpXG4gICAgICB0aGlzLmdlbXMucHVzaChuZXcgR2VtKHRoaXMpKVxuICB9XG5cbiAgdXBkYXRlU2NvcmUoKXtcbiAgICBjb25zdCBwbGF5ZXJfc2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKTtcbiAgICBpZighdGhpcy5wYXVzZWQpe1xuICAgICAgdGhpcy5zY29yZSArPSAxXG4gICAgfVxuICAgIHBsYXllcl9zY29yZS5pbm5lckhUTUwgPSB0aGlzLnNjb3JlXG4gIH1cblxuICB1cGRhdGUoZGVsdGFUaW1lKXtcbiAgICBpZighdGhpcy5wYXVzZWQpe1xuICAgICAgWy4uLnRoaXMuZ2VtcywuLi50aGlzLnBsYXRmb3Jtcyx0aGlzLnBsYXllcl0uZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnVwZGF0ZShkZWx0YVRpbWUpKTtcbiAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcbiAgICAgIHRoaXMuYWRkUGxhdGZvcm0oKTtcbiAgICAgIHRoaXMuYWRkR2VtKCk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjdHgpe1xuICAgIGlmKCF0aGlzLnBhdXNlZCl7XG4gICAgICBbLi4udGhpcy5nZW1zLC4uLnRoaXMucGxhdGZvcm1zLHRoaXMucGxheWVyLHRoaXMubGF2YV0uZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LmRyYXcoY3R4KSlcbiAgICB9XG4gIH1cblxuICBnYW1lT3Zlcigpe1xuICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgIC8vdGhpcy5zb3VuZC5wbGF5KClcbiAgICAvLyBjb25zb2xlLmxvZygnbXV0ZS0tLS0tLS0tLS0tJyx0aGlzLm11dGUpXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlX21vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVTY3JlZW4nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjbG9jay0tLS0tLS0tLS0tLS0tLScsdGhpcy5jbG9jaylcbiAgICBjbGVhckludGVydmFsKHRoaXMuY2xvY2spXG4gICAgY29uc3QgZmluYWxTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbmRTY29yZScpXG4gICAgLy8gY29uc29sZS5sb2coJ3Njb3JlLS0tLS0tLS0tLS0tLS0tJyx0aGlzLnNjb3JlKVxuICAgIGZpbmFsU2NvcmUuaW5uZXJIVE1MID0gJ1Njb3JlICA6ICcgKyB0aGlzLnNjb3JlO1xuICAgIGlmKHRoaXMuc2NvcmUgPiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGlnaFNjb3JlJykpe1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hpZ2hTY29yZScsIHRoaXMuc2NvcmUpXG4gICAgICBoaWdoc2NvcmUuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hTY29yZScpXG4gICAgfVxuICAgIGxldCByZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnRCdXR0b24nKVxuICAgIHJlc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRoaXMucmVzdGFydEdhbWUpXG4gIH1cblxuICByZXN0YXJ0R2FtZSgpe1xuICAgIHRoaXMuc2NvcmUgPSAwO1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5wbGF0Zm9ybXMgPSBbbmV3IFN0YXJ0UGxhdGZvcm0odGhpcyldO1xuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzKTtcbiAgICB0aGlzLmdlbXMgPSBbbmV3IEdlbSh0aGlzKV07XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlX21vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZVNjcmVlbicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG59IiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZW17XG4gIGNvbnN0cnVjdG9yKGdhbWUpe1xuICAgIHRoaXMuc291bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2VtU291bmQnKVxuICAgIGxldCB4Y29yZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQ1MCkgKyAyNTtcbiAgICBsZXQgeWNvcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MDApICsgMTAwO1xuICAgIHRoaXMuaGVpZ2h0ID0gMjU7XG4gICAgdGhpcy53aWR0aCA9IDI1O1xuICAgIHRoaXMuaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbScpO1xuICAgIHRoaXMucG9zaXRpb24gPSB7eDogeGNvcmQsIHk6IHljb3JkfVxuICAgIHRoaXMucGxheWVyID0gZ2FtZS5wbGF5ZXJcbiAgICB0aGlzLmdhbWUgPSBnYW1lXG4gICAgdGhpcy5zY29yZSA9IGdhbWUuc2NvcmVcbiAgICB0aGlzLm11dGUgPSBnYW1lLm11dGVcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZyx0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpOyAgICAgXG4gIH07XG5cbiByZW1vdmVHZW0oKXtcbiAgbGV0IGluZGV4ID0gdGhpcy5nYW1lLmdlbXMuaW5kZXhPZih0aGlzKVxuICB0aGlzLmdhbWUuZ2Vtcy5zcGxpY2UoaW5kZXgsMSlcbiAgdGhpcy5nYW1lLnNjb3JlICs9IDIwMFxuICB0aGlzLnNvdW5kLnBsYXkoKVxuIH0gXG5cbi8vUGxheWVyIGdlbSBjb2xsaXNzaW9uIGxvZ2ljXG4gIHBsYXllckdlbUhlaWdodChwbGF5ZXJZKXtcbiAgICAvLyBjb25zb2xlLmxvZygnaGVpZ2h0LS0tLS0tLS0tLS0tLS0nLHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0KVxuICAgIC8vIHJldHVybiAoKHlDb3JkIC0gOCkgPiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCAgJiYgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQpXG4gICAgLy8gcmV0dXJuICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA+IChwbGF5ZXIgKyA2MCkgJiYgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQpXG4gICAgcmV0dXJuICgoKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ICkgPD0gKHBsYXllclkpKSAmJiAoIChwbGF5ZXJZICsgNTApID49IHRoaXMucG9zaXRpb24ueSkpXG4gICAgLy8gcmV0dXJuICh0aGlzLnBvc2l0aW9uLnkpXG4gIH1cbiAgcGxheWVyR2Vtd2lkdGgocGxheWVyKXtcbiAgICAvLyBkZWJ1Z2dlclxuICAgIGxldCBwbGF5V2lkdGggPSBwbGF5ZXIud2lkdGggLy8gcGxheWVyIHdpZHRoXG4gICAgbGV0IHBsYXlQb3MgPSBwbGF5ZXIucG9zaXRpb24ueCAvLyBwbGF5ZXIgbGVmdCBzaWRlXG4gICAgbGV0IHBsYXlFbmRQb3MgPSBwbGF5V2lkdGggKyBwbGF5UG9zIC8vIHBsYXllciByaWdodCBzaWRlXG4gICAgbGV0IGdlbVBvc3QgPSB0aGlzLnBvc2l0aW9uLnggLy8gZ2VtIHggc3RhcnQgcG9zaXRpb25cbiAgICByZXR1cm4gcGxheUVuZFBvcyA+IGdlbVBvc3QgJiYgcGxheVBvcyA8IGdlbVBvc3QgKyB0aGlzLndpZHRoXG4gIH1cblxuICB1cGRhdGUoY3R4KSB7IFxuICAgIC8vIGlmKHRoaXMucGxheWVyR2VtSGVpZ2h0KHRoaXMucGxheWVyLnBvc2l0aW9uLnkpICYmIHRoaXMucGxheWVyR2Vtd2lkdGgodGhpcy5wbGF5ZXIpKSB7XG4gICAgICBpZigodGhpcy5wbGF5ZXIucG9zaXRpb24ueSArIHRoaXMucGxheWVyLmhlaWdodCA+PSB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCkgJiYgLy8gYm90dG9tIG9mIHBsYXllciBpcyBncmVhdGVyIHRoYW4gdGhlIGJvdHRvbSBvZiBnZW1cbiAgICAgICAgKHRoaXMucGxheWVyLnBvc2l0aW9uLnkgPD0gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQpICYmIFxuICAgICAgICAodGhpcy5wbGF5ZXIucG9zaXRpb24ueCArIHRoaXMucGxheWVyLndpZHRoID49IHRoaXMucG9zaXRpb24ueCkgJiZcbiAgICAgICAgKHRoaXMucGxheWVyLnBvc2l0aW9uLnggIDw9IHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGgpXG4gICAgICApe1xuICAgICAgLy8gZGVidWdnZXJcbiAgICAgIHRoaXMucmVtb3ZlR2VtKCl9XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMYXZhIHtcbiAgY29uc3RydWN0b3IoZ2FtZSl7XG4gICAgdGhpcy53aWR0aCA9IDUwMDtcbiAgICB0aGlzLmhlaWdodCA9IDMwO1xuICAgIHRoaXMuaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xhdmEnKVxuICB9XG5cbiAgIGRyYXcoY3R4KSB7XG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZywwLCA2ODAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgICAgIFxuICB9O1xufSIsImNvbnN0IHhDb3JkcyA9IFs0MDAsMjAwLDIwXVxuY29uc3QgcGxhdFNpemVzID1bMTUwLCAxMDAsIDc1XVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybSB7XG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICBsZXQgY29yZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpICsgMDtcbiAgICBsZXQgbWl4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMykgKyAwO1xuICAgIHRoaXMuaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ1BsYXRmb3JtJyk7XG4gICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICB0aGlzLnBvc2l0aW9uID0gIHsgeDogeENvcmRzW2NvcmRdICx5OjEwfVxuICAgIHRoaXMud2lkdGggPSBwbGF0U2l6ZXNbbWl4XTtcbiAgICB0aGlzLmhlaWdodCA9IDIwO1xuICAgIHRoaXMudmVsb2NpdHlfeSA9IDBcbiAgfTtcblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eV95ICwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpOyAgICAgICAgICAgIFxuICB9O1xuICBcbiAgdXBkYXRlKGR0KSB7XG4gICAgdGhpcy52ZWxvY2l0eV95ID0gMTtcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZSkge1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5pbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nUGxheWVyJyk7XG4gICAgdGhpcy5zb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqdW1wJylcbiAgICB0aGlzLnBsYXRmb3JtcyA9IGdhbWUucGxhdGZvcm1zXG4gICAgdGhpcy5zdGFydFBsYXRmb3JtID0gZ2FtZS5zdGFydFBsYXRmb3JtXG4gICAgdGhpcy5jYW52YXMgPSBnYW1lLmNhbnZhc1xuICAgIHRoaXMubXV0ZSA9IGdhbWUubXV0ZVxuICAgIHRoaXMud2lkdGggPSA1MDtcbiAgICB0aGlzLmhlaWdodCA9IDYwO1xuICAgIHRoaXMuZ2FtZVdpZHRoID0gZ2FtZS5nYW1lV2lkdGg7XG4gICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZS5nYW1lSGVpZ2h0O1xuICAgIHRoaXMub25Hcm91bmQgPSBmYWxzZVxuICAgIHRoaXMub25QbGF0Zm9ybSA9IGZhbHNlXG4gICAgdGhpcy52ZWxvY2l0eV95ID0gMDtcbiAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgeDogZ2FtZS5nYW1lV2lkdGggLyAyIC0gdGhpcy53aWR0aCAvIDIsXG4gICAgICAvLyB5OiBnYW1lLmdhbWVIZWlnaHQgLSB0aGlzLmhlaWdodH07XG4gICAgICB5OiAyMH07XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgdGhpcy5jYW52YXMua2V5cyA9ICh0aGlzLmNhbnZhcy5rZXlzIHx8IFtdKTtcbiAgICAgIHRoaXMuY2FudmFzLmtleXNbZS5rZXldID0gdHJ1ZTtcbiAgICAgIGlmKHRoaXMuY2FudmFzLmtleXNbJyAnXSAmJiAodGhpcy5vblBsYXRmb3JtIHx8IHRoaXMub25Hcm91bmQpKXtcbiAgICAgICAgdGhpcy52ZWxvY2l0eV95IC09IDQwXG4gICAgICAgIHRoaXMub25Hcm91bmQgPSBmYWxzZVxuICAgICAgICB0aGlzLm9uUGxhdGZvcm0gPSBmYWxzZVxuICAgICAgICB0aGlzLnNvdW5kLnBsYXkoKVxuICAgICAgfVxuICAgIH0pXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgICAgIHRoaXMuY2FudmFzLmtleXNbZS5rZXldID0gZmFsc2U7XG4gICAgfSlcbiAgfTtcblxuICAgICBkcmF3KGN0eCl7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ2JsdWUnXG4gICAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1nLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5X3ksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9O1xuXG4gICAgY2hlY2tMYW5kZWRPblBsYXRmb3JtKHlDb3JkKXsgICAgICAgICAgICAgIFxuICAgICAgcmV0dXJuICgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgID4gKHlDb3JkIC0gOCkgKSAmJiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgPD0geUNvcmQgKyA1MCkgKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3BsYXRmb3JtIGhlaWdodFxuICAgICAgfVxuXG4gICAgY2hlY2tXaXRoaW5QbGF0Zm9ybShwbGF0Zm9ybSl7XG4gICAgICBsZXQgcGxhdFdpZHRoID0gcGxhdGZvcm0ud2lkdGggLy9wbGF0Zm9ybSB3aWR0aFxuICAgICAgbGV0IHBsYXRQb3MgPSBwbGF0Zm9ybS5wb3NpdGlvbi54IC8vIHBsYWZvcm0gbGVmdCBzaWRlIHBvc2l0aW9uXG4gICAgICBsZXQgcGxhdEVuZFBvcyA9IHBsYXRQb3MgKyBwbGF0V2lkdGggLy8gcGxhZnRvcm0gcmlnaHQgc2lkZSBwb3NpdGlvblxuICAgICAgbGV0IHBsYXllclBvc3QgPSB0aGlzLmdhbWUucGxheWVyLnBvc2l0aW9uLnggLy9wbGF5ZXJzIHggcG9zaXRpb25cbiAgICAgIHJldHVybiBwbGF5ZXJQb3N0ID4gKHBsYXRQb3MgLSA1MCkgJiYgcGxheWVyUG9zdCA8IHBsYXRFbmRQb3MgO1xuICAgIH1cblxuICAgIGdyYXZpdHkoKXtcbiAgICAgICBpZiAoIXRoaXMub25Hcm91bmQgJiYgIXRoaXMub25QbGF0Zm9ybSkge1xuICAgICAgICB0aGlzLnZlbG9jaXR5X3kgKz0gMy41XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudmVsb2NpdHlfeSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnYW1lT24oKXtcbiAgICAgIGlmKHRoaXMub25Hcm91bmQpe1xuICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgIGlmICghZHQpIHJldHVybjtcbiAgICAgIC8vY29udHJvbGxlciBsb2dpY1xuICAgICAgaWYgKHRoaXMuY2FudmFzLmtleXMgJiYgdGhpcy5jYW52YXMua2V5c1snQXJyb3dMZWZ0J10pIHt0aGlzLnBvc2l0aW9uLnggKz0gLTh9XG4gICAgICBpZiAodGhpcy5jYW52YXMua2V5cyAmJiB0aGlzLmNhbnZhcy5rZXlzWydBcnJvd1JpZ2h0J10pIHt0aGlzLnBvc2l0aW9uLnggKz0gOH1cbiAgICAgIGlmICh0aGlzLmNhbnZhcy5rZXlzICYmIHRoaXMuY2FudmFzLmtleXNbJ0Fycm93RG93biddICYmIHRoaXMub25QbGF0Zm9ybSkge3RoaXMucG9zaXRpb24ueSArPSA1MH1cbiAgICAgIC8vIGlmICh0aGlzLmNhbnZhcy5rZXlzICYmIHRoaXMuY2FudmFzLmtleXNbJ0Fycm93VXAnXSl7XG4gICAgICAvLyAgIHRoaXMuZ2FtZS5wYXVzZWQgPSAhdGhpcy5nYW1lLnBhdXNlZFxuICAgICAgLy8gfVxuICAgICAgLy8gaWYgKHRoaXMuY2FudmFzLmtleXMgJiYgdGhpcy5jYW52YXMua2V5c1snQXJyb3dVcCddKSB7XG4gICAgICAvLyAgIHRoaXMuZ2FtZS5nYW1lT3ZlcigpXG4gICAgICAvLyB9XG4gICAgICAvL2xldmVsIGNvbGxpc3Npb24gbG9naWNcbiAgICAgIC8vaGVpZ2h0IGNoZWNrXG4gICAgICBpZigoIXRoaXMub25Hcm91bmQgJiYgdGhpcy52ZWxvY2l0eV95ID49IDApICYmICgodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQpID49IHRoaXMuZ2FtZUhlaWdodCApKXtcbiAgICAgICAgdGhpcy5vbkdyb3VuZCA9IHRydWVcbiAgICAgICAgdGhpcy52ZWxvY2l0eV95ID0gMFxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSAodGhpcy5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHQpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdnYW1lIG92ZXIgbWFuJylcbiAgICAgICAgdGhpcy5nYW1lLmdhbWVPdmVyKClcbiAgICAgIH1cbiAgICAgIFxuICBcbiAgICAgIC8vd2lkdGggY2hlY2tcbiAgICAgIC8vIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwKSB0aGlzLnBvc2l0aW9uLnggPSAwXG4gICAgICAvLyBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+IHRoaXMuZ2FtZVdpZHRoKSB7XG4gICAgICAvLyAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aFxuICAgICAgLy8gfVxuICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA8IDApIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuZ2FtZVdpZHRoIC0gdGhpcy53aWR0aFxuICAgICAgaWYgKHRoaXMucG9zaXRpb24ueCA+IHRoaXMuZ2FtZVdpZHRoKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IDBcbiAgICAgIH1cbiAgICAgIC8vY2hlY2tpbmcgaWYgcGxheWVyIGlzIG9uIHBsYXRmb3JtIFxuICAgICAgdGhpcy5vblBsYXRmb3JtID0gZmFsc2VcbiAgICAgIHRoaXMucGxhdGZvcm1zLmZvckVhY2gocGxhdGZvcm0gPT4ge1xuICAgICAgICAvLyBpZiAodGhpcy5jaGVja0xhbmRlZE9uUGxhdGZvcm0ocGxhdGZvcm0ucG9zaXRpb24ueSkgJiYgdGhpcy5jaGVja1dpdGhpblBsYXRmb3JtKHBsYXRmb3JtKSAmJiBcbiAgICAgICAgLy8gIXRoaXMub25Hcm91bmQgJiYgdGhpcy52ZWxvY2l0eV95ID49IDEpIHtcbiAgICAgICAgLy8gICB0aGlzLm9uUGxhdGZvcm0gPSB0cnVlXG4gICAgICAgIC8vICAgdGhpcy52ZWxvY2l0eV95ID0gcGxhdGZvcm0udmVsb2NpdHlfeVxuICAgICAgICAvLyB9IFxuICAgICAgICAvLyAtMjAgYm90dG9tIG9mIHBsYXllciBpcyBncmVhdGVyIHRoYW4gdGhlIGJvdHRvbSBvZiBnZW1cbiAgICAgICAgaWYoKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ID49IHBsYXRmb3JtLnBvc2l0aW9uLnkgLSAxMCkgJiYgXG4gICAgICAgICAgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0IDw9IHBsYXRmb3JtLnBvc2l0aW9uLnkgKyAzMCkgJiYgXG4gICAgICAgICAgKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPj0gcGxhdGZvcm0ucG9zaXRpb24ueCkgJiZcbiAgICAgICAgICAodGhpcy5wb3NpdGlvbi54ICA8PSBwbGF0Zm9ybS5wb3NpdGlvbi54ICsgcGxhdGZvcm0ud2lkdGgpICYmIFxuICAgICAgICAgICF0aGlzLm9uR3JvdW5kICYmIHRoaXMudmVsb2NpdHlfeSA+PSAxKXtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IE1hdGguYWJzKHRoaXMuaGVpZ2h0IC0gcGxhdGZvcm0ucG9zaXRpb24ueSk7XG4gICAgICAgICAgICB0aGlzLm9uUGxhdGZvcm0gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eV95ID0gcGxhdGZvcm0udmVsb2NpdHlfeTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc29sZS5sb2coYFBsYXllcjsgJHt0aGlzLnBvc2l0aW9uLnl9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgSGVpZ2h0OyAke3RoaXMuaGVpZ2h0fWApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFBsYXRmb3JtOiAke3BsYXRmb3JtLnBvc2l0aW9uLnl9YCk7XG4gICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgIH0gXG4gICAgICB9KTtcbiAgICAgdGhpcy5ncmF2aXR5KCk7XG4gICAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0UGxhdGZvcm0ge1xuICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgdGhpcy5pbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nUGxhdGZvcm0nKTtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMucG9zaXRpb24gPSAgeyB4OiAxMC8gMiAseToyMDB9XG4gICAgdGhpcy53aWR0aCA9IDYwMDtcbiAgICB0aGlzLmhlaWdodCA9IDIwO1xuICAgIHRoaXMudmVsb2NpdHlfeSA9IDBcbiAgfTtcblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eV95ICwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpOyAgICAgICAgICAgIFxuICB9O1xuICBcbiAgdXBkYXRlKGR0KSB7XG4gICAgdGhpcy52ZWxvY2l0eV95ID0gMTtcbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==