import { Image, NextLink } from "@atoms";

const Logo = ({ className, onClick }) => {
  return (
    <NextLink href="/" className={`${className}-wrapper`}>
      <Image
        path="/images/logo/logo"
        type="png"
        alt="logo"
        className={className}
        onClick={onClick}
      />
    </NextLink>
  );
};

export default Logo;
