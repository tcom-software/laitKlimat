import Contacts from "@screens/Contacts";

export default Contacts;

export const getServerSideProps = async () => {
  return {
    props: {
      bannerVariant: "secondary",
    },
  };
};

