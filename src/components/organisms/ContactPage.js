import React, { PureComponent } from "react";
import * as LibsModules from "../../libs/modules";
import * as Styles from "../../libs/styles";

class ContactPage extends PureComponent {
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
		const { feature, className, body, ...rest } = this.props;

		return (
			<section
				className={className}
				ref={this.container}
				css={Styles.Mixin.containerCss(true)}
				{...rest}
				data-categoryname={"Contact"}
				data-categoryslug={"contact"}
				data-type={"page"}
			>
				<section>
					<LibsModules.BodyElement body={body} />
				</section>
			</section>
		);
	}
}

export default ContactPage;
