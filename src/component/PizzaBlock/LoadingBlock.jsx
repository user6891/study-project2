import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingBlock = (props) => (
  <div className="pizza-block">
    <ContentLoader
      speed={2}
      width={280}
      height={456}
      viewBox="0 0 280 456"
      backgroundColor="#f3f3f3" 
      foregroundColor="#ecebeb"
      {...props}>
      <circle cx="130" cy="130" r="130" />
      <rect x="0" y="266" rx="0" ry="0" width="280" height="24" />
      <rect x="1" y="300" rx="0" ry="0" width="280" height="83" />
      <rect x="4" y="406" rx="0" ry="0" width="90" height="27" />
      <rect x="204" y="433" rx="0" ry="0" width="1" height="0" />
      <rect x="127" y="392" rx="0" ry="0" width="150" height="43" />
    </ContentLoader>
  </div>
);

export default LoadingBlock;
