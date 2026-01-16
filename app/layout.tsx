import type { Metadata } from "next";
import { Poppins, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Studio Cirqueira’s | Design de Sobrancelhas, Lash e Nail Designer",
  description:
    "Studio Cirqueira’s é especializado em design de sobrancelhas, lash designer e nail designer. Cuidados estéticos personalizados para realçar sua beleza com naturalidade e precisão.",
};

// Correto: exportar a viewport separadamente (string é suficiente)
export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}