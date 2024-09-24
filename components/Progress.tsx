import React from "react";
import { IconDefinition } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    <div className="flex gap-4 items-center justify-center h-56 w-full rounded shadow-lg px-32">
      {data.map((step, index) => (
        <div key={`progress-${index}`}>
          <div
            data-active={currentIndex === index}
            data-last-index={currentIndex === lastIndex && index === lastIndex}
            className="flex flex-row w-16 h-20 text-[2rem] text-black data-[active=true]:bg-slate-700 data-[last-index=true]:text-blue-600"
          >
            <FontAwesomeIcon icon={step.icon} size="xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-center">
              <strong>{step.text}</strong>
            </span>
            <span>{step.date.toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
