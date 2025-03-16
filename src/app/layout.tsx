import type { Metadata } from "next";
import "./styles/globals.css"
import { Roboto } from 'next/font/google';
import { Header } from "./components/Header/Header";

export const metadata: Metadata = {
  title: "Nanny.Services",
  description: "An app for finding babysitting services",
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main>
          {children}
        </main>
        {modal}
      </body>
    </html>
  );
}
