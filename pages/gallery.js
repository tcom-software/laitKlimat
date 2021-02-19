import Gallery from "@screens/Gallery";

export default Gallery;

export const getServerSideProps = async () => {
  return {
    props: {
      bannerVariant: "tercary",
    },
  };
};

