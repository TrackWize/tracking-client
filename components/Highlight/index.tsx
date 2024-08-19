import module from "./index.module.scss";

type Props = {
  children: React.ReactNode;
};

export function Highlight({ children }: Props) {
  return <div className={module.highlight}>{children}</div>;
}
