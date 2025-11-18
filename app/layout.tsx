import type { Metadata } from "next";
import "@/public/assets/static/css/globals.css";
import "@/public/assets/static/fonts/estedad/index.css";
import { ModalProvider } from "./_core/hooks/use-moda";

export const metadata: Metadata = {
  title: "وبسایت رسمی گلوو آپ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  );
}
