import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from  "next/font/google"

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

const inter =  Inter({ subsets: [ "latin"], variable:"--font-sans" })
const calistoga = Calistoga({ subsets: [ "latin"], variable:"--sans-serif", weight: ["400"] })


export default function RootLayout({
 children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white antialiased ">{children}</body>
    </html>
  );
}
