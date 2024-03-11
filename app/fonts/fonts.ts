import { Inter, Lusitana, Space_Grotesk } from "next/font/google";
import localFont from "@next/font/local";

export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const sulsSans = localFont({
  src: [
    {
      path: "./sul-sans-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./sul-sans-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./sul-sans-medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./sul-sans-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./sul-sans-black.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./sul-sans-italic.otf",
      style: "italic",
    },
  ],
  variable: "--font-sulsans",
});
