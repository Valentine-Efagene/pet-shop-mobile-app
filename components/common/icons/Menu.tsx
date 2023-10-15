import { SVGAttributes } from "react";

export default function Menu(props: SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="10"
      viewBox="0 0 24 10"
      fill="none"
      {...props}
    >
      <path d="M0 9.12H24" stroke="#F3F3F3" />
      <path d="M0 5.12H24" stroke="#F3F3F3" />
      <path d="M0 1.12H24" stroke="#F3F3F3" />
    </svg>
  );
}
