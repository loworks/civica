import { css } from "@emotion/react";

import Mq from "./mq";

const flexContainer = css`
	display: flex;
	align-items: top;
	flex-wrap: wrap;
	position: relative;
`;
export const flexLine = (props = null) => css`
  ${flexContainer}
  ${props.between ? { "justify-content": "space-between" } : ""}
  ${props.around ? { "justify-content": "space-around" } : ""}
`;
export const flexList = (props = {}) => {
	const keys = [
		"sp",
		"pab",
		"tb",
		"pc",
		"large",
		"lessPab",
		"lessTab",
		"moreTab",
		"morePc",
	];
	return css`
		${flexLine(props)}
		${keys.map(function(key) {
			const value = props[key];
			if (value) {
				return ` ${Mq[key]} {
          ${getLastLineCss(value)}
        }`;
			}
		})}

    & > * {
			display: flex;
			overflow: hidden;
			flex-direction: column;
			${keys.map(function(key) {
				const value = props[key];
				if (value) {
					return ` ${Mq[key]} {
            flex-basis:${value}%;
            ${getMargin(value)}
          }`;
				}
			})}
		}
	`;
};
const getLastLineCss = (percent) => {
	const column = Math.floor(100 / percent);

	if (column === 3) {
		return `
     &:after{
      content:"";
      display: block;
      width:${percent}%;
    }
  `;
	}

	if (column === 4) {
		return `
      &:before {
        content: "";
        display: block;
        width:${percent}%;
        order: 1;
      }
      &:after {
        content: "";
        display: block;
        width: ${percent}%;
      }
  `;
	}
};

const getMargin = (percent) => {
	const column = Math.floor(100 / percent);

	return `
       &:nth-last-child(-n + ${column}) {
          margin-bottom: 0 !important;
        }
  `;
};
