import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/navs/TopNav";

import { CookiesProvider } from 'next-client-cookies/server';
import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Proyecto Uno",
  description: "App básica para aprendizaje de herramientas para proyectos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <CookiesProvider>
            <TopNav />
            {children}
          </CookiesProvider>
        </StoreProvider>
      </body>
    </html>
  );
}