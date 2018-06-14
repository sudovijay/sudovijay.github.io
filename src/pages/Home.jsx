import React, { Component } from "react";
// import { CSSTransitionGroup } from "react-transition-group";

import HomeCard from "../components/HomeCard";
import Header from "../components/Header";
import ColorSwitcher from "../components/ColorSwitcher";
import HomeContent from "../components/HomeContent";

class Home extends Component {
    state = {
        seen: false,
    };

    updateSeen = () => {
        this.setState({ seen: true });
    };

    renderHome() {
        return (
            <React.Fragment key="HomeContent">
                <Header path={this.props.match.path} />
                <HomeContent />
                <ColorSwitcher />
            </React.Fragment>
        );
    }

    renderCard() {
        return <HomeCard updateSeen={this.updateSeen} key="HomeCard" />;
    }

    render() {
        const return_data =
            this.state.seen === false ? this.renderCard() : this.renderHome();

        return return_data;
        // (
        //     <CSSTransitionGroup
        //         transitionName="transtop"
        //         transitionEnterTimeout={100}
        //         transitionLeaveTimeout={100}
        //     >
        //         {return_data}
        //     </CSSTransitionGroup>
        // );
    }
}

export default Home;
