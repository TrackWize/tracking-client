import { HTMLAttributes } from "react";
import module from "./index.module.scss";

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
    <button className={`${module.container} ${theme === "filled" ? module.filled : module.alternative} ${className}`} {...props}>
      {children}
    </button>
  );
}
