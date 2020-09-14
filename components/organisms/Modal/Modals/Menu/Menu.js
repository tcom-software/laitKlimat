import { useRouter } from "next/router";
import cn from "classnames";

import { tabs } from "data";
import { Link, Icon } from "@atoms";
import { Logo } from "@molecules";
import { Container } from "./styles";

import { SocialIcons, Location, WorkHours } from "@molecules";

const Menu = ({ modalRef, hideModal }) => {
  const route = useRouter();

  return (
    <Container ref={modalRef}>
      <div>
        <Icon name="close" width={17} height={17} onClick={hideModal} />
        <Logo className="logo" onClick={hideModal} />
        <ul className="menu-list">
          {tabs.map(({ tab, name }, idx) => (
            <li className="menu-list_item" key={idx} onClick={hideModal}>
              <Link
                href={tab}
                title={name}
                className={cn({ active: route.pathname === tab })}
              />
            </li>
          ))}
        </ul>
        <address>
          <Location />
          <WorkHours />
          <SocialIcons />
        </address>
      </div>
    </Container>
  );
};

export default Menu;
