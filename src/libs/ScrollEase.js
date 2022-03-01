import { Component } from "react";
import { connect } from "react-redux";

export class ScrollEase extends Component {
	static count = 0;
	static container = null;
	static instances = [];
	static readyList = 0;
	static init = function() {
		if (this.sp) return;
		const instances = ScrollEase.instances;

		const container = ScrollEase.container;
		instances.map(function(instance) {
			const { target } = instance.props;
			instance.targetElem = target.current;
			const clientRect = instance.targetElem.getBoundingClientRect();
			let targetTop = window.pageYOffset + clientRect.y;
			const targetBtm = targetTop + instance.targetElem.clientHeight;
			instance.targetInfo = {
				targetTop: targetTop,
				targetBtm: targetBtm,
				width: clientRect.width,
				height: clientRect.height,
			};

			instance.initState = true;
			return instance;
		});

		if (container) {
			container.setAttribute(
				"style",
				"height:" + container.clientHeight + "px"
			);
		}
	};
	constructor(props) {
		super(props);
		this.targetInfo = null;
		this.targetElem = null;
		this.key = this.props.id;
		this.props = { ...this.props, instance: this };
		this.initState = false;
		this.appear = false;
		this.sp = false;
		if (typeof window !== `undefined`) {
			const regexp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
			if (window.navigator.userAgent.search(regexp) !== -1) {
				this.sp = true;
			}
			this.sp = true;
		}
		ScrollEase.instances.push(this);
	}
	componentDidMount() {
		const { target } = this.props;

		this.targetElem = target.current;
	}
	componentWillUnmount() {
		ScrollEase.instances = [];
		ScrollEase.count = 0;
	}

	stylefunc = (target, scrollY, targetTop) => {
		const elem = target.current;
		if (!scrollY) return;

		if (elem) {
			elem.setAttribute(
				"style",
				"transform: translate3d(0px, " +
					-scrollY +
					"px, 0px); position: fixed; top: " +
					targetTop +
					"px; left: 0px; margin-top:auto"
			);
		}
	};
	getKey = () => {
		return this.key;
	};
	ready = (visible = false) => {
		if (this.sp) return;
		ScrollEase.readyList++;
		const { target } = this.props;
		if (visible === false) {
			target.current.setAttribute("style", "visibility:hidden");
		}
		const len = ScrollEase.instances.length;
		if (ScrollEase.readyList === len) {
			ScrollEase.init();
		}
	};

	render() {
		const { scrollY } = this.props;
		const { target } = this.props;
		if (this.initState && this.targetInfo && !this.sp) {
			this.stylefunc(target, scrollY, this.targetInfo.targetTop);
		}

		return null;
	}
}

const getScrollYbyTarget = (scrollY, { target, id }) => {
	const targetE = target.current;
	const instance = ScrollEase.instances[id];

	if (instance && !instance.sp) {
		if (instance.initState) {
			if (typeof window !== `undefined`) {
				const screenH = window.innerHeight;
				if (targetE) {
					const scrollTop = scrollY;
					const scrollBtm = scrollY + screenH;
					const targetInfo = instance.targetInfo;
					let targetTop = 0;
					let targetBtm = 0;
					if (targetInfo) {
						targetTop = targetInfo.targetTop;
						targetBtm = targetInfo.targetBtm;
					}

					if (scrollBtm > targetTop && scrollTop < targetBtm) {
						if (!instance.appear) instance.appear = true;
						return scrollY;
					} else {
						if (instance.appear) {
							instance.appear = false;
							targetE.removeAttribute("style");
							targetE.setAttribute("style", "visibility:hidden");
						}
					}
				}
			}
		}
	}
};

export default connect(
	(state, props) => {
		return {
			scrollY: getScrollYbyTarget(
				state.EnterFrameReducer.currentScrollState,
				props
			),
		};
	},
	null,
	null,
	{ forwardRef: true }
)(ScrollEase);
