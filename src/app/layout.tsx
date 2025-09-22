import type { Metadata } from "next";
import { Anton, Montserrat } from "next/font/google"; // Import Anton and Montserrat
import "./globals.css";
import Header from "@/components/layout/Header"; // Added back
import Footer from "@/app/components/Footer"; // Added back

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
  title: "La Tragadera",
  description: "El mejor restaurante de comidas rápidas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} ${anton.variable} font-montserrat flex flex-col min-h-screen bg-brand-light`}>
        <Header /> {/* Added back */}
        <main className="flex-grow">{children}</main>
        <Footer /> {/* Added back */}
      </body>
    </html>
  );
}