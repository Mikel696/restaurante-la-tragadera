import { menuItems } from '@/data/menu';
import AnimationWrapper from '@/components/ui/AnimationWrapper';
import Image from 'next/image'; // Ensure Image is imported

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Assuming we might want a button in the card footer

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-brand-light py-12">
      <div className="container mx-auto px-6">
        <AnimationWrapper>
          <h1 className="text-4xl font-extrabold text-center text-brand-dark mb-12">Nuestro Menú</h1>
        </AnimationWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <AnimationWrapper key={item.id} delay={index * 0.1}>
              <Card className="flex flex-col h-full"> {/* Added flex-col and h-full for consistent card height */}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-brand-dark">{item.name}</CardTitle>
                  <CardDescription className="text-gray-600">{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow relative h-48 w-full"> {/* flex-grow to make image take available space */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </CardContent>
                <CardFooter className="flex justify-between items-center mt-4">
                  <span className="text-xl font-semibold text-brand-red">${item.price}</span>
                  <Button>Añadir</Button> {/* Example button, can be customized or removed */}
                </CardFooter>
              </Card>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </main>
  );
}