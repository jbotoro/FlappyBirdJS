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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./game/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./game/background.js":
/*!****************************!*\
  !*** ./game/background.js ***!
  \****************************/
/*! exports provided: background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
var canvas = document.getElementById("flappybird");
var context = canvas.getContext("2d");
var gameImage = new Image();
gameImage.src = "../images/sprite.png";
var background = {
  sX: 0,
  sY: 0,
  w: 275,
  h: 226,
  x: 0,
  y: canvas.height - 226,
  draw: function draw() {
    context.drawImage(gameImage, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
    context.drawImage(gameImage, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
  }
};

/***/ }),

/***/ "./game/end.js":
/*!*********************!*\
  !*** ./game/end.js ***!
  \*********************/
/*! exports provided: end */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end", function() { return end; });
var canvas = document.getElementById("flappybird");
var context = canvas.getContext("2d");
var gameImage = new Image();
gameImage.src = "../images/sprite.png";
var end = {
  sX: 175,
  sY: 228,
  w: 225,
  h: 202,
  x: canvas.width / 2 - 225 / 2,
  y: 90,
  draw: function draw() {
    context.drawImage(gameImage, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
  }
};

/***/ }),

/***/ "./game/foreground.js":
/*!****************************!*\
  !*** ./game/foreground.js ***!
  \****************************/
/*! exports provided: foreground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foreground", function() { return foreground; });
var canvas = document.getElementById("flappybird");
var context = canvas.getContext("2d");
var gameImage = new Image();
gameImage.src = "../images/sprite.png";
var foreground = {
  sX: 276,
  sY: 0,
  w: 224,
  h: 112,
  x: 0,
  y: canvas.height - 112,
  dx: 2,
  draw: function draw() {
    context.drawImage(gameImage, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
    context.drawImage(gameImage, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
  },
  update: function update() {
    this.x = (this.x - this.dx) % (this.w / 2);
  }
};

/***/ }),

/***/ "./game/main.js":
/*!**********************!*\
  !*** ./game/main.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background.js */ "./game/background.js");
/* harmony import */ var _foreground_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foreground.js */ "./game/foreground.js");
/* harmony import */ var _start_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start.js */ "./game/start.js");
/* harmony import */ var _end_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./end.js */ "./game/end.js");




var canvas = document.getElementById("flappybird");
var context = canvas.getContext("2d");
var gameImage = new Image();
gameImage.src = "../images/sprite.png";
document.addEventListener("click", function (e) {
  switch (state.current) {
    case state.start:
      state.current = state.game;
      fallingAudio.play();
      break;

    case state.game:
      bird.flap();
      flapAudio.play();
      break;

    case state.end:
      var rec = canvas.getBoundingClientRect();
      var click = e.clientX - rec.left;
      var clickY = e.clientY - rec.top;

      if (click >= startButton.x && click <= startButton.x + startButton.w && clickY >= startButton.y && clickY <= startButton.y + startButton.h) {
        pipes.reset();
        bird.speedReset();
        score.reset();
        state.current = state.start;
      }

      break;
  }
});
var state = {
  current: 0,
  start: 0,
  game: 1,
  end: 2
};
var frames = 0;
var startButton = {
  x: 120,
  y: 263,
  w: 83,
  h: 29
};
var flapAudio = new Audio();
flapAudio.src = '../audio/sfx_flap.wav';
var scoreAudio = new Audio();
scoreAudio.src = '../audio/sfx_point.wav';
var deathAudio = new Audio();
deathAudio.src = '../audio/sfx_die.wav';
var hitAudio = new Audio();
hitAudio.src = '../audio/sfx_hit.wav';
var fallingAudio = new Audio();
fallingAudio.src = '../audio/sfx_swooshing.wav';
var DEGREE = Math.PI / 180; //  pipes

var pipes = {
  position: [],
  top: {
    sX: 553,
    sY: 0
  },
  bottom: {
    sX: 502,
    sY: 0
  },
  h: 400,
  w: 53,
  gap: 85,
  maxY: -150,
  dx: 2,
  draw: function draw() {
    for (var i = 0; i < this.position.length; i++) {
      var pos = this.position[i];
      var topYPos = pos.y;
      var botYPos = pos.y + this.h + this.gap;
      context.drawImage(gameImage, this.top.sX, this.top.sY, this.w, this.h, pos.x, topYPos, this.w, this.h);
      context.drawImage(gameImage, this.bottom.sX, this.bottom.sY, this.w, this.h, pos.x, botYPos, this.w, this.h);
    }
  },
  update: function update() {
    if (state.current !== state.game) return;

    if (frames % 100 === 0) {
      this.position.push({
        x: canvas.width,
        y: this.maxY * (Math.random() + 1)
      });
    }

    for (var i = 0; i < this.position.length; i++) {
      var pos = this.position[i];
      var bottompipePos = pos.y + this.h + this.gap;

      if (bird.x + bird.radius > pos.x && bird.x - bird.radius < pos.x + this.w && bird.y + bird.radius > pos.y && bird.y - bird.radius < pos.y + this.h) {
        state.current = state.end;
        hitAudio.play();
      }

      if (bird.x + bird.radius > pos.x && bird.x - bird.radius < pos.x + this.w && bird.y + bird.radius > bottompipePos && bird.y - bird.radius < bottompipePos + this.h) {
        state.current = state.end;
        hitAudio.play();
      }

      if (pos.x + this.w <= 0) {
        this.position.shift();
        score.value += 1;
        scoreAudio.play();
        score.best = Math.max(score.value, score.best);
        localStorage.setItem("best", score.best);
      }

      pos.x -= this.dx;
    }
  },
  reset: function reset() {
    this.position = [];
  }
}; // bird

var bird = {
  animation: [{
    sX: 276,
    sY: 112
  }, {
    sX: 276,
    sY: 139
  }, {
    sX: 276,
    sY: 164
  }, {
    sX: 276,
    sY: 139
  }],
  x: 50,
  y: 150,
  w: 34,
  h: 26,
  frame: 0,
  gravity: 0.25,
  jump: 4.6,
  speed: 0,
  rotation: 0,
  radius: 12,
  draw: function draw() {
    var flappy = this.animation[this.frame];
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.drawImage(gameImage, flappy.sX, flappy.sY, this.w, this.h, -this.w / 2, -this.h / 2, this.w, this.h);
    context.restore();
  },
  flap: function flap() {
    this.speed = -this.jump;
  },
  update: function update() {
    this.period = state.current === state.start ? 10 : 5;
    this.frame += frames % this.period === 0 ? 1 : 0;
    this.frame = this.frame % this.animation.length;

    if (state.current === state.start) {
      this.y = 150;
      this.rotation = 0 * DEGREE;
    } else {
      this.speed += this.gravity;
      this.y += this.speed;

      if (this.y + this.h / 2 >= canvas.height - _foreground_js__WEBPACK_IMPORTED_MODULE_1__["foreground"].h) {
        this.y = canvas.height - _foreground_js__WEBPACK_IMPORTED_MODULE_1__["foreground"].h - this.h / 2;

        if (state.current === state.game) {
          state.current = state.end;
          deathAudio.play();
        }
      }

      if (this.speed >= this.jump) {
        this.rotation = 90 * DEGREE;
        this.frame = 1;
      } else {
        this.rotation = -25 * DEGREE;
      }
    }
  },
  speedReset: function speedReset() {
    this.speed = 0;
  }
};
var score = {
  best: parseInt(localStorage.getItem("best")) || 0,
  value: 0,
  draw: function draw() {
    context.fillStyle = '#FFF';
    context.strokeStyle = "#000";

    if (state.current === state.game) {
      context.lineWidth = 2;
      context.font = "35px Teko";
      context.fillText(this.value, canvas.width / 2, 50);
      context.strokeText(this.value, canvas.width / 2, 50);
    } else if (state.current === state.end) {
      context.font = "25px Teko";
      context.fillText(this.value, 225, 186);
      context.strokeText(this.value, 225, 186);
      context.fillText(this.best, 225, 228);
      context.strokeText(this.best, 225, 228);
    }
  },
  reset: function reset() {
    this.value = 0;
  }
};

function draw() {
  context.fillStyle = "#70c5ce";
  context.fillRect(0, 0, canvas.width, canvas.height);
  _background_js__WEBPACK_IMPORTED_MODULE_0__["background"].draw();
  pipes.draw();
  _foreground_js__WEBPACK_IMPORTED_MODULE_1__["foreground"].draw();
  bird.draw();
  score.draw();

  if (state.current === state.start) {
    _start_js__WEBPACK_IMPORTED_MODULE_2__["start"].draw();
  }

  if (state.current === state.end) {
    _end_js__WEBPACK_IMPORTED_MODULE_3__["end"].draw();
  }
}

function update() {
  bird.update();

  if (state.current === state.game) {
    _foreground_js__WEBPACK_IMPORTED_MODULE_1__["foreground"].update();
  }

  pipes.update();
}

function loop() {
  update();
  draw();
  frames++;
  requestAnimationFrame(loop);
}

loop();

/***/ }),

/***/ "./game/start.js":
/*!***********************!*\
  !*** ./game/start.js ***!
  \***********************/
/*! exports provided: start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
var canvas = document.getElementById("flappybird");
var context = canvas.getContext("2d");
var gameImage = new Image();
gameImage.src = "../images/sprite.png";
var start = {
  sX: 0,
  sY: 228,
  w: 173,
  h: 152,
  x: canvas.width / 2 - 173 / 2,
  y: 80,
  draw: function draw() {
    context.drawImage(gameImage, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
  }
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map