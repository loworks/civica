import React from "react";

import { css } from "@emotion/react";

import ReactSelect from "react-select";

const Select = (props) => {
	const optionSelectCss = () => css`
		.option__control {
			border-radius: 0;
			box-shadow: none;
			font-size: 14px;
			&:hover {
				border: 1px solid lightgray;
			}
			&.option__control--is-focused {
				border: 1px solid lightgray;
			}
		}
		.option__menu {
			font-size: 13px;
		}
		.option__dropdown-indicator {
			color: #000;
			svg {
				width: 10px;
			}
		}
		.option__indicator-separator {
			background-color: transparent;
		}
	`;
	const { onChange, options, defaultValue, ...rest } = props;

	return (
		<ReactSelect
			width="100px"
			className="option"
			classNamePrefix="option"
			menuColor="red"
			isSearchable={false}
			css={optionSelectCss}
			options={options}
			onChange={onChange}
			defaultValue={defaultValue}
			{...rest}
		/>
	);
};

export default Select;
