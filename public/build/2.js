(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/assets/work sync recursive ^\\.\\/.*\\.jpg$":
/*!********************************************!*\
  !*** ./src/assets/work sync ^\.\/.*\.jpg$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./9xbuddy.jpg": "./src/assets/work/9xbuddy.jpg",
	"./offmp3.jpg": "./src/assets/work/offmp3.jpg",
	"./offmp4.jpg": "./src/assets/work/offmp4.jpg",
	"./savesubs.jpg": "./src/assets/work/savesubs.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/work sync recursive ^\\.\\/.*\\.jpg$";

/***/ }),

/***/ "./src/assets/work/9xbuddy.jpg":
/*!*************************************!*\
  !*** ./src/assets/work/9xbuddy.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/9xbuddy.616d190d.jpg";

/***/ }),

/***/ "./src/assets/work/offmp3.jpg":
/*!************************************!*\
  !*** ./src/assets/work/offmp3.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/offmp3.a5c18f50.jpg";

/***/ }),

/***/ "./src/assets/work/offmp4.jpg":
/*!************************************!*\
  !*** ./src/assets/work/offmp4.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/offmp4.ecffb27a.jpg";

/***/ }),

/***/ "./src/assets/work/savesubs.jpg":
/*!**************************************!*\
  !*** ./src/assets/work/savesubs.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/savesubs.8ea5e606.jpg";

/***/ }),

/***/ "./src/data/work.json":
/*!****************************!*\
  !*** ./src/data/work.json ***!
  \****************************/
/*! exports provided: 9xbuddy, offmp3, savesubs, offmp4, default */
/***/ (function(module) {

module.exports = {"9xbuddy":{"position":"Developer","duration":"June 2014 - Present","content":["The primary motivation behind 9xbuddy was my friends and family who were keep asking me for help with downloading their videos from different sites.","You know, when you are THE IT guy of your family, everybody treats you as their personal technical support. But I am the nice one and I wanted to give them the way how to download desired videos by themselves without constantly asking me for the help And this is what i end up making."]},"offmp3":{"position":"Developer","duration":"June 2017 - Present","content":["This idea actually came with 9xbuddy with users constantly asking for ways to convert those videos in mp3 format. Though there were already too many such apps but they miss a thing or two.","I wanted to make it simple for users without much hassle so made offmp3 with those features in mind. Users now can convert audio from many sites and even further cut them or add meta tags like artworks & stuff in it, sounds cool right? "]},"savesubs":{"position":"Developer","duration":"January 2018 - Present","content":["This idea more or less came with sites like Viki and Youtube which actually has so many subtitles embedded in the video and there's no way to add subtitle extraction in the site 9xbuddy","I end up making a site which totally focuses on subs extraction from various such sites without getting into video, it even converts subs from many other formats to SRT on the fly which is a globally supported format."]},"offmp4":{"position":"Developer","duration":"March 2018 - Present","content":["Always wanted to learn how to make browser extension and couldn't find any better reason to make one for 9xbuddy. Its a much-requested thing by users anyway so decided to do that","Most of the browser now follow same code base for their browser extensions which is like the coolest thing ever happened so with few changes here and there I end up making an extension for all major browsers except safari cause it doesn't support same extension model as others. "]}};

/***/ }),

/***/ "./src/pages/Work.jsx":
/*!****************************!*\
  !*** ./src/pages/Work.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var _components_Theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Theme */ "./src/components/Theme.jsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.jsx");
/* harmony import */ var _components_ColorSwitcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ColorSwitcher */ "./src/components/ColorSwitcher.jsx");
/* harmony import */ var _data_work_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/work.json */ "./src/data/work.json");
var _data_work_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/work.json */ "./src/data/work.json", 1);
var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}/* eslint import/no-dynamic-require: 0 , global-require: 0 */// context
var CardBox=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"Work__CardBox"})(["margin:0 auto;margin-top:8%;width:90%;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;overflow:hidden;&.card_left{.card_image{margin-left:-70px;}.card_text{padding-right:50px;}}&.card_right{.card_image{margin-right:-70px;z-index:11;}.card_text{padding-left:70px;}}@media (max-width:1000px){width:100%;}@media (max-width:575px){&.card_left .card_text,&.card_right .card_text{padding:20px;}> div{padding-left:0px !important;padding-right:0px !important;}&.card_left .card_image,&.card_right .card_image{width:80%;height:auto;margin:0 auto;margin-top:10px;margin-bottom:10px;}}"]);var CardContent=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"Work__CardContent"})(["background:rgba(255,255,255,0.7);padding:20px 30px;padding-right:50px;box-shadow:0px 0px 3px 0px #6cae67;h1{margin:0;text-transform:uppercase;color:#4a90e2;font-weight:700;font-size:28px;}h2{margin:5px 0;color:#747474;font-size:20px;}span{color:#2eb326;margin-top:10px;margin-bottom:10px;display:block;font-weight:700;}p{margin:7px 0;color:#555;line-height:25px;}"]);var CardImage=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"Work__CardImage"})(["position:relative;height:250px;border:4px solid ",";overflow:hidden;background:#ebedf1;img{width:100%;}&:hover{border-color:",";}"],function(props){return props.colors[3];},function(props){return props.colors[5];});var Work=function(_Component){_inherits(Work,_Component);function Work(){_classCallCheck(this,Work);return _possibleConstructorReturn(this,_Component.apply(this,arguments));}Work.prototype.componentDidMount=function componentDidMount(){this.props.resetCanvas();};Work.prototype.renderCardImage=function renderCardImage(el){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardImage,{className:"card_image",colors:this.props.colors},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:__webpack_require__("./src/assets/work sync recursive ^\\.\\/.*\\.jpg$")("./"+el+".jpg"),alt:"9xbuddy Icon"}));};Work.prototype.renderCardContent=function renderCardContent(el,work_data){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardContent,{className:"card_text"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,el),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,work_data[el].position),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,work_data[el].duration),work_data[el].content.map(function(item,key){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{key:""+(key+1)},item);}));};Work.prototype.renderWork=function renderWork(){var count=1;var content=[];for(var _iterator=Object.keys(_data_work_json__WEBPACK_IMPORTED_MODULE_6__),_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[Symbol.iterator]();;){var _ref;if(_isArray){if(_i>=_iterator.length)break;_ref=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref=_i.value;}var el=_ref;if(count%2!==0){content.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardBox,{key:el,className:"card_left"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_1__["Col"],{sm:7},this.renderCardContent(el,_data_work_json__WEBPACK_IMPORTED_MODULE_6__)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_1__["Col"],{sm:4,style:{overflow:"visible"}},this.renderCardImage(el))));}else{content.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardBox,{key:el,className:"card_right"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_1__["Col"],{sm:4,style:{overflow:"visible"}},this.renderCardImage(el)),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_1__["Col"],{sm:7},this.renderCardContent(el,_data_work_json__WEBPACK_IMPORTED_MODULE_6__))));}count+=1;}return content;};Work.prototype.render=function render(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"],{path:this.props.match.path}),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_system__WEBPACK_IMPORTED_MODULE_1__["Container"],{style:{paddingBottom:"60px"}},this.renderWork()),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ColorSwitcher__WEBPACK_IMPORTED_MODULE_5__["default"],null));};return Work;}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (function(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Theme__WEBPACK_IMPORTED_MODULE_3__["default"].Consumer,null,function(obj){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Work,_extends({},props,{resetCanvas:obj.resetCanvas,colors:obj.colors}),{...props.childrens});});});

/***/ })

}]);
//# sourceMappingURL=2.js.map