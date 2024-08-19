import { Button } from "../Button";
import { Logo } from "@/components/Svg";
import module from './index.module.scss';

export function Header() {
  return (
    <header className={module.header}>
      <Logo />
    </header>
  );
}
