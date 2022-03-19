/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pexels-nathan-engel-436413.jpg */ "./src/images/pexels-nathan-engel-436413.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/netflix_official_logo_icon_168085.png */ "./src/images/netflix_official_logo_icon_168085.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Archivo+Black&family=Courier+Prime:wght@400;700&family=Lato:wght@100;300;400;900&family=Open+Sans:wght@300;400;800&family=Source+Code+Pro:wght@300;400;600;800;900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bowlby+One&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Neonderthaw&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module

___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100%;\n  font-family: 'Open sans', sans-serif;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: repeat;\n}\n\n.nav-logo {\n  width: 100px;\n  height: 100px;\n  padding: 5px;\n  margin-top: 20px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: 84px 27px;\n  background-repeat: no-repeat;\n}\n\nnav ul {\n  display: flex;\n  justify-content: space-around;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n\n.main h1 {\n  font-size: 54px;\n  margin: 0 auto;\n  width: 1200px;\n  padding-top: 15px;\n  color: rgb(158, 33, 33);\n  font-family: 'Bowlby One', cursive;\n}\n\nnav ul > li {\n  text-align: center;\n  padding: 18px;\n  text-decoration: none;\n}\n\nfooter p a {\n  text-decoration: none;\n  color: rgba(186, 186, 60, 0.92);\n}\n\nnav ul li a {\n  color: rgb(255, 255, 255);\n  font-size: 1.5em;\n  font-weight: 900;\n  text-decoration: none;\n}\n\n.info {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n.info li {\n  width: 400px;\n  padding: 5px 5px;\n  font-size: 1.2em;\n  font-weight: normal;\n}\n\nnav ul ul > li:hover {\n  background-color: #111;\n}\n\n.movies {\n  display: flex;\n  flex-flow: row wrap;\n  gap: 10% 5%;\n  justify-content: center;\n  margin: 1% 5%;\n}\n\n.card {\n  margin: 15px 10px;\n  width: 25rem;\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem;\n  border: 1px solid rgba(242, 246, 198, 0.345);\n}\n\nh3 {\n  padding: 5px 5px;\n}\n\nimg {\n  width: 100%;\n  object-fit: contain !important;\n  box-shadow: 0px 0 19px 6px rgb(14, 10, 10);\n}\n\n.card h3 {\n  width: 220px;\n  overflow: hidden;\n}\n\n.description {\n  display: flex;\n  justify-content: space-between;\n  background-color: rgb(0, 65, 54);\n}\n\n.description p {\n  width: 30%;\n  margin: 0 auto;\n}\n\n.title {\n  width: 40px;\n  background-color: rgb(242, 246, 198);\n  margin: 0 auto;\n}\n\n.btn {\n  padding: 8px 15px;\n  background-color: rgb(88, 88, 88);\n  border: none;\n  color: rgb(242, 246, 198);\n  transition-duration: 1s;\n  cursor: pointer;\n  margin-top: 10px;\n  font-size: 14px;\n  font-family: 'open sans', sans-serif;\n  font-weight: 700;\n}\n\n.btn:hover {\n  background-color: darkred;\n}\n\n.likes {\n  padding: 5px 5px;\n  font-size: 1em;\n  color: rgb(240, 41, 6);\n  width: 50%;\n  cursor: pointer;\n}\n\n.likes:hover {\n  color: rgb(243, 89, 62);\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  width: 100%;\n  height: 80px;\n  font-family: 'open sans', sans-serif;\n  color: #fff;\n  font-size: 20px;\n  background: rgba(0, 0, 0, 0.623);\n  text-align: center;\n  padding: 1rem;\n  margin-top: 2rem;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,oCAAoC;EACpC,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,yDAA8D;EAC9D,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,yDAAwC;EACxC,0BAA0B;EAC1B,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,qBAAqB;EACrB,SAAS;EACT,UAAU;EACV,gBAAgB;EAChB,yDAA8D;EAC9D,qBAAqB;EACrB,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,cAAc;EACd,aAAa;EACb,iBAAiB;EACjB,uBAAuB;EACvB,kCAAkC;AACpC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,eAAe;EACf,4CAA4C;AAC9C;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,8BAA8B;EAC9B,0CAA0C;AAC5C;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gCAAgC;AAClC;;AAEA;EACE,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,oCAAoC;EACpC,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,iCAAiC;EACjC,YAAY;EACZ,yBAAyB;EACzB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,oCAAoC;EACpC,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,cAAc;EACd,sBAAsB;EACtB,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,kBAAkB;EAClB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,WAAW;EACX,eAAe;EACf,gCAAgC;EAChC,kBAAkB;EAClB,aAAa;EACb,gBAAgB;AAClB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Courier+Prime:wght@400;700&family=Lato:wght@100;300;400;900&family=Open+Sans:wght@300;400;800&family=Source+Code+Pro:wght@300;400;600;800;900&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Bowlby+One&display=swap');\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100%;\n  font-family: 'Open sans', sans-serif;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  background-image: url(./images/pexels-nathan-engel-436413.jpg);\n  background-repeat: repeat;\n}\n\n.nav-logo {\n  width: 100px;\n  height: 100px;\n  padding: 5px;\n  margin-top: 20px;\n  background-image: url(./images/logo.png);\n  background-size: 84px 27px;\n  background-repeat: no-repeat;\n}\n\nnav ul {\n  display: flex;\n  justify-content: space-around;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  background-image: url(./images/pexels-david-bartus-714926.jpg);\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n\n.main h1 {\n  font-size: 54px;\n  margin: 0 auto;\n  width: 1200px;\n  padding-top: 15px;\n  color: rgb(158, 33, 33);\n  font-family: 'Bowlby One', cursive;\n}\n\nnav ul > li {\n  text-align: center;\n  padding: 18px;\n  text-decoration: none;\n}\n\nfooter p a {\n  text-decoration: none;\n  color: rgba(186, 186, 60, 0.92);\n}\n\nnav ul li a {\n  color: rgb(255, 255, 255);\n  font-size: 1.5em;\n  font-weight: 900;\n  text-decoration: none;\n}\n\n.info {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n}\n\n.info li {\n  width: 400px;\n  padding: 5px 5px;\n  font-size: 1.2em;\n  font-weight: normal;\n}\n\nnav ul ul > li:hover {\n  background-color: #111;\n}\n\n.movies {\n  display: flex;\n  flex-flow: row wrap;\n  gap: 10% 5%;\n  justify-content: center;\n  margin: 1% 5%;\n}\n\n.card {\n  margin: 15px 10px;\n  width: 25rem;\n  display: flex;\n  flex-direction: column;\n  padding: 0.5rem;\n  border: 1px solid rgba(242, 246, 198, 0.345);\n}\n\nh3 {\n  padding: 5px 5px;\n}\n\nimg {\n  width: 100%;\n  object-fit: contain !important;\n  box-shadow: 0px 0 19px 6px rgb(14, 10, 10);\n}\n\n.card h3 {\n  width: 220px;\n  overflow: hidden;\n}\n\n.description {\n  display: flex;\n  justify-content: space-between;\n  background-color: rgb(0, 65, 54);\n}\n\n.description p {\n  width: 30%;\n  margin: 0 auto;\n}\n\n.title {\n  width: 40px;\n  background-color: rgb(242, 246, 198);\n  margin: 0 auto;\n}\n\n.btn {\n  padding: 8px 15px;\n  background-color: rgb(88, 88, 88);\n  border: none;\n  color: rgb(242, 246, 198);\n  transition-duration: 1s;\n  cursor: pointer;\n  margin-top: 10px;\n  font-size: 14px;\n  font-family: 'open sans', sans-serif;\n  font-weight: 700;\n}\n\n.btn:hover {\n  background-color: darkred;\n}\n\n.likes {\n  padding: 5px 5px;\n  font-size: 1em;\n  color: rgb(240, 41, 6);\n  width: 50%;\n  cursor: pointer;\n}\n\n.likes:hover {\n  color: rgb(243, 89, 62);\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n  width: 100%;\n  height: 80px;\n  font-family: 'open sans', sans-serif;\n  color: #fff;\n  font-size: 20px;\n  background: rgba(0, 0, 0, 0.623);\n  text-align: center;\n  padding: 1rem;\n  margin-top: 2rem;\n}\n"],"sourceRoot":""}]);


___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Open sans', sans-serif;\r\n  box-sizing: border-box;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: repeat;\r\n}\r\n\r\n.nav-logo {\r\n  display: flex;\r\n  width: 150px;\r\n  border: 10px solid transparent;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-size: 125px 40px;\r\n  background-repeat: no-repeat;\r\n  margin: 0 auto;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  list-style-type: none;\r\n  flex-wrap: wrap;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n  background-size: 100% 25rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.main h1 {\r\n  font-size: 32px;\r\n  padding-top: 15px;\r\n  color: rgb(158, 33, 33);\r\n  font-family: 'Bowlby One', cursive;\r\n  text-align: center;\r\n}\r\n\r\nnav ul > li {\r\n  text-align: center;\r\n  padding: 18px;\r\n  text-decoration: none;\r\n}\r\n\r\nfooter p a {\r\n  text-decoration: none;\r\n  color: rgba(186, 186, 60, 0.92);\r\n}\r\n\r\nnav ul li a {\r\n  color: rgb(255, 225, 0);\r\n  font-size: 2em;\r\n  font-weight: 900;\r\n  text-decoration: none;\r\n  letter-spacing: 0.4rem;\r\n  box-shadow: 2px 2px 2px 0 rgb(0, 0, 0);\r\n  cursor: pointer;\r\n}\r\n\r\nnav ul li a:hover {\r\n  box-shadow: 2px 2px 2px 0 red;\r\n  color: red;\r\n  letter-spacing: 1rem;\r\n}\r\n\r\n.info {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n}\r\n\r\n.info li {\r\n  width: 400px;\r\n  padding: 5px 5px;\r\n  font-size: 1.2em;\r\n  font-weight: normal;\r\n}\r\n\r\nnav ul ul > li:hover {\r\n  background-color: #111;\r\n}\r\n\r\n.movies {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  gap: 10% 5%;\r\n  justify-content: center;\r\n  margin: 1% 5%;\r\n}\r\n\r\n.card {\r\n  margin: 15px 10px;\r\n  width: 18rem;\r\n  height: 35rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0.5rem;\r\n  border: 1px solid rgba(242, 246, 198, 0.345);\r\n}\r\n\r\nh3 {\r\n  padding: 5px 5px;\r\n}\r\n\r\n.card-img {\r\n  width: 100%;\r\n  object-fit: contain !important;\r\n  box-shadow: 0 0 19px 6px rgb(14, 10, 10);\r\n}\r\n\r\n.card h3 {\r\n  width: 220px;\r\n  overflow: hidden;\r\n}\r\n\r\n.description {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: rgb(0, 65, 54);\r\n}\r\n\r\n.description p {\r\n  width: 30%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.title {\r\n  width: 40px;\r\n  background-color: rgb(242, 246, 198);\r\n  margin: 0 auto;\r\n}\r\n\r\n.btn {\r\n  padding: 8px 15px;\r\n  background-color: rgb(88, 88, 88);\r\n  border: none;\r\n  color: rgb(242, 246, 198);\r\n  transition-duration: 1s;\r\n  cursor: pointer;\r\n  margin-top: 10px;\r\n  font-size: 14px;\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: darkred;\r\n}\r\n\r\n.likes {\r\n  padding: 5px 5px;\r\n  font-size: 1em;\r\n  color: rgb(240, 41, 6);\r\n  width: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.likes:hover {\r\n  color: rgb(243, 89, 62);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 80px;\r\n  font-family: 'open sans', sans-serif;\r\n  color: #fff;\r\n  font-size: 20px;\r\n  background: rgba(0, 0, 0, 0.623);\r\n  padding: 1rem;\r\n  margin-top: 2rem;\r\n}\r\n\r\n/* reservation style */\r\n.popUpBox {\r\n  display: none;\r\n  flex-direction: column;\r\n  padding: 0 2%;\r\n  margin: 1% 4% 1% 4%;\r\n  border: solid 1px rgba(0, 0, 0, 0.623);\r\n  backdrop-filter: blur(20px);\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  box-sizing: border-box;\r\n  border-radius: 16px;\r\n  color: white;\r\n  overflow: auto;\r\n}\r\n\r\n.popupTitle {\r\n  font-family: 'Bowlby One', cursive;\r\n  font-size: 35px;\r\n}\r\n\r\n.closeReservation img {\r\n  width: 4%;\r\n  cursor: pointer;\r\n}\r\n\r\n.reservation-skeleton {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.reservation-skeleton button {\r\n  background-color: transparent;\r\n  border: 2px solid rgb(167, 9, 9);\r\n  color: rgb(167, 9, 9);\r\n}\r\n\r\n.reservation-skeleton button:hover {\r\n  background-color: white;\r\n  border: none;\r\n  color: rgb(167, 9, 9);\r\n}\r\n\r\n.reservation-film-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.reservation-film-info ul {\r\n  list-style: none;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n}\r\n\r\n.reservationsTitle {\r\n  font-size: 24px;\r\n}\r\n\r\n.reservation-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 5%;\r\n}\r\n\r\n.reservation-info input {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin-bottom: 10px;\r\n  border: none;\r\n  border-bottom: 1px solid white;\r\n  font-family: 'Open sans', sans-serif;\r\n  background-color: transparent;\r\n  outline: none;\r\n  color: white;\r\n}\r\n\r\n.reservation-info input::placeholder {\r\n  color: white;\r\n}\r\n\r\n.reservation-info button {\r\n  width: 100%;\r\n  padding: 10px;\r\n  background-color: transparent;\r\n  border: 2px solid rgb(167, 9, 9);\r\n  color: rgb(167, 9, 9);\r\n  font-family: 'Open sans', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n}\r\n\r\n.reservation-info button:hover {\r\n  background-color: white;\r\n  border: none;\r\n}\r\n\r\n.reservationImg {\r\n  width: 20rem;\r\n  height: 25rem;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  margin-bottom: 10px;\r\n  border: 2px solid rgb(167, 9, 9);\r\n}\r\n\r\n.reservationTable {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n#moreDetails {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.about {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  color: #fff;\r\n  font-family: 'Open sans', sans-serif;\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n  .reservation-skeleton {\r\n    flex-direction: row;\r\n  }\r\n}\r\n\r\n/* end of reservation style */\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Courier+Prime:wght@400;700&family=Lato:wght@100;300;400;900&family=Open+Sans:wght@300;400;800&family=Source+Code+Pro:wght@300;400;600;800;900&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Bowlby+One&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Neonderthaw&display=swap');\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Open sans', sans-serif;\r\n  box-sizing: border-box;\r\n  background-image: url(./images/pexels-nathan-engel-436413.jpg);\r\n  background-repeat: repeat;\r\n}\r\n\r\n.nav-logo {\r\n  display: flex;\r\n  width: 150px;\r\n  border: 10px solid transparent;\r\n  background-image: url(./images/netflix_official_logo_icon_168085.png);\r\n  background-size: 125px 40px;\r\n  background-repeat: no-repeat;\r\n  margin: 0 auto;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  list-style-type: none;\r\n  flex-wrap: wrap;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-image: url(./images/Avengers.jpeg);\r\n  background-size: 100% 25rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.main h1 {\r\n  font-size: 32px;\r\n  padding-top: 15px;\r\n  color: rgb(158, 33, 33);\r\n  font-family: 'Bowlby One', cursive;\r\n  text-align: center;\r\n}\r\n\r\nnav ul > li {\r\n  text-align: center;\r\n  padding: 18px;\r\n  text-decoration: none;\r\n}\r\n\r\nfooter p a {\r\n  text-decoration: none;\r\n  color: rgba(186, 186, 60, 0.92);\r\n}\r\n\r\nnav ul li a {\r\n  color: rgb(255, 225, 0);\r\n  font-size: 2em;\r\n  font-weight: 900;\r\n  text-decoration: none;\r\n  letter-spacing: 0.4rem;\r\n  box-shadow: 2px 2px 2px 0 rgb(0, 0, 0);\r\n  cursor: pointer;\r\n}\r\n\r\nnav ul li a:hover {\r\n  box-shadow: 2px 2px 2px 0 red;\r\n  color: red;\r\n  letter-spacing: 1rem;\r\n}\r\n\r\n.info {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n}\r\n\r\n.info li {\r\n  width: 400px;\r\n  padding: 5px 5px;\r\n  font-size: 1.2em;\r\n  font-weight: normal;\r\n}\r\n\r\nnav ul ul > li:hover {\r\n  background-color: #111;\r\n}\r\n\r\n.movies {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  gap: 10% 5%;\r\n  justify-content: center;\r\n  margin: 1% 5%;\r\n}\r\n\r\n.card {\r\n  margin: 15px 10px;\r\n  width: 18rem;\r\n  height: 35rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0.5rem;\r\n  border: 1px solid rgba(242, 246, 198, 0.345);\r\n}\r\n\r\nh3 {\r\n  padding: 5px 5px;\r\n}\r\n\r\n.card-img {\r\n  width: 100%;\r\n  object-fit: contain !important;\r\n  box-shadow: 0 0 19px 6px rgb(14, 10, 10);\r\n}\r\n\r\n.card h3 {\r\n  width: 220px;\r\n  overflow: hidden;\r\n}\r\n\r\n.description {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: rgb(0, 65, 54);\r\n}\r\n\r\n.description p {\r\n  width: 30%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.title {\r\n  width: 40px;\r\n  background-color: rgb(242, 246, 198);\r\n  margin: 0 auto;\r\n}\r\n\r\n.btn {\r\n  padding: 8px 15px;\r\n  background-color: rgb(88, 88, 88);\r\n  border: none;\r\n  color: rgb(242, 246, 198);\r\n  transition-duration: 1s;\r\n  cursor: pointer;\r\n  margin-top: 10px;\r\n  font-size: 14px;\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: darkred;\r\n}\r\n\r\n.likes {\r\n  padding: 5px 5px;\r\n  font-size: 1em;\r\n  color: rgb(240, 41, 6);\r\n  width: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.likes:hover {\r\n  color: rgb(243, 89, 62);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 80px;\r\n  font-family: 'open sans', sans-serif;\r\n  color: #fff;\r\n  font-size: 20px;\r\n  background: rgba(0, 0, 0, 0.623);\r\n  padding: 1rem;\r\n  margin-top: 2rem;\r\n}\r\n\r\n/* reservation style */\r\n.popUpBox {\r\n  display: none;\r\n  flex-direction: column;\r\n  padding: 0 2%;\r\n  margin: 1% 4% 1% 4%;\r\n  border: solid 1px rgba(0, 0, 0, 0.623);\r\n  backdrop-filter: blur(20px);\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  box-sizing: border-box;\r\n  border-radius: 16px;\r\n  color: white;\r\n  overflow: auto;\r\n}\r\n\r\n.popupTitle {\r\n  font-family: 'Bowlby One', cursive;\r\n  font-size: 35px;\r\n}\r\n\r\n.closeReservation img {\r\n  width: 4%;\r\n  cursor: pointer;\r\n}\r\n\r\n.reservation-skeleton {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.reservation-skeleton button {\r\n  background-color: transparent;\r\n  border: 2px solid rgb(167, 9, 9);\r\n  color: rgb(167, 9, 9);\r\n}\r\n\r\n.reservation-skeleton button:hover {\r\n  background-color: white;\r\n  border: none;\r\n  color: rgb(167, 9, 9);\r\n}\r\n\r\n.reservation-film-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.reservation-film-info ul {\r\n  list-style: none;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n}\r\n\r\n.reservationsTitle {\r\n  font-size: 24px;\r\n}\r\n\r\n.reservation-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 5%;\r\n}\r\n\r\n.reservation-info input {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin-bottom: 10px;\r\n  border: none;\r\n  border-bottom: 1px solid white;\r\n  font-family: 'Open sans', sans-serif;\r\n  background-color: transparent;\r\n  outline: none;\r\n  color: white;\r\n}\r\n\r\n.reservation-info input::placeholder {\r\n  color: white;\r\n}\r\n\r\n.reservation-info button {\r\n  width: 100%;\r\n  padding: 10px;\r\n  background-color: transparent;\r\n  border: 2px solid rgb(167, 9, 9);\r\n  color: rgb(167, 9, 9);\r\n  font-family: 'Open sans', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n}\r\n\r\n.reservation-info button:hover {\r\n  background-color: white;\r\n  border: none;\r\n}\r\n\r\n.reservationImg {\r\n  width: 20rem;\r\n  height: 25rem;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  margin-bottom: 10px;\r\n  border: 2px solid rgb(167, 9, 9);\r\n}\r\n\r\n.reservationTable {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n#moreDetails {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.about {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  color: #fff;\r\n  font-family: 'Open sans', sans-serif;\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n  .reservation-skeleton {\r\n    flex-direction: row;\r\n  }\r\n}\r\n\r\n/* end of reservation style */\r\n"],"sourceRoot":""}]);

___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Open sans', sans-serif;\r\n  box-sizing: border-box;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: repeat;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: rgb(14, 10, 10);\r\n}\r\n\r\n.nav-logo {\r\n  display: flex;\r\n  width: 150px;\r\n  border: 10px solid transparent;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-size: 125px 40px;\r\n  background-repeat: no-repeat;\r\n  margin: 0 auto;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  list-style-type: none;\r\n  flex-wrap: wrap;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-size: 100% 25rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.main h1 {\r\n  font-size: 32px;\r\n  padding-top: 15px;\r\n  color: rgb(149, 32, 32);\r\n  font-family: 'Bowlby One', cursive;\r\n  text-align: center;\r\n}\r\n\r\nnav ul > li {\r\n  text-align: center;\r\n  padding: 18px;\r\n  text-decoration: none;\r\n}\r\n\r\nfooter p a {\r\n  text-decoration: none;\r\n  color: rgba(186, 186, 60, 0.92);\r\n}\r\n\r\nnav ul li a {\r\n  color: rgb(255, 225, 0);\r\n  font-size: 2em;\r\n  font-weight: 900;\r\n  text-decoration: none;\r\n  box-shadow: 2px 2px 2px 0 rgb(0, 0, 0);\r\n  cursor: pointer;\r\n}\r\n\r\nnav ul li a:hover {\r\n  box-shadow: 2px 2px 2px 0 red;\r\n  color: red;\r\n  letter-spacing: 0.2rem;\r\n}\r\n\r\n.info {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n}\r\n\r\n.info li {\r\n  width: 400px;\r\n  padding: 5px 5px;\r\n  font-size: 1.2em;\r\n  font-weight: normal;\r\n}\r\n\r\nnav ul ul > li:hover {\r\n  background-color: #111;\r\n}\r\n\r\n.movies {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  gap: 10% 5%;\r\n  justify-content: center;\r\n  margin: 1% 5%;\r\n}\r\n\r\n.card {\r\n  margin: 15px 10px;\r\n  width: 18rem;\r\n  height: 35rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0.5rem;\r\n  border: 1px solid rgba(242, 246, 198, 0.345);\r\n}\r\n\r\nh3 {\r\n  padding: 5px 5px;\r\n}\r\n\r\n.card-img {\r\n  width: 100%;\r\n  object-fit: contain !important;\r\n  box-shadow: 0 0 19px 6px rgb(14, 10, 10);\r\n}\r\n\r\n.card h3 {\r\n  width: 220px;\r\n  overflow: hidden;\r\n}\r\n\r\n.description {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: rgb(0, 65, 54);\r\n}\r\n\r\n.description p {\r\n  width: 30%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.title {\r\n  width: 40px;\r\n  background-color: rgb(242, 246, 198);\r\n  margin: 0 auto;\r\n}\r\n\r\n.btn {\r\n  padding: 8px 15px;\r\n  background-color: rgb(88, 88, 88);\r\n  border: none;\r\n  color: rgb(242, 246, 198);\r\n  transition-duration: 1s;\r\n  cursor: pointer;\r\n  margin-top: 10px;\r\n  font-size: 14px;\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: darkred;\r\n}\r\n\r\n.likes {\r\n  padding: 5px 5px;\r\n  font-size: 1em;\r\n  color: rgb(240, 41, 6);\r\n  width: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.likes:hover {\r\n  color: rgb(243, 89, 62);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 80px;\r\n  font-family: 'open sans', sans-serif;\r\n  color: #fff;\r\n  font-size: 20px;\r\n  background: rgba(0, 0, 0, 0.623);\r\n  padding: 1rem;\r\n  margin-top: 2rem;\r\n}\r\n\r\n/* reservation style */\r\n.popUpBox {\r\n  display: none;\r\n  flex-direction: column;\r\n  padding: 0 2%;\r\n  margin: 1% 4% 1% 4%;\r\n  border: solid 1px rgba(0, 0, 0, 0.623);\r\n  backdrop-filter: blur(20px);\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  box-sizing: border-box;\r\n  border-radius: 16px;\r\n  color: white;\r\n  overflow: auto;\r\n}\r\n\r\n.popupTitle {\r\n  font-family: 'Bowlby One', cursive;\r\n  font-size: 35px;\r\n}\r\n\r\n.closeReservation img {\r\n  width: 4%;\r\n  cursor: pointer;\r\n}\r\n\r\n.reservation-skeleton {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.reservation-skeleton button {\r\n  background-color: transparent;\r\n  border: 2px solid rgb(167, 9, 9);\r\n  color: rgb(167, 9, 9);\r\n}\r\n\r\n.reservation-info button {\r\n  width: 100%;\r\n  padding: 10px;\r\n  background-color: transparent;\r\n  border: 2px solid rgb(167, 9, 9);\r\n  color: rgb(167, 9, 9);\r\n  font-family: 'Open sans', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n}\r\n\r\n.reservation-skeleton button:hover {\r\n  background-color: white;\r\n  border: none;\r\n  color: rgb(167, 9, 9);\r\n}\r\n\r\n.reservation-film-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.reservation-film-info ul {\r\n  list-style: none;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n}\r\n\r\n.reservationsTitle {\r\n  font-size: 24px;\r\n}\r\n\r\n.reservation-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 5%;\r\n}\r\n\r\n.reservation-info input {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin-bottom: 10px;\r\n  border: none;\r\n  border-bottom: 1px solid white;\r\n  font-family: 'Open sans', sans-serif;\r\n  background-color: transparent;\r\n  outline: none;\r\n  color: white;\r\n}\r\n\r\n.reservation-info input::placeholder {\r\n  color: white;\r\n}\r\n\r\n.reservation-info textarea {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin-bottom: 10px;\r\n  border: none;\r\n  border-bottom: 1px solid white;\r\n  font-family: 'Open sans', sans-serif;\r\n  background-color: transparent;\r\n  outline: none;\r\n  color: white;\r\n}\r\n\r\n.reservation-info textarea::placeholder {\r\n  color: white;\r\n}\r\n\r\n.reservation-info button:hover {\r\n  background-color: white;\r\n  border: none;\r\n}\r\n\r\n.reservationImg {\r\n  width: 20rem;\r\n  height: 25rem;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  margin-bottom: 10px;\r\n  border: 2px solid rgb(167, 9, 9);\r\n}\r\n\r\n.reservationTable {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n#moreDetails {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.about {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  color: #fff;\r\n  font-family: 'Open sans', sans-serif;\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n  .reservation-skeleton {\r\n    flex-direction: row;\r\n  }\r\n}\r\n\r\n/* end of reservation style */\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Courier+Prime:wght@400;700&family=Lato:wght@100;300;400;900&family=Open+Sans:wght@300;400;800&family=Source+Code+Pro:wght@300;400;600;800;900&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Bowlby+One&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Neonderthaw&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: 'Open sans', sans-serif;\r\n  box-sizing: border-box;\r\n  background-image: url(./images/pexels-nathan-engel-436413.jpg);\r\n  background-repeat: repeat;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  background-color: rgb(14, 10, 10);\r\n}\r\n\r\n.nav-logo {\r\n  display: flex;\r\n  width: 150px;\r\n  border: 10px solid transparent;\r\n  background-image: url(./images/netflix_official_logo_icon_168085.png);\r\n  background-size: 125px 40px;\r\n  background-repeat: no-repeat;\r\n  margin: 0 auto;\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  list-style-type: none;\r\n  flex-wrap: wrap;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-size: 100% 25rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n\r\n.main h1 {\r\n  font-size: 32px;\r\n  padding-top: 15px;\r\n  color: rgb(149, 32, 32);\r\n  font-family: 'Bowlby One', cursive;\r\n  text-align: center;\r\n}\r\n\r\nnav ul > li {\r\n  text-align: center;\r\n  padding: 18px;\r\n  text-decoration: none;\r\n}\r\n\r\nfooter p a {\r\n  text-decoration: none;\r\n  color: rgba(186, 186, 60, 0.92);\r\n}\r\n\r\nnav ul li a {\r\n  color: rgb(255, 225, 0);\r\n  font-size: 2em;\r\n  font-weight: 900;\r\n  text-decoration: none;\r\n  box-shadow: 2px 2px 2px 0 rgb(0, 0, 0);\r\n  cursor: pointer;\r\n}\r\n\r\nnav ul li a:hover {\r\n  box-shadow: 2px 2px 2px 0 red;\r\n  color: red;\r\n  letter-spacing: 0.2rem;\r\n}\r\n\r\n.info {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n}\r\n\r\n.info li {\r\n  width: 400px;\r\n  padding: 5px 5px;\r\n  font-size: 1.2em;\r\n  font-weight: normal;\r\n}\r\n\r\nnav ul ul > li:hover {\r\n  background-color: #111;\r\n}\r\n\r\n.movies {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  gap: 10% 5%;\r\n  justify-content: center;\r\n  margin: 1% 5%;\r\n}\r\n\r\n.card {\r\n  margin: 15px 10px;\r\n  width: 18rem;\r\n  height: 35rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0.5rem;\r\n  border: 1px solid rgba(242, 246, 198, 0.345);\r\n}\r\n\r\nh3 {\r\n  padding: 5px 5px;\r\n}\r\n\r\n.card-img {\r\n  width: 100%;\r\n  object-fit: contain !important;\r\n  box-shadow: 0 0 19px 6px rgb(14, 10, 10);\r\n}\r\n\r\n.card h3 {\r\n  width: 220px;\r\n  overflow: hidden;\r\n}\r\n\r\n.description {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background-color: rgb(0, 65, 54);\r\n}\r\n\r\n.description p {\r\n  width: 30%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.title {\r\n  width: 40px;\r\n  background-color: rgb(242, 246, 198);\r\n  margin: 0 auto;\r\n}\r\n\r\n.btn {\r\n  padding: 8px 15px;\r\n  background-color: rgb(88, 88, 88);\r\n  border: none;\r\n  color: rgb(242, 246, 198);\r\n  transition-duration: 1s;\r\n  cursor: pointer;\r\n  margin-top: 10px;\r\n  font-size: 14px;\r\n  font-family: 'open sans', sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\n.btn:hover {\r\n  background-color: darkred;\r\n}\r\n\r\n.likes {\r\n  padding: 5px 5px;\r\n  font-size: 1em;\r\n  color: rgb(240, 41, 6);\r\n  width: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.likes:hover {\r\n  color: rgb(243, 89, 62);\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  text-align: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 80px;\r\n  font-family: 'open sans', sans-serif;\r\n  color: #fff;\r\n  font-size: 20px;\r\n  background: rgba(0, 0, 0, 0.623);\r\n  padding: 1rem;\r\n  margin-top: 2rem;\r\n}\r\n\r\n/* reservation style */\r\n.popUpBox {\r\n  display: none;\r\n  flex-direction: column;\r\n  padding: 0 2%;\r\n  margin: 1% 4% 1% 4%;\r\n  border: solid 1px rgba(0, 0, 0, 0.623);\r\n  backdrop-filter: blur(20px);\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  box-sizing: border-box;\r\n  border-radius: 16px;\r\n  color: white;\r\n  overflow: auto;\r\n}\r\n\r\n.popupTitle {\r\n  font-family: 'Bowlby One', cursive;\r\n  font-size: 35px;\r\n}\r\n\r\n.closeReservation img {\r\n  width: 4%;\r\n  cursor: pointer;\r\n}\r\n\r\n.reservation-skeleton {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.reservation-skeleton button {\r\n  background-color: transparent;\r\n  border: 2px solid rgb(167, 9, 9);\r\n  color: rgb(167, 9, 9);\r\n}\r\n\r\n.reservation-info button {\r\n  width: 100%;\r\n  padding: 10px;\r\n  background-color: transparent;\r\n  border: 2px solid rgb(167, 9, 9);\r\n  color: rgb(167, 9, 9);\r\n  font-family: 'Open sans', sans-serif;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n}\r\n\r\n.reservation-skeleton button:hover {\r\n  background-color: white;\r\n  border: none;\r\n  color: rgb(167, 9, 9);\r\n}\r\n\r\n.reservation-film-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.reservation-film-info ul {\r\n  list-style: none;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n}\r\n\r\n.reservationsTitle {\r\n  font-size: 24px;\r\n}\r\n\r\n.reservation-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 5%;\r\n}\r\n\r\n.reservation-info input {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin-bottom: 10px;\r\n  border: none;\r\n  border-bottom: 1px solid white;\r\n  font-family: 'Open sans', sans-serif;\r\n  background-color: transparent;\r\n  outline: none;\r\n  color: white;\r\n}\r\n\r\n.reservation-info input::placeholder {\r\n  color: white;\r\n}\r\n\r\n.reservation-info textarea {\r\n  width: 100%;\r\n  padding: 10px;\r\n  margin-bottom: 10px;\r\n  border: none;\r\n  border-bottom: 1px solid white;\r\n  font-family: 'Open sans', sans-serif;\r\n  background-color: transparent;\r\n  outline: none;\r\n  color: white;\r\n}\r\n\r\n.reservation-info textarea::placeholder {\r\n  color: white;\r\n}\r\n\r\n.reservation-info button:hover {\r\n  background-color: white;\r\n  border: none;\r\n}\r\n\r\n.reservationImg {\r\n  width: 20rem;\r\n  height: 25rem;\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  margin-bottom: 10px;\r\n  border: 2px solid rgb(167, 9, 9);\r\n}\r\n\r\n.reservationTable {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n#moreDetails {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.about {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  color: #fff;\r\n  font-family: 'Open sans', sans-serif;\r\n}\r\n\r\n@media screen and (min-width: 992px) {\r\n  .reservation-skeleton {\r\n    flex-direction: row;\r\n  }\r\n}\r\n\r\n/* end of reservation style */\r\n"],"sourceRoot":""}]);

// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentCounter": () => (/* binding */ CommentCounter),
/* harmony export */   "Commentspopup": () => (/* binding */ Commentspopup)
/* harmony export */ });
const fetch = (...args) => __webpack_require__.e(/*! import() */ "node_modules_node-fetch_browser_js").then(__webpack_require__.t.bind(__webpack_require__, /*! node-fetch */ "./node_modules/node-fetch/browser.js", 23)).then(({ default: fetch }) => fetch(...args));
const movieURL = 'https://api.tvmaze.com/shows';
const commentsURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3x4brqQTuutEhv5burqz/comments/';
const popUpBox = document.getElementById('popUpBox');

const postCommentData = async (raw) => {
  const response = await fetch(commentsURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset= UTF-8',
    },
    body: JSON.stringify(raw),
  })
    .then((res) => res.text())
    .then((data) => (data.error
      ? { error: true, info: data }
      : { error: false, info: data }))
    .catch((error) => ({ error: true, info: error }));
  return response;
};

const getCommentsData = async (movieId) => {
  const response = await fetch(`${commentsURL}?item_id=${movieId}`).catch(
    (err) => err,
  );
  return response.json();
};

const commentsDisplay = (movieId) => {
  popUpBox.querySelector('.reservationTable').innerHTML = '';
  getCommentsData(movieId).then((data) => {
    if (!data.error) {
      data.forEach((comment) => {
        popUpBox.querySelector(
          '.reservationTable',
        ).innerHTML += `<p>${comment.creation_date} | ${comment.username} : ${comment.comment}</p>`;
      });
    } else {
      popUpBox.querySelector('.reservationTable').innerHTML = 'no comment yet!';
    }
  });
};

const getMovieData = async (movieID) => {
  const response = await fetch(`${movieURL}/${movieID}`, {
    method: 'GET',
    redirect: 'follow',
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
  return response;
};

const counter = async (movieID) => {
  const response = await getCommentsData(movieID)
    .then((result) => (!result.error ? result.length : 0))
    .catch(() => 0);
  return response;
};

const commentsCount = (movieID) => {
  counter(movieID).then((count) => {
    popUpBox.querySelector('.reservationCounter').innerHTML = count;
  });
};

const CommentCounter = (data) => (typeof (data) === 'object' ? data.length : 'invalid');

const Commentspopup = (movieID) => {
  getMovieData(movieID).then((result) => {
    popUpBox.innerHTML = `
    <span class="closeReservation"><img src="https://img.icons8.com/doodle/48/000000/delete-sign.png"/></span>
    <div class="reservation-skeleton">
    <div class="reservation-film-info">
    <h2 class="popupTitle">${result.name}</h2>
    <img src="${result.image.medium}" class="reservationImg">
    <div >
    <ul id="moreDetails"></ul>
    </div>
    <button class="moreDetailsButton btn" type="submit">More details</button>
    </div>
    <div class="reservation-info">
    <h3 class="reservationsTitle">Comments(<span class="reservationCounter">0</span>)</h3>
    <div class="reservationTable"></div>
    <form class="reservationForm">
      <h3>Add a comment</h3>
      <input id="username" type="text" name="username" placeholder="Your name" required>
      <br>
      <textarea id="commentArea" placeholder="Your comment" name="commentArea" required minlength="1"></textarea>
      <br>
      <button class="reservationSubmit" type="submit">Submit</button>
    </form>
    </div>
    </div>
    `;
    commentsCount(movieID);
    popUpBox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document
      .querySelector('.closeReservation')
      .addEventListener('click', () => {
        popUpBox.style.display = 'none';
        document.body.style.overflow = 'visible';
        popUpBox.innerHTML = '';
      });
    commentsDisplay(movieID);
    const moreDetails = popUpBox.querySelector('#moreDetails');
    const moreDetailsButton = popUpBox.querySelector('.moreDetailsButton');
    moreDetailsButton.addEventListener('click', () => {
      moreDetailsButton.style.display = 'none';
      moreDetails.innerHTML = ` <li>Premiered: ${result.premiered}</li>
      <li>Ended: ${result.ended}</li>
      <li>Language: ${result.language}</li>
      <li>Type: ${result.type}</li>`;
    });
    const form = popUpBox.querySelector('.reservationForm');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const user = form.elements.username.value;
      const commentArea = form.elements.commentArea.value;
      postCommentData({
        item_id: movieID,
        username: user,
        comment: commentArea,
      }).then(() => {
        commentsDisplay(movieID);
        commentsCount(movieID);
        form.reset();
      });
    });
  });
};




/***/ }),

/***/ "./src/modules/get-api.js":
/*!********************************!*\
  !*** ./src/modules/get-api.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countMovies": () => (/* binding */ countMovies),
/* harmony export */   "getMovieById": () => (/* binding */ getMovieById),
/* harmony export */   "getMovies": () => (/* binding */ getMovies)
/* harmony export */ });
const getMovies = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  return response.json();
};

const getMovieById = async (id) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  return response.json();
};

const countMovies = (movies) => {
  if (movies.length) {
    const temp = document.querySelectorAll('.count-movies');
    temp.forEach((item) => {
      item.innerHTML = `${movies.length}`;
    });
  }
};


/***/ }),

/***/ "./src/modules/interact.js":
/*!*********************************!*\
  !*** ./src/modules/interact.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLike": () => (/* binding */ addLike),
/* harmony export */   "appId": () => (/* binding */ appId),
/* harmony export */   "baseURL": () => (/* binding */ baseURL),
/* harmony export */   "getLikes": () => (/* binding */ getLikes)
/* harmony export */ });
const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
const appId = 'byg3KtvqOhmd3Xt9Axu5';

const addLike = async (itemId) => {
  fetch(`${baseURL}apps/${appId}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemId }),
  });
};

const getLikes = async () => {
  const response = await fetch(`${baseURL}apps/${appId}/likes`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};


/***/ }),

/***/ "./src/modules/reservation.js":
/*!************************************!*\
  !*** ./src/modules/reservation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Reservationspopup": () => (/* binding */ Reservationspopup),
/* harmony export */   "finalCounter": () => (/* binding */ finalCounter)
/* harmony export */ });
const fetch = (...args) => __webpack_require__.e(/*! import() */ "node_modules_node-fetch_browser_js").then(__webpack_require__.t.bind(__webpack_require__, /*! node-fetch */ "./node_modules/node-fetch/browser.js", 23)).then(({ default: fetch }) => fetch(...args));
const movieURL = 'https://api.tvmaze.com/shows';
const reservationsURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/3x4brqQTuutEhv5burqz/reservations/';
const popUpBox = document.getElementById('popUpBox');

const postReservationsData = async (raw) => {
  const response = await fetch(reservationsURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset= UTF-8',
    },
    body: JSON.stringify(raw),
  })
    .then((res) => res.text())
    .then((data) => (data.error
      ? { error: true, info: data }
      : { error: false, info: data }))
    .catch((error) => ({ error: true, info: error }));
  return response;
};

const getReservationsData = async (movieId) => {
  const response = await fetch(`${reservationsURL}?item_id=${movieId}`).catch(
    (err) => err,
  );
  return response.json();
};

const reservationsDisplay = (movieId) => {
  popUpBox.querySelector('.reservationTable').innerHTML = '';
  getReservationsData(movieId).then((data) => {
    if (!data.error) {
      data.forEach((reserve) => {
        popUpBox.querySelector(
          '.reservationTable',
        ).innerHTML += `<p> ${reserve.date_start} - ${reserve.date_end} by ${reserve.username}</p>`;
      });
    } else {
      popUpBox.querySelector('.reservationTable').innerHTML = 'no reservation yet!';
    }
  });
};

const getMovieData = async (movieID) => {
  const response = await fetch(`${movieURL}/${movieID}`, {
    method: 'GET',
    redirect: 'follow',
  })
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
  return response;
};

const counter = async (movieID) => {
  const response = await getReservationsData(movieID)
    .then((result) => (!result.error ? result.length : 0))
    .catch(() => 0);
  return response;
};

const reservationCounter = (movieID) => {
  counter(movieID).then((count) => {
    popUpBox.querySelector('.reservationCounter').innerHTML = count;
  });
};

const finalCounter = (data) => (typeof (data) === 'object' ? data.length : 'invalid');

const Reservationspopup = (movieID) => {
  getMovieData(movieID).then((result) => {
    popUpBox.innerHTML = `
    <span class="closeReservation"><img src="https://img.icons8.com/doodle/48/000000/delete-sign.png"/></span>
    <div class="reservation-skeleton">
    <div class="reservation-film-info">
    <h2 class="popupTitle">${result.name}</h2>
    <img src="${result.image.medium}" class="reservationImg">
    <div >
    <ul id="moreDetails"></ul>
    </div>
    <button class="moreDetailsButton btn" type="submit">More details</button>
    </div>
    <div class="reservation-info">
    <h3 class="reservationsTitle">Reservations(<span class="reservationCounter">0</span>)</h3>
    <div class="reservationTable"></div>
    <form class="reservationForm">
      <h3>Add a reservation</h3>
      <input id="username" type="text" name="username" placeholder="Your name" required>
      <br>
      <input id="StartDate" type="date" name="StartDate" placeholder="Start date" required>
      <br>
      <input id="EndDate" type="date" name="EndDate" placeholder="End date" required>
      <br>
      <button class="reservationSubmit" type="submit">Submit</button>
    </form>
    </div>
    </div>
    `;
    reservationCounter(movieID);
    popUpBox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document
      .querySelector('.closeReservation')
      .addEventListener('click', () => {
        popUpBox.style.display = 'none';
        document.body.style.overflow = 'visible';
        popUpBox.innerHTML = '';
      });
    reservationsDisplay(movieID);
    const moreDetails = popUpBox.querySelector('#moreDetails');
    const moreDetailsButton = popUpBox.querySelector('.moreDetailsButton');
    moreDetailsButton.addEventListener('click', () => {
      moreDetailsButton.style.display = 'none';
      moreDetails.innerHTML = ` <li>Premiered: ${result.premiered}</li>
      <li>Ended: ${result.ended}</li>
      <li>Language: ${result.language}</li>
      <li>Type: ${result.type}</li>`;
    });
    const form = popUpBox.querySelector('.reservationForm');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const user = form.elements.username.value;
      const StartDate = form.elements.StartDate.value;
      const EndDate = form.elements.EndDate.value;
      postReservationsData({
        item_id: movieID,
        username: user,
        date_start: StartDate,
        date_end: EndDate,
      }).then(() => {
        reservationsDisplay(movieID);
        reservationCounter(movieID);
        form.reset();
      });
    });
  });
};





/***/ }),

/***/ "./src/images/netflix_official_logo_icon_168085.png":
/*!**********************************************************!*\
  !*** ./src/images/netflix_official_logo_icon_168085.png ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84684a3605f1ea32146c.png";

/***/ }),

/***/ "./src/images/pexels-nathan-engel-436413.jpg":
/*!***************************************************!*\
  !*** ./src/images/pexels-nathan-engel-436413.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4c32539bd8cc3c916f2.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
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

/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	

/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "tv-series-and-movies:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		

/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};

/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		

/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktv_series_and_movies"] = self["webpackChunktv_series_and_movies"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));

/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_interact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/interact */ "./src/modules/interact.js");
/* eslint-disable operator-linebreak */
/* eslint-disable no-undef */
/* eslint-disable object-curly-newline */

/* harmony import */ var _modules_get_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/get-api.js */ "./src/modules/get-api.js");
/* harmony import */ var _modules_interact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/interact.js */ "./src/modules/interact.js");
/* harmony import */ var _modules_reservation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/reservation.js */ "./src/modules/reservation.js");
/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/comment.js */ "./src/modules/comment.js");






const displayMovie = (movie, like = {}) => `<div class="card">
                    <div class="card-div">
                        <img class="card-img" src="${movie.image.medium}">
                    </div>
                    <div class="description">
                        <h3 class="title"> ${movie.name} </h3>
                        <p class="likes"> <i class="fas fa-heart like" data-id="${movie.id}"> <span class="num"> ${like} </span> </i></p>
                    </div>

                    <button class="btn" data-id="${movie.id}"> comments </button>

                    <button class="btn" data-id="${movie.id}"> reservations </button>

                    <button class="commentBtn btn" data-id="${movie.id}"> comments </button>

                    <button class="reservation btn" data-id="${movie.id}"> reservations </button>

   </div>`;

const listMovie = document.querySelector('.movies');
const moviesComponent = async () => {

  const likes = await (0,_modules_interact__WEBPACK_IMPORTED_MODULE_2__.getLikes)();
  listMovie.innerHTML = '';
  const list = await (0,_modules_get_api__WEBPACK_IMPORTED_MODULE_1__.getMovies)();
  (0,_modules_get_api__WEBPACK_IMPORTED_MODULE_1__.countMovies)(list);


  list.forEach((item) => {
    let count = 0;
    const num = likes.find((like) => item.id === Number(like.item_id));
    if (num !== undefined) {
      count = num.likes;
    } else {
      count = 0;
    }
    listMovie.innerHTML += displayMovie(item, count);
  });

  const like = document.querySelectorAll('.like');
  like.forEach((item) => {
    item.addEventListener('click', () => {
      const movieId = item.getAttribute('data-id');
      if (item.style.color !== 'pink') {
        item.style.color = 'pink';

        item.firstElementChild.innerHTML = Number(item.firstElementChild.innerHTML) + 1;
        (0,_modules_interact_js__WEBPACK_IMPORTED_MODULE_2__.addLike)(movieId);
      }
    });
  });

  const reservationButtons = document.querySelectorAll('.reservation');
  reservationButtons.forEach((item) => {
    item.addEventListener('click', () => {
      const movieId = item.getAttribute('data-id');
      (0,_modules_reservation_js__WEBPACK_IMPORTED_MODULE_3__.Reservationspopup)(movieId);
    });
  });


  const CommentButtons = document.querySelectorAll('.commentBtn');
  CommentButtons.forEach((item) => {
    item.addEventListener('click', () => {
      const movieId = item.getAttribute('data-id');
      (0,_modules_comment_js__WEBPACK_IMPORTED_MODULE_4__.Commentspopup)(movieId);
    });
  });

};

moviesComponent();

})();

/******/ })()
;


//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sa0lBQWtJLHlCQUF5QixJQUFJLElBQUks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RCxzQ0FBc0M7QUFDdEM7QUFDQSxxREFBcUQsbUJBQW1CO0FBQ3hFO0FBQ0E7QUFDQSw2Q0FBNkMsWUFBWTtBQUN6RCxrRkFBa0YsU0FBUyx3QkFBd0IsTUFBTTtBQUN6SDtBQUNBLDhEQUE4RCxTQUFTO0FBQ3ZFLCtEQUErRCxTQUFTO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsOERBQVE7QUFDOUI7QUFDQSxxQkFBcUIsOERBQVM7QUFDOUIsRUFBRSxnRUFBVztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkRBQU87QUFDZjtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwwRUFBaUI7QUFDdkIsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtFQUFhO0FBQ25CLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90di1zZXJpZXMtYW5kLW1vdmllcy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdHYtc2VyaWVzLWFuZC1tb3ZpZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3R2LXNlcmllcy1hbmQtbW92aWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90di1zZXJpZXMtYW5kLW1vdmllcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3R2LXNlcmllcy1hbmQtbW92aWVzLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3R2LXNlcmllcy1hbmQtbW92aWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3R2LXNlcmllcy1hbmQtbW92aWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90di1zZXJpZXMtYW5kLW1vdmllcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90di1zZXJpZXMtYW5kLW1vdmllcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90di1zZXJpZXMtYW5kLW1vdmllcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3R2LXNlcmllcy1hbmQtbW92aWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdHYtc2VyaWVzLWFuZC1tb3ZpZXMvLi9zcmMvbW9kdWxlcy9jb21tZW50LmpzIiwid2VicGFjazovL3R2LXNlcmllcy1hbmQtbW92aWVzLy4vc3JjL21vZHVsZXMvZ2V0LWFwaS5qcyIsIndlYnBhY2s6Ly90di1zZXJpZXMtYW5kLW1vdmllcy8uL3NyYy9tb2R1bGVzL2ludGVyYWN0LmpzIiwid2VicGFjazovL3R2LXNlcmllcy1hbmQtbW92aWVzLy4vc3JjL21vZHVsZXMvcmVzZXJ2YXRpb24uanMiLCJ3ZWJwYWNrOi8vdHYtc2VyaWVzLWFuZC1tb3ZpZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHYtc2VyaWVzLWFuZC1tb3ZpZXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdHYtc2VyaWVzLWFuZC1tb3ZpZXMvd2VicGFjay9ydW50aW1lL2NyZWF0ZSBmYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHYtc2VyaWVzLWFuZC1tb3ZpZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R2LXNlcmllcy1hbmQtbW92aWVzL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vdHYtc2VyaWVzLWFuZC1tb3ZpZXMvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3R2LXNlcmllcy1hbmQtbW92aWVzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdHYtc2VyaWVzLWFuZC1tb3ZpZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90di1zZXJpZXMtYW5kLW1vdmllcy93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vdHYtc2VyaWVzLWFuZC1tb3ZpZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90di1zZXJpZXMtYW5kLW1vdmllcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90di1zZXJpZXMtYW5kLW1vdmllcy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90di1zZXJpZXMtYW5kLW1vdmllcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvcGV4ZWxzLW5hdGhhbi1lbmdlbC00MzY0MTMuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvbmV0ZmxpeF9vZmZpY2lhbF9sb2dvX2ljb25fMTY4MDg1LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL0F2ZW5nZXJzLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFyY2hpdm8rQmxhY2smZmFtaWx5PUNvdXJpZXIrUHJpbWU6d2dodEA0MDA7NzAwJmZhbWlseT1MYXRvOndnaHRAMTAwOzMwMDs0MDA7OTAwJmZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzgwMCZmYW1pbHk9U291cmNlK0NvZGUrUHJvOndnaHRAMzAwOzQwMDs2MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Cb3dsYnkrT25lJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5lb25kZXJ0aGF3JmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxvZ28ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEyNXB4IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDI1cmVtO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4gaDEge1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICBjb2xvcjogcmdiKDE1OCwgMzMsIDMzKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQm93bGJ5IE9uZScsIGN1cnNpdmU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCA+IGxpIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDE4cHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHJnYmEoMTg2LCAxODYsIDYwLCAwLjkyKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIGxpIGEge1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDIyNSwgMCk7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC40cmVtO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMCByZ2IoMCwgMCwgMCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSBhOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDAgcmVkO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mbyB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mbyBsaSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHggNXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB1bCA+IGxpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBnYXA6IDEwJSA1JTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxJSA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgbWFyZ2luOiAxNXB4IDEwcHg7XFxyXFxuICB3aWR0aDogMThyZW07XFxyXFxuICBoZWlnaHQ6IDM1cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0MiwgMjQ2LCAxOTgsIDAuMzQ1KTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgcGFkZGluZzogNXB4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY29udGFpbiAhaW1wb3J0YW50O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDE5cHggNnB4IHJnYigxNCwgMTAsIDEwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgaDMge1xcclxcbiAgd2lkdGg6IDIyMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNjUsIDU0KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHAge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDYsIDE5OCk7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBwYWRkaW5nOiA4cHggMTVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4OCwgODgsIDg4KTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2IoMjQyLCAyNDYsIDE5OCk7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxyXFxufVxcclxcblxcclxcbi5saWtlcyB7XFxyXFxuICBwYWRkaW5nOiA1cHggNXB4O1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxuICBjb2xvcjogcmdiKDI0MCwgNDEsIDYpO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjQzLCA4OSwgNjIpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjIzKTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiByZXNlcnZhdGlvbiBzdHlsZSAqL1xcclxcbi5wb3BVcEJveCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDAgMiU7XFxyXFxuICBtYXJnaW46IDElIDQlIDElIDQlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjYyMyk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBUaXRsZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0Jvd2xieSBPbmUnLCBjdXJzaXZlO1xcclxcbiAgZm9udC1zaXplOiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VSZXNlcnZhdGlvbiBpbWcge1xcclxcbiAgd2lkdGg6IDQlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tc2tlbGV0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLXNrZWxldG9uIGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNjcsIDksIDkpO1xcclxcbiAgY29sb3I6IHJnYigxNjcsIDksIDkpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tc2tlbGV0b24gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHJnYigxNjcsIDksIDkpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tZmlsbS1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWZpbG0taW5mbyB1bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uc1RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24taW5mbyBpbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24taW5mbyBpbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24taW5mbyBidXR0b24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTY3LCA5LCA5KTtcXHJcXG4gIGNvbG9yOiByZ2IoMTY3LCA5LCA5KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1pbmZvIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uSW1nIHtcXHJcXG4gIHdpZHRoOiAyMHJlbTtcXHJcXG4gIGhlaWdodDogMjVyZW07XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNjcsIDksIDkpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25UYWJsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9yZURldGFpbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LWZhbWlseTogJ09wZW4gc2FucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxyXFxuICAucmVzZXJ2YXRpb24tc2tlbGV0b24ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBlbmQgb2YgcmVzZXJ2YXRpb24gc3R5bGUgKi9cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLHlEQUE4RDtFQUM5RCx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDhCQUE4QjtFQUM5Qix5REFBcUU7RUFDckUsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQix5REFBNkM7RUFDN0MsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VB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O0VBQ25CLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsb0NBQW9DO0VBQ3BDLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBLDZCQUE2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BcmNoaXZvK0JsYWNrJmZhbWlseT1Db3VyaWVyK1ByaW1lOndnaHRANDAwOzcwMCZmYW1pbHk9TGF0bzp3Z2h0QDEwMDszMDA7NDAwOzkwMCZmYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs4MDAmZmFtaWx5PVNvdXJjZStDb2RlK1Bybzp3Z2h0QDMwMDs0MDA7NjAwOzgwMDs5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Qm93bGJ5K09uZSZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OZW9uZGVydGhhdyZkaXNwbGF5PXN3YXAnKTtcXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvcGV4ZWxzLW5hdGhhbi1lbmdlbC00MzY0MTMuanBnKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbG9nbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgYm9yZGVyOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL25ldGZsaXhfb2ZmaWNpYWxfbG9nb19pY29uXzE2ODA4NS5wbmcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMjVweCA0MHB4O1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1hZ2VzL0F2ZW5nZXJzLmpwZWcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDI1cmVtO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4gaDEge1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICBjb2xvcjogcmdiKDE1OCwgMzMsIDMzKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQm93bGJ5IE9uZScsIGN1cnNpdmU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCA+IGxpIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDE4cHg7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBwIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHJnYmEoMTg2LCAxODYsIDYwLCAwLjkyKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIGxpIGEge1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDIyNSwgMCk7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC40cmVtO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMCByZ2IoMCwgMCwgMCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSBhOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDAgcmVkO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mbyB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mbyBsaSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHggNXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB1bCA+IGxpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZXMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBnYXA6IDEwJSA1JTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAxJSA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQge1xcclxcbiAgbWFyZ2luOiAxNXB4IDEwcHg7XFxyXFxuICB3aWR0aDogMThyZW07XFxyXFxuICBoZWlnaHQ6IDM1cmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI0MiwgMjQ2LCAxOTgsIDAuMzQ1KTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgcGFkZGluZzogNXB4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgb2JqZWN0LWZpdDogY29udGFpbiAhaW1wb3J0YW50O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDE5cHggNnB4IHJnYigxNCwgMTAsIDEwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgaDMge1xcclxcbiAgd2lkdGg6IDIyMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgNjUsIDU0KTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHAge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDYsIDE5OCk7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBwYWRkaW5nOiA4cHggMTVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4OCwgODgsIDg4KTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2IoMjQyLCAyNDYsIDE5OCk7XFxyXFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxyXFxufVxcclxcblxcclxcbi5saWtlcyB7XFxyXFxuICBwYWRkaW5nOiA1cHggNXB4O1xcclxcbiAgZm9udC1zaXplOiAxZW07XFxyXFxuICBjb2xvcjogcmdiKDI0MCwgNDEsIDYpO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjQzLCA4OSwgNjIpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdvcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjIzKTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiByZXNlcnZhdGlvbiBzdHlsZSAqL1xcclxcbi5wb3BVcEJveCB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDAgMiU7XFxyXFxuICBtYXJnaW46IDElIDQlIDElIDQlO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjYyMyk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBUaXRsZSB7XFxyXFxuICBmb250LWZhbWlseTogJ0Jvd2xieSBPbmUnLCBjdXJzaXZlO1xcclxcbiAgZm9udC1zaXplOiAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VSZXNlcnZhdGlvbiBpbWcge1xcclxcbiAgd2lkdGg6IDQlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tc2tlbGV0b24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLXNrZWxldG9uIGJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNjcsIDksIDkpO1xcclxcbiAgY29sb3I6IHJnYigxNjcsIDksIDkpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tc2tlbGV0b24gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHJnYigxNjcsIDksIDkpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tZmlsbS1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWZpbG0taW5mbyB1bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uc1RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWluZm8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24taW5mbyBpbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24taW5mbyBpbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24taW5mbyBidXR0b24ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMTY3LCA5LCA5KTtcXHJcXG4gIGNvbG9yOiByZ2IoMTY3LCA5LCA5KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1pbmZvIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uSW1nIHtcXHJcXG4gIHdpZHRoOiAyMHJlbTtcXHJcXG4gIGhlaWdodDogMjVyZW07XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNjcsIDksIDkpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25UYWJsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9yZURldGFpbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LWZhbWlseTogJ09wZW4gc2FucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KSB7XFxyXFxuICAucmVzZXJ2YXRpb24tc2tlbGV0b24ge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBlbmQgb2YgcmVzZXJ2YXRpb24gc3R5bGUgKi9cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uZnVzaW5nLWFycm93ICovXG5jb25zdCBmZXRjaCA9ICguLi5hcmdzKSA9PiBpbXBvcnQoJ25vZGUtZmV0Y2gnKS50aGVuKCh7IGRlZmF1bHQ6IGZldGNoIH0pID0+IGZldGNoKC4uLmFyZ3MpKTtcbmNvbnN0IG1vdmllVVJMID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnO1xuY29uc3QgcmVzZXJ2YXRpb25zVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLzN4NGJycVFUdXV0RWh2NWJ1cnF6L2NvbW1lbnRzLyc7XG4vLyBpZDogM3g0YnJxUVR1dXRFaHY1YnVycXpcbmNvbnN0IHBvcFVwQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQm94Jyk7XG5cbmNvbnN0IHBvc3RSZXNlcnZhdGlvbnNEYXRhID0gYXN5bmMgKHJhdykgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlc2VydmF0aW9uc1VSTCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD0gVVRGLTgnLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmF3KSxcbiAgfSlcbiAgICAudGhlbigocmVzKSA9PiByZXMudGV4dCgpKVxuICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmVycm9yID8geyBlcnJvcjogdHJ1ZSwgaW5mbzogZGF0YSB9IDogeyBlcnJvcjogZmFsc2UsIGluZm86IGRhdGEgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiAoeyBlcnJvcjogdHJ1ZSwgaW5mbzogZXJyb3IgfSkpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRSZXNlcnZhdGlvbnNEYXRhID0gYXN5bmMgKG1vdmllSWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtyZXNlcnZhdGlvbnNVUkx9P2l0ZW1faWQ9JHttb3ZpZUlkfWApLmNhdGNoKFxuICAgIChlcnIpID0+IGVycixcbiAgKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmNvbnN0IHJlc2VydmF0aW9uc0Rpc3BsYXkgPSAobW92aWVJZCkgPT4ge1xuICBwb3BVcEJveC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb25UYWJsZScpLmlubmVySFRNTCA9ICcnO1xuICBnZXRSZXNlcnZhdGlvbnNEYXRhKG1vdmllSWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBpZiAoIWRhdGEuZXJyb3IpIHtcbiAgICAgIGRhdGEuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgICBwb3BVcEJveC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICcucmVzZXJ2YXRpb25UYWJsZScsXG4gICAgICAgICkuaW5uZXJIVE1MICs9IGA8cD4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gfCAke2NvbW1lbnQudXNlcm5hbWV9IDogJHtjb21tZW50LmNvbW1lbnR9PC9wPmA7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9wVXBCb3gucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9uVGFibGUnKS5pbm5lckhUTUwgPSAnbm8gcmVzZXJ2YXRpb24geWV0ISc7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGdldE1vdmllRGF0YSA9IGFzeW5jIChtb3ZpZUlEKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7bW92aWVVUkx9LyR7bW92aWVJRH1gLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgY291bnRlciA9IGFzeW5jIChtb3ZpZUlEKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmVzZXJ2YXRpb25zRGF0YShtb3ZpZUlEKVxuICAgIC50aGVuKChyZXN1bHQpID0+ICghcmVzdWx0LmVycm9yID8gcmVzdWx0Lmxlbmd0aCA6IDApKVxuICAgIC5jYXRjaCgoKSA9PiAwKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcmVzZXJ2YXRpb25Db3VudGVyID0gKG1vdmllSUQpID0+IHtcbiAgY291bnRlcihtb3ZpZUlEKS50aGVuKChjb3VudCkgPT4ge1xuICAgIHBvcFVwQm94LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvbkNvdW50ZXInKS5pbm5lckhUTUwgPSBjb3VudDtcbiAgfSk7XG59O1xuXG5jb25zdCBDb21tZW50Q291bnRlciA9IChkYXRhKSA9PiB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgPyBkYXRhLmxlbmd0aCA6ICdpbnZhbGlkJztcblxuY29uc3QgQ29tbWVudHNwb3B1cCA9IChtb3ZpZUlEKSA9PiB7XG4gIGdldE1vdmllRGF0YShtb3ZpZUlEKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICBwb3BVcEJveC5pbm5lckhUTUwgPSBgXG4gICAgPHNwYW4gY2xhc3M9XCJjbG9zZVJlc2VydmF0aW9uXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2Rvb2RsZS80OC8wMDAwMDAvZGVsZXRlLXNpZ24ucG5nXCIvPjwvc3Bhbj5cbiAgICA8ZGl2IGNsYXNzPVwicmVzZXJ2YXRpb24tc2tlbGV0b25cIj5cbiAgICA8ZGl2IGNsYXNzPVwicmVzZXJ2YXRpb24tZmlsbS1pbmZvXCI+XG4gICAgPGgyIGNsYXNzPVwicG9wdXBUaXRsZVwiPiR7cmVzdWx0Lm5hbWV9PC9oMj5cbiAgICA8aW1nIHNyYz1cIiR7cmVzdWx0LmltYWdlLm1lZGl1bX1cIiBjbGFzcz1cInJlc2VydmF0aW9uSW1nXCI+XG4gICAgPGRpdiA+XG4gICAgPHVsIGlkPVwibW9yZURldGFpbHNcIj48L3VsPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gY2xhc3M9XCJtb3JlRGV0YWlsc0J1dHRvbiBidG5cIiB0eXBlPVwic3VibWl0XCI+TW9yZSBkZXRhaWxzPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJlc2VydmF0aW9uLWluZm9cIj5cbiAgICA8aDMgY2xhc3M9XCJyZXNlcnZhdGlvbnNUaXRsZVwiPlJlc2VydmF0aW9ucyg8c3BhbiBjbGFzcz1cInJlc2VydmF0aW9uQ291bnRlclwiPjA8L3NwYW4+KTwvaDM+XG4gICAgPGRpdiBjbGFzcz1cInJlc2VydmF0aW9uVGFibGVcIj48L2Rpdj5cbiAgICA8Zm9ybSBjbGFzcz1cInJlc2VydmF0aW9uRm9ybVwiPlxuICAgICAgPGgzPkFkZCBhIHJlc2VydmF0aW9uPC9oMz5cbiAgICAgIDxpbnB1dCBpZD1cInVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIHJlcXVpcmVkPlxuICAgICAgPGJyPlxuICAgICAgPHRleHRhcmVhIGlkPVwiY29tbWVudEFyZWFcIiBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIiBuYW1lPVwiY29tbWVudEFyZWFcIiByZXF1aXJlZCBtaW5sZW5ndGg9XCIxXCI+PC90ZXh0YXJlYT5cbiAgICAgIDxicj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJyZXNlcnZhdGlvblN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgICByZXNlcnZhdGlvbkNvdW50ZXIobW92aWVJRCk7XG4gICAgcG9wVXBCb3guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuY2xvc2VSZXNlcnZhdGlvbicpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHBvcFVwQm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgICAgIHBvcFVwQm94LmlubmVySFRNTCA9ICcnO1xuICAgICAgfSk7XG4gICAgcmVzZXJ2YXRpb25zRGlzcGxheShtb3ZpZUlEKTtcbiAgICBjb25zdCBtb3JlRGV0YWlscyA9IHBvcFVwQm94LnF1ZXJ5U2VsZWN0b3IoJyNtb3JlRGV0YWlscycpO1xuICAgIGNvbnN0IG1vcmVEZXRhaWxzQnV0dG9uID0gcG9wVXBCb3gucXVlcnlTZWxlY3RvcignLm1vcmVEZXRhaWxzQnV0dG9uJyk7XG4gICAgbW9yZURldGFpbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtb3JlRGV0YWlsc0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgbW9yZURldGFpbHMuaW5uZXJIVE1MID0gYCA8bGk+UHJlbWllcmVkOiAke3Jlc3VsdC5wcmVtaWVyZWR9PC9saT5cbiAgICAgIDxsaT5FbmRlZDogJHtyZXN1bHQuZW5kZWR9PC9saT5cbiAgICAgIDxsaT5MYW5ndWFnZTogJHtyZXN1bHQubGFuZ3VhZ2V9PC9saT5cbiAgICAgIDxsaT5UeXBlOiAke3Jlc3VsdC50eXBlfTwvbGk+YDtcbiAgICB9KTtcbiAgICBjb25zdCBmb3JtID0gcG9wVXBCb3gucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9uRm9ybScpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdXNlciA9IGZvcm0uZWxlbWVudHMudXNlcm5hbWUudmFsdWU7XG4gICAgICBjb25zdCBjb21tZW50QXJlYSA9IGZvcm0uZWxlbWVudHMuY29tbWVudEFyZWEudmFsdWU7XG4gICAgICBwb3N0UmVzZXJ2YXRpb25zRGF0YSh7XG4gICAgICAgIGl0ZW1faWQ6IG1vdmllSUQsXG4gICAgICAgIHVzZXJuYW1lOiB1c2VyLFxuICAgICAgICBjb21tZW50OiBjb21tZW50QXJlYSxcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICByZXNlcnZhdGlvbnNEaXNwbGF5KG1vdmllSUQpO1xuICAgICAgICByZXNlcnZhdGlvbkNvdW50ZXIobW92aWVJRCk7XG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IENvbW1lbnRzcG9wdXAsIENvbW1lbnRDb3VudGVyIH07IiwiZXhwb3J0IGNvbnN0IGdldE1vdmllcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzJyk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRNb3ZpZUJ5SWQgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzLyR7aWR9YCk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb3VudE1vdmllcyA9IChtb3ZpZXMpID0+IHtcclxuICBpZiAobW92aWVzLmxlbmd0aCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50LW1vdmllcycpLmlubmVySFRNTCA9IGAke21vdmllcy5sZW5ndGh9YDtcclxuICB9XHJcbn07IiwiLyogZXNsaW50LWRpc2FibGUgb3BlcmF0b3ItbGluZWJyZWFrICovXHJcbmV4cG9ydCBjb25zdCBiYXNlVVJMID1cclxuICAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpLyc7XHJcbmV4cG9ydCBjb25zdCBhcHBJZCA9ICdieWczS3R2cU9obWQzWHQ5QXh1NSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkTGlrZSA9IGFzeW5jIChpdGVtSWQpID0+IHtcclxuICBmZXRjaChgJHtiYXNlVVJMfWFwcHMvJHthcHBJZH0vbGlrZXNgLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGl0ZW1JZCB9KSxcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9YXBwcy8ke2FwcElkfS9saWtlc2AsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25mdXNpbmctYXJyb3cgKi9cbmNvbnN0IGZldGNoID0gKC4uLmFyZ3MpID0+IGltcG9ydCgnbm9kZS1mZXRjaCcpLnRoZW4oKHsgZGVmYXVsdDogZmV0Y2ggfSkgPT4gZmV0Y2goLi4uYXJncykpO1xuY29uc3QgbW92aWVVUkwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cyc7XG5jb25zdCByZXNlcnZhdGlvbnNVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvM3g0YnJxUVR1dXRFaHY1YnVycXovcmVzZXJ2YXRpb25zLyc7XG4vLyBpZDogM3g0YnJxUVR1dXRFaHY1YnVycXpcbmNvbnN0IHBvcFVwQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQm94Jyk7XG5cbmNvbnN0IHBvc3RSZXNlcnZhdGlvbnNEYXRhID0gYXN5bmMgKHJhdykgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlc2VydmF0aW9uc1VSTCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD0gVVRGLTgnLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmF3KSxcbiAgfSlcbiAgICAudGhlbigocmVzKSA9PiByZXMudGV4dCgpKVxuICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmVycm9yID8geyBlcnJvcjogdHJ1ZSwgaW5mbzogZGF0YSB9IDogeyBlcnJvcjogZmFsc2UsIGluZm86IGRhdGEgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiAoeyBlcnJvcjogdHJ1ZSwgaW5mbzogZXJyb3IgfSkpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRSZXNlcnZhdGlvbnNEYXRhID0gYXN5bmMgKG1vdmllSWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtyZXNlcnZhdGlvbnNVUkx9P2l0ZW1faWQ9JHttb3ZpZUlkfWApLmNhdGNoKFxuICAgIChlcnIpID0+IGVycixcbiAgKTtcbiAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn07XG5cbmNvbnN0IHJlc2VydmF0aW9uc0Rpc3BsYXkgPSAobW92aWVJZCkgPT4ge1xuICBwb3BVcEJveC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb25UYWJsZScpLmlubmVySFRNTCA9ICcnO1xuICBnZXRSZXNlcnZhdGlvbnNEYXRhKG1vdmllSWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBpZiAoIWRhdGEuZXJyb3IpIHtcbiAgICAgIGRhdGEuZm9yRWFjaCgocmVzZXJ2ZSkgPT4ge1xuICAgICAgICBwb3BVcEJveC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICcucmVzZXJ2YXRpb25UYWJsZScsXG4gICAgICAgICkuaW5uZXJIVE1MICs9IGA8cD4gJHtyZXNlcnZlLmRhdGVfc3RhcnR9IC0gJHtyZXNlcnZlLmRhdGVfZW5kfSBieSAke3Jlc2VydmUudXNlcm5hbWV9PC9wPmA7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9wVXBCb3gucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9uVGFibGUnKS5pbm5lckhUTUwgPSAnbm8gcmVzZXJ2YXRpb24geWV0ISc7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGdldE1vdmllRGF0YSA9IGFzeW5jIChtb3ZpZUlEKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7bW92aWVVUkx9LyR7bW92aWVJRH1gLCB7XG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gIH0pXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGVycm9yKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgY291bnRlciA9IGFzeW5jIChtb3ZpZUlEKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmVzZXJ2YXRpb25zRGF0YShtb3ZpZUlEKVxuICAgIC50aGVuKChyZXN1bHQpID0+ICghcmVzdWx0LmVycm9yID8gcmVzdWx0Lmxlbmd0aCA6IDApKVxuICAgIC5jYXRjaCgoKSA9PiAwKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcmVzZXJ2YXRpb25Db3VudGVyID0gKG1vdmllSUQpID0+IHtcbiAgY291bnRlcihtb3ZpZUlEKS50aGVuKChjb3VudCkgPT4ge1xuICAgIHBvcFVwQm94LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvbkNvdW50ZXInKS5pbm5lckhUTUwgPSBjb3VudDtcbiAgfSk7XG59O1xuXG5jb25zdCBmaW5hbENvdW50ZXIgPSAoZGF0YSkgPT4gdHlwZW9mIGRhdGEgPT09ICdvYmplY3QnID8gZGF0YS5sZW5ndGggOiAnaW52YWxpZCc7XG5cbmNvbnN0IFJlc2VydmF0aW9uc3BvcHVwID0gKG1vdmllSUQpID0+IHtcbiAgZ2V0TW92aWVEYXRhKG1vdmllSUQpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIHBvcFVwQm94LmlubmVySFRNTCA9IGBcbiAgICA8c3BhbiBjbGFzcz1cImNsb3NlUmVzZXJ2YXRpb25cIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vZG9vZGxlLzQ4LzAwMDAwMC9kZWxldGUtc2lnbi5wbmdcIi8+PC9zcGFuPlxuICAgIDxkaXYgY2xhc3M9XCJyZXNlcnZhdGlvbi1za2VsZXRvblwiPlxuICAgIDxkaXYgY2xhc3M9XCJyZXNlcnZhdGlvbi1maWxtLWluZm9cIj5cbiAgICA8aDIgY2xhc3M9XCJwb3B1cFRpdGxlXCI+JHtyZXN1bHQubmFtZX08L2gyPlxuICAgIDxpbWcgc3JjPVwiJHtyZXN1bHQuaW1hZ2UubWVkaXVtfVwiIGNsYXNzPVwicmVzZXJ2YXRpb25JbWdcIj5cbiAgICA8ZGl2ID5cbiAgICA8dWwgaWQ9XCJtb3JlRGV0YWlsc1wiPjwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBjbGFzcz1cIm1vcmVEZXRhaWxzQnV0dG9uIGJ0blwiIHR5cGU9XCJzdWJtaXRcIj5Nb3JlIGRldGFpbHM8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmVzZXJ2YXRpb24taW5mb1wiPlxuICAgIDxoMyBjbGFzcz1cInJlc2VydmF0aW9uc1RpdGxlXCI+UmVzZXJ2YXRpb25zKDxzcGFuIGNsYXNzPVwicmVzZXJ2YXRpb25Db3VudGVyXCI+MDwvc3Bhbj4pPC9oMz5cbiAgICA8ZGl2IGNsYXNzPVwicmVzZXJ2YXRpb25UYWJsZVwiPjwvZGl2PlxuICAgIDxmb3JtIGNsYXNzPVwicmVzZXJ2YXRpb25Gb3JtXCI+XG4gICAgICA8aDM+QWRkIGEgcmVzZXJ2YXRpb248L2gzPlxuICAgICAgPGlucHV0IGlkPVwidXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICA8YnI+XG4gICAgICA8aW5wdXQgaWQ9XCJTdGFydERhdGVcIiB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJTdGFydERhdGVcIiBwbGFjZWhvbGRlcj1cIlN0YXJ0IGRhdGVcIiByZXF1aXJlZD5cbiAgICAgIDxicj5cbiAgICAgIDxpbnB1dCBpZD1cIkVuZERhdGVcIiB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJFbmREYXRlXCIgcGxhY2Vob2xkZXI9XCJFbmQgZGF0ZVwiIHJlcXVpcmVkPlxuICAgICAgPGJyPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlc2VydmF0aW9uU3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICAgIHJlc2VydmF0aW9uQ291bnRlcihtb3ZpZUlEKTtcbiAgICBwb3BVcEJveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZVJlc2VydmF0aW9uJylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcG9wVXBCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICAgICAgcG9wVXBCb3guaW5uZXJIVE1MID0gJyc7XG4gICAgICB9KTtcbiAgICByZXNlcnZhdGlvbnNEaXNwbGF5KG1vdmllSUQpO1xuICAgIGNvbnN0IG1vcmVEZXRhaWxzID0gcG9wVXBCb3gucXVlcnlTZWxlY3RvcignI21vcmVEZXRhaWxzJyk7XG4gICAgY29uc3QgbW9yZURldGFpbHNCdXR0b24gPSBwb3BVcEJveC5xdWVyeVNlbGVjdG9yKCcubW9yZURldGFpbHNCdXR0b24nKTtcbiAgICBtb3JlRGV0YWlsc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG1vcmVEZXRhaWxzQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBtb3JlRGV0YWlscy5pbm5lckhUTUwgPSBgIDxsaT5QcmVtaWVyZWQ6ICR7cmVzdWx0LnByZW1pZXJlZH08L2xpPlxuICAgICAgPGxpPkVuZGVkOiAke3Jlc3VsdC5lbmRlZH08L2xpPlxuICAgICAgPGxpPkxhbmd1YWdlOiAke3Jlc3VsdC5sYW5ndWFnZX08L2xpPlxuICAgICAgPGxpPlR5cGU6ICR7cmVzdWx0LnR5cGV9PC9saT5gO1xuICAgIH0pO1xuICAgIGNvbnN0IGZvcm0gPSBwb3BVcEJveC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb25Gb3JtJyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB1c2VyID0gZm9ybS5lbGVtZW50cy51c2VybmFtZS52YWx1ZTtcbiAgICAgIGNvbnN0IFN0YXJ0RGF0ZSA9IGZvcm0uZWxlbWVudHMuU3RhcnREYXRlLnZhbHVlO1xuICAgICAgY29uc3QgRW5kRGF0ZSA9IGZvcm0uZWxlbWVudHMuRW5kRGF0ZS52YWx1ZTtcbiAgICAgIHBvc3RSZXNlcnZhdGlvbnNEYXRhKHtcbiAgICAgICAgaXRlbV9pZDogbW92aWVJRCxcbiAgICAgICAgdXNlcm5hbWU6IHVzZXIsXG4gICAgICAgIGRhdGVfc3RhcnQ6IFN0YXJ0RGF0ZSxcbiAgICAgICAgZGF0ZV9lbmQ6IEVuZERhdGUsXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgcmVzZXJ2YXRpb25zRGlzcGxheShtb3ZpZUlEKTtcbiAgICAgICAgcmVzZXJ2YXRpb25Db3VudGVyKG1vdmllSUQpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBSZXNlcnZhdGlvbnNwb3B1cCwgZmluYWxDb3VudGVyIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5tYWluLmpzXCI7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInR2LXNlcmllcy1hbmQtbW92aWVzOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdDtcblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblxufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3R2X3Nlcmllc19hbmRfbW92aWVzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3R2X3Nlcmllc19hbmRfbW92aWVzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGdldE1vdmllcywgY291bnRNb3ZpZXMgfSBmcm9tICcuL21vZHVsZXMvZ2V0LWFwaS5qcyc7XG5pbXBvcnQgeyBnZXRMaWtlcywgYWRkTGlrZSB9IGZyb20gJy4vbW9kdWxlcy9pbnRlcmFjdC5qcyc7XG5pbXBvcnQgeyBSZXNlcnZhdGlvbnNwb3B1cCB9IGZyb20gJy4vbW9kdWxlcy9yZXNlcnZhdGlvbi5qcyc7XG5pbXBvcnQgeyBDb21tZW50c3BvcHVwIH0gZnJvbSAnLi9tb2R1bGVzL2NvbW1lbnQuanMnO1xuXG5jb25zdCBkaXNwbGF5TW92aWUgPSAobW92aWUsIGxpa2UgPSB7fSkgPT4gYDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1nXCIgc3JjPVwiJHttb3ZpZS5pbWFnZS5tZWRpdW19XCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRpdGxlXCI+ICR7bW92aWUubmFtZX0gPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGlrZXNcIj4gPGkgY2xhc3M9XCJmYXMgZmEtaGVhcnQgbGlrZVwiIGRhdGEtaWQ9XCIke21vdmllLmlkfVwiPiA8c3BhbiBjbGFzcz1cIm51bVwiPiAke2xpa2V9IDwvc3Bhbj4gPC9pPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjb21tZW50QnRuIGJ0blwiIGRhdGEtaWQ9XCIke21vdmllLmlkfVwiPiBjb21tZW50cyA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlc2VydmF0aW9uIGJ0blwiIGRhdGEtaWQ9XCIke21vdmllLmlkfVwiPiByZXNlcnZhdGlvbnMgPC9idXR0b24+XG4gICA8L2Rpdj5gO1xuXG5jb25zdCBsaXN0TW92aWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWVzJyk7XG5jb25zdCBtb3ZpZXNDb21wb25lbnQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxpa2VzID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgbGlzdE1vdmllLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBsaXN0ID0gYXdhaXQgZ2V0TW92aWVzKCk7XG4gIGNvdW50TW92aWVzKGxpc3QpO1xuICBsaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBsZXQgY291bnQgPSAwO1xuICAgIGNvbnN0IG51bSA9IGxpa2VzLmZpbmQoKGxpa2UpID0+IGl0ZW0uaWQgPT09IE51bWJlcihsaWtlLml0ZW1faWQpKTtcbiAgICBpZiAobnVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvdW50ID0gbnVtLmxpa2VzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCA9IDA7XG4gICAgfVxuICAgIGxpc3RNb3ZpZS5pbm5lckhUTUwgKz0gZGlzcGxheU1vdmllKGl0ZW0sIGNvdW50KTtcbiAgfSk7XG5cbiAgY29uc3QgbGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlJyk7XG4gIGxpa2UuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBtb3ZpZUlkID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgIGlmIChpdGVtLnN0eWxlLmNvbG9yICE9PSAncGluaycpIHtcbiAgICAgICAgaXRlbS5zdHlsZS5jb2xvciA9ICdwaW5rJztcbiAgICAgICAgaXRlbS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgPSBOdW1iZXIoaXRlbS5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwpICsgMTtcbiAgICAgICAgYWRkTGlrZShtb3ZpZUlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgcmVzZXJ2YXRpb25CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc2VydmF0aW9uJyk7XG4gIHJlc2VydmF0aW9uQnV0dG9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IG1vdmllSWQgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgUmVzZXJ2YXRpb25zcG9wdXAobW92aWVJZCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IENvbW1lbnRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnRCdG4nKTtcbiAgQ29tbWVudEJ1dHRvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBtb3ZpZUlkID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgIENvbW1lbnRzcG9wdXAobW92aWVJZCk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxubW92aWVzQ29tcG9uZW50KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=



