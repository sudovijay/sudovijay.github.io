import styledNormalize from "styled-normalize";
import { Children } from "react";
import { injectGlobal } from "styled-components";

const Global = ({ children }) => {
    injectGlobal`
        @import url('https://fonts.googleapis.com/css?family=Lato:400,700');

        ${styledNormalize}

        body{
            font-family: 'Lato',sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-font-smoothing: antialiased;
            font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
            font-smooth: always;
            overflow-x: hidden;
        }

        /*  animation */
        .trans-enter {
            opacity: 0.01;
            transition: opacity 800ms ease-in;
            transform: rotateX(0deg);

            &.trans-enter-active {
                opacity: 1;
            }
        }

        .trans-leave {
            opacity: 1;
            transition: all 800ms cubic-bezier(.23,1,.32,1);
            transform: rotateX(180deg);

            &.trans-leave-active {
                opacity: 0;
            }

        }

        .transtop-enter {
            opacity: 0.1;
            transition: opacity 100ms linear;

            &.transtop-enter-active {
                opacity: 1;
            }
        }

        .transtop-leave {
            opacity: 1;
            transition: opacity 100ms linear;

            &.trans-leave-active {
                opacity: 0;
            }

        }
`;

    return Children.only(children);
};

export default Global;
