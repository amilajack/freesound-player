(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1153:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_backdrop",(function(){return Backdrop}));var _index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(50),_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(52),_gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(142),Backdrop=function(){function o(o){Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__.o)(this,o),this.ionBackdropTap=Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__.g)(this,"ionBackdropTap",7),this.blocker=_gesture_controller_31cb6bb9_js__WEBPACK_IMPORTED_MODULE_2__.a.createBlocker({disableScroll:!0}),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}return o.prototype.connectedCallback=function(){this.stopPropagation&&this.blocker.block()},o.prototype.disconnectedCallback=function(){this.blocker.unblock()},o.prototype.onMouseDown=function(o){this.emitTap(o)},o.prototype.emitTap=function(o){this.stopPropagation&&(o.preventDefault(),o.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()},o.prototype.render=function(){var o,t=Object(_ionic_global_9d5c8ee3_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);return Object(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__.j)(_index_e806d1f6_js__WEBPACK_IMPORTED_MODULE_0__.c,{tabindex:"-1","aria-hidden":"true",class:(o={},o[t]=!0,o["backdrop-hide"]=!this.visible,o["backdrop-no-tappable"]=!this.tappable,o)})},o}();Backdrop.style={ios:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",md:":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}"}}}]);
//# sourceMappingURL=44.22e0ef476bdca275530e.bundle.js.map