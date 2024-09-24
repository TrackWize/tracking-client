import type { Metadata } from "next";
import { Header, Layout } from "@/components";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const HankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rastreio Fácil | TrackWize",
    template: "%s | TrackWize",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: JSX.Element;
}>) {
  return (
    <html lang="en">
      <Layout>
        <Header />
        <main className={HankenGrotesk.className}>{children}</main>
      </Layout>
    </html>
  );
}
