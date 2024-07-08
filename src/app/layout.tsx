import { Header } from "@widgets/header";
import type { Metadata } from "next";
import '@styles/index.scss'
import { Footer } from "@widgets/footer";
import { Catalog } from "@features/catalog/ui/Catalog";
import { Toaster } from "react-hot-toast";
export const metadata: Metadata = {
  title: "Amar",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className='body'>
          <Header />
          <Catalog />
          {children}
          <Footer />
          <Toaster />
          <div id="catalog-root" />
        </body>
    </html>
  );
}
