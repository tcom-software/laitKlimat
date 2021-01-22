import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import cn from "classnames";

const NextLink = props => {
  const { href, className, children, ...linkProps } = props;

  return (
    <Link href={href} {...linkProps}>
      <a className={cn([className])}>{children}</a>
    </Link>
  );
};

NextLink.defaultProps = {
  className: "",
  href: "/",
};

NextLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
};

export default NextLink;
