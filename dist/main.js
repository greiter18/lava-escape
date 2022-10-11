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
      this.paused = true;
      this.sound.play(); // console.log('mute-----------',this.mute)

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
        this.position.y += 15;
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
          _this2.position.y = platform.position.y - 5;
          _this2.onPlatform = true;
          _this2.velocity_y = platform.velocity_y;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2VtLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2xhdmEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcGxhdGZvcm1zLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL3BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zdGFydFBsYXRmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsIkdBTUVfV0lEVEgiLCJHQU1FX0hFSUdIVCIsInNjb3JlIiwibXV0ZSIsImNsb2NrIiwic2V0SW50ZXJ2YWwiLCJnYW1lIiwiR2FtZSIsImxhc3RUaW1lIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImhpZ2hzY29yZSIsImlubmVySFRNTCIsImdldEl0ZW0iLCJnYW1lTG9vcCIsInRpbWVzdGFtcCIsImR0IiwiY2xlYXJSZWN0IiwidXBkYXRlIiwiZHJhdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInN0YXJ0Iiwic3R5bGUiLCJkaXNwbGF5IiwibXV0ZUJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJzb3VuZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsIm11dGVkIiwiZ2FtZVdpZHRoIiwiZ2FtZUhlaWdodCIsInBsYXRmb3JtcyIsIlN0YXJ0UGxhdGZvcm0iLCJwbGF5ZXIiLCJQbGF5ZXIiLCJwYXVzZWQiLCJnZW1zIiwiR2VtIiwicmVzdGFydEdhbWUiLCJiaW5kIiwic291bmQiLCJsYXZhIiwiTGF2YSIsInBvc2l0aW9uIiwieSIsInB1c2giLCJQbGF0Zm9ybSIsInNoaWZ0IiwicGxheWVyX3Njb3JlIiwiZGVsdGFUaW1lIiwiZm9yRWFjaCIsIm9iamVjdCIsInVwZGF0ZVNjb3JlIiwiYWRkUGxhdGZvcm0iLCJhZGRHZW0iLCJwbGF5IiwiY2xlYXJJbnRlcnZhbCIsImZpbmFsU2NvcmUiLCJyZXN0YXJ0QnV0dG9uIiwieGNvcmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ5Y29yZCIsImltZyIsIngiLCJkcmF3SW1hZ2UiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJwbGF5ZXJZIiwicGxheVdpZHRoIiwicGxheVBvcyIsInBsYXlFbmRQb3MiLCJnZW1Qb3N0IiwicmVtb3ZlR2VtIiwieENvcmRzIiwicGxhdFNpemVzIiwiY29yZCIsIm1peCIsInZlbG9jaXR5X3kiLCJzdGFydFBsYXRmb3JtIiwib25Hcm91bmQiLCJvblBsYXRmb3JtIiwiZSIsImtleXMiLCJrZXkiLCJmaWxsU3R5bGUiLCJ5Q29yZCIsInBsYXRmb3JtIiwicGxhdFdpZHRoIiwicGxhdFBvcyIsInBsYXRFbmRQb3MiLCJwbGF5ZXJQb3N0IiwiZ2FtZU92ZXIiLCJncmF2aXR5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5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Q1QsV0FBS29FLFVBQUwsR0FBa0IsQ0FBbEI7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkgsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCJcbmltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIlxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbmxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZVNjcmVlbicpO1xubGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5jYW52YXMuaGVpZ2h0ID0gNzAwO1xuY2FudmFzLndpZHRoID0gNTAwO1xuY29uc3QgR0FNRV9XSURUSCA9IDUwMDtcbmNvbnN0IEdBTUVfSEVJR0hUID0gNzAwO1xubGV0IHNjb3JlID0gMDtcbmxldCBtdXRlID0gZmFsc2U7XG5sZXQgY2xvY2sgPSBzZXRJbnRlcnZhbCgoKSA9PiBzY29yZSArPSAxMCAsIDc1MClcbmxldCBnYW1lID0gbmV3IEdhbWUoR0FNRV9XSURUSCwgR0FNRV9IRUlHSFQsIGNhbnZhcywgc2NvcmUsIGNsb2NrICwgbXV0ZSlcbmxldCBsYXN0VGltZSA9IDA7XG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaGlnaFNjb3JlJywgMTUwMCk7XG5oaWdoc2NvcmUuaW5uZXJIVE1MID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hTY29yZScpXG5cblxuIGZ1bmN0aW9uIGdhbWVMb29wKHRpbWVzdGFtcCl7XG4gIGxldCBkdCA9IHRpbWVzdGFtcCAtIGxhc3RUaW1lO1xuICBsYXN0VGltZSA9IHRpbWVzdGFtcDtcblxuICBjdHguY2xlYXJSZWN0KDAsIDAsIEdBTUVfV0lEVEgsIEdBTUVfSEVJR0hUKTtcbiAgZ2FtZS51cGRhdGUoZHQpO1xuICBnYW1lLmRyYXcoY3R4KVxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufVxuXG4gIGxldCBzdGFydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuX21vZGFsJyk7XG4gIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgZ2FtZUxvb3AoKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcGVuX21vZGFsJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZVNjcmVlbicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9KVxuXG4gIGxldCBtdXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm11dGVCdXR0b24nKVxuICBtdXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG11dGVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnY2xpY2tlZE11dGUnKVxuICAgIGxldCBzb3VuZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc291bmQnKVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzb3VuZHMubGVuZ3RoOyBpKyspe1xuICAgICAgc291bmRzW2ldLm11dGVkID09PSB0cnVlID8gc291bmRzW2ldLm11dGVkID0gZmFsc2UgOiBzb3VuZHNbaV0ubXV0ZWQgPSB0cnVlICBcbiAgICB9XG4gIH0pXG59KVxuXG4iLCJpbXBvcnQgUGxhdGZvcm0gZnJvbSBcIi4vcGxhdGZvcm1zXCI7XG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IEdlbSBmcm9tIFwiLi9nZW1cIjtcbmltcG9ydCBTdGFydFBsYXRmb3JtIGZyb20gXCIuL3N0YXJ0UGxhdGZvcm1cIlxuaW1wb3J0IExhdmEgZnJvbSBcIi4vbGF2YVwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihnYW1lV2lkdGgsIGdhbWVIZWlnaHQsY2FudmFzLHNjb3JlLCBjbG9jaywgbXV0ZSl7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gICAgdGhpcy5nYW1lV2lkdGggPSBnYW1lV2lkdGg7XG4gICAgdGhpcy5nYW1lSGVpZ2h0ID0gZ2FtZUhlaWdodDtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLmNsb2NrID0gY2xvY2s7XG4gICAgdGhpcy5wbGF0Zm9ybXMgPSBbbmV3IFN0YXJ0UGxhdGZvcm0odGhpcyldO1xuICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzKTtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2VtcyA9IFtuZXcgR2VtKHRoaXMpXTtcbiAgICB0aGlzLm11dGUgPSBtdXRlO1xuICAgIHRoaXMucmVzdGFydEdhbWUgPSB0aGlzLnJlc3RhcnRHYW1lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JlYW0nKTtcbiAgICB0aGlzLmxhdmEgPSBuZXcgTGF2YSh0aGlzKTtcbiAgICBcbiAgfVxuXG5cblxuICBhZGRQbGF0Zm9ybSgpe1xuICAgIGlmICh0aGlzLnBsYXRmb3Jtc1t0aGlzLnBsYXRmb3Jtcy5sZW5ndGggLSAxXS5wb3NpdGlvbi55ID49IDEwMCl7XG4gICAgdGhpcy5wbGF0Zm9ybXMucHVzaChuZXcgUGxhdGZvcm0odGhpcykpO1xuICB9XG4gICAgaWYgKHRoaXMucGxhdGZvcm1zLmxlbmd0aCA+IDUwKXtcbiAgICAgIHRoaXMucGxhdGZvcm1zLnNoaWZ0KCk7XG4gICAgfVxuICB9XG5cbiAgYWRkR2VtKCl7XG4gICAgaWYodGhpcy5nZW1zLmxlbmd0aCA8IDEpXG4gICAgICB0aGlzLmdlbXMucHVzaChuZXcgR2VtKHRoaXMpKVxuICB9XG5cbiAgdXBkYXRlU2NvcmUoKXtcbiAgICBjb25zdCBwbGF5ZXJfc2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NvcmUnKTtcbiAgICBpZighdGhpcy5wYXVzZWQpe1xuICAgICAgdGhpcy5zY29yZSArPSAxXG4gICAgfVxuICAgIHBsYXllcl9zY29yZS5pbm5lckhUTUwgPSB0aGlzLnNjb3JlXG4gIH1cblxuICB1cGRhdGUoZGVsdGFUaW1lKXtcbiAgICBpZighdGhpcy5wYXVzZWQpe1xuICAgICAgWy4uLnRoaXMuZ2VtcywuLi50aGlzLnBsYXRmb3Jtcyx0aGlzLnBsYXllcl0uZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LnVwZGF0ZShkZWx0YVRpbWUpKTtcbiAgICAgIHRoaXMudXBkYXRlU2NvcmUoKTtcbiAgICAgIHRoaXMuYWRkUGxhdGZvcm0oKTtcbiAgICAgIHRoaXMuYWRkR2VtKCk7XG4gICAgfVxuICB9XG5cbiAgZHJhdyhjdHgpe1xuICAgIGlmKCF0aGlzLnBhdXNlZCl7XG4gICAgICBbLi4udGhpcy5nZW1zLC4uLnRoaXMucGxhdGZvcm1zLHRoaXMucGxheWVyLHRoaXMubGF2YV0uZm9yRWFjaChvYmplY3QgPT4gb2JqZWN0LmRyYXcoY3R4KSlcbiAgICB9XG4gIH1cblxuICBnYW1lT3Zlcigpe1xuICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMuc291bmQucGxheSgpXG4gICAgLy8gY29uc29sZS5sb2coJ211dGUtLS0tLS0tLS0tLScsdGhpcy5tdXRlKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZV9tb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lU2NyZWVuJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvLyBjb25zb2xlLmxvZygnY2xvY2stLS0tLS0tLS0tLS0tLS0nLHRoaXMuY2xvY2spXG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNsb2NrKVxuICAgIGNvbnN0IGZpbmFsU2NvcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZW5kU2NvcmUnKVxuICAgIC8vIGNvbnNvbGUubG9nKCdzY29yZS0tLS0tLS0tLS0tLS0tLScsdGhpcy5zY29yZSlcbiAgICBmaW5hbFNjb3JlLmlubmVySFRNTCA9ICdTY29yZSAgOiAnICsgdGhpcy5zY29yZTtcbiAgICBpZih0aGlzLnNjb3JlID4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpZ2hTY29yZScpKXtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdoaWdoU2NvcmUnLCB0aGlzLnNjb3JlKVxuICAgICAgaGlnaHNjb3JlLmlubmVySFRNTCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaWdoU2NvcmUnKVxuICAgIH1cbiAgICBsZXQgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN0YXJ0QnV0dG9uJylcbiAgICByZXN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0aGlzLnJlc3RhcnRHYW1lKVxuICB9XG5cbiAgcmVzdGFydEdhbWUoKXtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMucGxhdGZvcm1zID0gW25ldyBTdGFydFBsYXRmb3JtKHRoaXMpXTtcbiAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcyk7XG4gICAgdGhpcy5nZW1zID0gW25ldyBHZW0odGhpcyldO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZV9tb2RhbCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVTY3JlZW4nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxufSIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2Vte1xuICBjb25zdHJ1Y3RvcihnYW1lKXtcbiAgICB0aGlzLnNvdW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbVNvdW5kJylcbiAgICBsZXQgeGNvcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA0NTApICsgMjU7XG4gICAgbGV0IHljb3JkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNTAwKSArIDEwMDtcbiAgICB0aGlzLmhlaWdodCA9IDI1O1xuICAgIHRoaXMud2lkdGggPSAyNTtcbiAgICB0aGlzLmltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW0nKTtcbiAgICB0aGlzLnBvc2l0aW9uID0ge3g6IHhjb3JkLCB5OiB5Y29yZH1cbiAgICB0aGlzLnBsYXllciA9IGdhbWUucGxheWVyXG4gICAgdGhpcy5nYW1lID0gZ2FtZVxuICAgIHRoaXMuc2NvcmUgPSBnYW1lLnNjb3JlXG4gICAgdGhpcy5tdXRlID0gZ2FtZS5tdXRlXG4gIH1cblxuICBkcmF3KGN0eCkge1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgICAgIFxuICB9O1xuXG4gcmVtb3ZlR2VtKCl7XG4gIGxldCBpbmRleCA9IHRoaXMuZ2FtZS5nZW1zLmluZGV4T2YodGhpcylcbiAgdGhpcy5nYW1lLmdlbXMuc3BsaWNlKGluZGV4LDEpXG4gIHRoaXMuZ2FtZS5zY29yZSArPSAyMDBcbiAgdGhpcy5zb3VuZC5wbGF5KClcbiB9IFxuXG4vL1BsYXllciBnZW0gY29sbGlzc2lvbiBsb2dpY1xuICBwbGF5ZXJHZW1IZWlnaHQocGxheWVyWSl7XG4gICAgLy8gY29uc29sZS5sb2coJ2hlaWdodC0tLS0tLS0tLS0tLS0tJyx0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodClcbiAgICAvLyByZXR1cm4gKCh5Q29yZCAtIDgpID4gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgICYmIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0KVxuICAgIC8vIHJldHVybiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgPiAocGxheWVyICsgNjApICYmIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0KVxuICAgIHJldHVybiAoKCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCApIDw9IChwbGF5ZXJZKSkgJiYgKCAocGxheWVyWSArIDUwKSA+PSB0aGlzLnBvc2l0aW9uLnkpKVxuICAgIC8vIHJldHVybiAodGhpcy5wb3NpdGlvbi55KVxuICB9XG4gIHBsYXllckdlbXdpZHRoKHBsYXllcil7XG4gICAgLy8gZGVidWdnZXJcbiAgICBsZXQgcGxheVdpZHRoID0gcGxheWVyLndpZHRoIC8vIHBsYXllciB3aWR0aFxuICAgIGxldCBwbGF5UG9zID0gcGxheWVyLnBvc2l0aW9uLnggLy8gcGxheWVyIGxlZnQgc2lkZVxuICAgIGxldCBwbGF5RW5kUG9zID0gcGxheVdpZHRoICsgcGxheVBvcyAvLyBwbGF5ZXIgcmlnaHQgc2lkZVxuICAgIGxldCBnZW1Qb3N0ID0gdGhpcy5wb3NpdGlvbi54IC8vIGdlbSB4IHN0YXJ0IHBvc2l0aW9uXG4gICAgcmV0dXJuIHBsYXlFbmRQb3MgPiBnZW1Qb3N0ICYmIHBsYXlQb3MgPCBnZW1Qb3N0ICsgdGhpcy53aWR0aFxuICB9XG5cbiAgdXBkYXRlKGN0eCkgeyBcbiAgICAvLyBpZih0aGlzLnBsYXllckdlbUhlaWdodCh0aGlzLnBsYXllci5wb3NpdGlvbi55KSAmJiB0aGlzLnBsYXllckdlbXdpZHRoKHRoaXMucGxheWVyKSkge1xuICAgICAgaWYoKHRoaXMucGxheWVyLnBvc2l0aW9uLnkgKyB0aGlzLnBsYXllci5oZWlnaHQgPj0gdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQpICYmIC8vIGJvdHRvbSBvZiBwbGF5ZXIgaXMgZ3JlYXRlciB0aGFuIHRoZSBib3R0b20gb2YgZ2VtXG4gICAgICAgICh0aGlzLnBsYXllci5wb3NpdGlvbi55IDw9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0KSAmJiBcbiAgICAgICAgKHRoaXMucGxheWVyLnBvc2l0aW9uLnggKyB0aGlzLnBsYXllci53aWR0aCA+PSB0aGlzLnBvc2l0aW9uLngpICYmXG4gICAgICAgICh0aGlzLnBsYXllci5wb3NpdGlvbi54ICA8PSB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoKVxuICAgICAgKXtcbiAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICB0aGlzLnJlbW92ZUdlbSgpfVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF2YSB7XG4gIGNvbnN0cnVjdG9yKGdhbWUpe1xuICAgIHRoaXMud2lkdGggPSA1MDA7XG4gICAgdGhpcy5oZWlnaHQgPSAzMDtcbiAgICB0aGlzLmltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXZhJylcbiAgfVxuXG4gICBkcmF3KGN0eCkge1xuICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsMCwgNjgwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7ICAgICBcbiAgfTtcbn0iLCJjb25zdCB4Q29yZHMgPSBbNDAwLDIwMCwyMF1cbmNvbnN0IHBsYXRTaXplcyA9WzE1MCwgMTAwLCA3NV1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm0ge1xuICBjb25zdHJ1Y3RvcihnYW1lKSB7XG4gICAgbGV0IGNvcmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKSArIDA7XG4gICAgbGV0IG1peCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpICsgMDtcbiAgICB0aGlzLmltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWdQbGF0Zm9ybScpO1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5wb3NpdGlvbiA9ICB7IHg6IHhDb3Jkc1tjb3JkXSAseToxMH1cbiAgICB0aGlzLndpZHRoID0gcGxhdFNpemVzW21peF07XG4gICAgdGhpcy5oZWlnaHQgPSAyMDtcbiAgICB0aGlzLnZlbG9jaXR5X3kgPSAwXG4gIH07XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuaW1nLHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMudmVsb2NpdHlfeSAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgICAgICAgICAgICBcbiAgfTtcbiAgXG4gIHVwZGF0ZShkdCkge1xuICAgIHRoaXMudmVsb2NpdHlfeSA9IDE7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIHRoaXMuaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZ1BsYXllcicpO1xuICAgIHRoaXMuc291bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanVtcCcpXG4gICAgdGhpcy5wbGF0Zm9ybXMgPSBnYW1lLnBsYXRmb3Jtc1xuICAgIHRoaXMuc3RhcnRQbGF0Zm9ybSA9IGdhbWUuc3RhcnRQbGF0Zm9ybVxuICAgIHRoaXMuY2FudmFzID0gZ2FtZS5jYW52YXNcbiAgICB0aGlzLm11dGUgPSBnYW1lLm11dGVcbiAgICB0aGlzLndpZHRoID0gNTA7XG4gICAgdGhpcy5oZWlnaHQgPSA2MDtcbiAgICB0aGlzLmdhbWVXaWR0aCA9IGdhbWUuZ2FtZVdpZHRoO1xuICAgIHRoaXMuZ2FtZUhlaWdodCA9IGdhbWUuZ2FtZUhlaWdodDtcbiAgICB0aGlzLm9uR3JvdW5kID0gZmFsc2VcbiAgICB0aGlzLm9uUGxhdGZvcm0gPSBmYWxzZVxuICAgIHRoaXMudmVsb2NpdHlfeSA9IDA7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgIHg6IGdhbWUuZ2FtZVdpZHRoIC8gMiAtIHRoaXMud2lkdGggLyAyLFxuICAgICAgLy8geTogZ2FtZS5nYW1lSGVpZ2h0IC0gdGhpcy5oZWlnaHR9O1xuICAgICAgeTogMjB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgIHRoaXMuY2FudmFzLmtleXMgPSAodGhpcy5jYW52YXMua2V5cyB8fCBbXSk7XG4gICAgICB0aGlzLmNhbnZhcy5rZXlzW2Uua2V5XSA9IHRydWU7XG4gICAgICBpZih0aGlzLmNhbnZhcy5rZXlzWycgJ10gJiYgKHRoaXMub25QbGF0Zm9ybSB8fCB0aGlzLm9uR3JvdW5kKSl7XG4gICAgICAgIHRoaXMudmVsb2NpdHlfeSAtPSA0MFxuICAgICAgICB0aGlzLm9uR3JvdW5kID0gZmFsc2VcbiAgICAgICAgdGhpcy5vblBsYXRmb3JtID0gZmFsc2VcbiAgICAgICAgdGhpcy5zb3VuZC5wbGF5KClcbiAgICAgIH1cbiAgICB9KVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB7XG4gICAgICB0aGlzLmNhbnZhcy5rZXlzW2Uua2V5XSA9IGZhbHNlO1xuICAgIH0pXG4gIH07XG5cbiAgICAgZHJhdyhjdHgpe1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdibHVlJ1xuICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZywgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy52ZWxvY2l0eV95LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgfTtcblxuICAgIGNoZWNrTGFuZGVkT25QbGF0Zm9ybSh5Q29yZCl7ICAgICAgICAgICAgICBcbiAgICAgIHJldHVybiAoKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0ICA+ICh5Q29yZCAtIDgpICkgJiYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0IDw9IHlDb3JkICsgNTApICkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhdGZvcm0gaGVpZ2h0XG4gICAgICB9XG5cbiAgICBjaGVja1dpdGhpblBsYXRmb3JtKHBsYXRmb3JtKXtcbiAgICAgIGxldCBwbGF0V2lkdGggPSBwbGF0Zm9ybS53aWR0aCAvL3BsYXRmb3JtIHdpZHRoXG4gICAgICBsZXQgcGxhdFBvcyA9IHBsYXRmb3JtLnBvc2l0aW9uLnggLy8gcGxhZm9ybSBsZWZ0IHNpZGUgcG9zaXRpb25cbiAgICAgIGxldCBwbGF0RW5kUG9zID0gcGxhdFBvcyArIHBsYXRXaWR0aCAvLyBwbGFmdG9ybSByaWdodCBzaWRlIHBvc2l0aW9uXG4gICAgICBsZXQgcGxheWVyUG9zdCA9IHRoaXMuZ2FtZS5wbGF5ZXIucG9zaXRpb24ueCAvL3BsYXllcnMgeCBwb3NpdGlvblxuICAgICAgcmV0dXJuIHBsYXllclBvc3QgPiAocGxhdFBvcyAtIDUwKSAmJiBwbGF5ZXJQb3N0IDwgcGxhdEVuZFBvcyA7XG4gICAgfVxuXG4gICAgZ3Jhdml0eSgpe1xuICAgICAgIGlmICghdGhpcy5vbkdyb3VuZCAmJiAhdGhpcy5vblBsYXRmb3JtKSB7XG4gICAgICAgIHRoaXMudmVsb2NpdHlfeSArPSAzLjVcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy52ZWxvY2l0eV95KVxuICAgICAgfVxuICAgIH1cblxuICAgIGdhbWVPbigpe1xuICAgICAgaWYodGhpcy5vbkdyb3VuZCl7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIoKVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICBpZiAoIWR0KSByZXR1cm47XG4gICAgICAvL2NvbnRyb2xsZXIgbG9naWNcbiAgICAgIGlmICh0aGlzLmNhbnZhcy5rZXlzICYmIHRoaXMuY2FudmFzLmtleXNbJ0Fycm93TGVmdCddKSB7dGhpcy5wb3NpdGlvbi54ICs9IC04fVxuICAgICAgaWYgKHRoaXMuY2FudmFzLmtleXMgJiYgdGhpcy5jYW52YXMua2V5c1snQXJyb3dSaWdodCddKSB7dGhpcy5wb3NpdGlvbi54ICs9IDh9XG4gICAgICBpZiAodGhpcy5jYW52YXMua2V5cyAmJiB0aGlzLmNhbnZhcy5rZXlzWydBcnJvd0Rvd24nXSAmJiB0aGlzLm9uUGxhdGZvcm0pIHt0aGlzLnBvc2l0aW9uLnkgKz0gMTV9XG4gICAgICAvLyBpZiAodGhpcy5jYW52YXMua2V5cyAmJiB0aGlzLmNhbnZhcy5rZXlzWydBcnJvd1VwJ10pe1xuICAgICAgLy8gICB0aGlzLmdhbWUucGF1c2VkID0gIXRoaXMuZ2FtZS5wYXVzZWRcbiAgICAgIC8vIH1cbiAgICAgIC8vIGlmICh0aGlzLmNhbnZhcy5rZXlzICYmIHRoaXMuY2FudmFzLmtleXNbJ0Fycm93VXAnXSkge1xuICAgICAgLy8gICB0aGlzLmdhbWUuZ2FtZU92ZXIoKVxuICAgICAgLy8gfVxuICAgICAgLy9sZXZlbCBjb2xsaXNzaW9uIGxvZ2ljXG4gICAgICAvL2hlaWdodCBjaGVja1xuICAgICAgaWYoKCF0aGlzLm9uR3JvdW5kICYmIHRoaXMudmVsb2NpdHlfeSA+PSAwKSAmJiAoKHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0KSA+PSB0aGlzLmdhbWVIZWlnaHQgKSl7XG4gICAgICAgIHRoaXMub25Hcm91bmQgPSB0cnVlXG4gICAgICAgIHRoaXMudmVsb2NpdHlfeSA9IDBcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gKHRoaXMuZ2FtZUhlaWdodCAtIHRoaXMuaGVpZ2h0KVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZ2FtZSBvdmVyIG1hbicpXG4gICAgICAgIHRoaXMuZ2FtZS5nYW1lT3ZlcigpXG4gICAgICB9XG4gICAgICBcbiAgXG4gICAgICAvL3dpZHRoIGNoZWNrXG4gICAgICAvLyBpZiAodGhpcy5wb3NpdGlvbi54IDwgMCkgdGhpcy5wb3NpdGlvbi54ID0gMFxuICAgICAgLy8gaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggPiB0aGlzLmdhbWVXaWR0aCkge1xuICAgICAgLy8gICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmdhbWVXaWR0aCAtIHRoaXMud2lkdGhcbiAgICAgIC8vIH1cbiAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPCAwKSB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmdhbWVXaWR0aCAtIHRoaXMud2lkdGhcbiAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnggPiB0aGlzLmdhbWVXaWR0aCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSAwXG4gICAgICB9XG4gICAgICAvL2NoZWNraW5nIGlmIHBsYXllciBpcyBvbiBwbGF0Zm9ybSBcbiAgICAgIHRoaXMub25QbGF0Zm9ybSA9IGZhbHNlXG4gICAgICB0aGlzLnBsYXRmb3Jtcy5mb3JFYWNoKHBsYXRmb3JtID0+IHtcbiAgICAgICAgLy8gaWYgKHRoaXMuY2hlY2tMYW5kZWRPblBsYXRmb3JtKHBsYXRmb3JtLnBvc2l0aW9uLnkpICYmIHRoaXMuY2hlY2tXaXRoaW5QbGF0Zm9ybShwbGF0Zm9ybSkgJiYgXG4gICAgICAgIC8vICF0aGlzLm9uR3JvdW5kICYmIHRoaXMudmVsb2NpdHlfeSA+PSAxKSB7XG4gICAgICAgIC8vICAgdGhpcy5vblBsYXRmb3JtID0gdHJ1ZVxuICAgICAgICAvLyAgIHRoaXMudmVsb2NpdHlfeSA9IHBsYXRmb3JtLnZlbG9jaXR5X3lcbiAgICAgICAgLy8gfSBcbiAgICAgICAgLy8gLTIwIGJvdHRvbSBvZiBwbGF5ZXIgaXMgZ3JlYXRlciB0aGFuIHRoZSBib3R0b20gb2YgZ2VtXG4gICAgICAgIGlmKCh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCA+PSBwbGF0Zm9ybS5wb3NpdGlvbiAueSAtIDEwKSAmJiBcbiAgICAgICAgICAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5oZWlnaHQgPD0gcGxhdGZvcm0ucG9zaXRpb24ueSArIDMwKSAmJiBcbiAgICAgICAgICAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCA+PSBwbGF0Zm9ybS5wb3NpdGlvbi54KSAmJlxuICAgICAgICAgICh0aGlzLnBvc2l0aW9uLnggIDw9IHBsYXRmb3JtLnBvc2l0aW9uLnggKyBwbGF0Zm9ybS53aWR0aCkgJiYgXG4gICAgICAgICAgIXRoaXMub25Hcm91bmQgJiYgdGhpcy52ZWxvY2l0eV95ID49IDEpe1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gcGxhdGZvcm0ucG9zaXRpb24ueSAtIDU7XG4gICAgICAgICAgICB0aGlzLm9uUGxhdGZvcm0gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eV95ID0gcGxhdGZvcm0udmVsb2NpdHlfeTtcbiAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgfSBcbiAgICAgIH0pO1xuICAgICB0aGlzLmdyYXZpdHkoKTtcbiAgICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhcnRQbGF0Zm9ybSB7XG4gIGNvbnN0cnVjdG9yKGdhbWUpIHtcbiAgICB0aGlzLmltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWdQbGF0Zm9ybScpO1xuICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgdGhpcy5wb3NpdGlvbiA9ICB7IHg6IDEwLyAyICx5OjIwMH1cbiAgICB0aGlzLndpZHRoID0gNjAwO1xuICAgIHRoaXMuaGVpZ2h0ID0gMjA7XG4gICAgdGhpcy52ZWxvY2l0eV95ID0gMFxuICB9O1xuXG4gIGRyYXcoY3R4KSB7XG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmltZyx0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnZlbG9jaXR5X3kgLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7ICAgICAgICAgICAgXG4gIH07XG4gIFxuICB1cGRhdGUoZHQpIHtcbiAgICB0aGlzLnZlbG9jaXR5X3kgPSAxO1xuICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9