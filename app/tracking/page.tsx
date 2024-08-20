import { Highlight } from "@/components";
import module from "./page.module.scss";
import { Progress } from "@/components/Progress/Index";

export default function UserScreen() {
  return (
    <>
      <div className={module.container}>
        <h4>
          Acompanhar <Highlight>rota de entrega</Highlight>
        </h4>
        <div className={module.container__progress}>
          <Progress />
        </div>
      </div>
    </>
  );
}
