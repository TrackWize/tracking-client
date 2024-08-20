"use client";

import { Swapper } from "@/components";
import { Children, ReactNode, useState } from "react";

export function useSwapper(
  children: ReactNode[]
): [JSX.Element, (increment: boolean) => void, currentIndex: number] {
  const [index, setIndex] = useState<number>(0);

  const updateIndex = (increment: boolean = true) => {
    if (increment) {
      setIndex((prev) =>
        prev < Children.count(children) - 1 ? prev + 1 : prev
      );
      return;
    }

    setIndex((prev) => (prev <= 0 ? prev : prev - 1));
  };

  const Component = <Swapper index={index}>{children}</Swapper>;

  return [Component, updateIndex, index];
}
