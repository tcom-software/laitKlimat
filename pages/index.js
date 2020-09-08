import Head from "next/head";
import { Button } from "@atoms";
import { initializeStore } from "@redux/index";

const Home = () => {
  return (
    <>
      <Head>
        <title>Кондиционеры и увлажнители</title>
      </Head>
      
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
