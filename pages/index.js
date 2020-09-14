import { Fragment, useRef, useState, useEffect, memo } from "react";
import { animated, useSpring } from "react-spring";
import { useOutsideClickClose } from "@hooks";
import Head from "next/head";

import { Text, Link } from "@atoms";
import { Container } from "@styles/pages/home";
import { initializeStore } from "@redux/index";
import eases from "utils/easing";

import { tabs, categories } from "data";

const SubMenu = memo(({ title, subCategories, subSub, setSubSub }) => {
  const { opacity, delta } = useSpring({
    opacity: subSub.isOpen && title === subSub.type ? 1 : 0,
    delta: subSub.isOpen && title === subSub.type ? -100 : -200,
    config: {
      duration: 500,
      easing: eases.OutQuart,
    },
  });

  return (
    <>
      <li
        className="sub-menu-list_item"
        onClick={() =>
          setSubSub(state => ({
            isOpen: state.type !== title ? true : false,
            type: state.type !== title ? title : "",
          }))
        }
      >
        <Text tag="span" sz="normal" clr="primary">
          {title}
        </Text>
      </li>
      <ul
        className="subsub-menu-list"
        data-visible={subSub.type === title}
        style={{
          transform: delta.interpolate(x => `translateX(${x}%)`),
          opacity: opacity.interpolate(o => o),
        }}
      >
        {subCategories.map(({ id, title, query }) => (
          <li className="subsub-menu-list_item" key={id}>
            <Link title={title} href={query} />
          </li>
        ))}
        <div
          data-go-back
          onClick={() =>
            setSubSub(state => ({
              isOpen: false,
              type: "",
            }))
          }
        >
          <div />
        </div>
      </ul>
    </>
  );
});

const Menu = memo(
  ({ title, iconLarg, subCategories, sub, setSub, subSub, setSubSub }) => {
    const { opacity, delta } = useSpring({
      opacity: sub.isOpen && title === sub.type ? 0 : 1,
      delta: sub.isOpen && title === sub.type ? (subSub.isOpen ? 200 : 100) : 0,
      config: {
        duration: 500,
        easing: eases.OutQuart,
      },
    });

    return (
      <>
        <animated.div
          onClick={() => {
            setSub(state => ({
              isOpen: state.type !== title ? true : false,
              type: state.type !== title ? title : "",
            }));
            setSubSub(state => ({
              isOpen: false,
              type: "",
            }));
          }}
          style={{
            transform: delta.interpolate(x => `translateX(${x}%)`),
            opacity: opacity.interpolate(o => o),
          }}
        >
          <img src={iconLarg} alt={title} />
          <Text tag="span" sz="normal" clr="white">
            {title}
          </Text>
        </animated.div>
        <animated.ul
          className="sub-menu-list"
          style={{
            transform: delta.interpolate(x => `translateX(${x - 100}%)`),
            opacity: opacity.interpolate(o => 1 - o),
          }}
        >
          {subCategories.map(({ id, title, subCategories }) => (
            <SubMenu
              key={id}
              sub={sub}
              title={title}
              subSub={subSub}
              setSubSub={setSubSub}
              subCategories={subCategories}
              rootTitle={title}
            />
          ))}

          <div
            data-go-back
            onClick={() =>
              setSub(state => ({
                isOpen: false,
                type: "",
              }))
            }
          >
            <div />
          </div>
        </animated.ul>
      </>
    );
  }
);

const Home = () => {
  const [sub, setSub] = useState({ isOpen: false, type: "" });
  const [subSub, setSubSub] = useState({ isOpen: false, type: "" });

  return (
    <>
      <Head>
        <title>Кондиционеры и увлажнители</title>
      </Head>
      <Container className="container">
        <Text tag="h1" sz="larg" clr="primary">
          климатические техники
        </Text>
        <section className="categories">
          <nav className="sidebox">
            <ul>
              {[...tabs, { tab: "./contacts", name: "Контакты" }].map(
                ({ tab, name }, idx) => (
                  <li className="menu-list_item" key={idx}>
                    <Link href={tab} title={name} />
                  </li>
                )
              )}
            </ul>
          </nav>
          <section className="boxes">
            <ul>
              {categories.map(({ id, title, iconLarg, subCategories }) => (
                <li className="menu-list_item" key={id}>
                  <Menu
                    id={id}
                    title={title}
                    iconLarg={iconLarg}
                    subCategories={subCategories}
                    sub={sub}
                    setSub={setSub}
                    subSub={subSub}
                    setSubSub={setSubSub}
                  />
                </li>
              ))}
            </ul>
          </section>
        </section>
      </Container>
    </>
  );
};

export const getServerSideProps = () => {
  const reduxStore = initializeStore();

  return {
    props: {
      bannerVariant: "primary",
    },
  };
};

export default Home;
