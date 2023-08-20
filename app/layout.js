import Header from "@/components/header/Header";
import { Rajdhani, Great_Vibes } from "next/font/google";
import "/styles/globals.css";
import Theme from "./theme";
import Footer from "@/components/footer/Footer";

export const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>DJoz</title>
        <meta name="description" content="Liberty City DJ" />
      </head>
      <body className={rajdhani.className}>
        <Theme>
          <Header />
          <main>{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
