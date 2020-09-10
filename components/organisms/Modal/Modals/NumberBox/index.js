import NumberBox from "./NumberBox";
import { connect } from "react-redux";

const mapStateToProps = ({ modal: { modalProps: style } }) => ({
  style,
});

export default connect(mapStateToProps, null)(NumberBox);
