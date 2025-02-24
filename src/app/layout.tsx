import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
