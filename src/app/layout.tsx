import type { Metadata } from "next";
import "./globals.css";
import Products from './products';

export const metadata: Metadata = {
  title: "Каталог товаров",
  description: "Список всех товаров",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Products />
      </body>
    </html>
  );
}
