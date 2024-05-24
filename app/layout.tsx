import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryReact from "../QueryReact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Registry portal",
   description: "Welcome to our registry portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en">
        <body className={inter.className}>
           <QueryReact>{children}</QueryReact>
        </body>
     </html>
  );
}
