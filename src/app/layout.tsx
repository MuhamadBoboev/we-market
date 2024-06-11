import { Header } from "@widgets/header";
import type { Metadata } from "next";
import '@styles/index.scss'
import { Footer } from "@widgets/footer";
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
        {children}
        <Footer />
        </body>
    </html>
  );
}
