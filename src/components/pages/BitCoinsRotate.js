import React from 'react';

const BitCoinsRotate = (props) => {
  const {firstImg,secondImg} = props
  return (
    <div className="coin">
      <div className="side heads">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width="100%"
          height="100%"
          version="1.1"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 4091.27 4091.73"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          {/* First image*/}
          <image x="30%" y="30%" width="40%" height="40%" xlinkHref={firstImg} />
        </svg>
      </div>
      <div className="side tails">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="svg_back"
          xmlSpace="preserve"
          width="100%"
          height="100%"
          version="1.1"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          viewBox="0 0 4091.27 4091.73"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          {/* Second image*/}
          <image x="30%" y="30%" width="40%" height="40%" xlinkHref={secondImg} />
        </svg>
      </div>
    </div>
  );
};

export default BitCoinsRotate;
