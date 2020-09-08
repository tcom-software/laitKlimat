import cn from "classnames";
import { useRouter } from "next/router";

import { Image, Link, NextLink } from "@atoms";

import { StyledNav, Container } from "./styles";

const Nav = ({ tabs }) => {
  const route = useRouter();

  return (
    <Container>
      <NextLink href="/" className="link-wrapper">
        <Image
          alt="logo"
          path="/images/logo/logo"
          type="png"
          className="logo"
        />
      </NextLink>
      <StyledNav>
        <ul className="menu-list">
          {tabs.map(({ tab, name }, idx) => (
            <li className="menu-list_item" key={idx}>
              <Link
                href={tab}
                title={name}
                className={cn({ active: route.pathname === tab })}
              />
            </li>
          ))}
        </ul>
      </StyledNav>
    </Container>
  );
};

export default Nav;
