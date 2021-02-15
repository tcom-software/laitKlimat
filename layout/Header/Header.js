import React, { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { getCategories } from "@redux/selectors/site";
import { showModal } from "@redux/actions/modal";
import { getBasketCount } from "@redux/selectors/basket";

import Nav from "./Nav";
import Address from "./Address";
import MobileMenu from "./MobileMenu";
import { StyledHeader, GridRow } from "./styles";

import Search from "@organisms/Search";
import CallUs from "@molecules/CallUs";
import Logo from "@molecules/Logo";
import Icon from "@atoms/Icon";
import Text from "@atoms/Text";

import { tabs } from "data";
import { useOutsideClickClose } from "@hooks";

const accordion = categories => {
  const closeCategories = id => {
    const categories = document.getElementById("categories");
    categories.style.pointerEvents = "none";
    setTimeout(() => (categories.style.pointerEvents = ""), 100);
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
                {accordion(subCategories)}
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
  const catalogRef = useRef(null);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [openCatalog, setOpenCatalog] = useState(false);
  const [isOpenMobileMenu, setOpenMobileMenu] = useState(false);
  const categories = useSelector(getCategories);
  const basketCount = useSelector(getBasketCount);
  useOutsideClickClose(catalogRef, () => setOpenCatalog(false));

  const toggleMobileMenu = useCallback(() => {
    document.body.classList.toggle("scroll-hidden");
    setOpenMobileMenu(state => !state);
  }, [setOpenMobileMenu]);

  const hideMobileMenu = () => {
    document.body.classList.remove("scroll-hidden");
    setOpenMenu(false);
  };

  const toggleCatalog = () => {
    setOpenCatalog(o => !o);
  };

  const handleShowMenu = useCallback(() => {
    globalThis.innerWidth < 768
      ? toggleMobileMenu()
      : showMenu({
          modalType: "menu",
          modalProps: {},
        });
  }, [toggleMobileMenu]);

  const handleShowNumberBox = useCallback(() => {
    showNumberBox({
      modalType: "numberBox",
      modalProps: { type: "header" },
    });
  }, []);

  const handleShowFilter = useCallback(() => {
    showFilters({
      modalType: "filter",
    });
  }, []);

  return (
    <>
      <StyledHeader>
        <Address />
        <Nav tabs={tabs} />
        <GridRow className="container">
          <Logo className="logo" onClick={hideMobileMenu} />
          <div
            id="categories"
            ref={catalogRef}
            className={cn("categories", { open: openCatalog })}
          >
            <button
              className={cn("root", { open: openCatalog })}
              onClick={toggleCatalog}
            >
              <Text clr="fourth" sz="normal" tag="span">
                Каталог
              </Text>
              <svg
                width="70"
                height="70"
                fill="none"
                viewBox="0 0 70 70"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="0" y1="17" x2="70" y2="17" strokeWidth="5" />
                <line x1="0" y1="35" x2="70" y2="35" strokeWidth="5" />
                <line x1="0" y1="53" x2="70" y2="53" strokeWidth="5" />
              </svg>
            </button>
            {accordion(categories)}
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
                <svg
                  width="70"
                  height="70"
                  fill="none"
                  viewBox="0 0 70 70"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="0" y1="17" x2="70" y2="17" strokeWidth="4" />
                  <circle cx="53" cy="17" r="6" />
                  <line x1="0" y1="35" x2="70" y2="35" strokeWidth="4" />
                  <circle cx="17" cy="35" r="6" />
                  <line x1="0" y1="53" x2="70" y2="53" strokeWidth="4" />
                  <circle cx="53" cy="53" r="6" />
                </svg>
              </button>
            </div>
          )}
          <div className="hamburger" onClick={handleShowMenu}>
            <button
              title="меню"
              aria-label="меню"
              className={cn({ "open-mobile-menu": isOpenMobileMenu })}
            >
              <svg
                width="70"
                height="70"
                fill="none"
                viewBox="0 0 70 70"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0"
                  y1="17"
                  x2="70"
                  y2="17"
                  stroke="black"
                  strokeWidth="3"
                />
                <line
                  x1="0"
                  y1="35"
                  x2="70"
                  y2="35"
                  stroke="black"
                  strokeWidth="3"
                />
                <line
                  x1="0"
                  y1="53"
                  x2="70"
                  y2="53"
                  stroke="black"
                  strokeWidth="3"
                />
              </svg>
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
