import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import module from "./index.module.scss";
import {
  faTruckMoving,
  faWarehouse,
  IconDefinition,
} from "@fortawesome/pro-solid-svg-icons";

export function Progress() {
  type Props = {
    data: Array<{ icon: IconDefinition; text: string; date: Date }>;
    currentIndex: number;
  };
  
  return (
    <>
      <div className={module.content}>
       
      </div>
    </>
  );
}

