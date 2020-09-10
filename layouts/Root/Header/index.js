import Header from "./Header";
import { connect } from "react-redux";

import { showModal } from "@redux/actions/modal";

const mapDispatchToProps = {
  showModal,
};

export default connect(null, mapDispatchToProps)(Header);
