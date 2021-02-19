import Reviews from "@screens/Reviews";

export default Reviews;

export const getServerSideProps = async () => {
  return {
    props: {
      bannerVariant: "secondary",
    },
  };
};
