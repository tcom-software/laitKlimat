import Header from "./Header";
import { connect } from "react-redux";

import { showModal } from "@redux/actions/modal";
import { addFilters, changeCategory } from "@redux/actions/filters";

const mapDispatchToProps = dispatch => ({
  showModal: props => dispatch(showModal(props)),
  changeCategory: category => dispatch(changeCategory(category)),
});

export default connect(null, mapDispatchToProps)(Header);
