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
                    <button class="commentBtn btn" data-id="${movie.id}"> comments </button>
                    <button class="reservation btn" data-id="${movie.id}"> reservations </button>
   </div>`;

const listMovie = document.querySelector('.movies');
const moviesComponent = async () => {
  const likes = await (0,_modules_interact_js__WEBPACK_IMPORTED_MODULE_2__.getLikes)();
  listMovie.innerHTML = '';
  const list = await (0,_modules_get_api_js__WEBPACK_IMPORTED_MODULE_1__.getMovies)();
  (0,_modules_get_api_js__WEBPACK_IMPORTED_MODULE_1__.countMovies)(list);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxV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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGcUI7QUFDeUM7QUFDSjtBQUNHO0FBQ1I7O0FBRXJELHNDQUFzQztBQUN0QztBQUNBLHFEQUFxRCxtQkFBbUI7QUFDeEU7QUFDQTtBQUNBLDZDQUE2QyxZQUFZO0FBQ3pELGtGQUFrRixTQUFTLHdCQUF3QixNQUFNO0FBQ3pIO0FBQ0EsOERBQThELFNBQVM7QUFDdkUsK0RBQStELFNBQVM7QUFDeEU7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiw4REFBUTtBQUM5QjtBQUNBLHFCQUFxQiw4REFBUztBQUM5QixFQUFFLGdFQUFXO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw2REFBTztBQUNmO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDBFQUFpQjtBQUN2QixLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sa0VBQWE7QUFDbkIsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3R2LXNlcmllcy1hbmQtbW92aWVzLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90di1zZXJpZXMtYW5kLW1vdmllcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdHYtc2VyaWVzLWFuZC1tb3ZpZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3R2LXNlcmllcy1hbmQtbW92aWVzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdHYtc2VyaWVzLWFuZC1tb3ZpZXMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdHYtc2VyaWVzLWFuZC1tb3ZpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdHYtc2VyaWVzLWFuZC1tb3ZpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3R2LXNlcmllcy1hbmQtbW92aWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3R2LXNlcmllcy1hbmQtbW92aWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3R2LXNlcmllcy1hbmQtbW92aWVzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdHYtc2VyaWVzLWFuZC1tb3ZpZXMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90di1zZXJpZXMtYW5kLW1vdmllcy8uL3NyYy9tb2R1bGVzL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vdHYtc2VyaWVzLWFuZC1tb3ZpZXMvLi9zcmMvbW9kdWxlcy9nZXQtYXBpLmpzIiwid2VicGFjazovL3R2LXNlcmllcy1hbmQtbW92aWVzLy4vc3JjL21vZHVsZXMvaW50ZXJhY3QuanMiLCJ3ZWJwYWNrOi8vdHYtc2VyaWVzLWFuZC1tb3ZpZXMvLi9zcmMvbW9kdWxlcy9yZXNlcnZhdGlvbi5qcyIsIndlYnBhY2s6Ly90di1zZXJpZXMtYW5kLW1vdmllcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90di1zZXJpZXMtYW5kLW1vdmllcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90di1zZXJpZXMtYW5kLW1vdmllcy93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90di1zZXJpZXMtYW5kLW1vdmllcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHYtc2VyaWVzLWFuZC1tb3ZpZXMvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly90di1zZXJpZXMtYW5kLW1vdmllcy93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vdHYtc2VyaWVzLWFuZC1tb3ZpZXMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90di1zZXJpZXMtYW5kLW1vdmllcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R2LXNlcmllcy1hbmQtbW92aWVzL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly90di1zZXJpZXMtYW5kLW1vdmllcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3R2LXNlcmllcy1hbmQtbW92aWVzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3R2LXNlcmllcy1hbmQtbW92aWVzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3R2LXNlcmllcy1hbmQtbW92aWVzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9wZXhlbHMtbmF0aGFuLWVuZ2VsLTQzNjQxMy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9uZXRmbGl4X29mZmljaWFsX2xvZ29faWNvbl8xNjgwODUucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BcmNoaXZvK0JsYWNrJmZhbWlseT1Db3VyaWVyK1ByaW1lOndnaHRANDAwOzcwMCZmYW1pbHk9TGF0bzp3Z2h0QDEwMDszMDA7NDAwOzkwMCZmYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs4MDAmZmFtaWx5PVNvdXJjZStDb2RlK1Bybzp3Z2h0QDMwMDs0MDA7NjAwOzgwMDs5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Qm93bGJ5K09uZSZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OZW9uZGVydGhhdyZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0LCAxMCwgMTApO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxvZ28ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEyNXB4IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAyNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYWluIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcclxcbiAgY29sb3I6IHJnYigxNDksIDMyLCAzMik7XFxyXFxuICBmb250LWZhbWlseTogJ0Jvd2xieSBPbmUnLCBjdXJzaXZlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwgPiBsaSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxOHB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcCBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2JhKDE4NiwgMTg2LCA2MCwgMC45Mik7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSBhIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAyMjUsIDApO1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMCByZ2IoMCwgMCwgMCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSBhOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDAgcmVkO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5pbmZvIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5pbmZvIGxpIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIHBhZGRpbmc6IDVweCA1cHg7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHVsID4gbGk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gIGdhcDogMTAlIDUlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDElIDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBtYXJnaW46IDE1cHggMTBweDtcXHJcXG4gIHdpZHRoOiAxOHJlbTtcXHJcXG4gIGhlaWdodDogMzVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQyLCAyNDYsIDE5OCwgMC4zNDUpO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBwYWRkaW5nOiA1cHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb250YWluICFpbXBvcnRhbnQ7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTlweCA2cHggcmdiKDE0LCAxMCwgMTApO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBoMyB7XFxyXFxuICB3aWR0aDogMjIwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA2NSwgNTQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24gcCB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0NiwgMTk4KTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCA4OCwgODgpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHJnYigyNDIsIDI0NiwgMTk4KTtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzIHtcXHJcXG4gIHBhZGRpbmc6IDVweCA1cHg7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMjQwLCA0MSwgNik7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXM6aG92ZXIge1xcclxcbiAgY29sb3I6IHJnYigyNDMsIDg5LCA2Mik7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42MjMpO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIHJlc2VydmF0aW9uIHN0eWxlICovXFxyXFxuLnBvcFVwQm94IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMCAyJTtcXHJcXG4gIG1hcmdpbjogMSUgNCUgMSUgNCU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuNjIzKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wb3B1cFRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQm93bGJ5IE9uZScsIGN1cnNpdmU7XFxyXFxuICBmb250LXNpemU6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZVJlc2VydmF0aW9uIGltZyB7XFxyXFxuICB3aWR0aDogNCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1za2VsZXRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tc2tlbGV0b24gYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE2NywgOSwgOSk7XFxyXFxuICBjb2xvcjogcmdiKDE2NywgOSwgOSk7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1pbmZvIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNjcsIDksIDkpO1xcclxcbiAgY29sb3I6IHJnYigxNjcsIDksIDkpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLXNrZWxldG9uIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2IoMTY3LCA5LCA5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWZpbG0taW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1maWxtLWluZm8gdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbnNUaXRsZSB7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWluZm8gaW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWluZm8gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWluZm8gdGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWluZm8gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWluZm8gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25JbWcge1xcclxcbiAgd2lkdGg6IDIwcmVtO1xcclxcbiAgaGVpZ2h0OiAyNXJlbTtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE2NywgOSwgOSk7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvblRhYmxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNtb3JlRGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXHJcXG4gIC5yZXNlcnZhdGlvbi1za2VsZXRvbiB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIGVuZCBvZiByZXNlcnZhdGlvbiBzdHlsZSAqL1xcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIseURBQThEO0VBQzlELHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDhCQUE4QjtFQUM5Qix5REFBcUU7RUFDckUsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixzQ0FBc0M7RUFDdEMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdDQUFnQztFQUNoQyxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQ0FBc0M7RUFDdEMsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixPQUFPO0VBQ1AsUUFBUTtFQUNSLE1BQU07RUFDTixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsb0NBQW9DO0VBQ3BDLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUEsNkJBQTZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFyY2hpdm8rQmxhY2smZmFtaWx5PUNvdXJpZXIrUHJpbWU6d2dodEA0MDA7NzAwJmZhbWlseT1MYXRvOndnaHRAMTAwOzMwMDs0MDA7OTAwJmZhbWlseT1PcGVuK1NhbnM6d2dodEAzMDA7NDAwOzgwMCZmYW1pbHk9U291cmNlK0NvZGUrUHJvOndnaHRAMzAwOzQwMDs2MDA7ODAwOzkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Cb3dsYnkrT25lJmRpc3BsYXk9c3dhcCcpO1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5lb25kZXJ0aGF3JmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy9wZXhlbHMtbmF0aGFuLWVuZ2VsLTQzNjQxMy5qcGcpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNCwgMTAsIDEwKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogMTUwcHg7XFxyXFxuICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9pbWFnZXMvbmV0ZmxpeF9vZmZpY2lhbF9sb2dvX2ljb25fMTY4MDg1LnBuZyk7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEyNXB4IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAyNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tYWluIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xcclxcbiAgY29sb3I6IHJnYigxNDksIDMyLCAzMik7XFxyXFxuICBmb250LWZhbWlseTogJ0Jvd2xieSBPbmUnLCBjdXJzaXZlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgdWwgPiBsaSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxOHB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgcCBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2JhKDE4NiwgMTg2LCA2MCwgMC45Mik7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSBhIHtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAyMjUsIDApO1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMCByZ2IoMCwgMCwgMCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCBsaSBhOmhvdmVyIHtcXHJcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDAgcmVkO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XFxyXFxufVxcclxcblxcclxcbi5pbmZvIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5pbmZvIGxpIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIHBhZGRpbmc6IDVweCA1cHg7XFxyXFxuICBmb250LXNpemU6IDEuMmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHVsID4gbGk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gIGdhcDogMTAlIDUlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDElIDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICBtYXJnaW46IDE1cHggMTBweDtcXHJcXG4gIHdpZHRoOiAxOHJlbTtcXHJcXG4gIGhlaWdodDogMzVyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjQyLCAyNDYsIDE5OCwgMC4zNDUpO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBwYWRkaW5nOiA1cHggNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvYmplY3QtZml0OiBjb250YWluICFpbXBvcnRhbnQ7XFxyXFxuICBib3gtc2hhZG93OiAwIDAgMTlweCA2cHggcmdiKDE0LCAxMCwgMTApO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCBoMyB7XFxyXFxuICB3aWR0aDogMjIwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCA2NSwgNTQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24gcCB7XFxyXFxuICB3aWR0aDogMzAlO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0NiwgMTk4KTtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg4LCA4OCwgODgpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY29sb3I6IHJnYigyNDIsIDI0NiwgMTk4KTtcXHJcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDFzO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnb3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2VzIHtcXHJcXG4gIHBhZGRpbmc6IDVweCA1cHg7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIGNvbG9yOiByZ2IoMjQwLCA0MSwgNik7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZXM6aG92ZXIge1xcclxcbiAgY29sb3I6IHJnYigyNDMsIDg5LCA2Mik7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDgwcHg7XFxyXFxuICBmb250LWZhbWlseTogJ29wZW4gc2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42MjMpO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi8qIHJlc2VydmF0aW9uIHN0eWxlICovXFxyXFxuLnBvcFVwQm94IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMCAyJTtcXHJcXG4gIG1hcmdpbjogMSUgNCUgMSUgNCU7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuNjIzKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5wb3B1cFRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQm93bGJ5IE9uZScsIGN1cnNpdmU7XFxyXFxuICBmb250LXNpemU6IDM1cHg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZVJlc2VydmF0aW9uIGltZyB7XFxyXFxuICB3aWR0aDogNCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1za2VsZXRvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tc2tlbGV0b24gYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE2NywgOSwgOSk7XFxyXFxuICBjb2xvcjogcmdiKDE2NywgOSwgOSk7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1pbmZvIGJ1dHRvbiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxNjcsIDksIDkpO1xcclxcbiAgY29sb3I6IHJnYigxNjcsIDksIDkpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIHNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLXNrZWxldG9uIGJ1dHRvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2IoMTY3LCA5LCA5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWZpbG0taW5mbyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1maWxtLWluZm8gdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbnNUaXRsZSB7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1pbmZvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWluZm8gaW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWluZm8gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWluZm8gdGV4dGFyZWEge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWluZm8gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWluZm8gYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25JbWcge1xcclxcbiAgd2lkdGg6IDIwcmVtO1xcclxcbiAgaGVpZ2h0OiAyNXJlbTtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDE2NywgOSwgOSk7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvblRhYmxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNtb3JlRGV0YWlscyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBzYW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcXHJcXG4gIC5yZXNlcnZhdGlvbi1za2VsZXRvbiB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIGVuZCBvZiByZXNlcnZhdGlvbiBzdHlsZSAqL1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBmZXRjaCA9ICguLi5hcmdzKSA9PiBpbXBvcnQoJ25vZGUtZmV0Y2gnKS50aGVuKCh7IGRlZmF1bHQ6IGZldGNoIH0pID0+IGZldGNoKC4uLmFyZ3MpKTtcbmNvbnN0IG1vdmllVVJMID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2hvd3MnO1xuY29uc3QgY29tbWVudHNVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvM3g0YnJxUVR1dXRFaHY1YnVycXovY29tbWVudHMvJztcbmNvbnN0IHBvcFVwQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQm94Jyk7XG5cbmNvbnN0IHBvc3RDb21tZW50RGF0YSA9IGFzeW5jIChyYXcpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjb21tZW50c1VSTCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD0gVVRGLTgnLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmF3KSxcbiAgfSlcbiAgICAudGhlbigocmVzKSA9PiByZXMudGV4dCgpKVxuICAgIC50aGVuKChkYXRhKSA9PiAoZGF0YS5lcnJvclxuICAgICAgPyB7IGVycm9yOiB0cnVlLCBpbmZvOiBkYXRhIH1cbiAgICAgIDogeyBlcnJvcjogZmFsc2UsIGluZm86IGRhdGEgfSkpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gKHsgZXJyb3I6IHRydWUsIGluZm86IGVycm9yIH0pKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0Q29tbWVudHNEYXRhID0gYXN5bmMgKG1vdmllSWQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtjb21tZW50c1VSTH0/aXRlbV9pZD0ke21vdmllSWR9YCkuY2F0Y2goXG4gICAgKGVycikgPT4gZXJyLFxuICApO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuY29uc3QgY29tbWVudHNEaXNwbGF5ID0gKG1vdmllSWQpID0+IHtcbiAgcG9wVXBCb3gucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9uVGFibGUnKS5pbm5lckhUTUwgPSAnJztcbiAgZ2V0Q29tbWVudHNEYXRhKG1vdmllSWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBpZiAoIWRhdGEuZXJyb3IpIHtcbiAgICAgIGRhdGEuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgICAgICBwb3BVcEJveC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICcucmVzZXJ2YXRpb25UYWJsZScsXG4gICAgICAgICkuaW5uZXJIVE1MICs9IGA8cD4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX0gfCAke2NvbW1lbnQudXNlcm5hbWV9IDogJHtjb21tZW50LmNvbW1lbnR9PC9wPmA7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9wVXBCb3gucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9uVGFibGUnKS5pbm5lckhUTUwgPSAnbm8gY29tbWVudCB5ZXQhJztcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0TW92aWVEYXRhID0gYXN5bmMgKG1vdmllSUQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHttb3ZpZVVSTH0vJHttb3ZpZUlEfWAsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzdWx0KSA9PiByZXN1bHQpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3IpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBjb3VudGVyID0gYXN5bmMgKG1vdmllSUQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRDb21tZW50c0RhdGEobW92aWVJRClcbiAgICAudGhlbigocmVzdWx0KSA9PiAoIXJlc3VsdC5lcnJvciA/IHJlc3VsdC5sZW5ndGggOiAwKSlcbiAgICAuY2F0Y2goKCkgPT4gMCk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGNvbW1lbnRzQ291bnQgPSAobW92aWVJRCkgPT4ge1xuICBjb3VudGVyKG1vdmllSUQpLnRoZW4oKGNvdW50KSA9PiB7XG4gICAgcG9wVXBCb3gucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9uQ291bnRlcicpLmlubmVySFRNTCA9IGNvdW50O1xuICB9KTtcbn07XG5cbmNvbnN0IENvbW1lbnRDb3VudGVyID0gKGRhdGEpID0+ICh0eXBlb2YgKGRhdGEpID09PSAnb2JqZWN0JyA/IGRhdGEubGVuZ3RoIDogJ2ludmFsaWQnKTtcblxuY29uc3QgQ29tbWVudHNwb3B1cCA9IChtb3ZpZUlEKSA9PiB7XG4gIGdldE1vdmllRGF0YShtb3ZpZUlEKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICBwb3BVcEJveC5pbm5lckhUTUwgPSBgXG4gICAgPHNwYW4gY2xhc3M9XCJjbG9zZVJlc2VydmF0aW9uXCI+PGltZyBzcmM9XCJodHRwczovL2ltZy5pY29uczguY29tL2Rvb2RsZS80OC8wMDAwMDAvZGVsZXRlLXNpZ24ucG5nXCIvPjwvc3Bhbj5cbiAgICA8ZGl2IGNsYXNzPVwicmVzZXJ2YXRpb24tc2tlbGV0b25cIj5cbiAgICA8ZGl2IGNsYXNzPVwicmVzZXJ2YXRpb24tZmlsbS1pbmZvXCI+XG4gICAgPGgyIGNsYXNzPVwicG9wdXBUaXRsZVwiPiR7cmVzdWx0Lm5hbWV9PC9oMj5cbiAgICA8aW1nIHNyYz1cIiR7cmVzdWx0LmltYWdlLm1lZGl1bX1cIiBjbGFzcz1cInJlc2VydmF0aW9uSW1nXCI+XG4gICAgPGRpdiA+XG4gICAgPHVsIGlkPVwibW9yZURldGFpbHNcIj48L3VsPlxuICAgIDwvZGl2PlxuICAgIDxidXR0b24gY2xhc3M9XCJtb3JlRGV0YWlsc0J1dHRvbiBidG5cIiB0eXBlPVwic3VibWl0XCI+TW9yZSBkZXRhaWxzPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJlc2VydmF0aW9uLWluZm9cIj5cbiAgICA8aDMgY2xhc3M9XCJyZXNlcnZhdGlvbnNUaXRsZVwiPkNvbW1lbnRzKDxzcGFuIGNsYXNzPVwicmVzZXJ2YXRpb25Db3VudGVyXCI+MDwvc3Bhbj4pPC9oMz5cbiAgICA8ZGl2IGNsYXNzPVwicmVzZXJ2YXRpb25UYWJsZVwiPjwvZGl2PlxuICAgIDxmb3JtIGNsYXNzPVwicmVzZXJ2YXRpb25Gb3JtXCI+XG4gICAgICA8aDM+QWRkIGEgY29tbWVudDwvaDM+XG4gICAgICA8aW5wdXQgaWQ9XCJ1c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIiByZXF1aXJlZD5cbiAgICAgIDxicj5cbiAgICAgIDx0ZXh0YXJlYSBpZD1cImNvbW1lbnRBcmVhXCIgcGxhY2Vob2xkZXI9XCJZb3VyIGNvbW1lbnRcIiBuYW1lPVwiY29tbWVudEFyZWFcIiByZXF1aXJlZCBtaW5sZW5ndGg9XCIxXCI+PC90ZXh0YXJlYT5cbiAgICAgIDxicj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJyZXNlcnZhdGlvblN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgICBjb21tZW50c0NvdW50KG1vdmllSUQpO1xuICAgIHBvcFVwQm94LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcignLmNsb3NlUmVzZXJ2YXRpb24nKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwb3BVcEJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ3Zpc2libGUnO1xuICAgICAgICBwb3BVcEJveC5pbm5lckhUTUwgPSAnJztcbiAgICAgIH0pO1xuICAgIGNvbW1lbnRzRGlzcGxheShtb3ZpZUlEKTtcbiAgICBjb25zdCBtb3JlRGV0YWlscyA9IHBvcFVwQm94LnF1ZXJ5U2VsZWN0b3IoJyNtb3JlRGV0YWlscycpO1xuICAgIGNvbnN0IG1vcmVEZXRhaWxzQnV0dG9uID0gcG9wVXBCb3gucXVlcnlTZWxlY3RvcignLm1vcmVEZXRhaWxzQnV0dG9uJyk7XG4gICAgbW9yZURldGFpbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBtb3JlRGV0YWlsc0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgbW9yZURldGFpbHMuaW5uZXJIVE1MID0gYCA8bGk+UHJlbWllcmVkOiAke3Jlc3VsdC5wcmVtaWVyZWR9PC9saT5cbiAgICAgIDxsaT5FbmRlZDogJHtyZXN1bHQuZW5kZWR9PC9saT5cbiAgICAgIDxsaT5MYW5ndWFnZTogJHtyZXN1bHQubGFuZ3VhZ2V9PC9saT5cbiAgICAgIDxsaT5UeXBlOiAke3Jlc3VsdC50eXBlfTwvbGk+YDtcbiAgICB9KTtcbiAgICBjb25zdCBmb3JtID0gcG9wVXBCb3gucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9uRm9ybScpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgdXNlciA9IGZvcm0uZWxlbWVudHMudXNlcm5hbWUudmFsdWU7XG4gICAgICBjb25zdCBjb21tZW50QXJlYSA9IGZvcm0uZWxlbWVudHMuY29tbWVudEFyZWEudmFsdWU7XG4gICAgICBwb3N0Q29tbWVudERhdGEoe1xuICAgICAgICBpdGVtX2lkOiBtb3ZpZUlELFxuICAgICAgICB1c2VybmFtZTogdXNlcixcbiAgICAgICAgY29tbWVudDogY29tbWVudEFyZWEsXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgY29tbWVudHNEaXNwbGF5KG1vdmllSUQpO1xuICAgICAgICBjb21tZW50c0NvdW50KG1vdmllSUQpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBDb21tZW50c3BvcHVwLCBDb21tZW50Q291bnRlciB9O1xuIiwiZXhwb3J0IGNvbnN0IGdldE1vdmllcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cycpO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllQnlJZCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzLyR7aWR9YCk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5leHBvcnQgY29uc3QgY291bnRNb3ZpZXMgPSAobW92aWVzKSA9PiB7XG4gIGlmIChtb3ZpZXMubGVuZ3RoKSB7XG4gICAgY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb3VudC1tb3ZpZXMnKTtcbiAgICB0ZW1wLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGl0ZW0uaW5uZXJIVE1MID0gYCR7bW92aWVzLmxlbmd0aH1gO1xuICAgIH0pO1xuICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGJhc2VVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpLyc7XG5leHBvcnQgY29uc3QgYXBwSWQgPSAnYnlnM0t0dnFPaG1kM1h0OUF4dTUnO1xuXG5leHBvcnQgY29uc3QgYWRkTGlrZSA9IGFzeW5jIChpdGVtSWQpID0+IHtcbiAgZmV0Y2goYCR7YmFzZVVSTH1hcHBzLyR7YXBwSWR9L2xpa2VzYCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGl0ZW1JZCB9KSxcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH1hcHBzLyR7YXBwSWR9L2xpa2VzYCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59OyIsImNvbnN0IGZldGNoID0gKC4uLmFyZ3MpID0+IGltcG9ydCgnbm9kZS1mZXRjaCcpLnRoZW4oKHsgZGVmYXVsdDogZmV0Y2ggfSkgPT4gZmV0Y2goLi4uYXJncykpO1xuY29uc3QgbW92aWVVUkwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cyc7XG5jb25zdCByZXNlcnZhdGlvbnNVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvM3g0YnJxUVR1dXRFaHY1YnVycXovcmVzZXJ2YXRpb25zLyc7XG5jb25zdCBwb3BVcEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcEJveCcpO1xuXG5jb25zdCBwb3N0UmVzZXJ2YXRpb25zRGF0YSA9IGFzeW5jIChyYXcpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXNlcnZhdGlvbnNVUkwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9IFVURi04JyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJhdyksXG4gIH0pXG4gICAgLnRoZW4oKHJlcykgPT4gcmVzLnRleHQoKSlcbiAgICAudGhlbigoZGF0YSkgPT4gKGRhdGEuZXJyb3JcbiAgICAgID8geyBlcnJvcjogdHJ1ZSwgaW5mbzogZGF0YSB9XG4gICAgICA6IHsgZXJyb3I6IGZhbHNlLCBpbmZvOiBkYXRhIH0pKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+ICh7IGVycm9yOiB0cnVlLCBpbmZvOiBlcnJvciB9KSk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGdldFJlc2VydmF0aW9uc0RhdGEgPSBhc3luYyAobW92aWVJZCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Jlc2VydmF0aW9uc1VSTH0/aXRlbV9pZD0ke21vdmllSWR9YCkuY2F0Y2goXG4gICAgKGVycikgPT4gZXJyLFxuICApO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcblxuY29uc3QgcmVzZXJ2YXRpb25zRGlzcGxheSA9IChtb3ZpZUlkKSA9PiB7XG4gIHBvcFVwQm94LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvblRhYmxlJykuaW5uZXJIVE1MID0gJyc7XG4gIGdldFJlc2VydmF0aW9uc0RhdGEobW92aWVJZCkudGhlbigoZGF0YSkgPT4ge1xuICAgIGlmICghZGF0YS5lcnJvcikge1xuICAgICAgZGF0YS5mb3JFYWNoKChyZXNlcnZlKSA9PiB7XG4gICAgICAgIHBvcFVwQm94LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgJy5yZXNlcnZhdGlvblRhYmxlJyxcbiAgICAgICAgKS5pbm5lckhUTUwgKz0gYDxwPiAke3Jlc2VydmUuZGF0ZV9zdGFydH0gLSAke3Jlc2VydmUuZGF0ZV9lbmR9IGJ5ICR7cmVzZXJ2ZS51c2VybmFtZX08L3A+YDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3BVcEJveC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb25UYWJsZScpLmlubmVySFRNTCA9ICdubyByZXNlcnZhdGlvbiB5ZXQhJztcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0TW92aWVEYXRhID0gYXN5bmMgKG1vdmllSUQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHttb3ZpZVVSTH0vJHttb3ZpZUlEfWAsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigocmVzdWx0KSA9PiByZXN1bHQpXG4gICAgLmNhdGNoKChlcnJvcikgPT4gZXJyb3IpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBjb3VudGVyID0gYXN5bmMgKG1vdmllSUQpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRSZXNlcnZhdGlvbnNEYXRhKG1vdmllSUQpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4gKCFyZXN1bHQuZXJyb3IgPyByZXN1bHQubGVuZ3RoIDogMCkpXG4gICAgLmNhdGNoKCgpID0+IDApO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCByZXNlcnZhdGlvbkNvdW50ZXIgPSAobW92aWVJRCkgPT4ge1xuICBjb3VudGVyKG1vdmllSUQpLnRoZW4oKGNvdW50KSA9PiB7XG4gICAgcG9wVXBCb3gucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9uQ291bnRlcicpLmlubmVySFRNTCA9IGNvdW50O1xuICB9KTtcbn07XG5cbmNvbnN0IGZpbmFsQ291bnRlciA9IChkYXRhKSA9PiAodHlwZW9mIChkYXRhKSA9PT0gJ29iamVjdCcgPyBkYXRhLmxlbmd0aCA6ICdpbnZhbGlkJyk7XG5cbmNvbnN0IFJlc2VydmF0aW9uc3BvcHVwID0gKG1vdmllSUQpID0+IHtcbiAgZ2V0TW92aWVEYXRhKG1vdmllSUQpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIHBvcFVwQm94LmlubmVySFRNTCA9IGBcbiAgICA8c3BhbiBjbGFzcz1cImNsb3NlUmVzZXJ2YXRpb25cIj48aW1nIHNyYz1cImh0dHBzOi8vaW1nLmljb25zOC5jb20vZG9vZGxlLzQ4LzAwMDAwMC9kZWxldGUtc2lnbi5wbmdcIi8+PC9zcGFuPlxuICAgIDxkaXYgY2xhc3M9XCJyZXNlcnZhdGlvbi1za2VsZXRvblwiPlxuICAgIDxkaXYgY2xhc3M9XCJyZXNlcnZhdGlvbi1maWxtLWluZm9cIj5cbiAgICA8aDIgY2xhc3M9XCJwb3B1cFRpdGxlXCI+JHtyZXN1bHQubmFtZX08L2gyPlxuICAgIDxpbWcgc3JjPVwiJHtyZXN1bHQuaW1hZ2UubWVkaXVtfVwiIGNsYXNzPVwicmVzZXJ2YXRpb25JbWdcIj5cbiAgICA8ZGl2ID5cbiAgICA8dWwgaWQ9XCJtb3JlRGV0YWlsc1wiPjwvdWw+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBjbGFzcz1cIm1vcmVEZXRhaWxzQnV0dG9uIGJ0blwiIHR5cGU9XCJzdWJtaXRcIj5Nb3JlIGRldGFpbHM8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicmVzZXJ2YXRpb24taW5mb1wiPlxuICAgIDxoMyBjbGFzcz1cInJlc2VydmF0aW9uc1RpdGxlXCI+UmVzZXJ2YXRpb25zKDxzcGFuIGNsYXNzPVwicmVzZXJ2YXRpb25Db3VudGVyXCI+MDwvc3Bhbj4pPC9oMz5cbiAgICA8ZGl2IGNsYXNzPVwicmVzZXJ2YXRpb25UYWJsZVwiPjwvZGl2PlxuICAgIDxmb3JtIGNsYXNzPVwicmVzZXJ2YXRpb25Gb3JtXCI+XG4gICAgICA8aDM+QWRkIGEgcmVzZXJ2YXRpb248L2gzPlxuICAgICAgPGlucHV0IGlkPVwidXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICA8YnI+XG4gICAgICA8aW5wdXQgaWQ9XCJTdGFydERhdGVcIiB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJTdGFydERhdGVcIiBwbGFjZWhvbGRlcj1cIlN0YXJ0IGRhdGVcIiByZXF1aXJlZD5cbiAgICAgIDxicj5cbiAgICAgIDxpbnB1dCBpZD1cIkVuZERhdGVcIiB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJFbmREYXRlXCIgcGxhY2Vob2xkZXI9XCJFbmQgZGF0ZVwiIHJlcXVpcmVkPlxuICAgICAgPGJyPlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlc2VydmF0aW9uU3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuICAgIHJlc2VydmF0aW9uQ291bnRlcihtb3ZpZUlEKTtcbiAgICBwb3BVcEJveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZVJlc2VydmF0aW9uJylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcG9wVXBCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICd2aXNpYmxlJztcbiAgICAgICAgcG9wVXBCb3guaW5uZXJIVE1MID0gJyc7XG4gICAgICB9KTtcbiAgICByZXNlcnZhdGlvbnNEaXNwbGF5KG1vdmllSUQpO1xuICAgIGNvbnN0IG1vcmVEZXRhaWxzID0gcG9wVXBCb3gucXVlcnlTZWxlY3RvcignI21vcmVEZXRhaWxzJyk7XG4gICAgY29uc3QgbW9yZURldGFpbHNCdXR0b24gPSBwb3BVcEJveC5xdWVyeVNlbGVjdG9yKCcubW9yZURldGFpbHNCdXR0b24nKTtcbiAgICBtb3JlRGV0YWlsc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIG1vcmVEZXRhaWxzQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBtb3JlRGV0YWlscy5pbm5lckhUTUwgPSBgIDxsaT5QcmVtaWVyZWQ6ICR7cmVzdWx0LnByZW1pZXJlZH08L2xpPlxuICAgICAgPGxpPkVuZGVkOiAke3Jlc3VsdC5lbmRlZH08L2xpPlxuICAgICAgPGxpPkxhbmd1YWdlOiAke3Jlc3VsdC5sYW5ndWFnZX08L2xpPlxuICAgICAgPGxpPlR5cGU6ICR7cmVzdWx0LnR5cGV9PC9saT5gO1xuICAgIH0pO1xuICAgIGNvbnN0IGZvcm0gPSBwb3BVcEJveC5xdWVyeVNlbGVjdG9yKCcucmVzZXJ2YXRpb25Gb3JtJyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB1c2VyID0gZm9ybS5lbGVtZW50cy51c2VybmFtZS52YWx1ZTtcbiAgICAgIGNvbnN0IFN0YXJ0RGF0ZSA9IGZvcm0uZWxlbWVudHMuU3RhcnREYXRlLnZhbHVlO1xuICAgICAgY29uc3QgRW5kRGF0ZSA9IGZvcm0uZWxlbWVudHMuRW5kRGF0ZS52YWx1ZTtcbiAgICAgIHBvc3RSZXNlcnZhdGlvbnNEYXRhKHtcbiAgICAgICAgaXRlbV9pZDogbW92aWVJRCxcbiAgICAgICAgdXNlcm5hbWU6IHVzZXIsXG4gICAgICAgIGRhdGVfc3RhcnQ6IFN0YXJ0RGF0ZSxcbiAgICAgICAgZGF0ZV9lbmQ6IEVuZERhdGUsXG4gICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgcmVzZXJ2YXRpb25zRGlzcGxheShtb3ZpZUlEKTtcbiAgICAgICAgcmVzZXJ2YXRpb25Db3VudGVyKG1vdmllSUQpO1xuICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBSZXNlcnZhdGlvbnNwb3B1cCwgZmluYWxDb3VudGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwidmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gKG9iaikgPT4gKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSA6IChvYmopID0+IChvYmouX19wcm90b19fKTtcbnZhciBsZWFmUHJvdG90eXBlcztcbi8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLy8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLy8gbW9kZSAmIDE2OiByZXR1cm4gdmFsdWUgd2hlbiBpdCdzIFByb21pc2UtbGlrZVxuLy8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcblx0aWYobW9kZSAmIDEpIHZhbHVlID0gdGhpcyh2YWx1ZSk7XG5cdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUpIHtcblx0XHRpZigobW9kZSAmIDQpICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcblx0XHRpZigobW9kZSAmIDE2KSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlO1xuXHR9XG5cdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG5cdHZhciBkZWYgPSB7fTtcblx0bGVhZlByb3RvdHlwZXMgPSBsZWFmUHJvdG90eXBlcyB8fCBbbnVsbCwgZ2V0UHJvdG8oe30pLCBnZXRQcm90byhbXSksIGdldFByb3RvKGdldFByb3RvKV07XG5cdGZvcih2YXIgY3VycmVudCA9IG1vZGUgJiAyICYmIHZhbHVlOyB0eXBlb2YgY3VycmVudCA9PSAnb2JqZWN0JyAmJiAhfmxlYWZQcm90b3R5cGVzLmluZGV4T2YoY3VycmVudCk7IGN1cnJlbnQgPSBnZXRQcm90byhjdXJyZW50KSkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpLmZvckVhY2goKGtleSkgPT4gKGRlZltrZXldID0gKCkgPT4gKHZhbHVlW2tleV0pKSk7XG5cdH1cblx0ZGVmWydkZWZhdWx0J10gPSAoKSA9PiAodmFsdWUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGRlZik7XG5cdHJldHVybiBucztcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLm1haW4uanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwidHYtc2VyaWVzLWFuZC1tb3ZpZXM6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0O1xuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9IGVsc2UgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdHZfc2VyaWVzX2FuZF9tb3ZpZXNcIl0gPSBzZWxmW1wid2VicGFja0NodW5rdHZfc2VyaWVzX2FuZF9tb3ZpZXNcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZ2V0TW92aWVzLCBjb3VudE1vdmllcyB9IGZyb20gJy4vbW9kdWxlcy9nZXQtYXBpLmpzJztcbmltcG9ydCB7IGdldExpa2VzLCBhZGRMaWtlIH0gZnJvbSAnLi9tb2R1bGVzL2ludGVyYWN0LmpzJztcbmltcG9ydCB7IFJlc2VydmF0aW9uc3BvcHVwIH0gZnJvbSAnLi9tb2R1bGVzL3Jlc2VydmF0aW9uLmpzJztcbmltcG9ydCB7IENvbW1lbnRzcG9wdXAgfSBmcm9tICcuL21vZHVsZXMvY29tbWVudC5qcyc7XG5cbmNvbnN0IGRpc3BsYXlNb3ZpZSA9IChtb3ZpZSwgbGlrZSA9IHt9KSA9PiBgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZGl2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWdcIiBzcmM9XCIke21vdmllLmltYWdlLm1lZGl1bX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGl0bGVcIj4gJHttb3ZpZS5uYW1lfSA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsaWtlc1wiPiA8aSBjbGFzcz1cImZhcyBmYS1oZWFydCBsaWtlXCIgZGF0YS1pZD1cIiR7bW92aWUuaWR9XCI+IDxzcGFuIGNsYXNzPVwibnVtXCI+ICR7bGlrZX0gPC9zcGFuPiA8L2k+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbW1lbnRCdG4gYnRuXCIgZGF0YS1pZD1cIiR7bW92aWUuaWR9XCI+IGNvbW1lbnRzIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVzZXJ2YXRpb24gYnRuXCIgZGF0YS1pZD1cIiR7bW92aWUuaWR9XCI+IHJlc2VydmF0aW9ucyA8L2J1dHRvbj5cbiAgIDwvZGl2PmA7XG5cbmNvbnN0IGxpc3RNb3ZpZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZXMnKTtcbmNvbnN0IG1vdmllc0NvbXBvbmVudCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGlrZXMgPSBhd2FpdCBnZXRMaWtlcygpO1xuICBsaXN0TW92aWUuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGxpc3QgPSBhd2FpdCBnZXRNb3ZpZXMoKTtcbiAgY291bnRNb3ZpZXMobGlzdCk7XG4gIGxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY29uc3QgbnVtID0gbGlrZXMuZmluZCgobGlrZSkgPT4gaXRlbS5pZCA9PT0gTnVtYmVyKGxpa2UuaXRlbV9pZCkpO1xuICAgIGlmIChudW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgY291bnQgPSBudW0ubGlrZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICB9XG4gICAgbGlzdE1vdmllLmlubmVySFRNTCArPSBkaXNwbGF5TW92aWUoaXRlbSwgY291bnQpO1xuICB9KTtcblxuICBjb25zdCBsaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2UnKTtcbiAgbGlrZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IG1vdmllSWQgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgaWYgKGl0ZW0uc3R5bGUuY29sb3IgIT09ICdwaW5rJykge1xuICAgICAgICBpdGVtLnN0eWxlLmNvbG9yID0gJ3BpbmsnO1xuICAgICAgICBpdGVtLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCA9IE51bWJlcihpdGVtLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCkgKyAxO1xuICAgICAgICBhZGRMaWtlKG1vdmllSWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCByZXNlcnZhdGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzZXJ2YXRpb24nKTtcbiAgcmVzZXJ2YXRpb25CdXR0b25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgbW92aWVJZCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICBSZXNlcnZhdGlvbnNwb3B1cChtb3ZpZUlkKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgQ29tbWVudEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudEJ0bicpO1xuICBDb21tZW50QnV0dG9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IG1vdmllSWQgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgQ29tbWVudHNwb3B1cChtb3ZpZUlkKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5tb3ZpZXNDb21wb25lbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==