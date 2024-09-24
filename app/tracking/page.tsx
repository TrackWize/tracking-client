"use client";

import { Button } from "@/components";
import { Progress } from "@/components/Progress";
import {
  faBoxOpen,
  faTruck,
  faTruckMoving,
  faWarehouse,
} from "@fortawesome/pro-solid-svg-icons";
import { useDrawer } from "@/hooks";

export default function UserScreen() {
  const [drawerActive, drawerAction, Component] = useDrawer(<>Hello World</>);

  const steps = [
    {
      icon: faWarehouse,
      text: "Nas instalações da entregadora",
      date: new Date("2024-08-05"),
    },
    {
      icon: faTruckMoving,
      text: "Em trânsito",
      date: new Date("2024-08-06"),
    },
    {
      icon: faWarehouse,
      text: "Chegou na sua cidade",
      date: new Date("2024-08-08"),
    },
    {
      icon: faTruck,
      text: "Saiu para entrega",
      date: new Date("2024-08-09"),
    },
    {
      icon: faBoxOpen,
      text: "Entregue",
      date: new Date("2024-08-09"),
    },
  ];

  return (
    <div className="flex">
      {Component}
      <div
        data-active={!drawerActive}
        className="data-[active=true]:flex data-[active=true]:flex-col data-[active=true]:flex-1"
      >
        <Button className="w-fit h-fit" onClick={drawerAction}>
          Active
        </Button>
        <div className="px-32">
          <Progress data={steps} currentIndex={4} />
        </div>
      </div>
    </div>
  );
}
