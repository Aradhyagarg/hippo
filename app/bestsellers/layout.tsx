import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import ClientLayout from "@/components/LayoutClient";
import "../globals.css"
 // Import any specific CSS for the Bestsellers page

const font = Inter({ subsets: ["latin"] });

export default function BestsellersLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <title>Bestsellers</title>
      </head>
      <body>
        <Header />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
