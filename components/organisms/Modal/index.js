import Modal from "./Modal";
import { connect } from "react-redux";

import { hideModal } from "@redux/actions/modal";

const mapStateToProps = ({ modal }) => ({
  ...modal,
});

const mapDispatchToProps = {
  hideModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
