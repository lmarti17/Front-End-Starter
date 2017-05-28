(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()

}('domready', function () {

  var fns = [], listener
    , doc = document
    , hack = doc.documentElement.doScroll
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)


  if (!loaded)
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return function (fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn)
  }

});

},{}],2:[function(require,module,exports){
'use strict';

var _domready = require('domready');

var _domready2 = _interopRequireDefault(_domready);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _domready2.default)(function () {

	console.log('Hi there ! I\'m a 4th year french student @HETIC, and currently looking for a 6-month internship in a creative digital agency.');

	// GALLERY PREVIEW-APP

	document.getElementById('preview-app').addEventListener('click', function (e) {

		e.preventDefault();

		$.fancybox.open([{
			src: 'assets/img/preview-app_01.jpg',
			opts: {
				caption: 'Preview App - Imac'
			}
		}, {
			src: 'assets/img/preview-app_02.jpg',
			opts: {
				caption: 'Preview App - Macbook'
			}
		}, {
			src: 'assets/img/preview-app_03.jpg',
			opts: {
				caption: 'Preview App - Iphone'
			}
		}, {
			src: 'assets/img/preview-app_04.jpg',
			opts: {
				caption: 'Preview App - Iphone'
			}
		}, {
			src: 'assets/img/preview-app_05.jpg',
			opts: {
				caption: 'Preview App - Iphone'
			}
		}], {
			loop: true
		});
	});
});

},{"domready":1}]},{},[2]);
