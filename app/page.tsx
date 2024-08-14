"use client";

import { useDictionary } from "@/hooks";
import { Heart, Package, Truck } from "@phosphor-icons/react";
import Image from "next/image";
import { use, useEffect } from "react";

export default function Page() {
  const dictionary = useDictionary("Home");

  return <div>{dictionary.text}</div>;
}
