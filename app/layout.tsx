import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Twitter KW",
  description: "A KW version of twitter.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} flex h-full items-center justify-center bg-slate-950 text-slate-300`}
      >
        {children}
      </body>
    </html>
  );
}
