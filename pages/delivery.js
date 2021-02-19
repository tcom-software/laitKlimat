import Delivery from "@screens/Delivery";

export default Delivery;

export const getServerSideProps = async () => {
  return {
    props: {
      bannerVariant: "secondary",
    },
  };
};
