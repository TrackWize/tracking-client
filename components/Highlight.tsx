type Props = {
  children: React.ReactNode;
};

export function Highlight({ children }: Props) {
  return <div className="text-blue-500 inline">{children}</div>;
}
