import React from "react";

const BlurSvg = () => {
  return (
    <div>
      <svg
        width="700"
        height="425"
        viewBox="0 0 1241 1272"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_0_16)">
          <circle cx="170.5" cy="201.5" r="506.5" fill="#002853" />
        </g>
        <defs>
          <filter
            id="filter0_f_0_16"
            x="-900"
            y="-869"
            width="2141"
            height="2141"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="282"
              result="effect1_foregroundBlur_0_16"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default BlurSvg;
