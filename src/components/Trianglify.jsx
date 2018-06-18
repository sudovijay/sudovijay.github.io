import React, { Component } from "react";
import trianglify from "trianglify";

import { fadeIn, fadeOut } from "../utils/FadeInOut";

import ThemeContext from "../components/Theme";

class Trianglify extends Component {
    static resizeInterval;

    state = {
        interval: 40, // basically in seconds
        colors: [],
        canvasWidth: this.getWidth(),
        canvasHeight: this.getHeight()
    };

    componentDidMount() {
        this.renderCanvas();

        this.newInterval();

        window.addEventListener("resize", this.resizeCanvas);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        window.removeEventListener("resize", this.resizeCanvas);
    }

    getWidth() {
        return document.body.offsetWidth || window.innerWidth;
    }

    getHeight() {
        return document.body.offsetHeight || window.innerHeight;
    }

    resizeCanvas = () => {
        clearTimeout(this.resizeInterval);
        this.resizeInterval = setTimeout(() => {
            this.resetCanvas();
        }, 100);
    };

    resetCanvas = () => {
        const height = this.getHeight();
        const width = this.getWidth();

        if (
            height !== this.state.canvasHeight ||
            width !== this.state.canvasWidth
        ) {
            this.setState(
                {
                    canvasWidth: document.body.offsetWidth || window.innerWidth,
                    canvasHeight: height
                },
                () => {
                    this.animateCanvas();
                }
            );
        }
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

        const theme_el = document.querySelector('meta[name="theme-color"]');

        if (theme_el)
            theme_el.setAttribute("content", this.pattern.opts.y_colors[3]);

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
                        updateCanvas: this.animateCanvas,
                        changeInterval: this.changeInterval,
                        resetCanvas: this.resetCanvas
                    }}
                >
                    {this.props.children}
                </ThemeContext.Provider>
            </React.Fragment>
        );
    }
}

export default Trianglify;
