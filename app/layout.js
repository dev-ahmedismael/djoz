import Header from "@/components/header/Header";
import { Great_Vibes, Rajdhani } from "next/font/google";
import "/styles/globals.css";
import Theme from "./theme";
import Footer from "@/components/footer/Footer";

export const rajdhani = Rajdhani({ subsets: ["latin"], weight: "400" });
export const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "DJoz",
  description: "Liberty City DJ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
