import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>
          Jas Oberoi | Best Realtor Surrey | White Rock | South Surrey
        </title>
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      {/* <body className={inter.className}> */}
      <body
        className={cn("relative", inter.className, {
          "debug-screens": process.env.NODE_ENV === "development",
        })}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
