import Head from "next/head";
import { Button } from "@atoms";

const ServiceCenter = () => {
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

ServiceCenter.getInitialProps = () => {
  return {
    bannerVariant: "tercary",
  };
};

export default ServiceCenter;
