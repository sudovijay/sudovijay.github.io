/* eslint import/no-dynamic-require: 0 , global-require: 0 */

import React, { Component } from "react";
import { Container, Col } from "react-grid-system";
import styled from "styled-components";

// import components
import Header from "../components/Header";
import ColorSwitcher from "../components/ColorSwitcher";

// import icons
import SearchIcon from "../assets/skills/search.svg";

import SkillData from "../data/skills.json";

// styles
const SearchWrap = styled.div`
    margin-top: 7%;
    background: rgba(255, 255, 255, 0.4);
    padding: 60px 40px;
`;

const InputWrap = styled.div`
    position: relative;

    span {
        position: absolute;
        left: 15px;
        top: 5px;
    }

    input {
        width: 100%;
        font-size: 17px;
        color: #555;
        padding: 20px 20px;
        border: 0;
        padding-left: 60px;
        box-shadow: inset 0px 0px 4px 1px #bdbdbd;

        &::placeholder {
            color: #ccc;
        }
    }
`;

// category filter warp
const CatWrap = styled.div`
    background: rgba(80, 80, 80, 0.25);
    padding: 40px 0;
    margin-top: 5%;
    padding-top: 60px;
`;

const CatHeader = styled.div`
    background: rgba(255, 255, 255, 0.7);

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a {
        display: block;
        flex-grow: 1;
        color: #827d7d;
        text-align: center;
        text-transform: uppercase;
        padding: 25px 20px;
        transition: all 200ms ease-in;

        &.active,
        &:hover {
            background: #fff;
            cursor: pointer;
            position: relative;
            top: -5px;
            box-shadow: 0px 2px 3px 0px #e4e4e4;
        }
    }
`;

const CatList = styled.div`
    margin-top: 20px;
    padding: 20px;

    ul {
        list-style: none;
        padding: 0 20px;
        margin: 0;
        text-align: center;
    }

    li {
        padding: 20px 60px;
        color: #fff;
        max-height: 30px;
        margin: 30px 20px;
        background: rgba(0, 0, 0, 0.2);
        box-shadow: 0 0px 3px 1px rgba(80, 80, 80, 0.1);
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
        font-size: 18px;
        font-weight: 700;
        text-transform: capitalize;

        img {
            width: 50px;
            margin-left: 30px;
        }
    }
`;

class Skills extends Component {
    renderSkills() {
        const return_data = [];

        for (const el in SkillData) {
            if (SkillData[el].type === "frameworks") {
                return_data.push(
                    <li key={el}>
                        {el}
                        <img
                            src={require(`../assets/skills/${el}.png`)}
                            alt="react icon"
                        />
                    </li>
                );
            }
        }

        return return_data;
    }

    renderSearch() {
        return (
            <SearchWrap>
                <Container>
                    <Col
                        sm={8}
                        offset={{ sm: 2 }}
                        style={{ overflow: "visible" }}
                    >
                        <InputWrap>
                            <span>
                                <SearchIcon width={30} />
                            </span>
                            <input type="text" placeholder="React" />
                        </InputWrap>
                    </Col>
                </Container>
            </SearchWrap>
        );
    }
    render() {
        return (
            <React.Fragment>
                <Header path={this.props.match.path} />

                {this.renderSearch()}

                <CatWrap>
                    <CatHeader>
                        <Container>
                            <a className="active">Frameworks</a>
                            <a>Libraries</a>
                            <a>Languages</a>
                            <a>Tools</a>
                        </Container>
                    </CatHeader>
                    <CatList>
                        <Container>
                            <ul>{this.renderSkills()}</ul>
                        </Container>
                    </CatList>
                </CatWrap>
                <ColorSwitcher />
            </React.Fragment>
        );
    }
}

export default Skills;
