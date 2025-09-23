import type { Metadata } from "next";
import { Anton, Montserrat } from "next/font/google"; // Import Anton and Montserrat
import Script from "next/script"; // Import Script for Google Analytics
import "./globals.css";
import Header from "@/components/layout/Header"; // Added back
import Footer from "@/app/components/Footer"; // Added back
import FloatingWhatsAppButton from "@/components/ui/FloatingWhatsAppButton";

const anton = Anton({
  subsets: ["latin"],
  weight: "400", // Anton only has 400 weight
  variable: "--font-anton", // Define CSS variable for Anton
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // Define CSS variable for Montserrat
});

export const metadata: Metadata = {
  title: 'La Tragadera - Hamburguesas, Picadas y Alitas en Soacha',
  description: 'El propio sabor, ¡a lo grande! Pide a domicilio las mejores hamburguesas, alitas, picadas y combos de Soacha. ¡Porque el hambre no se negocia!',
  openGraph: {
    title: 'La Tragadera - ¡El Propio Sabor!',
    description: 'Las mejores comidas rápidas de Soacha, directamente a tu casa.',
    url: 'https://restaurante-la-tragadera.vercel.app/',
    siteName: 'La Tragadera',
    images: [
      {
        url: '/images/banner-promocion.jpg', // Imagen principal para compartir
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${anton.variable} font-montserrat flex flex-col min-h-screen bg-brand-light`}>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" // Replace G-XXXXXXXXXX with your actual GA Measurement ID
        />
        <Script
          id="google-analytics-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('config', 'G-XXXXXXXXXX'); // Replace G-XXXXXXXXXX with your actual GA Measurement ID
            `,
          }}
        />
        <Header /> {/* Added back */}
        <main className="flex-grow">{children}</main>
        <Footer /> {/* Added back */}
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}