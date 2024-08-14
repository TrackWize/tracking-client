"use client";

import { setCookie, getAllCookies, deleteCookies } from "@/core/actions";
import { Button } from "@/components";
import { useDictionary } from "@/hooks";
import Link from "next/link";

export default function Page() {
  const dictionary = useDictionary("Home");

  return (
    <div>
      {dictionary.text}
      <Button
        onClick={() => {
          setCookie("token", "hello");
        }}
      >
        Get Cookies
      </Button>
      <Button
        onClick={() => {
          getAllCookies().then((data) => {
            console.log(data);
          });
        }}
      >
        Get All Cookies
      </Button>
      <Link href={"/testing"}>Go</Link>
    </div>
  );
}
