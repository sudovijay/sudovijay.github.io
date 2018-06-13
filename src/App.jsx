import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Trianglify from "./components/Trianglify";

// importing pages
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import FourOFour from "./errors/FourOFour";

import Global from "./styles/index";

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
