import type { Metadata } from "next";
import "./styles/globals.css"

import { Header } from "./components/Header/Header";

export const metadata: Metadata = {
  title: "Nanny.Services",
  description: "An app for finding babysitting services",
};



export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        {modal}
        </main>
      </body>
    </html>
  );
}
