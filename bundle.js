/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Boundary.js":
/*!*************************!*\
  !*** ./src/Boundary.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Boundary\": () => (/* binding */ Boundary)\n/* harmony export */ });\n/* harmony import */ var _Vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector.js */ \"./src/Vector.js\");\n\n\nfunction Boundary(x1, y1, x2, y2) {\n\t\tthis.p1 = new _Vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(x1, y1);\n\t\tthis.p2 = new _Vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(x2, y2);\n}\n\nBoundary.prototype.show = function(ctx) {\n\t\tctx.strokeStyle = 'rgba(255, 255, 255, .8\t)';\n\t  ctx.lineWidth = 1;\n\t\tctx.beginPath();\n\t\tctx.moveTo(this.p1.x, this.p1.y);\n\t\tctx.lineTo(this.p2.x, this.p2.y);\n\t\tctx.stroke();\n\t\tctx.closePath();\n}\n\n\n//# sourceURL=webpack://dev/./src/Boundary.js?");

/***/ }),

/***/ "./src/Canvas.js":
/*!***********************!*\
  !*** ./src/Canvas.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Canvas\": () => (/* binding */ Canvas)\n/* harmony export */ });\nfunction Canvas (width, height) {\n\tthis.width = width;\n\tthis.height = height;\n\tthis.canvas = document.createElement('canvas');\n\tthis.canvas.width = width;\n\tthis.canvas.height = height;\n\tthis.context = this.canvas.getContext('2d');\n}\n\nCanvas.prototype.init = function () {\n\tthis.canvas.style.position = 'absolute';\n\tthis.canvas.style.top = '0px';\n\tthis.canvas.style.left = '0px';\n\tthis.canvas.style.width = '100%';\n\tthis.canvas.style.height = '100%';\n\tthis.context.translate(this.width / 2, this.height / 2);\n\tthis.clear();\n\tdocument.body.appendChild(this.canvas);\n\treturn this.context;\n}\n\n\nCanvas.prototype.clear = function () {\n\tthis.context.clearRect(-this.width / 2, -this.height / 2, this.width, this.height);\n\t// fill the background with sky blue\n\tthis.context.fillStyle = '#87CEFA';\n\tthis.context.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);\n}\n\n\n\n\n//# sourceURL=webpack://dev/./src/Canvas.js?");

/***/ }),

/***/ "./src/Particle.js":
/*!*************************!*\
  !*** ./src/Particle.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Particle\": () => (/* binding */ Particle)\n/* harmony export */ });\n/* harmony import */ var _Ray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ray */ \"./src/Ray.js\");\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ \"./src/Vector.js\");\n\n\n\nfunction Particle(x, y) {\t\n\tthis.pos = new _Vector__WEBPACK_IMPORTED_MODULE_1__.Vector(x, y);\n\tthis.rays = [];\n\tthis.fov = 60;\n\tthis.heading = 0; //angle\n\tfor (let i = -this.fov / 2; i < this.fov / 2; i += .2) {\n\t\tthis.rays.push(new _Ray__WEBPACK_IMPORTED_MODULE_0__.Ray(this.pos, (0,_Vector__WEBPACK_IMPORTED_MODULE_1__.radians)(i)));\n\t}\t\n}\n\nParticle.prototype.rotate = function(angle) {\n\tthis.heading += angle;\n\tlet index = 0;\n\tfor (let i = -this.fov / 2; i < this.fov / 2; i += .2) {\n\t\tthis.rays[index].setAngle((0,_Vector__WEBPACK_IMPORTED_MODULE_1__.radians)(i + this.heading));\n\t\tindex++;\n\t}\n}\n\nParticle.prototype.goForward = function(speed) {\n\tlet angle = (0,_Vector__WEBPACK_IMPORTED_MODULE_1__.radians)(this.heading);\n\tthis.pos.x += Math.cos(angle) * speed;\n\tthis.pos.y += Math.sin(angle) * speed;\n}\n\nParticle.prototype.goBackward = function(speed) {\n\tlet angle = (0,_Vector__WEBPACK_IMPORTED_MODULE_1__.radians)(this.heading);\n\tthis.pos.x -= Math.cos(angle) * speed;\n\tthis.pos.y -= Math.sin(angle) * speed;\n}\n\nParticle.prototype.look = function(ctx, walls) {\n\tconst scene = [];\n\tfor (let i = 0; i < this.rays.length; i++) {\n\t\tconst ray = this.rays[i];\n\t\tlet closest = null;\n\t\tlet record = Infinity;\n\t\tfor (let j = 0; j < walls.length; j++) {\n\t\t\tconst wall = walls[j];\n\t\t\tconst pt = ray.cast(wall);\n\t\t\tif (pt) {\n\t\t\t\tconst d = (0,_Vector__WEBPACK_IMPORTED_MODULE_1__.dist)(this.pos, pt);\n\t\t\t\tif (d < record) {\n\t\t\t\t\trecord = d;\n\t\t\t\t\tclosest = pt;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\tif (closest) {\n\t\t\t// draw withe to black gradient line\n\t\t\tctx.strokeStyle = `rgba(255, 255, 255, .1)`;\n\t\t\tctx.beginPath();\n\t\t\tctx.moveTo(this.pos.x, this.pos.y);\n\t\t\tctx.lineTo(closest.x, closest.y);\n\t\t\tctx.stroke();\n\t\t\tctx.closePath();\n\t\t}\n\t\tscene.push(record);\n\t}\n\treturn scene;\n}\n\n\n//# sourceURL=webpack://dev/./src/Particle.js?");

/***/ }),

/***/ "./src/Ray.js":
/*!********************!*\
  !*** ./src/Ray.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ray\": () => (/* binding */ Ray)\n/* harmony export */ });\n/* harmony import */ var _Vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector.js */ \"./src/Vector.js\");\n\n\nfunction Ray(pos, angle) {\n\tthis.pos = pos;\n\tthis.dir = (0,_Vector_js__WEBPACK_IMPORTED_MODULE_0__.fromAngle)(angle);\n}\n\nRay.prototype.show = function (ctx) {\n\t// alpha\n\tctx.strokeStyle = \"rgba(255,255,255,1)\";\n\t//ctx.lineWidth = 1;\n\tctx.beginPath();\n\tctx.moveTo(this.pos.x, this.pos.y);\n\tctx.lineTo(this.pos.x + this.dir.x * 100, this.pos.y + this.dir.y * 100);\n\tctx.stroke();\n};\n\nRay.prototype.setAngle = function (angle) {\n\tthis.dir = (0,_Vector_js__WEBPACK_IMPORTED_MODULE_0__.fromAngle)(angle);\n};\n\nRay.prototype.cast = function (wall) {\n\tconst x1 = wall.p1.x;\n\tconst y1 = wall.p1.y;\n\tconst x2 = wall.p2.x;\n\tconst y2 = wall.p2.y;\n\n\tconst x3 = this.pos.x;\n\tconst y3 = this.pos.y;\n\tconst x4 = this.pos.x + this.dir.x;\n\tconst y4 = this.pos.y + this.dir.y;\n\n\tconst den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);\n\tif (den == 0) {\n\t\treturn;\n\t}\n\n\tconst t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;\n\tconst u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / den;\n\n\tif (t > 0 && t < 1 && u > 0) {\n\t\tconst pt = new _Vector_js__WEBPACK_IMPORTED_MODULE_0__.Vector(x1 + t * (x2 - x1), y1 + t * (y2 - y1));\n\t\treturn pt;\n\t} else {\n\t\treturn;\n\t}\n\n\treturn;\n};\n\n\n//# sourceURL=webpack://dev/./src/Ray.js?");

/***/ }),

/***/ "./src/Vector.js":
/*!***********************!*\
  !*** ./src/Vector.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vector\": () => (/* binding */ Vector),\n/* harmony export */   \"dist\": () => (/* binding */ dist),\n/* harmony export */   \"fromAngle\": () => (/* binding */ fromAngle),\n/* harmony export */   \"radians\": () => (/* binding */ radians)\n/* harmony export */ });\nfunction Vector(x, y) {\n\tthis.x = x;\n\tthis.y = y;\n}\n\nVector.prototype.getter = function() {\n\treturn {\n\t\tx: this.x,\n\t\ty: this.y\n\t};\n};\n\nVector.prototype.setter = function(x, y) {\n\tthis.x = x;\n\tthis.y = y;\n};\n\nVector.prototype.add = function(v) {\n\tthis.x += v.x;\n\tthis.y += v.y;\n\treturn this;\n}\n\nVector.prototype.sub = function(v) {\n\tthis.x -= v.x;\n\tthis.y -= v.y;\n\treturn this;\n}\n\nVector.prototype.normalize = function() {\n\tthis.devide(this.modulus());\n\treturn this;\n}\n\nVector.prototype.multiply = function(scalar) {\n\tthis.x *= scalar;\n\tthis.y *= scalar;\n\treturn this;\n}\n\nVector.prototype.devide = function(scalar) {\n\tthis.x /= scalar;\n\tthis.y /= scalar;\n\treturn this;\n}\n\nVector.prototype.modulus = function() {\n\treturn Math.sqrt(this.x*this.x + this.y*this.y);\n}\n\nVector.prototype.setMag = function(scalar) {\n\tthis.normalize();\n\tthis.multiply(scalar);\n\treturn this;\n}\n\nVector.prototype.rotate = function(angle) {\n\tvar x = this.x;\n\tvar y = this.y;\n\tthis.x = x * Math.cos(angle) - y * Math.sin(angle);\n\tthis.y = x * Math.sin(angle) + y * Math.cos(angle);\n\treturn this;\n}\n\nVector.prototype.heading = function() {\n\treturn Math.atan2(this.y, this.x);\n}\n\nconst fromAngle = (angle) => {\n\treturn new Vector(Math.cos(angle), Math.sin(angle));\n}\n\nconst radians = (degrees) => {\n\treturn degrees * Math.PI / 180;\n}\n\nconst dist = (v1, v2) => {\n\treturn Math.sqrt(Math.pow(v1.x - v2.x, 2) + Math.pow(v1.y - v2.y, 2));\n}\n\n\n\n//# sourceURL=webpack://dev/./src/Vector.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./src/Canvas.js\");\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vector */ \"./src/Vector.js\");\n/* harmony import */ var _Boundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Boundary */ \"./src/Boundary.js\");\n/* harmony import */ var _Ray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ray */ \"./src/Ray.js\");\n/* harmony import */ var _Particle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Particle */ \"./src/Particle.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\n\n\n\n\n\nconst width = window.innerWidth;\nconst height = window.innerHeight;\nconst canvas = new _Canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas(width, height);\nconst ctx = canvas.init();\n\nconst sceneW = width / 2;\nconst sceneH = height / 2;\n\nconst walls = [];\nconst particle = new _Particle__WEBPACK_IMPORTED_MODULE_4__.Particle(0, -sceneH / 2);\n//const particle = new Particle(0, sceneH / 2);\n\nconst setup = () => {\n\tfor (let i = 0; i < 5; i++) {\n\t\tlet x1 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.random)(-sceneW, sceneW);\n\t\tlet x2 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.random)(-sceneW, sceneW);\n\t\tlet y1 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.random)(-sceneH, 0);\n\t\tlet y2 = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.random)(-sceneH, 0);\n\t\twalls[i] = new _Boundary__WEBPACK_IMPORTED_MODULE_2__.Boundary(x1, y1, x2, y2);\n\t}\n\t// top wall\n\twalls.push(new _Boundary__WEBPACK_IMPORTED_MODULE_2__.Boundary(-sceneW, -sceneH + 2, sceneW, -sceneH));\n\t// bottom wall\n\twalls.push(new _Boundary__WEBPACK_IMPORTED_MODULE_2__.Boundary(-sceneW, 0, sceneW, 0));\n\t// right wall\n\twalls.push(new _Boundary__WEBPACK_IMPORTED_MODULE_2__.Boundary(-sceneW, -sceneH, -sceneW, 0));\n\t// left wall\n\twalls.push(new _Boundary__WEBPACK_IMPORTED_MODULE_2__.Boundary(sceneW - 2, -sceneH, sceneW, 0));\n\n\twalls.push(\n\t\tnew _Boundary__WEBPACK_IMPORTED_MODULE_2__.Boundary(-sceneW + 100, -sceneH + 100, -sceneW + 100, -sceneH + 200)\n\t);\n\twalls.push(\n\t\tnew _Boundary__WEBPACK_IMPORTED_MODULE_2__.Boundary(-sceneW + 200, -sceneH + 100, -sceneW + 200, -sceneH + 200)\n\t);\n\twalls.push(\n\t\tnew _Boundary__WEBPACK_IMPORTED_MODULE_2__.Boundary(-sceneW + 100, -sceneH + 200, -sceneW + 200, -sceneH + 200)\n\t);\n\twalls.push(\n\t\tnew _Boundary__WEBPACK_IMPORTED_MODULE_2__.Boundary(-sceneW + 100, -sceneH + 100, -sceneW + 200, -sceneH + 100)\n\t);\n\n\twalls.push(\n\t\tnew _Boundary__WEBPACK_IMPORTED_MODULE_2__.Boundary(-sceneW + 300, -sceneH + 100, -sceneW + 300, -sceneH + 200)\n\t);\n\twalls.push(\n\t\tnew _Boundary__WEBPACK_IMPORTED_MODULE_2__.Boundary(-sceneW + 400, -sceneH + 100, -sceneW + 400, -sceneH + 200)\n\t);\n\twalls.push(\n\t\tnew _Boundary__WEBPACK_IMPORTED_MODULE_2__.Boundary(-sceneW + 300, -sceneH + 200, -sceneW + 400, -sceneH + 200)\n\t);\n\twalls.push(\n\t\tnew _Boundary__WEBPACK_IMPORTED_MODULE_2__.Boundary(-sceneW + 300, -sceneH + 100, -sceneW + 400, -sceneH + 100)\n\t);\n\n\t// create hexagon by walls\n\twalls.push(\n\t\tnew _Boundary__WEBPACK_IMPORTED_MODULE_2__.Boundary(-sceneW + 150, -sceneH + 250, -sceneW + 150, -sceneH + 350)\n\t);\n\twalls.push(\n\t\tnew _Boundary__WEBPACK_IMPORTED_MODULE_2__.Boundary(-sceneW + 250, -sceneH + 250, -sceneW + 250, -sceneH + 350)\n\t);\n\twalls.push(\n\t\tnew _Boundary__WEBPACK_IMPORTED_MODULE_2__.Boundary(-sceneW + 150, -sceneH + 350, -sceneW + 250, -sceneH + 350)\n\t);\n\twalls.push(\n\t\tnew _Boundary__WEBPACK_IMPORTED_MODULE_2__.Boundary(-sceneW + 150, -sceneH + 250, -sceneW + 250, -sceneH + 250)\n\t);\n};\n\nconst loop = () => {\n\tcanvas.clear();\n\t// fill style with dart green\n\tctx.fillStyle = \"#006400\";\n\tctx.fillRect(-sceneW, sceneH / 2, sceneW * 2, sceneH * 2);\n\tctx.fillStyle = \"#000000\";\n\tctx.fillRect(-sceneW, -sceneH, sceneW * 2, sceneH);\n\tfor (let i = 0; i < walls.length; i++) {\n\t\twalls[i].show(ctx);\n\t}\n\tconst distProjPlane = sceneW / 2 / (0,_utils__WEBPACK_IMPORTED_MODULE_5__.tan)(particle.fov / 2);\n\tconst scene = particle.look(ctx, walls);\n\tconst w = width / scene.length;\n\n\tfor (let i = 0; i < scene.length; i++) {\n\t\tconst sq = scene[i] * scene[i];\n\t\tconst wSq = sceneW * sceneW;\n\t\tconst r = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.map)(sq, 0, wSq, 139, 99);\n\t\tconst g = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.map)(sq, 0, wSq, 69, 29);\n\t\tconst b = (0,_utils__WEBPACK_IMPORTED_MODULE_5__.map)(sq, 0, wSq, 19, 0);\n\t\t//const h = map(scene[i], 0, sceneW, sceneH, 0);\n\t\tlet h = ((sceneW / scene[i]) * distProjPlane) / 4 / 2;\n\t\tif (h > sceneH) {\n\t\t\th = sceneH;\n\t\t}\n\t\t// rect mode = center\n\t\tctx.fillStyle = \"rgba(\" + r + \", \" + g + \", \" + b + \", 1)\";\n\t\tctx.fillRect(-sceneW + i * w, sceneH / 2, w + 1, -h / 2);\n\t\tctx.fillRect(-sceneW + i * w, sceneH / 2 - 1, w + 1, h / 2);\n\t\t//ctx.fillRect(-sceneW + i * w, sceneH, w + 1, -h);\n\t}\n\n\trequestAnimationFrame(loop);\n};\n\nconst s = 5;\n\nwindow.addEventListener(\"keydown\", e => {\n\t// w key\n\tif (e.keyCode === 87) {\n\t\tparticle.goForward(s);\n\t}\n\t// s key\n\tif (e.keyCode === 83) {\n\t\tparticle.goBackward(s);\n\t}\n\t// a key\n\tif (e.keyCode === 65) {\n\t\tparticle.rotate(-s);\n\t}\n\t// d key\n\tif (e.keyCode === 68) {\n\t\tparticle.rotate(s);\n\t}\n});\n\n\nconst rotateL = document.createElement(\"button\");\nrotateL.innerHTML = \"Rotate Left\";\nrotateL.addEventListener(\"click\", () => {\n\tparticle.rotate(-10);\n});\nrotateL.style.position = \"absolute\";\nrotateL.style.bottom = \"80px\";\nrotateL.style.left = \"10px\";\nrotateL.style.padding = \"20px\";\nrotateL.style.backgroundColor = \"#333\";\nrotateL.style.color = \"#fff\";\nrotateL.style.border = \"none\";\ndocument.body.appendChild(rotateL);\n\nconst rotateR = document.createElement(\"button\");\nrotateR.innerHTML = \"Rotate Right\";\nrotateR.addEventListener(\"click\", () => {\n\tparticle.rotate(10);\n});\nrotateR.style.position = \"absolute\";\nrotateR.style.bottom = \"80px\";\nrotateR.style.right = \"10px\";\nrotateR.style.padding = \"20px\";\nrotateR.style.backgroundColor = \"#333\";\nrotateR.style.color = \"#fff\";\nrotateR.style.border = \"none\";\ndocument.body.appendChild(rotateR);\n\nconst goForward = document.createElement(\"button\");\ngoForward.innerHTML = \"Go Forward\";\ngoForward.addEventListener(\"click\", () => {\n\tparticle.goForward(10);\n});\ngoForward.style.position = \"absolute\";\ngoForward.style.bottom = \"10px\";\ngoForward.style.left = \"10px\";\ngoForward.style.padding = \"20px\";\ngoForward.style.backgroundColor = \"#333\";\ngoForward.style.color = \"#fff\";\ngoForward.style.border = \"none\";\ndocument.body.appendChild(goForward);\n\nconst goBackward = document.createElement(\"button\");\ngoBackward.innerHTML = \"Go Backward\";\ngoBackward.addEventListener(\"click\", () => {\n\tparticle.goBackward(10);\n});\ngoBackward.style.position = \"absolute\";\ngoBackward.style.bottom = \"10px\";\ngoBackward.style.right = \"10px\";\ngoBackward.style.padding = \"20px\";\ngoBackward.style.backgroundColor = \"#333\";\ngoBackward.style.color = \"#fff\";\ngoBackward.style.border = \"none\";\ndocument.body.appendChild(goBackward);\n\n\nconst left = document.createElement(\"button\");\nleft.innerHTML = \"Left\";\nleft.addEventListener(\"click\", () => {\n\tparticle.pos.x += -20;\n});\nleft.style.position = \"absolute\";\nleft.style.bottom = \"10px\";\nleft.style.left = \"10px\";\nleft.style.padding = \"20px\";\nleft.style.backgroundColor = \"#333\";\nleft.style.color = \"#fff\";\nleft.style.border = \"none\";\n//document.body.appendChild(left);\n\nconst right = document.createElement(\"button\");\nright.innerHTML = \"Right\";\nright.addEventListener(\"click\", () => {\n\tparticle.pos.x += 20;\n});\nright.style.position = \"absolute\";\nright.style.bottom = \"10px\";\nright.style.right = \"10px\";\nright.style.padding = \"20px\";\nright.style.backgroundColor = \"#333\";\nright.style.color = \"#fff\";\nright.style.border = \"none\";\n//document.body.appendChild(right);\n\nconst up = document.createElement(\"button\");\nup.innerHTML = \"Up\";\nup.addEventListener(\"click\", () => {\n\tparticle.pos.y += -20;\n});\nup.style.position = \"absolute\";\nup.style.bottom = \"80px\";\nup.style.left = \"10px\";\nup.style.padding = \"20px\";\nup.style.backgroundColor = \"#333\";\nup.style.color = \"#fff\";\nup.style.border = \"none\";\n//document.body.appendChild(up);\n\nconst down = document.createElement(\"button\");\ndown.innerHTML = \"Down\";\ndown.addEventListener(\"click\", () => {\n\tparticle.pos.y += 20;\n});\ndown.style.position = \"absolute\";\ndown.style.bottom = \"80px\";\ndown.style.right = \"10px\";\ndown.style.padding = \"20px\";\ndown.style.backgroundColor = \"#333\";\ndown.style.color = \"#fff\";\ndown.style.border = \"none\";\n//document.body.appendChild(down);\n\nsetup();\nloop();\n\n\n//# sourceURL=webpack://dev/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"map\": () => (/* binding */ map),\n/* harmony export */   \"random\": () => (/* binding */ random),\n/* harmony export */   \"tan\": () => (/* binding */ tan)\n/* harmony export */ });\nconst random = (min, max) => {\n\treturn Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nconst map = (value, min1, max1, min2, max2) => {\n\treturn min2 + (max2 - min2) * ((value - min1) / (max1 - min1));\n}\n\nconst tan = (angle) => {\n\treturn Math.tan(angle * Math.PI / 180);\n}\n\n\n//# sourceURL=webpack://dev/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;