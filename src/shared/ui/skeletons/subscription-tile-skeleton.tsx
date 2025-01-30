import React from "react";
import ContentLoader from "react-content-loader";

const SubscriptionTileSkeleton = () => (
  <ContentLoader
    speed={2}
    width={462}
    height={322}
    viewBox="0 0 462 322"
    backgroundColor="#404040"
    foregroundColor="#707070"
  >
    <rect x="194" y="66" rx="0" ry="0" width="0" height="1" />
    <rect x="158" y="206" rx="0" ry="0" width="2" height="2" />
    <rect x="105" y="297" rx="0" ry="0" width="0" height="1" />
    <rect x="685" y="160" rx="13" ry="13" width="91" height="25" />
    <rect x="576" y="159" rx="13" ry="13" width="91" height="25" />
    <rect x="684" y="16" rx="13" ry="13" width="91" height="25" />
    <rect x="660" y="64" rx="13" ry="13" width="116" height="32" />
    <rect x="3" y="2" rx="0" ry="0" width="436" height="320" />
  </ContentLoader>
);

export default SubscriptionTileSkeleton;
