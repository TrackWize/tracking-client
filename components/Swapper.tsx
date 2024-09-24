import { Children, ReactNode } from "react";

type Props = {
  index: number;
  children: ReactNode;
};

export function Swapper({ index, children }: Props) {
  return Children.toArray(children)[index];
}
