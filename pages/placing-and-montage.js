import PlacingAndMontageView from "@screens/PlacingAndMontage";

export default PlacingAndMontageView;

export const getServerSideProps = async () => {
  return {
    props: {
      bannerVariant: "tercary",
    },
  };
};
