import React, { useState } from "react";
import { StyledHeader, GridRow } from "./styles";
import MobileMenu from "./MobileMenu";
import Addres from "./Addres";
import Nav from "./Nav";

import { tabs, categories } from "data";

import { Icon, Link, Text, NextLink, Image } from "@atoms";
import { CallUs } from "@molecules";

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
const Header = () => {
  const [isOpenMobileMenu, setOpenMobileMenu] = useState(false);
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
    setOpenMobileMenu(false);
  };

  return (
    <>
      <StyledHeader>
        <Addres />
        <Nav tabs={tabs} />
        <GridRow className="container">
          <NextLink href="/" className="link-wrapper">
            <Image
              alt="logo"
              path="/images/logo/logo"
              type="png"
              className="logo"
              onClick={hideMobileMenu}
            />
          </NextLink>
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
          <CallUs />
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
          <div className="humburger" onClick={toggleMobileMenu}>
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
        />
      )}
    </>
  );
};

export default Header;
