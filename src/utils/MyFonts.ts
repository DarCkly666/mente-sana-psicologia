import { Poppins } from "next/font/google";

export const fontPoppins = Poppins({
  display: "swap",
  weight: "400",
  variable: "--poppins-400",
  subsets: ["latin"],
});

export const fontPoppins700 = Poppins({
  display: "swap",
  weight: "700",
  variable: "--poppins-700",
  subsets: ["latin"],
});
