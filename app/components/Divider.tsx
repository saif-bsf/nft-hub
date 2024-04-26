import React from "react";

const Divider = () => {
  return (
    <div className="wrapper flex items-center justify-center my-20">
      <svg
        width="80"
        height="21"
        viewBox="0 0 80 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_901)">
          <path
            d="M1.61987 4.05835L14.4132 16.8517L27.2065 4.05835L39.9999 16.8517L52.7932 4.05835L65.5865 16.8517L78.3799 4.05835"
            stroke="url(#paint0_linear_1_901)"
            stroke-width="4.26444"
          ></path>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_901"
            x1="1.61987"
            y1="10.455"
            x2="78.3799"
            y2="10.455"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3754FB"></stop>
            <stop offset="1" stop-color="#FC01FF"></stop>
          </linearGradient>
          <clipPath id="clip0_1_901">
            <rect
              width="79.9583"
              height="19.19"
              fill="white"
              transform="translate(0.020752 0.859985)"
            ></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Divider;
