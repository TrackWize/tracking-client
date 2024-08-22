import React from "react";
import module from "./index.module.scss";
import { IconDefinition } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Trace } from "../Trace";

type StepData = {
  icon: IconDefinition;
  text: string;
  date: Date;
};

type Props = {
  data: Array<StepData>;
  currentIndex: number;
};

export function Progress({ data, currentIndex }: Props) {
  const lastIndex = data.length - 1;
  return (
    <div className={module.content}>
      {data.map((step, index) => (
        <React.Fragment key={`step-${index}`}>
          <div className={module.step}>
            <div
              className={`${module.step__icon} ${
                currentIndex === index ? module.active : module.default
              } ${
                currentIndex === lastIndex && index === lastIndex
                  ? module.finish
                  : ""
              }`}
            >
              <FontAwesomeIcon icon={step.icon} size="xl" />
            </div>
            <div className={module.step__info}>
              <span className={module.step__text}>
                <strong>{step.text}</strong>
              </span>
              <span className={module.step__date}>
                {step.date.toLocaleDateString()}
              </span>
            </div>
          </div>
          {index < data.length - 1 && <Trace key={`trace-${index}`} />}
        </React.Fragment>
      ))}
    </div>
  );
}
