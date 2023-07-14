import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Twitter Mini",
  description: "A mini version of twitter.com",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full flex justify-center items-center bg-slate-950 text-slate-300`}>{children}</body>
    </html>
  )
}
