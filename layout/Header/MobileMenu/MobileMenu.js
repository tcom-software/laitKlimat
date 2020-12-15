import { useRouter } from "next/router";
import { useState } from "react";
import cn from "classnames";

import { Link, Icon, Text } from "@atoms";
import { CallUs } from "@molecules";
import { Container, StyledAddress } from "./styles";

const acardion = (categories, toggleOpen) => {
  return (
    <ul className="category-list">
      {categories.map(({ id, ...rest }) => (
        <Category key={id} id={id} {...rest} toggleOpen={toggleOpen} />
      ))}
    </ul>
  );
};

const Category = ({ id, name, subCategories, icon, toggleOpen }) => {
  const [isOpen, setOpen] = useState(false);
  const isTreeLeaf = !subCategories;

  const handleOpenCategories = () => {
    setOpen(state => !state);
  };

  return (
    <>
      <li
        onClick={handleOpenCategories}
        className={cn("category-item", {
          "category-item_open": isOpen,
        })}
        data-arrow={isTreeLeaf ? false : true}
      >
        {icon && <img src={"/images/categories/icons/" + icon} alt={name} />}
        {isTreeLeaf ? (
          <Link
            title={name}
            onClick={toggleOpen}
            href={`/category?c=${id}&page=1`}
          />
        ) : (
          <span>{name}</span>
        )}
      </li>
      {subCategories && acardion(subCategories, toggleOpen)}
    </>
  );
};

const MobileMenu = ({ tabs, categories, toggleOpen, showNumberBox }) => {
  const route = useRouter();
  const [isOpenCategories, setOpenCategories] = useState(false);

  const handleOpenCategories = e => {
    setOpenCategories(state => !state);
  };

  return (
    <Container>
      <ul>
        <li
          className={cn("menu-list_item categories", {
            "categories-open": isOpenCategories,
          })}
          onClick={handleOpenCategories}
        >
          <span>{"категории"}</span>
        </li>
        {isOpenCategories && acardion(categories, toggleOpen)}
        {tabs.map(({ tab, name }, idx) => (
          <li
            key={idx}
            onClick={toggleOpen}
            className={cn("menu-list_item", {
              active: route.pathname === tab,
            })}
          >
            <Link href={tab} title={name} />
          </li>
        ))}
      </ul>
      <StyledAddress>
        <CallUs showNumberBox={showNumberBox} />
        <div className="address">
          <Icon name="location" />
          <Text tag="span" sz="small" clr="primary">
            127254, г. Москва, Огородный проезд д.6 стр.1
          </Text>
        </div>
        <div className="work-hours">
          <Icon name="clock" fillRule="evenodd" fill="secondary" />
          <span>
            <Text tag="span" sz="small" clr="primary">
              ПН–ПТ: 09:00 – 21:00
            </Text>
            <Text tag="span" sz="small" clr="primary">
              СБ-ВС: 10:00 – 20:00
            </Text>
          </span>
        </div>
        <div className="icons">
          <Icon name="instagram" />
          <Icon name="vk" />
          <Icon name="facebook" />
        </div>
      </StyledAddress>
    </Container>
  );
};

export default MobileMenu;
