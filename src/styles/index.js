import styledNormalize from "styled-normalize";
import { Children } from "react";
import { injectGlobal } from "styled-components";

const Global = ({ children }) => {
    injectGlobal`
        ${styledNormalize}

    }
  `;

    return Children.only(children);
};

export default Global;
