"use client";

import "./styles/globals.css"
import { Roboto } from 'next/font/google';
import { Header } from "./components/Header/Header";
import { useSelectedLayoutSegment } from "next/navigation";


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

   const segment = useSelectedLayoutSegment();
  const isMainPage = segment === null;
  
  return (
    <html lang="en">
      <body className={roboto.className}>
          {isMainPage ? (
        <div style={{position: "relative"}}>
            <Header isMainPage={ isMainPage} />
          <main>{children}</main>
        </div>
      ) : (
        <>
          <Header isMainPage={ isMainPage}/>
          <main>{children}</main>
        </>
      )}
        {modal}
      </body>
    </html>
  );
}
