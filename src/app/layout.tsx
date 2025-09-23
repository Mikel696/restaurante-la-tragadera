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
  title: "La Tragadera - El mejor restaurante de comidas rápidas",
  description: "La Tragadera te ofrece los mejores perros calientes, hamburguesas y combos con estilo. ¡Pide a domicilio en Bogotá!",
  openGraph: {
    title: "La Tragadera - Perros Calientes y Hamburguesas con Estilo",
    description: "La Tragadera te ofrece los mejores perros calientes, hamburguesas y combos con estilo. ¡Pide a domicilio en Bogotá!",
    url: "https://www.latragadera.com.co", // Placeholder URL
    siteName: "La Tragadera",
    images: [
      {
        url: "https://www.latragadera.com.co/images/banner_principal.jpg", // Placeholder image
        width: 1200,
        height: 630,
        alt: "La Tragadera - Comida Rápida con Estilo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Tragadera - Perros Calientes y Hamburguesas con Estilo",
    description: "La Tragadera te ofrece los mejores perros calientes, hamburguesas y combos con estilo. ¡Pide a domicilio en Bogotá!",
    images: ["https://www.latragadera.com.co/images/banner_principal.jpg"], // Placeholder image
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