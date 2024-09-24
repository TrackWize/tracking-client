import { IconDefinition } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  icon: IconDefinition;
  children: React.ReactNode;
};

export function IconWithDescription({ icon, children }: Props) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <FontAwesomeIcon icon={icon} className="text-7xl 2xl:text-8xl" />
      <h5>{children}</h5>
    </div>
  );
}
