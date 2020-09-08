import React, { useState } from "react";
import { StyledHeader, GridRow } from "./styles";
import MobileMenu from "./MobileMenu";
import Addres from "./Addres";
import Nav from "./Nav";

import { tabs } from "data";

import { Icon, Link, Text, NextLink, Image } from "@atoms";
import { CallUs } from "@molecules";

const categories = [
  {
    id: 1,
    title: "Кондиционеры и увлажнители",
    icon: "/images/categories/icons/1.png",
    subCategories: [
      {
        id: 1,
        title: "Бытовые кондиционеры и увлажнители воздуха",
        subCategories: [
          {
            id: 1,
            title: "Наружные блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 2,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
        ],
      },
      {
        id: 2,
        title: "Мультисплит-системы",
        subCategories: [
          {
            id: 1,
            title: "Наружные блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 2,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 3,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
        ],
      },
      {
        id: 3,
        title: "Полупромышленные кондиционеры",
        subCategories: [
          {
            id: 1,
            title: "Наружные блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 2,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
        ],
      },
      {
        id: 4,
        title: "VRV и VRF Мультизональные кондиционеры",
        subCategories: [
          {
            id: 1,
            title: "Наружные блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 2,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
        ],
      },
      {
        id: 5,
        title: "Чиллеры и Фанкойлы",
        subCategories: [
          {
            id: 1,
            title: "Наружные блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 2,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Системы вентиляции",
    icon: "/images/categories/icons/2.png",
    subCategories: [
      {
        id: 1,
        title: "Бытовые кондиционеры и увлажнители воздуха",
        subCategories: [
          {
            id: 1,
            title: "Наружные блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 2,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
        ],
      },
      {
        id: 2,
        title: "Мультисплит-системы",
        subCategories: [
          {
            id: 1,
            title: "Наружные блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 2,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
        ],
      },
      {
        id: 3,
        title: "Полупромышленные кондиционеры",
        subCategories: [
          {
            id: 1,
            title: "Наружные блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 2,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
        ],
      },
      {
        id: 4,
        title: "VRV и VRF Мультизональные кондиционеры",
        subCategories: [
          {
            id: 1,
            title: "Наружные блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 2,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
        ],
      },
      {
        id: 5,
        title: "Чиллеры и Фанкойлы",
        subCategories: [
          {
            id: 1,
            title: "Наружные блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 2,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Отопление и водоснабжение",
    icon: "/images/categories/icons/3.png",
    subCategories: [
      {
        id: 1,
        title: "Бытовые кондиционеры и увлажнители воздуха",
        subCategories: [
          {
            id: 1,
            title: "Наружные блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 2,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
        ],
      },
      {
        id: 2,
        title: "Мультисплит-системы",
        subCategories: [
          {
            id: 1,
            title: "Наружные блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 2,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
        ],
      },
      {
        id: 3,
        title: "Полупромышленные кондиционеры",
        subCategories: [
          {
            id: 1,
            title: "Наружные блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 2,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Обогреватели и камины",
    icon: "/images/categories/icons/4.png",

    subCategories: [
      {
        id: 1,
        title: "Бытовые кондиционеры и увлажнители воздуха",
        subCategories: [
          {
            id: 1,
            title: "Наружные блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 2,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
        ],
      },
      {
        id: 2,
        title: "Мультисплит-системы",
        subCategories: [
          {
            id: 1,
            title: "Наружные блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 2,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Холодильное оборудование",
    icon: "/images/categories/icons/5.png",
    subCategories: [
      {
        id: 1,
        title: "Бытовые кондиционеры и увлажнители воздуха",
        subCategories: [
          {
            id: 1,
            title: "Наружные блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 2,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
        ],
      },
      {
        id: 2,
        title: "Мультисплит-системы",
        subCategories: [
          {
            id: 1,
            title: "Наружные блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 2,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
        ],
      },
      {
        id: 3,
        title: "Полупромышленные кондиционеры",
        subCategories: [
          {
            id: 1,
            title: "Наружные блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 2,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
        ],
      },
      {
        id: 4,
        title: "VRV и VRF Мультизональные кондиционеры",
        subCategories: [
          {
            id: 1,
            title: "Наружные блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 2,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
        ],
      },
      {
        id: 5,
        title: "Чиллеры и Фанкойлы",
        subCategories: [
          {
            id: 1,
            title: "Наружные блоки VRV и VRF системы",
            query: "conditioner",
          },
          {
            id: 2,
            title: "Внутренние блоки VRV и VRF системы",
            query: "conditioner",
          },
        ],
      },
    ],
  },
];

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
    setOpenMobileMenu(state => !state);
  };

  return (
    <>
      <StyledHeader>
        <Addres />
        <Nav tabs={tabs} />
        <GridRow>
          <NextLink href="/" className="link-wrapper">
            <Image
              alt="logo"
              path="/images/logo/logo"
              type="png"
              className="logo"
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
