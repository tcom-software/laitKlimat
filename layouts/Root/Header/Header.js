import React, { useState } from "react";

import Nav from "./Nav";
import Address from "./Address";
import MobileMenu from "./MobileMenu";
import { StyledHeader, GridRow } from "./styles";

import { Icon, Link, Text, NextLink, Image } from "@atoms";
import { CallUs, Logo } from "@molecules";
import { tabs, categories } from "data";

const acardion = categories => {
  return (
    <ul className="category-list">
      {categories.map(({ id, title, subCategories, query }) => (
        <li
          key={id}
          className="category-item"
          data-arrow={query ? false : true}
        >
          {query ? <Link title={title} href={query} /> : <span>{title}</span>}
          {subCategories && acardion(subCategories)}
        </li>
      ))}
    </ul>
  );
};

const categoriesList = acardion(categories);

/**
 * Header
 * @returns {Node} header component
 */
const Header = ({ showModal }) => {
  const [isOpenMobileMenu, setOpenMobileMenu] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const handleSearch = e => {
    e.preventDefault();
    console.log(e.target.search.value);
  };

  const toggleMobileMenu = () => {
    document.body.classList.toggle("scroll-hidden");
    setOpenMobileMenu(state => !state);
  };

  const hideMobileMenu = () => {
    document.body.classList.remove("scroll-hidden");
    setOpenMenu(false);
  };

  const handleShowMenu = () => {
    globalThis.innerWidth < 768
      ? toggleMobileMenu()
      : showModal({
          modalType: "menu",
          modalProps: {},
        });
  };

  const handleShowNumberBox = style => {
    showModal({
      modalType: "numberBox",
      modalProps: style,
    });
  };

  return (
    <>
      <StyledHeader>
        <Address />
        <Nav tabs={tabs} />
        <GridRow className="container">
          <Logo className="logo" onClick={hideMobileMenu} />
          <div className="categories">
            <button className="root">
              <Text clr="fourth" sz="normal" tag="span">
                категории
              </Text>
            </button>
            {categoriesList}
          </div>
          <div className="search-bar">
            <form onSubmit={handleSearch}>
              <label>
                <span className="srOnly">поиск продуктов</span>
                <input
                  type="text"
                  name="search"
                  placeholder="написать для поиска"
                />
              </label>
              <button type="submit">
                <Text clr="white" sz="normal" tag="span">
                  поиск
                </Text>
                <Icon name="search" width={24} />
              </button>
            </form>
          </div>
          <CallUs showNumberBox={handleShowNumberBox} />
          <div className="basket" title="корзина" aria-label="корзина">
            <div className="basket-inner">
              <Icon name="basket" width={30} fill="tercary" />
              <span className="count">0</span>
            </div>
          </div>
          <div className="filter">
            <button title="фильтры продуктов" aria-label="фильтры продуктов">
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className="search-mobile">
            <Icon name="search" width={24} fill="tercary" />
          </div>
          <div className="humburger" onClick={handleShowMenu}>
            <button title="меню" aria-label="меню" data-open={isOpenMobileMenu}>
              <span />
              <span />
              <span />
            </button>
          </div>
        </GridRow>
      </StyledHeader>
      {isOpenMobileMenu && (
        <MobileMenu
          tabs={tabs}
          categories={categories}
          toggleOpen={toggleMobileMenu}
          showNumberBox={handleShowNumberBox}
        />
      )}
    </>
  );
};

export default Header;
