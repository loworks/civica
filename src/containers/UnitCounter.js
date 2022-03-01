import { connect } from "react-redux";
import UnitCounter from "../libs/atoms/UnitCounter";

export default connect((state) => {
	return {
		skus: state.BagReducer.skus,
		timestamp: state.BagReducer.timestamp,
	};
})(UnitCounter);
