import React, { Component } from "react";

import HomeCard from "../components/HomeCard";
import Header from "../components/Header";
import ColorSwitcher from "../components/ColorSwitcher";

class Home extends Component {
    state = {
        scroll: false,
    };

    updateScroll = () => {
        this.setState({
            scroll: true,
        });
    };

    render() {
        if (this.state.scroll === false) {
            return <HomeCard updateScroll={this.updateScroll} />;
        }

        return (
            <React.Fragment>
                <Header path={this.props.match.path} />
                <ColorSwitcher />
            </React.Fragment>
        );
    }
}

export default Home;
