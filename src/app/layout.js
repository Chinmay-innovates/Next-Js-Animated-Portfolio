import { Inter } from "next/font/google";
import "./globals.css";
import TransitonProvider from "../components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio App",
  description: "Animated Portfolio Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <TransitonProvider>{children}</TransitonProvider>
      </body>
    </html>
  );
}
