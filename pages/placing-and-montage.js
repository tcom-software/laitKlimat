import Head from "next/head";
import { Button } from "@atoms";
import { initializeStore } from "@redux/index";

const PlacingAndMontage = () => {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          margin: 50px;
          padding: 20px;
        }
      `}</style>
      <Button title="add" />
    </div>
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

export default PlacingAndMontage;
