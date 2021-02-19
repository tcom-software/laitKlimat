import Certificates from "@screens/CertificatesView";

export default Certificates;

export const getServerSideProps = async () => {
  return {
    props: {
      bannerVariant: "primary",
    },
  };
};
