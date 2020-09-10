import Head from "next/head";
import { Text, Link } from "@atoms";
import { Container } from "@styles/pages/home";
import { initializeStore } from "@redux/index";

import { tabs, categories } from "data";

const Home = () => {
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
              {categories.map(({ id, title, iconLarg }) => (
                <li key={id}>
                  <img src={iconLarg} alt={title} />
                  <Text tag="span" sz="normal" clr="white">
                    {title}
                  </Text>
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
