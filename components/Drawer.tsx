"use client";

import { useEffect, useState } from "react";
import module from "./Drawer.module.scss";

type Props = {
  children: React.ReactNode;
  active: boolean;
};

export function Drawer({ active, children }: Props) {

  return (
    <div
      
      className={`${module.content} ${!active && module.active}`}
    >
      {children}
    </div>
  );
}
