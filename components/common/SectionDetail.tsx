import { HTMLAttributes } from "react";

export default function SectionDetail({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`${className} flex flex-col justify-center md:p-md lg:p-lgInner gap-sm md:rounded-[2.5rem] md:border md:border-1 border-lightBorder`}
      {...rest}
    ></div>
  );
}
