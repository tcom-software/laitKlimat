import Layout from "./Layout";
import { connect } from "react-redux";

import { showModal } from "@redux/actions/modal";

const mapStateToProps = ({ modal: { modalIsOpen } }) => ({
  modalIsOpen,
});

export default connect(mapStateToProps, null)(Layout);
