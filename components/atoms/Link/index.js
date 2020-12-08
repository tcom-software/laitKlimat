import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";
import cn from "classnames";

import { Text } from "@atoms";

const Link = props => {
  const {
    title,
    href,
    className,
    onClick = null,
    innerRef = null,
    ...linkProps
  } = props;

  return (
    <NextLink href={href} {...linkProps}>
      <a className={cn([className])} onClick={onClick} ref={innerRef}>
        <Text sz="normal" clr="primary" tag="span">
          {title}
        </Text>
      </a>
    </NextLink>
  );
};

Link.defaultProps = {
  className: "",
  href: "/",
};

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
};

export default Link;
