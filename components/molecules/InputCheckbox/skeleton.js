import ContentLoader from "react-content-loader";

const Skeleton = props => (
  <ContentLoader viewBox="0 0 300 110" {...props}>
    <rect x="0" y="10" rx="5" ry="5" width="100%" height="20" />

    <rect x="0" y="50" rx="5" ry="5" width="30" height="20" />
    <rect x="40" y="50" rx="5" ry="5" width="100%" height="20" />

    <rect x="0" y="80" rx="5" ry="5" width="30" height="20" />
    <rect x="40" y="80" rx="5" ry="5" width="100%" height="20" />
  </ContentLoader>
);

export default Skeleton;
