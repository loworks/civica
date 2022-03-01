import React, { PureComponent } from "react"
import { textHoc } from "./TextHoc"

export class H4 extends PureComponent {
  render() {
    let { forwardedRef, children, data, ...rest } = this.props
    const stylesObj = {
      pcFontSize: 18,
      spFontSize: 18,
      pcLineHeight: 24,
      spLineHeight: 24,
      display: "block",
    }

    return (
      <h4
        ref={forwardedRef}
        css={data.func(stylesObj, data.instance)}
        {...rest}
      >
        {this.props.children}
      </h4>
    )
  }
}

export default textHoc(H4)
