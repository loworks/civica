import { css } from "@emotion/react";

export const Text = (props) => {
	return css`
    white-space: pre-line;
    font-size: ${props.size ? props.size + "px" : "14px"};
    ${props.lineHeight ? { "line-height": props.lineHeight } : ""}
    ${props.letterSpacing ? { "letter-spacing": props.letterSpacing } : ""}
    ${props.marginTop ? { "margin-top": props.marginTop + "px" } : ""}
  `;
};
