/* eslint import/no-dynamic-require: 0 , jsx-a11y/click-events-have-key-events: 0,
global-require: 0  , jsx-a11y/no-static-element-interactions: 0 */

import React, { Component } from "react";
import { Container, Col } from "react-grid-system";
import styled from "styled-components";

// context
import ThemeContext from "../components/Theme";

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

    @media (max-width: 575px) {
        padding: 15px 10px;

        > div {
            padding-left: 0 !important;
        }
    }
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

    @media (max-width: 575px) {
        padding-top: 20px;
    }
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

    @media (max-width: 575px) {
        > div {
            display: block;
            text-align: center;
            padding: 10px 0;
        }

        a {
            padding: 10px 10px;
            display: inline-block;
            margin: 5px;

            &.active,
            &:hover {
                top: 0;
            }
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
        padding: 20px 40px;
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

    @media (max-width: 575px) {
        > div {
            padding-left: 10px !important;
        }

        ul {
            padding-left: 0;
        }

        li {
            width: 70%;
            margin-left: 15px;
        }
    }
`;

class Skills extends Component {
    state = {
        type: "frameworks",
        search: ""
    };

    componentDidMount() {
        this.props.resetCanvas();
    }

    types = ["frameworks", "libraries", "languages", "tools"];

    changeType = type => {
        if (this.types[type] === false) return;

        this.setState(
            {
                type
            },
            () => {
                this.props.resetCanvas();
            }
        );
    };

    hanldeInput = e => {
        const value = e.target.value.trim();

        this.setState({
            search: value
        });
    };

    renderElement(el, obj) {
        return (
            <li key={obj.src}>
                {el}
                <img
                    src={require(`../assets/skills/${obj.src}.png`)}
                    alt="react icon"
                />
            </li>
        );
    }

    renderSkills() {
        const return_data = [];

        for (const el in SkillData) {
            if (
                this.state.search &&
                el
                    .toLocaleLowerCase()
                    .includes(this.state.search.toLocaleLowerCase())
            ) {
                return_data.push(this.renderElement(el, SkillData[el]));
            } else if (
                !this.state.search &&
                SkillData[el].type === this.state.type
            ) {
                return_data.push(this.renderElement(el, SkillData[el]));
            }
        }

        return return_data;
    }

    renderSearch() {
        return (
            <SearchWrap>
                <Container>
                    <Col
                        xs={10}
                        sm={8}
                        offset={{ sm: 2, xs: 0 }}
                        style={{ overflow: "visible" }}
                    >
                        <InputWrap>
                            <span>
                                <SearchIcon width={30} />
                            </span>
                            <input
                                type="text"
                                value={this.state.search}
                                onChange={this.hanldeInput}
                                placeholder="React"
                            />
                        </InputWrap>
                    </Col>
                </Container>
            </SearchWrap>
        );
    }

    renderTypes = () =>
        this.types.map(el => {
            const className = el === this.state.type ? "active" : "";

            return (
                <a
                    onClick={() => this.changeType(el)}
                    className={className}
                    key={el}
                >
                    {el}
                </a>
            );
        });

    render() {
        return (
            <React.Fragment>
                <Header path={this.props.match.path} />

                {this.renderSearch()}

                <CatWrap
                    style={this.state.search ? { paddingTop: "20px" } : {}}
                >
                    {!this.state.search && (
                        <CatHeader>
                            <Container>{this.renderTypes()}</Container>
                        </CatHeader>
                    )}
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

export default props => (
    <ThemeContext.Consumer>
        {obj => (
            <Skills {...props} resetCanvas={obj.resetCanvas}>
                {...props.childrens}
            </Skills>
        )}
    </ThemeContext.Consumer>
);
