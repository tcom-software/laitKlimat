import  Clients from "@screens/ClientsView";

export default Clients;

export const getServerSideProps = async () => {
  return {
    props: {
      bannerVariant: "tercary",
    },
  };
};
