import React, { Component } from "react";
import styled from "styled-components";

const FloatElement = styled.div`
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 11;
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
    background: #aad29d;
    width: 50px;
    height: 25px;
    cursor: pointer;
`;
const ChildTwo = ChildOne.extend`
    background: #6cae67;
`;

class ColorSwitcher extends Component {
    render() {
        return (
            <FloatElement>
                <Card>
                    <ChildOne />
                    <ChildTwo />
                </Card>
            </FloatElement>
        );
    }
}

export default ColorSwitcher;
