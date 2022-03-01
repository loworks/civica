import { css } from "@emotion/react";

export const CenterH = (props) => css`
	position: relative;
	> * {
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}
`;
export const CenterWH = (props) => css`
	position: relative;
	> * {
		position: absolute;
		top: 50%;
		left: 50%;

		transform: translate(-50%, -50%);
	}
`;
export const CenterW = (props) => css`
	position: relative;
	> * {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
	}
`;

export const ChildSpacing = (value = 0) => css`
	> * {
		@content;
		margin-top: ${value};
		&:first-child {
			margin-top: 0;
		}
	}
`;
