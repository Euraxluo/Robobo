import type { Metadata } from "next";
import "./globals.css";
import { inter, tiny5 } from "./fonts";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${tiny5.variable} ${inter.className} antialiased`}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
