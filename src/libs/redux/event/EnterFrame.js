import { Component } from "react";
import { connect } from "react-redux";
import { EnterFrameHandler } from "../action";

/**
 * クラス		EnterFrame
 * 継承
 * サブクラス
 */

class EnterFrame extends Component {
	constructor(props) {
		super(props);
		const { container, ...rest } = this.props;
		this._framerate = 30;
		this.init(this.props.dispatch);

		this.container = container
			? container
			: document.getElementsByTagName("html")[0];
		this.fps = 30.0;
		this.frameLength = 30;
		this.frame = 0;
		this.ready = false;
		this.isTargetWindow = true;
	}
	init = (dispatch) => {
		this.dispatch = dispatch;
	};
	setContainer = (container) => {
		this.container = container;
		this.isTargetWindow = false;
	};
	componentDidMount() {
		this.ready = true;
	}
	start() {
		if (!this.ready) return false;
		let positionX;
		let positionY;
		const requestAnimationFrame = (function() {
			return (
				window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function(callback) {
					window.setTimeout(callback, 2000.0);
				}
			);
		})();

		const { dispatch } = this.props;

		const now =
			window.performance &&
			(performance.now ||
				performance.mozNow ||
				performance.msNow ||
				performance.oNow ||
				performance.webkitNow);

		const getTime = function() {
			return (now && now.call(performance)) || new Date().getTime();
		};
		const startTime = getTime();
		const me = this;

		(function loop() {
			requestAnimationFrame(loop);

			const lastTime = getTime();
			const prevFrame = me.frame;
			me.frame = Math.floor(
				((lastTime - startTime) / (1000.0 / me.fps)) % me.frameLength
			);

			if (me.isTargetWindow) {
				positionX = window.pageXOffset;
				positionY = window.pageYOffset;
			} else {
				const value = getComputedStyle(me.container).transform;
				const matrixValues = value.match(/matrix.*\((.+)\)/)[1].split(", ");
				positionX = Math.abs(Number(matrixValues[4]));
				positionY = Math.abs(Number(matrixValues[5]));
			}
			if (prevFrame !== me.frame) {
				EnterFrameHandler(
					dispatch,
					me.frame,
					positionX,
					positionY,
					document.getElementsByTagName("html")[0]
				);
			}
		})();
	}

	static get framerate() {
		return this._framerate;
	}
	render() {
		return null;
	}
}

export default connect(null, { EnterFrameHandler }, null, { forwardRef: true })(
	EnterFrame
);
