"use client";

type Props = {
  children: React.ReactNode;
  active: boolean;
};

export function Drawer({ active, children }: Props) {
  return (
    <div
      data-active={active}
      className="transition-all duration-300 h-full w-0 overflow-hidden flex flex-col items-center px-0 py-4 gap-12 text-nowrap z-10 bg-slate-50 shadow-[1px 0 0] shadow-slate-200 data-[active=false]:w-full data-[active=false]:md:w-3/6 data-[active=false]:lg:w-1/4 data-[active=false]:px-4"
    >
      {children}
    </div>
  );
}
