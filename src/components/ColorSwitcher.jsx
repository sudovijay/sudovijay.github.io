import React, { Component } from "react";
import styled from "styled-components";

// import comonents
import ThemeContext from "../components/Theme";

const FloatElement = styled.div`
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 11;

    @media (max-width: 500px) {
        display: none;
    }
`;

const Card = styled.div`
    background: rgba(234, 234, 234, 0.7);
    border-radius: 50% 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const ChildOne = styled.div`
    background: ${props => props.colors[5]};
    width: 50px;
    height: 25px;
    cursor: pointer;
`;
const ChildTwo = ChildOne.extend`
    background: ${props => props.colors[3]};
`;

class ColorSwitcher extends Component {
    render() {
        return (
            <FloatElement>
                <ThemeContext.Consumer>
                    {props => (
                        <Card onClick={props.updateCanvas}>
                            <ChildOne colors={props.colors} />
                            <ChildTwo colors={props.colors} />
                        </Card>
                    )}
                </ThemeContext.Consumer>
            </FloatElement>
        );
    }
}

export default ColorSwitcher;
