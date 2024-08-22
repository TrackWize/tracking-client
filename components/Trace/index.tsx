import React from "react";
import module from "./index.module.scss";

export function Trace() {
  return (
    <div className={module.dashedLine}>
      <div className={module.dashedLine__circle}></div>
      <div className={module.dashedLine__dashed}></div>
      <div className={module.dashedLine__circle}></div>
    </div>
  );
}
