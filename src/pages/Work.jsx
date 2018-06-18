/* eslint import/no-dynamic-require: 0 , global-require: 0 */
import React, { Component } from "react";
import { Container, Col } from "react-grid-system";
import styled from "styled-components";

// context
import ThemeContext from "../components/Theme";

import Header from "../components/Header";
import ColorSwitcher from "../components/ColorSwitcher";

import WorkData from "../data/work.json";

const CardBox = styled.div`
    margin: 0 auto;
    margin-top: 8%;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;

    &.card_left {
        .card_image {
            margin-left: -70px;
        }

        .card_text {
            padding-right: 50px;
        }
    }

    &.card_right {
        .card_image {
            margin-right: -70px;
            z-index: 11;
        }

        .card_text {
            padding-left: 70px;
        }
    }

    @media (max-width: 1000px) {
        width: 100%;
    }

    @media (max-width: 575px) {
        &.card_left .card_text,
        &.card_right .card_text {
            padding: 20px;
        }

        > div {
            padding-left: 0px !important;
            padding-right: 0px !important;
        }

        &.card_left .card_image,
        &.card_right .card_image {
            display: none;
        }
    }
`;

const CardContent = styled.div`
    background: rgba(255, 255, 255, 0.7);
    padding: 20px 30px;
    padding-right: 50px;
    box-shadow: 0px 0px 3px 0px #6cae67;

    h1 {
        margin: 0;
        text-transform: uppercase;
        color: #4a90e2;
        font-weight: 700;
        font-size: 28px;
    }

    h2 {
        margin: 5px 0;
        color: #747474;
        font-size: 20px;
    }

    span {
        color: #2eb326;
        margin-top: 10px;
        margin-bottom: 10px;
        display: block;
        font-weight: 700;
    }

    p {
        margin: 7px 0;
        color: #555;
        line-height: 25px;
    }
`;

const CardImage = styled.div`
    position: relative;
    height: 250px;
    border: 4px solid #fff;
    overflow: hidden;
    background: #ebedf1;
    img {
        width: 100%;
    }

    &:hover {
        border-color: ${props => props.colors[3]};
    }
`;

class Work extends Component {
    componentDidMount() {
        this.props.resetCanvas();
    }

    renderCardImage(el) {
        return (
            <CardImage className="card_image" colors={this.props.colors}>
                <img
                    src={require(`../assets/work/${el}.jpg`)}
                    alt="9xbuddy Icon"
                />
            </CardImage>
        );
    }

    renderCardContent(el, work_data) {
        return (
            <CardContent className="card_text">
                <h1>{el}</h1>
                <h2>{work_data[el].position}</h2>
                <span>{work_data[el].duration}</span>
                {work_data[el].content.map((item, key) => (
                    <p key={`${key + 1}`}>{item}</p>
                ))}
            </CardContent>
        );
    }

    renderWork() {
        let count = 1;

        const content = [];

        for (const el of Object.keys(WorkData)) {
            if (count % 2 !== 0) {
                content.push(
                    <CardBox key={el} className="card_left">
                        <Col sm={7}>{this.renderCardContent(el, WorkData)}</Col>
                        <Col sm={4} style={{ overflow: "visible" }}>
                            {this.renderCardImage(el)}
                        </Col>
                    </CardBox>
                );
            } else {
                content.push(
                    <CardBox key={el} className="card_right">
                        <Col sm={4} style={{ overflow: "visible" }}>
                            {this.renderCardImage(el)}
                        </Col>
                        <Col sm={7}>{this.renderCardContent(el, WorkData)}</Col>
                    </CardBox>
                );
            }

            count += 1;
        }

        return content;
    }

    render() {
        return (
            <React.Fragment>
                <Header path={this.props.match.path} />
                <Container style={{ paddingBottom: "60px" }}>
                    {this.renderWork()}
                </Container>
                <ColorSwitcher />
            </React.Fragment>
        );
    }
}

export default props => (
    <ThemeContext.Consumer>
        {obj => (
            <Work {...props} resetCanvas={obj.resetCanvas} colors={obj.colors}>
                {...props.childrens}
            </Work>
        )}
    </ThemeContext.Consumer>
);
