'use strict';
(() => {
  /**
   * @param {number} id
   * @return {?}
   */
  function require(id) {
    if (cache[id]) {
      return cache[id].exports;
    }
    var e = cache[id] = {
      exports : {}
    };
    return options[id](e, e.exports, require), e.exports;
  }
  var exports;
  var b;
  var options = {
    142 : (eventStr, a, view) => {
      Object.defineProperty(a, "__esModule", {
        value : true
      });
      a.Character = void 0;
      var vroot = view(98);
      /**
       * @return {undefined}
       */
      a.Character = function init() {
        var self = this;
        /** @type {string} */
        this.characterClass = ".donut";
        /** @type {string} */
        this.annotationClass = ".annotation";
        /** @type {number} */
        this.annotationXPos = 50;
        /** @type {number} */
        this.annotationYPos = 320;
        /** @type {boolean} */
        this.isRunning = false;
        /** @type {boolean} */
        this.isJumping = false;
        /** @type {boolean} */
        this.isWin = false;
        /** @type {number} */
        this.characterPosition = 0;
        /**
         * @return {undefined}
         */
        this.run = function() {
          if (false === self.isRunning) {
            self.donut.classList.add("running");
            /** @type {number} */
            self.isRunning = setInterval(function() {
              var LayoutController = self.collide(self.donut, window.terrain.rock);
              if (self.isWin || LayoutController) {
                self.stop();
                self.annotate("Ouch!");
                /** @type {string} */
                self.donut.style.left = "0px";
                /** @type {string} */
                self.characterAnnotation.style.left = self.annotationXPos + "px";
                window.character = new init;
                window.terrain = new vroot.Terrain;
              } else {
                /** @type {number} */
                var height = parseInt(self.getProp("left"));
                /** @type {number} */
                self.characterPosition = height;
                /** @type {number} */
                var h = height + 50;
                if (height >= 1020) {
                  self.stop();
                  /** @type {boolean} */
                  self.isWin = true;
                  /** @type {string} */
                  self.characterAnnotation.style.left = self.annotationXPos + "px";
                  /** @type {string} */
                  self.donut.style.left = "0px";
                  window.character = new init;
                  window.terrain = new vroot.Terrain;
                  setTimeout(function() {
                    self.annotate("Yay!");
                  }, 10);
                } else {
                  /** @type {string} */
                  self.characterAnnotation.style.left = h + 2 + "px";
                  /** @type {string} */
                  self.donut.style.left = height + 2 + "px";
                }
              }
            }, 10);
          }
        };
        /**
         * @return {undefined}
         */
        this.stop = function() {
          if (false !== self.isRunning) {
            clearInterval(self.isRunning);
            /** @type {boolean} */
            self.isRunning = false;
            self.donut.classList.remove("running");
          }
        };
        /**
         * @return {undefined}
         */
        this.jump = function() {
          if (false === self.isJumping) {
            var y;
            var h = window.terrain.rockSize + 90;
            /** @type {number} */
            var x = y = parseInt(self.getProp("bottom"));
            /** @type {boolean} */
            var n = false;
            /** @type {number} */
            self.isJumping = setInterval(function() {
              /** @type {number} */
              var nextY = parseInt(self.donut.style.bottom);
              if (x <= y && y <= x + h && !n) {
                /** @type {number} */
                y = y + 15 >= x + h ? nextY + 2 : nextY + 3;
                /** @type {string} */
                self.donut.style.bottom = y + "px";
                /** @type {string} */
                self.characterAnnotation.style.bottom = y + 160 + "px";
                if (nextY + 2 >= x + h) {
                  /** @type {boolean} */
                  n = true;
                }
              } else {
                if (x < y && n) {
                  /** @type {number} */
                  y = y - 30 >= x ? nextY - 4 : nextY - 3;
                  /** @type {string} */
                  self.characterAnnotation.style.bottom = y + 160 + "px";
                  /** @type {string} */
                  self.donut.style.bottom = y + "px";
                } else {
                  clearInterval(self.isJumping);
                  /** @type {boolean} */
                  self.isJumping = false;
                  /** @type {string} */
                  self.characterAnnotation.style.bottom = x + 160 + "px";
                  /** @type {string} */
                  self.donut.style.bottom = x + "px";
                }
              }
            }, 10);
          }
        };
        /**
         * @param {string} name
         * @return {undefined}
         */
        this.annotate = function(name) {
          /** @type {string} */
          self.characterAnnotation.style.opacity = "1";
          /** @type {string} */
          self.characterAnnotation.querySelector(".annotation-wrapper").innerText = name;
          setTimeout(function() {
            /** @type {string} */
            self.characterAnnotation.style.opacity = "0";
          }, 5e3);
        };
        /**
         * @param {string} prop
         * @return {?}
         */
        this.getProp = function(prop) {
          return getComputedStyle(self.donut).getPropertyValue(prop);
        };
        /**
         * @param {!Element} div1
         * @param {!Element} div2
         * @return {?}
         */
        this.collide = function(div1, div2) {
          var anchorBoundingBoxViewport = div1.getBoundingClientRect();
          var horizonMargin = div2.getBoundingClientRect();
          return !(anchorBoundingBoxViewport.top - 20 > horizonMargin.bottom + 30 || anchorBoundingBoxViewport.right - 20 < horizonMargin.left + 30 || anchorBoundingBoxViewport.bottom - 20 < horizonMargin.top + 30 || anchorBoundingBoxViewport.left - 20 > horizonMargin.right - 50);
        };
        /** @type {(Element|null)} */
        this.donut = document.querySelector(this.characterClass);
        /** @type {(Element|null)} */
        this.characterAnnotation = document.querySelector(this.annotationClass);
      };
    },
    98 : (module, exports) => {
      Object.defineProperty(exports, "__esModule", {
        value : true
      });
      exports.Terrain = void 0;
      /**
       * @return {undefined}
       */
      exports.Terrain = function() {
        /** @type {number} */
        this.rockMinOffset = 270;
        /** @type {number} */
        this.rockMaxOffset = 920;
        /** @type {number} */
        this.minRockSize = 40;
        /** @type {number} */
        this.maxRockSize = 85;
        /** @type {string} */
        this.rockClass = ".rock";
        /** @type {number} */
        this.rockPosition = 0;
        /** @type {number} */
        this.rockSize = 0;
        /**
         * @param {number} y
         * @param {number} value
         * @return {?}
         */
        this.getRandomPosition = function(y, value) {
          return y = Math.ceil(y), value = Math.floor(value), Math.floor(Math.random() * (value - y) + y);
        };
        /** @type {(Element|null)} */
        this.rock = document.querySelector(this.rockClass);
        this.rockPosition = this.getRandomPosition(this.rockMinOffset, this.rockMaxOffset);
        this.rockSize = this.getRandomPosition(this.minRockSize, this.maxRockSize);
        /** @type {string} */
        this.rock.style.left = this.rockPosition.toString() + "px";
        /** @type {string} */
        this.rock.style.width = this.rockSize.toString() + "px";
        /** @type {string} */
        this.rock.style.height = this.rockSize.toString() + "px";
      };
    }
  };
  var cache = {};
  exports = require(98);
  b = require(142);
  document.addEventListener("DOMContentLoaded", function() {
    window.character = new b.Character;
    window.terrain = new exports.Terrain;
    document.addEventListener("keyup", function(apiResponseError) {
      if ("Space" === apiResponseError.code) {
        window.character.jump();
      }
      if ("KeyS" === apiResponseError.code) {
        window.character.stop();
      }
      if ("KeyD" === apiResponseError.code) {
        window.character.run();
      }
    });
  });
})();
