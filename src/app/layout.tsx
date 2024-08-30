// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { ThemeProvider } from "@/context/ThemeContext"; // Import ThemeProvider

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created by Waqar Ahmed",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--sans-serif", weight: ["400"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, " bg-gray-900 text-white antialiased font-sans")}>
        <ThemeProvider> 
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
