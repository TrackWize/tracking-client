import React from "react";
import module from "./index.module.scss";

export function Trace() {
  return <div className={module.fullLine}>
      <div className={module.firsthalfLine}></div>
      <div className={module.firsthalfLine}></div>
  </div>;
}
