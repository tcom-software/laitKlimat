import cn from "classnames";
import { useRouter } from "next/router";

import { Logo } from "@molecules";
import { Image, Link, NextLink } from "@atoms";
import { StyledNav, Container } from "./styles";

const Nav = ({ tabs }) => {
  const route = useRouter();

  return (
    <Container className="container">
      <Logo className="logo" />
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
