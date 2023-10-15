import { SVGAttributes } from "react";

export default function ArrowDown(props: SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      {...props}
    >
      <path
        d="M13.4578 8.73804V18.338M13.4578 18.338L9.25781 14.138M13.4578 18.338L17.6578 14.138"
        stroke="#1F2C22"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.458 13.5381C25.458 20.1654 20.0854 25.5381 13.458 25.5381C6.83059 25.5381 1.45801 20.1654 1.45801 13.5381C1.45801 6.91067 6.83059 1.53809 13.458 1.53809C20.0854 1.53809 25.458 6.91067 25.458 13.5381Z"
        stroke="#1F2C22"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
