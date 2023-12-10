import ArrowIcon from "@/assets/icons/arrow";
import { ButtonHTMLAttributes, HTMLAttributes } from "react";

export default function Button({
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`bg-primary h-12 px-6 hover:pr-20 pr-16 transition-all text-sm font-semibold rounded-full relative flex items-center ${className}`}
    >
      {children}
      <div className="absolute bg-dark rounded-full h-10 w-10 right-1 grid place-content-center fill-white">
        <ArrowIcon />
      </div>
    </button>
  );
}
