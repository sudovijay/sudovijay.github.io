import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

// components
import Trianglify from "./components/Trianglify";
import Loader from "./components/Loader";

// importing pages
import Home from "./pages/Home";
import FourOFour from "./errors/FourOFour";
import Global from "./styles/index";

const Skills = Loadable({
    loader: () => import("./pages/Skills"),
    loading: Loader,
});

const Work = Loadable({
    loader: () => import("./pages/Work"),
    loading: Loader,
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
