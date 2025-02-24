import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header/Header";

export const metadata: Metadata = {
  title: "Nanny.Services",
  description: "An app for finding babysitting services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
