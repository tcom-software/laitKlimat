import PropTypes from "prop-types";

import { Tag } from "./styles";

const Text = props => {
  const { children, sz, clr, tag, textRef, ...textProps } = props;

  return (
    <Tag
      as={tag}
      sz={sz}
      clr={clr}
      ref={textRef}
      {...textProps}
      dangerouslySetInnerHTML={{ __html: children }}
    ></Tag>
  );
};

Text.defaultProps = {
  tag: "p",
  sz: "normal",
  clr: "white",
  textRef: null,
};

Text.propTypes = {
  tag: PropTypes.string,
  sz: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  clr: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Text;
