import ServiceCenter from "@screens/ServiceCenter";

export default ServiceCenter;

export const getServerSideProps = async () => {
  return {
    props: {
      bannerVariant: "tercary",
    },
  };
};
