import { useState, memo } from "react";
import { animated, useSpring } from "react-spring";
import Head from "next/head";

import { Container } from "@styles/pages/home";
import Text from "@atoms/Text";
import Link from "@atoms/Link";
import eases from "utils/easing";

import { tabs } from "data";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "@redux/selectors/site";

/**
 *
 */
const SubMenu = memo(({ name, subCategories, subSub, setSubSub }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li
        className="sub-menu-list_item"
        onClick={() =>
          setSubSub(state => ({
            isOpen: state.type !== name ? true : false,
            type: state.type !== name ? name : "",
          }))
        }
      >
        <Text tag="span" sz="normal" clr="primary">
          {name}
        </Text>
      </li>
      <ul className="subsub-menu-list" data-visible={subSub.type === name}>
        {subCategories.map(({ id, name }) => (
          <li className="subsub-menu-list_item" key={id}>
            <Link
              title={name}
              href={{
                pathname: "/category",
                query: { c: id, page: 1 },
              }}
            />
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

/**
 *
 */
const Menu = memo(
  ({ name, icon, subCategories, sub, setSub, subSub, setSubSub }) => {
    const { opacity, delta, overflowY } = useSpring({
      opacity: sub.isOpen && name === sub.type ? 0 : 1,
      delta: sub.isOpen && name === sub.type ? (subSub.isOpen ? 200 : 100) : 0,
      overflowY:
        sub.isOpen && name === sub.type
          ? subSub.isOpen
            ? "unset"
            : "auto"
          : "unset",
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
              isOpen: state.type !== name ? true : false,
              type: state.type !== name ? name : "",
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
          <img
            src={"/images/categories/icons/" + icon.slice(0, -4) + "_larg.png"}
            alt={name}
          />
          <Text tag="span" sz="normal" clr="white">
            {name}
          </Text>
        </animated.div>
        <animated.ul
          className="sub-menu-list"
          style={{
            transform: delta.interpolate(x => `translateX(${x - 100}%)`),
            opacity: opacity.interpolate(o => 1 - o),
          }}
        >
          {subCategories.map(({ id, name, subCategories }) => (
            <SubMenu
              key={id}
              sub={sub}
              name={name}
              subSub={subSub}
              setSubSub={setSubSub}
              subCategories={subCategories}
              rootTitle={name}
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
  const categories = useSelector(getCategories);
  const [sub, setSub] = useState({ isOpen: false, type: "" });
  const [subSub, setSubSub] = useState({ isOpen: false, type: "" });

  return (
    <>
      {/* SEO */}
      <Head>
        <title>Кондиционеры и увлажнители</title>
      </Head>

      <Container className="container">
        <Text tag="h1" sz="larg" clr="primary">
          Климатические техники
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
              {categories?.map(({ id, name, icon, subCategories }) => (
                <li className="menu-list_item" key={id}>
                  <Menu
                    id={id}
                    sub={sub}
                    name={name}
                    icon={icon}
                    setSub={setSub}
                    subSub={subSub}
                    setSubSub={setSubSub}
                    subCategories={subCategories}
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

export const getServerSideProps = async () => {
  return {
    props: {
      bannerVariant: "primary",
    },
  };
};

export default Home;
