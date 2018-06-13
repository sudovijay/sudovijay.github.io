import React, { Component } from "react";

import Header from "../components/Header";
import ColorSwitcher from "../components/ColorSwitcher";

class Work extends Component {
    render() {
        return (
            <React.Fragment>
                <Header path={this.props.match.path} />
                <ColorSwitcher />
            </React.Fragment>
        );
    }
}

export default Work;
