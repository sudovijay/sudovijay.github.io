import React, { Component } from "react";

import Header from "../components/Header";
import ColorSwitcher from "../components/ColorSwitcher";

class Skills extends Component {
    render() {
        return (
            <React.Fragment>
                <Header path={this.props.match.path} />
                <ColorSwitcher />
            </React.Fragment>
        );
    }
}

export default Skills;
