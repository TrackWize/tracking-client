"use client";

import dictionary, { PagesDictionary } from "@/dictionary";
import { useEffect, useState } from "react";

export function useDictionary<T extends keyof PagesDictionary>(
  item: T
): PagesDictionary[T] {
  const [language, setLanguage] = useState<keyof typeof dictionary>("pt");
  const [data, setData] = useState<PagesDictionary[T]>(dictionary.pt[item]);

  useEffect(() => {
    if (!navigator.language) return;
    setLanguage(navigator.language.split("-")[0] as any);
  }, []);

  useEffect(() => {
    if (!language) return;
    if (Object.keys(dictionary).find((item) => item === language)) {
      setData(dictionary[language][item]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return data;
}
