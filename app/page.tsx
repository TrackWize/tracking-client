"use client";

import { Button } from "@/components";
import { useDictionary } from "@/hooks";

export default function Page() {
  const dictionary = useDictionary("Home");

  return <div>Hello World</div>;
}
