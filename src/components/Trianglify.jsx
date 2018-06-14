import React, { Component } from "react";
import trianglify from "trianglify";

import { fadeIn, fadeOut } from "../utils/FadeInOut";

class Trianglify extends Component {
    static resizeInterval;

    state = {
        interval: 60000,
    };

    componentDidMount() {
        this.renderCanvas();

        this.interval = setInterval(() => {
            this.changeCanvas();
        }, this.state.interval);

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
            this.changeCanvas();
        }, 200);
    };

    /**
     * generate canvas pattern by calling
     * its lib
     */
    generatePattern = () =>
        trianglify({
            width: window.innerWidth,
            height: window.innerHeight,
            cell_size: 150,
        });

    canvasRef = React.createRef();

    /**
     * Chnage canvas re rendering
     * with fadeout and in
     */
    changeCanvas = () => {
        fadeOut(
            this.canvasRef.current,
            fadeIn.bind(null, this.canvasRef.current, this.renderCanvas),
        );
    };

    renderCanvas = () => {
        this.pattern = this.generatePattern();

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
                        left: 0,
                    }}
                />
                {this.props.children}
            </React.Fragment>
        );
    }
}

export default Trianglify;
