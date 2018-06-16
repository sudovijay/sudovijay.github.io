import React, { Component } from "react";
import trianglify from "trianglify";

import { fadeIn, fadeOut } from "../utils/FadeInOut";

import ThemeContext from "../components/Theme";

class Trianglify extends Component {
    static resizeInterval;

    state = {
        interval: 40, // basically in seconds
        colors: [],
        canvasWidth: window.innerWidth,
        canvasHeight: window.innerHeight
    };

    componentDidMount() {
        this.renderCanvas();

        this.newInterval();

        window.addEventListener("resize", this.updateCanvas);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        window.removeEventListener("resize", this.updateCanvas);
    }

    /**
     * Update dimenesion method
     * that'll regenrate canvas
     * on window resize
     */
    updateCanvas = () => {
        clearTimeout(this.resizeInterval);
        this.resizeInterval = setTimeout(() => {
            this.animateCanvas();
        }, 100);
    };

    /**
     * Create new interval
     */
    newInterval = () => {
        const interval = Number(this.state.interval) || 40;

        this.interval = setInterval(() => {
            this.animateCanvas();
        }, interval * 1000);
    };

    /**
     * Change interval method
     * passing as a render prop
     */
    changeInterval = event => {
        const newInterval = event.target.value;

        /** Clear last interval and make new */
        this.setState({ interval: newInterval }, () => {
            clearInterval(this.interval);
            this.newInterval();
        });
    };

    /**
     * generate canvas pattern by calling
     * its lib
     */
    generatePattern = () =>
        trianglify({
            width: this.state.canvasWidth,
            height: this.state.canvasHeight,
            cell_size: 150
        });

    canvasRef = React.createRef();

    /**
     * Chnage canvas re rendering
     * with fadeout and in
     */
    animateCanvas = () => {
        fadeOut(
            this.canvasRef.current,
            fadeIn.bind(null, this.canvasRef.current, this.renderCanvas)
        );
    };

    renderCanvas = () => {
        this.pattern = this.generatePattern();

        this.setState({
            colors: this.pattern.opts.y_colors
        });

        this.pattern.canvas(this.canvasRef.current);
    };

    render() {
        return (
            <React.Fragment>
                <canvas
                    ref={this.canvasRef}
                    style={{
                        position: "absolute",
                        zIndex: -1,
                        transition: "opacity 0.8s ease",
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0
                    }}
                />
                <ThemeContext.Provider
                    value={{
                        colors: this.state.colors,
                        interval: this.state.interval,
                        updateCanvas: this.updateCanvas,
                        changeInterval: this.changeInterval
                    }}
                >
                    {this.props.children}
                </ThemeContext.Provider>
            </React.Fragment>
        );
    }
}

export default Trianglify;
