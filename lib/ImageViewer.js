'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _io = require('react-icons/lib/io');

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
        _this.state = { currentIndex: _this.props.index };
        return _this;
    }

    _createClass(ImageViewer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (document) {
                document.addEventListener('keydown', function (e) {
                    e.preventDefault;_this2.handleKeyPress(e.keyCode);
                });
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
            this.setState({ currentIndex: this.state.currentIndex - 1 });
        }
    }, {
        key: 'loadNextImage',
        value: function loadNextImage() {
            this.setState({ currentIndex: this.state.currentIndex + 1 });
        }
    }, {
        key: 'handleKeyPress',
        value: function handleKeyPress(keycode) {
            if (this.state.currentIndex > 0 && keycode === 37) {
                this.setState({ currentIndex: this.state.currentIndex - 1 });
            } else if (this.state.currentIndex !== this.length && keycode === 39) {
                this.setState({ currentIndex: this.state.currentIndex + 1 });
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
        value: function getArrowStyles() {
            if (this.props.arrowStyles) {
                return this.props.arrowStyles;
            } else {
                return {
                    fontSize: "5em",
                    color: this.props.inverted ? "#000000" : "#ffffff",
                    cursor: "pointer"
                };
            }
        }
    }, {
        key: 'getCloseStyles',
        value: function getCloseStyles() {
            if (this.props.closeStyles) {
                return this.props.closeStyles;
            } else {
                return {
                    position: "fixed",
                    top: "1px",
                    right: "1px",
                    zIndex: "9999",
                    fontSize: "5em",
                    color: this.props.inverted ? "#000000" : "#ffffff",
                    cursor: "pointer"
                };
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { style: this.getContainerStyles(), className: '' + (this.props.containerClass ? this.props.containerClass : "") },
                    this.state.currentIndex !== 0 && !this.props.hideArrows ? _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_io.IoChevronLeft, { onClick: function onClick() {
                                return _this4.loadPreviousImage();
                            }, style: this.getArrowStyles() })
                    ) : null,
                    _react2.default.createElement(
                        'div',
                        { style: { maxWidth: "70%" } },
                        _react2.default.createElement('img', { src: this.props.images[this.state.currentIndex], className: '' + (this.props.imageClass ? this.props.imageClass : ""), style: this.props.imageStyles ? this.props.imageStyles : {} })
                    ),
                    this.state.currentIndex !== this.length && !this.props.hideArrows ? _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_io.IoChevronRight, { onClick: function onClick() {
                                return _this4.loadNextImage();
                            }, style: this.getArrowStyles() })
                    ) : null
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_io.IoCloseRound, { style: this.getCloseStyles(), onClick: function onClick() {
                            return _this4.props.handleClose();
                        } })
                )
            );
        }
    }]);

    return ImageViewer;
}(_react.Component);

exports.default = ImageViewer;