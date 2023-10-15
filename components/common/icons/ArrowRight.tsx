import { SVGAttributes } from "react";

export default function ArrowRight(props: SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12.0635 0.320019C18.4952 0.320019 23.7091 5.51357 23.7091 11.92C23.7091 18.3265 18.4952 23.52 12.0635 23.52C5.63187 23.52 0.417969 18.3265 0.417969 11.92C0.417969 5.51357 5.63187 0.320019 12.0635 0.320019Z"
        fill="#F3F3F3"
      />
      <path
        d="M7.40527 11.92H16.7217H7.40527ZM16.7217 11.92L12.6458 15.98L16.7217 11.92ZM16.7217 11.92L12.6458 7.85998L16.7217 11.92Z"
        fill="#F3F3F3"
      />
      <path
        d="M7.40527 11.92H16.7217M16.7217 11.92L12.6458 15.98M16.7217 11.92L12.6458 7.85998"
        stroke="#0D111A"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
