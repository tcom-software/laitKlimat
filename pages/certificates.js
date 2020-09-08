import Head from "next/head";
import { Button } from "@atoms";

const Certificates = () => {
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

export default Certificates;
