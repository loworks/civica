import { css } from "@emotion/react";
import Mq from "./mq";

export const MarginSp = (props) => css`
	${Mq.sp} {
		margin-top: ${props.top ? props.top : 0};
		margin-bottom: ${props.bottom ? props.bottom : 0};
		margin-left: ${props.left ? props.left : 0};
		margin-right: ${props.right ? props.right : 0};
	}
`;
export const MarginTb = (props) => css`
	${Mq.tb} {
		margin-top: ${props.top ? props.top : 0};
		margin-bottom: ${props.bottom ? props.bottom : 0};
		margin-left: ${props.left ? props.left : 0};
		margin-right: ${props.right ? props.right : 0};
	}
`;
export const MarginPc = (props) => css`
	${Mq.pc} {
		margin-top: ${props.top ? props.top : 0};
		margin-bottom: ${props.bottom ? props.bottom : 0};
		margin-left: ${props.left ? props.left : 0};
		margin-right: ${props.right ? props.right : 0};
	}
`;
export const MarginLarge = (props) => css`
	${Mq.large} {
		margin-top: ${props.top ? props.top : 0};
		margin-bottom: ${props.bottom ? props.bottom : 0};
		margin-left: ${props.left ? props.left : 0};
		margin-right: ${props.right ? props.right : 0};
	}
`;
export const Margin = (props) => css`
	margin-top: ${props.top ? props.top : 0};
	margin-bottom: ${props.bottom ? props.bottom : 0};
	margin-left: ${props.left ? props.left : 0};
	margin-right: ${props.right ? props.right : 0};
`;
export const Padding = (props) => css`
	padding-top: ${props.top ? props.top : 0};
	padding-bottom: ${props.bottom ? props.bottom : 0};
	padding-left: ${props.left ? props.left : 0};
	padding-right: ${props.right ? props.right : 0};
`;
