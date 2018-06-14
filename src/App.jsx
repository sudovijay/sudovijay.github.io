import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

// components
import Trianglify from "./components/Trianglify";

// importing pages
import Home from "./pages/Home";
import FourOFour from "./errors/FourOFour";

import Global from "./styles/index";

const Loading = props => {
    console.log(props);

    return <div>Loading...</div>;
};

const Skills = Loadable({
    loader: () => import("./pages/Skills"),
    loading: Loading,
});

const Work = Loadable({
    loader: () => import("./pages/Work"),
    loading: Loading,
});

class App extends Component {
    render() {
        return (
            <Global>
                <Trianglify>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/skills" component={Skills} />
                            <Route exact path="/work" component={Work} />
                            <Route component={FourOFour} />
                        </Switch>
                    </Router>
                </Trianglify>
            </Global>
        );
    }
}

render(<App />, document.getElementById("root"));
