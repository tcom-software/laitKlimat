import React from "react";
import PropTypes from "prop-types";
import NextLink from "next/link";
import cn from "classnames";

import { Text } from "@atoms";

const Link = props => {
  const { title, href, className, ...linkProps } = props;

  return (
    <NextLink href={href} {...linkProps}>
      <a className={cn([className])}>
        <Text sz="normal" clr="primary">
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
