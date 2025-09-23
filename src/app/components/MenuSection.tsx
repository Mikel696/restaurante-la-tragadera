'use client';

import Image from 'next/image';
import { menuItems } from '@/data/menu';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const MenuSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {menuItems.map((item) => (
        <Card key={item.id} className="flex flex-col h-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-brand-dark">{item.name}</CardTitle>
            <CardDescription className="text-gray-600">{item.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow relative h-48 w-full">
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
            <Button>Añadir</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default MenuSection;
