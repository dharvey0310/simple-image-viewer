(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-icons/lib/io"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-icons/lib/io"], factory);
	else if(typeof exports === 'object')
		exports["simple-image-viewer"] = factory(require("react"), require("react-icons/lib/io"));
	else
		root["simple-image-viewer"] = factory(root["react"], root["react-icons/lib/io"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/lib/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ImageViewer = __webpack_require__(1);

	var _ImageViewer2 = _interopRequireDefault(_ImageViewer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ImageViewer2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _io = __webpack_require__(3);

	var _default = __webpack_require__(4);

	var _default2 = _interopRequireDefault(_default);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ImageViewer = function (_Component) {
	    _inherits(ImageViewer, _Component);

	    function ImageViewer(props) {
	        _classCallCheck(this, ImageViewer);

	        var _this = _possibleConstructorReturn(this, (ImageViewer.__proto__ || Object.getPrototypeOf(ImageViewer)).call(this, props));

	        _this.loadPreviousImage = _this.loadPreviousImage.bind(_this);
	        _this.loadNextImage = _this.loadNextImage.bind(_this);

	        _this.length = _this.props.images.length - 1;
	        _this.state = { currentIndex: _this.props.index, translateValue: 0, visibility: "visible" };
	        return _this;
	    }

	    _createClass(ImageViewer, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            if (!this.props.disableKeyboardNav || this.props.hideArrows) {
	                if (document) {
	                    document.addEventListener('keydown', function (e) {
	                        e.preventDefault;_this2.handleKeyPress(e.keyCode);
	                    });
	                }
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            var _this3 = this;

	            if (document) {
	                document.removeEventListener('keydown', function (e) {
	                    e.preventDefault;_this3.handleKeyPress(e.keyCode);
	                });
	            }
	        }
	    }, {
	        key: 'loadPreviousImage',
	        value: function loadPreviousImage() {
	            var _this4 = this;

	            if (this.state.currentIndex > 0) {
	                this.setState({ translateValue: "-150%" }, function () {
	                    return setTimeout(function () {
	                        return _this4.setState({ currentIndex: _this4.state.currentIndex - 1, translateValue: "150%", visibility: "hidden" }, function () {
	                            return setTimeout(function () {
	                                return _this4.setState({ visibility: "visible", translateValue: 0 });
	                            }, 500);
	                        });
	                    }, 500);
	                });
	            }
	        }
	    }, {
	        key: 'loadNextImage',
	        value: function loadNextImage() {
	            var _this5 = this;

	            if (this.state.currentIndex !== this.length) {
	                this.setState({ translateValue: "150%" }, function () {
	                    return setTimeout(function () {
	                        return _this5.setState({ currentIndex: _this5.state.currentIndex + 1, translateValue: "-150%", visibility: "hidden" }, function () {
	                            return setTimeout(function () {
	                                return _this5.setState({ visibility: "visible", translateValue: 0 });
	                            }, 500);
	                        });
	                    }, 500);
	                });
	            }
	        }
	    }, {
	        key: 'handleKeyPress',
	        value: function handleKeyPress(keycode) {
	            if (keycode === 37) {
	                this.loadPreviousImage();
	            } else if (keycode === 39) {
	                this.loadNextImage();
	            } else if (keycode === 27) {
	                this.props.handleClose();
	            }
	        }
	    }, {
	        key: 'getContainerStyles',
	        value: function getContainerStyles() {
	            return {
	                display: "flex",
	                justifyContent: "center",
	                alignItems: "center",
	                backgroundColor: this.props.inverted ? 'rgba(255,255,255, ' + (this.props.opacity ? this.props.opacity : 0.8) + ')' : this.props.clear ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, ' + (this.props.opacity ? this.props.opacity : 0.8) + ')',
	                position: "fixed",
	                top: "0",
	                bottom: "0",
	                left: "0",
	                right: "0",
	                zIndex: "9998"
	            };
	        }
	    }, {
	        key: 'getArrowStyles',
	        value: function getArrowStyles(arrowDirection) {
	            if (this.props.arrowStyles) {
	                return this.props.arrowStyles;
	            } else {
	                return {
	                    fontSize: "5em",
	                    color: this.props.inverted ? "#000000" : "#ffffff",
	                    cursor: arrowDirection === "left" && this.state.currentIndex === 0 ? "auto" : arrowDirection === "right" && this.state.currentIndex === this.length ? "auto" : "pointer",
	                    opacity: arrowDirection === "left" && this.state.currentIndex === 0 ? "0.5" : arrowDirection === "right" && this.state.currentIndex === this.length ? "0.5" : "1"
	                };
	            }
	        }
	    }, {
	        key: 'getCloseStyles',
	        value: function getCloseStyles() {
	            var styles = {
	                position: "fixed",
	                top: "1px",
	                right: "1px",
	                zIndex: "9999",
	                fontSize: "5em",
	                color: this.props.inverted ? "#000000" : "#ffffff",
	                cursor: "pointer"
	            };
	            if (this.props.closeStyles) {
	                var customStyles = Object.assign(styles, this.props.closeStyles);
	                return customStyles;
	            } else {
	                return styles;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this6 = this;

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { style: this.getContainerStyles(), className: '' + (this.props.containerClass ? this.props.containerClass : "") },
	                    !this.props.hideArrows ? _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(_io.IoChevronLeft, { onClick: function onClick() {
	                                return _this6.loadPreviousImage();
	                            }, style: this.getArrowStyles("left") })
	                    ) : null,
	                    _react2.default.createElement(
	                        'div',
	                        { style: { maxWidth: "70%", background: 'transparent url(' + _default2.default + ') center no-repeat' } },
	                        _react2.default.createElement('img', { src: this.props.images[this.state.currentIndex], className: '' + (this.props.imageClass ? this.props.imageClass : ""), style: this.props.imageStyles ? this.props.imageStyles : { visibility: '' + this.state.visibility, transform: 'translateX(' + this.state.translateValue + ')', transition: "transform 0.3s ease-out" } })
	                    ),
	                    !this.props.hideArrows ? _react2.default.createElement(
	                        'div',
	                        null,
	                        _react2.default.createElement(_io.IoChevronRight, { onClick: function onClick() {
	                                return _this6.loadNextImage();
	                            }, style: this.getArrowStyles("right") })
	                    ) : null
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    _react2.default.createElement(_io.IoCloseRound, { style: this.getCloseStyles(), onClick: function onClick() {
	                            return _this6.props.handleClose();
	                        } })
	                )
	            );
	        }
	    }]);

	    return ImageViewer;
	}(_react.Component);

	exports.default = ImageViewer;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTIwcHgnIGhlaWdodD0nMTIwcHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLWRlZmF1bHQiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNkZWRlZGUnIHRyYW5zZm9ybT0ncm90YXRlKDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwcycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZGVkZWRlJyB0cmFuc2Zvcm09J3JvdGF0ZSgzMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuMDgzMzMzMzMzMzMzMzMzMzNzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNkZWRlZGUnIHRyYW5zZm9ybT0ncm90YXRlKDYwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC4xNjY2NjY2NjY2NjY2NjY2NnMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nI2RlZGVkZScgdHJhbnNmb3JtPSdyb3RhdGUoOTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjI1cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZGVkZWRlJyB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjMzMzMzMzMzMzMzMzMzMzNzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNkZWRlZGUnIHRyYW5zZm9ybT0ncm90YXRlKDE1MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuNDE2NjY2NjY2NjY2NjY2N3MnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nI2RlZGVkZScgdHJhbnNmb3JtPSdyb3RhdGUoMTgwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC41cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZGVkZWRlJyB0cmFuc2Zvcm09J3JvdGF0ZSgyMTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjU4MzMzMzMzMzMzMzMzMzRzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNkZWRlZGUnIHRyYW5zZm9ybT0ncm90YXRlKDI0MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuNjY2NjY2NjY2NjY2NjY2NnMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nI2RlZGVkZScgdHJhbnNmb3JtPSdyb3RhdGUoMjcwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC43NXMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nI2RlZGVkZScgdHJhbnNmb3JtPSdyb3RhdGUoMzAwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC44MzMzMzMzMzMzMzMzMzM0cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZGVkZWRlJyB0cmFuc2Zvcm09J3JvdGF0ZSgzMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjkxNjY2NjY2NjY2NjY2NjZzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48L3N2Zz4="

/***/ }
/******/ ])
});
;