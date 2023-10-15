import { SVGAttributes } from "react";

export default function X(props: SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      {...props}
    >
      <g clip-path="url(#clip0_48_1225)">
        <path
          d="M7.11635 0.120117H8.46746L5.51635 3.51567L9.00079 8.12012H6.26302L4.12968 5.32901L1.67635 8.12012H0.325239L3.48968 4.49345L0.147461 0.120117H2.95635L4.89413 2.68012L7.11635 0.120117ZM6.63635 7.30234H7.38302L2.54746 0.884562H1.72968L6.63635 7.30234Z"
          fill="#F3F3F3"
        />
      </g>
      <defs>
        <clipPath id="clip0_48_1225">
          <rect
            width="8.85333"
            height="8"
            fill="white"
            transform="translate(0.147461 0.120117)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
