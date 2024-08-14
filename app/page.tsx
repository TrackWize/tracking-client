"use client";

import { Heart, Package, Truck } from "@phosphor-icons/react";
import Image from "next/image";

export default function Page() {

  return (
    <div className="flex items-center justify-between gap-2  h-full px-20">
      <div className="flex flex-col items-center flex-1 h-full">
        <div className="bg-blue-50 w-1/2 aspect-square">
          <Truck />
          <Package />
          <Heart />
        </div>
        <h4>tracking, o serviço que te conecta ao seu produto.</h4>
      </div>

      <p className="flex-1 bg-red-100">H</p>
    </div>
  );
}
