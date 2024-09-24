import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = HTMLAttributes<HTMLButtonElement> & {
  theme?: "filled" | "alternative";
};

export function Button({
  className,
  children,
  theme = "filled",
  ...props
}: Props) {
  return (
    <button
      data-theme={theme}
      className={twMerge(
        "hover:brightness-105 active:brightness-95 font-bold px-4 py-2 rounded-2xl duration-300 transition-all border-2 data-[theme=filled]:bg-blue-600 data-[theme=filled]:text-white data-[theme=alternative]:bg-transparent data-[theme=alternative]:border-blue-600 data-[theme=alternative]:text-blue-600",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
