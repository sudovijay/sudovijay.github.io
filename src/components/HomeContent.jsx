import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";

// icons
import GitIcon from "../assets/github.svg";
import TwitterIcon from "../assets/twitter.svg";
import ProfileImg from "../assets/vijay.jpg";
import MapIcon from "../assets/map.svg";
import Tada from "../assets/tada.png";
import India from "../assets/india.png";
import AtIcon from "../assets/at.svg";

const ContentWrapper = styled.main`
    background: rgba(244, 244, 244, 0.75);
    padding: 20px;
    margin-top: 10%;
`;

const ContentHead = styled.div`
    text-align: center;
`;

const IconWrap = styled.div`
    width: 120px;
    height: 120px;
    border-radius: 50% 50%;
    background: #6cae67;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border: 2px solid #f1f1f1;
    position: relative;
    top: -80px;
`;

const ImageWrap = IconWrap.extend`
    width: 180px;
    height: 180px;
    top: -120px;
    background: rgba(255, 255, 255, 0.8);
    border: 4px solid #f1f1f1;
    overflow: hidden;

    img {
        margin-left: 20px;
    }
`;

const ContentText = styled.div`
    color: #555;
    font-size: 24px;
    text-align: center;
    margin-top: -80px;

    em {
        color: #4a90e2;
        margin: 0 5px;
        font-style: normal;
    }
`;

const ContentBtns = styled.div`
    text-align: center;
    margin-top: 80px;
    margin-bottom: 80px;
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

    img {
        width: 25px;
        margin: 0 10px;

        &:last-child {
            position: relative;
            top: -2px;
        }
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
`;

class HomeContent extends Component {
    renderHeader() {
        return (
            <ContentHead>
                <Row>
                    <Col sm={3} style={{ overflow: "visible" }}>
                        <IconWrap>
                            <GitIcon width={75} />
                        </IconWrap>
                    </Col>
                    <Col sm={6} style={{ overflow: "visible" }}>
                        <ImageWrap>
                            <img src={ProfileImg} alt="profile icon" />
                        </ImageWrap>
                    </Col>
                    <Col sm={3} style={{ overflow: "visible" }}>
                        <IconWrap>
                            <TwitterIcon width={70} />
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
                    {"I'm"} 23 Years 2 Months 12 Days And <em>120122</em>{" "}
                    Seconds Old
                </p>
                <p>
                    {"I've"} no plans to make this world a better place.&nbsp;
                    {"I'm"} more of a private repo.
                </p>
            </ContentText>
        );
    }

    render() {
        return (
            <ContentWrapper>
                <Container>
                    {this.renderHeader()}
                    {this.renderText()}
                    <ContentBtns>
                        <Row>
                            <Col
                                md={4}
                                sm={5}
                                offset={{ md: 2 }}
                                style={{ overflow: "visible" }}
                            >
                                <Btn>
                                    <Col
                                        sm={3}
                                        style={{
                                            borderRight: "2px solid #ddd",
                                            paddingLeft: 0,
                                        }}
                                    >
                                        <MapIcon width={22} />
                                    </Col>
                                    <Col sm={9} style={{ paddingRight: 0 }}>
                                        <span>Meerut, India</span>
                                        <img src={Tada} alt="Tada icon" />
                                        <em>@</em>
                                        <img src={India} alt="India Icon" />
                                    </Col>
                                </Btn>
                            </Col>
                            <Col md={4} sm={5} style={{ overflow: "visible" }}>
                                <Btn style={{ paddingBottom: "11px" }}>
                                    <Col
                                        sm={3}
                                        style={{
                                            borderRight: "2px solid #ddd",
                                            paddingLeft: 0,
                                        }}
                                    >
                                        <AtIcon width={26} />
                                    </Col>
                                    <Col sm={9} style={{ paddingRight: 0 }}>
                                        <span>sudovijay@gmail.com</span>
                                    </Col>
                                </Btn>
                            </Col>
                        </Row>
                    </ContentBtns>
                </Container>
            </ContentWrapper>
        );
    }
}

export default HomeContent;
