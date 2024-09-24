import { Logo } from "@/components/Svg";

export function Header() {
  return (
    <header className="w-svw flex items-center justify-between p-4 z-10 shadow bg-white">
      <Logo />
    </header>
  );
}
