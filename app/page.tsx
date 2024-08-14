"use client";

import { useDictionary } from "@/hooks";

export default function Page() {
  const dictionary = useDictionary("Home");

  return <div>{dictionary.text}</div>;
}
