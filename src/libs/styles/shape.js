import React from "react";
import { css } from "@emotion/react";
import PropTypes from "prop-types";

export const Rect = (props) => {
	const newprops = { ...props, children: null, className: null };
	const { width, height, color, border } = newprops;
	const style = css`
		width: ${width};
		height: ${height};
		background-color: ${color};
		border: ${border};

		${{ ...newprops }}
	`;

	if (props.className) {
		return <div css={style} {...props} />;
	} else {
		return <div css={style} />;
	}
};
Rect.propTypes = {
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	color: PropTypes.string.isRequired,
	border: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Rect.defaultProps = {
	width: "18px",
	height: "2px",
	color: "#000",
	border: "0px",
};
