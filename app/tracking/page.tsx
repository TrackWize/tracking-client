"use client";

import { Button, Highlight } from "@/components";
import module from "./page.module.scss";
import { useDrawer } from "@/hooks";

export default function UserScreen() {
  const [drawerActive, drawerAction, Component] = useDrawer(<>Hello World</>);

  return (
    <div className={module.container}>
      {Component}
      <div className={`${!drawerActive && module.content}`}>
        <Button className="w-fit h-fit" onClick={drawerAction}>
          Active
        </Button>
      </div>
    </div>
  );
}
