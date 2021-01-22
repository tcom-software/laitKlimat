import React, { useState, useCallback, useRef, useEffect } from "react";

import Nav from "./Nav";
import Address from "./Address";
import MobileMenu from "./MobileMenu";
import { StyledHeader, GridRow } from "./styles";

import { Search } from "@organisms";
import { CallUs, Logo } from "@molecules";
import { Icon, Text } from "@atoms";

import { tabs } from "data";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@redux/selectors/site";
import { showModal } from "@redux/actions/modal";
import { getBasketCount } from "@redux/selectors/basket";
import Link from "next/link";
import { Router, useRouter } from "next/router";

const acardion = categories => {
  const closeCategories = id => {
    const cateegories = document.getElementById("categories");
    cateegories.style.pointerEvents = "none";
    setTimeout(() => (cateegories.style.pointerEvents = ""), 100);
  };

  return (
    <ul className="category-list">
      {categories.map(({ id, name, subCategories }) => {
        const isTreeLeaf = !subCategories;

        return (
          <li
            key={id}
            className="category-item"
            data-arrow={isTreeLeaf ? false : true}
          >
            {isTreeLeaf ? (
              <Link href={`/category?c=${id}&page=1`}>
                <a onClick={closeCategories}>
                  <Text sz="normal" clr="primary" tag="span">
                    {name}
                  </Text>
                </a>
              </Link>
            ) : (
              <>
                <span>{name}</span>
                {acardion(subCategories)}
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};

/**
 * Header
 */
const Header = ({ changeCategory, showMenu, showNumberBox, showFilters }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [isOpenMobileMenu, setOpenMobileMenu] = useState(false);
  const categories = useSelector(getCategories);
  const basketCount = useSelector(getBasketCount);

  const toggleMobileMenu = useCallback(() => {
    document.body.classList.toggle("scroll-hidden");
    setOpenMobileMenu(state => !state);
  }, [setOpenMobileMenu]);

  const hideMobileMenu = () => {
    document.body.classList.remove("scroll-hidden");
    setOpenMenu(false);
  };

  const handleShowMenu = useCallback(() => {
    globalThis.innerWidth < 768
      ? toggleMobileMenu()
      : showMenu({
          modalType: "menu",
          modalProps: {},
        });
  }, [toggleMobileMenu]);

  const handleShowNumberBox = useCallback(style => {
    showNumberBox({
      modalType: "numberBox",
      modalProps: style,
    });
  }, []);

  const handleShowFilter = useCallback(() => {
    showFilters({
      modalType: "filter",
    });
  }, []);

  // const goToProductPage = productId => {
  //   router.push({
  //     as: `/products/${productId}`,
  //     href: `/products/[product]`,
  //   });
  // };

  return (
    <>
      <StyledHeader>
        <Address />
        <Nav tabs={tabs} />
        <GridRow className="container">
          <Logo className="logo" onClick={hideMobileMenu} />
          <div className="categories" id="categories">
            <button className="root">
              <Text clr="fourth" sz="normal" tag="span">
                категории
              </Text>
            </button>
            {acardion(categories)}
          </div>
          <Search />
          <CallUs showNumberBox={handleShowNumberBox} />
          <Link href="/basket">
            <a className="basket" title="корзина" aria-label="корзина">
              <div className="basket-inner">
                <Icon name="basket" width={30} fill="tercary" />
                <span className="count">{basketCount}</span>
              </div>
            </a>
          </Link>
          {router.pathname.startsWith("/category") && (
            <div className="filter" onClick={handleShowFilter}>
              <button title="фильтры продуктов" aria-label="фильтры продуктов">
                <span />
                <span />
                <span />
              </button>
            </div>
          )}
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
