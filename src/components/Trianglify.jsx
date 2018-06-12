import React, { Component } from "react";
import trianglify from "trianglify";

const pattern = trianglify({
    width: window.innerWidth,
    height: window.innerHeight,
});

class Trianglify extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        pattern.canvas(this.canvasRef.current);

        console.log(pattern);
    }

    render() {
        const el = pattern.canvas();
        return (
            <main>
                <canvas
                    ref={this.canvasRef}
                    height="100"
                    width="200"
                    style={{ position: "absolute", zIndex: 0 }}
                />
                {this.props.children}
            </main>
        );
    }
}

export default Trianglify;
