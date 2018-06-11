import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";

const Heading = styled.h2`
    color: red;
    background: grey;
display: flex;
    text-transform: uppercase;
`;

class App extends Component {
    render() {
        return (
            <div className="border">
                <Heading>Hello World</Heading>
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));
