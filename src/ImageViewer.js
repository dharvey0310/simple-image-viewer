import React, {Component} from 'react'
import {IoChevronRight, IoChevronLeft, IoCloseRound} from 'react-icons/lib/io'
import loader from 'url?limit=5000&name=loader.svg!./static/default.svg'

export default class ImageViewer extends Component {
    constructor(props) {
        super(props)

        this.loadPreviousImage = this.loadPreviousImage.bind(this)
        this.loadNextImage = this.loadNextImage.bind(this)

        this.length = this.props.images.length - 1
        this.state = {currentIndex: this.props.index, translateValue: 0, visibility: "visible"}
    }

    componentDidMount() {
        if(!this.props.disableKeyboardNav || this.props.hideArrows) {
            if (document) {
                document.addEventListener('keydown', (e) => {e.preventDefault; this.handleKeyPress(e.keyCode)})
            }
        }
    }

    componentWillUnmount() {
        if (document) {
            document.removeEventListener('keydown', (e) => {e.preventDefault; this.handleKeyPress(e.keyCode)})
        }
    }

    loadPreviousImage() {
        if (this.state.currentIndex > 0) {
            this.setState({translateValue: "-150%"}, () => setTimeout(() => this.setState({currentIndex: this.state.currentIndex - 1, translateValue: "150%", visibility: "hidden"}, () => setTimeout(() => this.setState({visibility: "visible", translateValue: 0}), 500)), 500))
        }
    }

    loadNextImage() {
        if (this.state.currentIndex !== this.length) {
            this.setState({translateValue: "150%"}, () => setTimeout(() => this.setState({currentIndex: this.state.currentIndex + 1, translateValue: "-150%", visibility: "hidden"}, () => setTimeout(() => this.setState({visibility: "visible", translateValue: 0}), 500)), 500))
        }
    }

    handleKeyPress(keycode) {
        if(keycode === 37) {
            this.loadPreviousImage()
        } else if (keycode === 39) {
            this.loadNextImage()
        } else if (keycode === 27) {
            this.props.handleClose()
        }
    }

    getContainerStyles() {
        return {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: this.props.inverted ? `rgba(255,255,255, ${this.props.opacity ? this.props.opacity : 0.8})` : this.props.clear ? `rgba(0, 0, 0, 0)` : `rgba(0, 0, 0, ${this.props.opacity ? this.props.opacity : 0.8})`,
            position: "fixed",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            zIndex: "9998"
        }
    }

    getArrowStyles(arrowDirection) {
        if (this.props.arrowStyles) {
            return this.props.arrowStyles
        } else {
            return {
                fontSize: "5em",
                color: this.props.inverted ? "#000000" : "#ffffff",
                cursor: arrowDirection === "left" && this.state.currentIndex === 0 ? "auto" : arrowDirection === "right" && this.state.currentIndex === this.length ? "auto" : "pointer",
                opacity: arrowDirection === "left" && this.state.currentIndex === 0 ? "0.5" : arrowDirection === "right" && this.state.currentIndex === this.length ? "0.5" : "1"
            }
        }
    }

    getCloseStyles() {
        const styles= {
                position: "fixed",
                top: "1px",
                right: "1px",
                zIndex: "9999",
                fontSize: "5em",
                color: this.props.inverted ? "#000000" : "#ffffff",
                cursor: "pointer"
            }
        if (this.props.closeStyles) {
            let customStyles = Object.assign(styles, this.props.closeStyles)
            return customStyles
        } else {
            return styles
        }
    }

    render() {
        return (
            <div>
            <div style={this.getContainerStyles()} className={`${this.props.containerClass ? this.props.containerClass : ""}`}>
                {!this.props.hideArrows ?
                    <div>
                        <IoChevronLeft onClick={() => this.loadPreviousImage()} style={this.getArrowStyles("left")} />
                    </div> : null}
                <div style={{maxWidth: "70%", background: `transparent url(${loader}) center no-repeat`}}>
                    <img src={this.props.images[this.state.currentIndex]} className={`${this.props.imageClass ? this.props.imageClass : ""}`} style={this.props.imageStyles ? this.props.imageStyles : {visibility: `${this.state.visibility}`, transform: `translateX(${this.state.translateValue})`, transition: "transform 0.3s ease-out"}} />
                </div>
                {!this.props.hideArrows ?
                    <div>
                        <IoChevronRight onClick={() => this.loadNextImage()} style={this.getArrowStyles("right")} />
                    </div> : null}
            </div>
            <div>
                <IoCloseRound style={this.getCloseStyles()} onClick={() => this.props.handleClose()} />
            </div>
            </div>
        )
    }
}