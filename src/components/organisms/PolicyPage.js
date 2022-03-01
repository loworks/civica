import React, { PureComponent } from "react";

import { css } from "@emotion/react";

import * as Libs from "libs";
class PolicyPage extends PureComponent {
	//--------------------------------------
	//  Libs.Styles
	//--------------------------------------

	//--------------------------------------
	//  Scripts
	//--------------------------------------
	constructor(props) {
		super(props);
	}

	contCss = (props) => {
		return css`
			margin: 0 auto;
			${Libs.Common.Func.getPcSpVwValue("margin-top", 350, 275, true)};
			${Libs.Styles.Mq.moreTab} {
				width: 55vw;
			}
			${Libs.Styles.Mq.lessPab} {
				width: 88vw;
			}
		`;
	};
	render() {
		const { feature, className, body, ...rest } = this.props;

		return (
			<section
				className={className}
				ref={this.container}
				css={Libs.Styles.Mixin.containerCss(true)}
				{...rest}
				data-categoryname={"Policy"}
				data-categoryslug={"policy"}
				data-type={"category"}
			>
				<section css={this.contCss}>
					<Libs.Modules.BodyElement body={body} />
				</section>
			</section>
		);
	}
}

export default PolicyPage;
