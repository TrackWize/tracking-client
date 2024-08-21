"use client";

import { Drawer } from "@/components";
import { createElement, useState } from "react";

type useDrawerCallback = [boolean, () => void, React.ReactElement];

export function useDrawer(children: React.ReactNode): useDrawerCallback {
  const [active, setActive] = useState<boolean>(false);

  const handleActive = () => {
    setActive((prev) => !prev);
  };

  return [
    active,
    handleActive,
    createElement(Drawer, { active } as any, children),
  ];
}
