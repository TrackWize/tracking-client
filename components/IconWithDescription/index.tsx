import { IconDefinition } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import module from './index.module.scss';

type Props = {
  icon: IconDefinition;
  children: React.ReactNode;
};

export function IconWithDescription({ icon, children }: Props) {
  return (
    <div className={module.container}>
      <FontAwesomeIcon icon={icon} />
      <h5>{children}</h5>
    </div>
  );
}
