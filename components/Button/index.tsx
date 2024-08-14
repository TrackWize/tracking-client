import { HTMLAttributes } from "react";
import module from "./index.module.scss";

type Props = HTMLAttributes<HTMLButtonElement> & {};

export function Button({ className, children, ...props }: Props) {
  return (
    <button className={`${module.container} ${className}`} {...props}>
      {children}
    </button>
  );
}
