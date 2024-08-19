"use client";

import module from "./index.module.scss";

type Props = {
  children: JSX.Element[] | JSX.Element;
};

export function Layout({ children }: Props) {
  return <body className={module.body}>{children}</body>;
}
