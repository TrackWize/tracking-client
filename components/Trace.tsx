import React from "react";
import module from "./index.module.scss";

export function Trace() {
  return (
    <div className="flex items-center w-full px-5">
      <div className="w-4 h-4 bg-black rounded-full" />
      <div className="border-y-2 border-dashed border-black grow" />
      <div className="w-4 h-4 bg-black rounded-full" />
    </div>
  );
}
