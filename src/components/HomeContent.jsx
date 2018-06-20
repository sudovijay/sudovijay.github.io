/* eslint jsx-a11y/mouse-events-have-key-events:0 */
import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";

// component
import ThemeContext from "../components/Theme";
import Birth from "./Birth";

// Utils
import Email from "../utils/Email";

// icons
import GitIcon from "../assets/home/github.svg";
import TwitterIcon from "../assets/home/twitter.svg";
import ProfileImg from "../assets/home/vijay.jpg";
import MapIcon from "../assets/home/map.svg";
import Tada from "../assets/home/tada.png";
import India from "../assets/home/india.png";
import AtIcon from "../assets/home/at.svg";

const ContentWrapper = styled.main`
    background: rgba(244, 244, 244, 0.75);
    padding: 20px;
    margin-top: 12%;

    @media (max-width: 1200px) {
        margin-top: 20%;
    }

    @media (max-width: 600px) {
        margin-top: 25%;
    }
`;

const ContentHead = styled.div`
    text-align: center;

    @media (max-width: 575px) {
        margin-bottom: 50px;
    }

    @media (max-width: 400px) {
        margin-left: -25px !important;
    }
`;

const IconWrap = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50% 50%;
    background: ${props => (props.colors ? props.colors[3] : "none")};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border: 2px solid #f1f1f1;
    position: relative;
    top: -80px;
    cursor: pointer;

    svg {
        transition: all 200ms ease;
    }

    &:hover {
        svg {
            transform: scale(1.1);
        }
    }

    @media (max-width: 575px) {
        position: relative;
        top: -60px;
        left: -10px;

        &.icon_git {
            margin-top: 200px;
            left: 10px;
        }

        &.icon_tw {
            margin-top: 200px;
            left: -50px;
            z-index: 10;
        }
    }
`;

const ImageWrap = IconWrap.extend`
    width: 180px;
    height: 180px;
    top: -120px;
    background: rgba(255, 255, 255, 0.8);
    border: 4px solid #f1f1f1;
    overflow: hidden;
    cursor: move;
    user-select: none;

    img {
        position: relative;
        left: 10px;
    }
`;

const ContentText = styled.div`
    color: #555;
    font-size: 22px;
    text-align: center;
    margin-top: -80px;

    em {
        color: #4a90e2;
        margin: 0 5px;
        font-style: normal;
    }

    @media (max-width: 575px) {
        font-size: 20px;
        line-height: 30px;
    }
`;

const ContentBtns = styled.div`
    text-align: center;
    margin-top: 80px;
    margin-bottom: 80px;

    @media (max-width: 575px) {
        margin: 40px 0;
    }
`;

const Btn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 20px;
    background: rgba(246, 246, 246, 0.73);
    color: #555;
    font-size: 17px;
    box-shadow: 0px 0px 2px 0px #c7c7c7;
    overflow: hidden;
    white-space: nowrap;

    img {
        width: 25px;
        margin: 0 10px;

        &:last-child {
            position: relative;
            top: -2px;
        }
    }

    path {
        fill: ${props => props.colors[3]};
    }

    em {
        font-weight: 700px;
        font-size: 20px;
        position: relative;
        top: -4px;
    }

    span {
        vertical-align: super;
        margin-right: 4px;
    }

    @media (max-width: 575px) {
        padding: 15px 10px;
    }

    @media (max-width: 400px) {
        img {
            width: 15px;
            position: relative;
            top: -5px;

            &:last-child {
                top: -7px;
            }
        }

        em {
            font-size: 16px;
            position: relative;
            top: -5px;
        }
    }
`;

class HomeContent extends Component {
    componentDidMount() {
        this.props.resetCanvas();
    }

    handleMouseMove = event => {
        const { target } = event;

        if (target.nodeName !== "IMG") return;

        const bounds = target.parentElement.getBoundingClientRect();
        const x = Math.round(event.clientX - bounds.left);
        const y = Math.round(event.clientY - bounds.top);

        if (x > 90) {
            target.style.left = "auto";
            target.style.right = `${parseInt(x - 90, 10)}px`;
        } else {
            target.style.right = "auto";
            target.style.left = `${parseInt(90 - x, 10)}px`;
        }

        if (y < 90) {
            target.style.bottom = "auto";
            target.style.top = `${parseInt(90 - y, 10)}px`;
        } else {
            target.style.top = "auto";
            target.style.bottom = `${parseInt(y - 90, 10)}px`;
        }
    };

    handleMouseOut = event => {
        const { target } = event;

        if (target.nodeName !== "IMG") return;

        target.style.top = "auto";
        target.style.bottom = "auto";
        target.style.right = "auto";
        target.style.left = "10px";
    };

    renderHeader() {
        return (
            <ContentHead>
                <Row>
                    <Col xs={3} style={{ overflow: "visible" }}>
                        <IconWrap
                            colors={this.props.colors}
                            className="icon_git"
                        >
                            <a
                                href="https://github.com/sudovijay"
                                rel="nofollow noreferrer noopener"
                                target="_blank"
                            >
                                <GitIcon width={75} />
                            </a>
                        </IconWrap>
                    </Col>
                    <Col xs={6} style={{ overflow: "visible" }}>
                        <ImageWrap
                            onMouseMove={this.handleMouseMove}
                            onMouseOut={this.handleMouseOut}
                        >
                            <img src={ProfileImg} alt="profile icon" />
                        </ImageWrap>
                    </Col>
                    <Col xs={3} style={{ overflow: "visible" }}>
                        <IconWrap
                            colors={this.props.colors}
                            className="icon_tw"
                        >
                            <a
                                href="https://twitter.com/sudovijay"
                                rel="nofollow noreferrer noopener"
                                target="_blank"
                            >
                                <TwitterIcon width={70} />
                            </a>
                        </IconWrap>
                    </Col>
                </Row>
            </ContentHead>
        );
    }

    renderText() {
        return (
            <ContentText>
                <p>
                    Hi there! My name is Vijay Singh. I love working on new
                    things (Yes {"I'm"} Lazy AF)
                </p>
                <p>
                    <Birth />
                </p>
                <p>
                    {"I've"} no plans to make this world a better place.&nbsp;
                    {"I'm"} more of a private repo.
                </p>
            </ContentText>
        );
    }

    renderContext(props) {
        return (
            <Row>
                <Col
                    md={4}
                    sm={6}
                    offset={{ md: 2, sm: 0 }}
                    style={{ overflow: "visible" }}
                >
                    <Btn colors={props.colors}>
                        <Col
                            xs={3}
                            style={{
                                borderRight: "2px solid #ddd",
                                paddingLeft: 0
                            }}
                        >
                            <MapIcon width={22} />
                        </Col>
                        <Col xs={9} style={{ paddingRight: 0 }}>
                            <span>Meerut, India</span>
                            <img src={Tada} alt="Tada icon" />
                            <em>@</em>
                            <img src={India} alt="India Icon" />
                        </Col>
                    </Btn>
                </Col>
                <Col md={4} sm={6} style={{ overflow: "visible" }}>
                    <Btn
                        style={{ paddingBottom: "11px" }}
                        colors={props.colors}
                    >
                        <Col
                            xs={3}
                            style={{
                                borderRight: "2px solid #ddd",
                                paddingLeft: 0
                            }}
                        >
                            <AtIcon width={26} />
                        </Col>
                        <Col xs={9} style={{ paddingRight: 0 }}>
                            <span>{Email()}</span>
                        </Col>
                    </Btn>
                </Col>
            </Row>
        );
    }

    render() {
        return (
            <ContentWrapper>
                <Container>
                    {this.renderHeader()}
                    {this.renderText()}
                    <ContentBtns>{this.renderContext(this.props)}</ContentBtns>
                </Container>
            </ContentWrapper>
        );
    }
}

export default props => (
    <ThemeContext.Consumer>
        {obj => (
            <HomeContent
                {...props}
                resetCanvas={obj.resetCanvas}
                colors={obj.colors}
            >
                {...props.childrens}
            </HomeContent>
        )}
    </ThemeContext.Consumer>
);
