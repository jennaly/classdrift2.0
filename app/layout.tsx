import type { Metadata } from "next";
import "./globals.css";
import { inter } from "./fonts/fonts";
import { sulsSans } from "./fonts/fonts";

export const metadata: Metadata = {
  title: "Classdrift",
  description: "The friendly, all-in-one workspace for teachers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sulsSans.className} antialiased bg-classdrift-background`}
      >
        {children}
      </body>
    </html>
  );
}
