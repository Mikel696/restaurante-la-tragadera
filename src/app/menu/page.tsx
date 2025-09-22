// Removed: import { menuItems } from '@/data/menu';
// Removed: import AnimationWrapper from '@/components/ui/AnimationWrapper';
// Removed: import Image from 'next/image';
// Removed: import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// Removed: import { Button } from "@/components/ui/button";

import MenuSection from "@/app/components/MenuSection"; // New import

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-brand-light py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-center text-brand-dark mb-12">Nuestro Menú</h1>
        <MenuSection /> {/* New component usage */}
      </div>
    </main>
  );
}