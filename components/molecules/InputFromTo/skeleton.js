import ContentLoader from "react-content-loader";

const Skeleton = props => (
  <ContentLoader viewBox="0 0 300 80" {...props}>
    <rect x="0" y="10" rx="5" ry="5" width="100%" height="20" />

    <rect x="0" y="50" rx="5" ry="5" width="48%" height="25" />
    <rect x="52%" y="50" rx="5" ry="5" width="48%" height="25" />
  </ContentLoader>
);

export default Skeleton;
