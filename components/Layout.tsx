"use client";


type Props = {
  children: JSX.Element[] | JSX.Element;
};

export function Layout({ children }: Props) {
  return (
    <body className="flex flex-col items-center w-svw h-svh overflow-x-hidden">
      {children}
    </body>
  );
}
