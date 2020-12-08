import React, { useState, useCallback, useRef, useEffect } from "react";

import Nav from "./Nav";
import Address from "./Address";
import MobileMenu from "./MobileMenu";
import { StyledHeader, GridRow } from "./styles";

import { Icon, Link, Text } from "@atoms";
import { CallUs, Logo } from "@molecules";
import { tabs } from "data";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@redux/selectors/site";
import { showModal } from "@redux/actions/modal";
import { getBasketCount } from "@redux/selectors/basket";

const acardion = (categories, changeCategory) => {
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
              <Link
                title={name}
                href={`/category?c=${id}&page=1`}
                onClick={() => changeCategory(id + "")} // կարիք չունենք սրա
              />
            ) : (
              <>
                <span>{name}</span>
                {acardion(subCategories, changeCategory)}
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};

let timeId;

/**
 * Header
 */
const Header = ({ changeCategory }) => {
  const dispatch = useDispatch();
  const categoryRef = useRef(null);
  const [search, setSearch] = useState("");
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const [isOpenMobileMenu, setOpenMobileMenu] = useState(false);
  const categories = useSelector(getCategories);
  const basketCount = useSelector(getBasketCount);

  /**
   * search products
   */
  const fetchSearchData = useCallback(async () => {
    const response = await fetch("/api/searchProduct", {
      method: "POST",
      body: JSON.stringify({ search, page: 2 }),
    });
    return await response.json();
  }, [search]);

  useEffect(() => {
    clearTimeout(timeId);

    timeId = setTimeout(async () => {
      if (search) {
        const { payload } = await fetchSearchData();
        console.log(payload);
        setSearchResults(payload);
      } else {
        setSearchResults(null);
      }
    }, 300);
  }, [search]);

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
      : dispatch(
          showModal({
            modalType: "menu",
            modalProps: {},
          })
        );
  }, [toggleMobileMenu]);

  const handleShowNumberBox = useCallback(style => {
    dispatch(
      showModal({
        modalType: "numberBox",
        modalProps: style,
      })
    );
  }, []);

  const handleShowFilter = useCallback(() => {
    dispatch(
      showModal({
        modalType: "filter",
      })
    );
  }, []);

  const closeCategories = () => {
    categoryRef.current.style.pointerEvents = "none";
    setTimeout(() => (categoryRef.current.style.pointerEvents = ""), 100);
  };

  return (
    <>
      <StyledHeader>
        <Address />
        <Nav tabs={tabs} />
        <GridRow className="container">
          <Logo className="logo" onClick={hideMobileMenu} />
          <div className="categories" ref={categoryRef}>
            <button className="root">
              <Text clr="fourth" sz="normal" tag="span">
                категории
              </Text>
            </button>
            {acardion(categories, closeCategories)}
          </div>
          <div className="search-bar">
            <form>
              <label>
                <span className="srOnly">поиск продуктов</span>
                <input
                  type="text"
                  name="search"
                  placeholder="написать для поиска"
                  onChange={e => setSearch(e.target.value)}
                />
              </label>
              {searchResults && (
                <div className="search-result">
                  <ul>
                    {searchResults.searchResponse.map(({ brand }, i) => {
                      <li key={i}>{brand}</li>;
                    })}
                  </ul>
                </div>
              )}
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
              <span className="count">{basketCount}</span>
            </div>
          </div>
          <div className="filter" onClick={handleShowFilter}>
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
