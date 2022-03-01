import React, { PureComponent } from "react";

import * as Styles from "../../libs/styles";

import * as Common from "../../common";

class AboutPage extends PureComponent {
	//--------------------------------------
	//  Styles
	//--------------------------------------

	//--------------------------------------
	//  Scripts
	//--------------------------------------
	constructor(props) {
		super(props);
	}

	render() {
		const { feature, body, className, ...rest } = this.props;

		return (
			<section
				className={className}
				css={Styles.Mixin.containerCss(true)}
				{...rest}
				data-categoryname={"About"}
				data-categoryslug={"about"}
				data-type={"page"}
			>
				<section>{Common.Func.getFeatureLayoutCard(feature)}</section>
			</section>
		);
	}
}

export default AboutPage;
