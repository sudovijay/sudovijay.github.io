import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// components
import ThemeContext from "../components/Theme";

// assets
import DevPng from "../assets/common/dev.png";
import HomeIcon from "../assets/common/home.svg";
import SkillsIcon from "../assets/common/skills.svg";
import WorkIcon from "../assets/common/work.svg";

const HeaderWrapper = styled.header`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.8);
    padding: 0px 0px;
    display: flex;
    justify-content: space-around;
`;

const Brand = styled.div`
    padding: 10px 30px;

    a {
        display: flex;
        justify-content: center;
        text-decoration: none;
        align-items: center;

        img {
            margin: 0 15px;
            user-select: none;
        }

        h2 {
            color: ${props => props.colors[3]};
            margin: 0;
            font-size: 22px;
            font-weight: 700;
            line-height: 45px;
            letter-spacing: 1px;
        }
    }
`;

const Nav = styled.div`
    display: flex;
    justify-content: center;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #a8a8a8;
        font-weight: 700;
        padding: 0 20px;
        font-size: 16px;
        text-transform: uppercase;

        &:nth-child(3) {
            margin-right: 0;
        }

        span {
            margin-left: 10px;
            display: none;
            user-select: none;
        }

        path {
            fill: #a8a8a8;
        }

        &:hover {
            background: ${props => props.colors[3]};
            color: #fff;

            path {
                fill: #fff;
            }
        }

        &.active {
            background: ${props => props.colors[3]};
            color: #fff;

            path {
                fill: #fff;
            }

            span {
                display: inline-block;
            }
        }
    }
`;

class Header extends Component {
    renderContext(props) {
        const { path } = this.props;
        return (
            <React.Fragment>
                <Brand colors={props.colors}>
                    <Link to="/">
                        <img src={DevPng} alt="dev icon" width="35" />
                        <h2>Vijay Singh</h2>
                    </Link>
                </Brand>
                <Nav colors={props.colors}>
                    <Link to="/" className={path === "/" ? "active" : null}>
                        <HomeIcon width={30} />
                        <span>Home</span>
                    </Link>
                    <Link
                        to="/skills"
                        className={path === "/skills" ? "active" : null}
                    >
                        <SkillsIcon width={30} />
                        <span>Skills</span>
                    </Link>
                    <Link
                        to="/work"
                        className={path === "/work" ? "active" : null}
                    >
                        <WorkIcon width={25} />
                        <span>Work</span>
                    </Link>
                </Nav>
            </React.Fragment>
        );
    }

    render() {
        return (
            <HeaderWrapper>
                <ThemeContext.Consumer>
                    {props => this.renderContext(props)}
                </ThemeContext.Consumer>
            </HeaderWrapper>
        );
    }
}

export default Header;
