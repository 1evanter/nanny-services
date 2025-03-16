"use client";

// import type { Metadata } from "next";
import "./styles/globals.css"
import { Roboto } from 'next/font/google';
import { Header } from "./components/Header/Header";
import { usePathname } from "next/navigation";


// export const metadata: Metadata = {
//   title: "Nanny.Services",
//   description: "An app for finding babysitting services",
// };

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

    const pathname = usePathname();
  const isMainPage = pathname === "/";
  
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
