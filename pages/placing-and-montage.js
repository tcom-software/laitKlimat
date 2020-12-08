import { PlacingAndMontage as PlacingAndMontageView } from "@screens";
import { initializeCategories } from "helper/initialReduxState";
import { initializeStore } from "@redux/index";
import { compose } from "utils/compose";
import Layout from "layouts/Root";

// export default PlacingAndMontage;

const PlacingAndMontage = () => {
  return <PlacingAndMontageView />;
};

export default PlacingAndMontage;

export const getServerSideProps = async ctx => {
  const store = initializeStore();
  const { initialStore } = await compose(initializeCategories)({
    store,
    ctx,
    initialStore: {},
  });

  return {
    props: {
      initialStore,
      bannerVariant: "tercary",
    },
  };
};
