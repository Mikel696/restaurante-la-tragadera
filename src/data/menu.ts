export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string; // URL to the image
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Hamburguesa Clásica',
    description: 'Carne de res de 150g, queso cheddar, lechuga, tomate y salsa de la casa.',
    price: '14.000',
    image: 'https://source.unsplash.com/random/800x600/?hamburger', // Stock image URL
  },
  {
    id: 2,
    name: 'Perro Caliente Especial',
    description: 'Salchicha americana, queso mozzarella, papas trituradas, tocineta y salsas.',
    price: '12.000',
    image: 'https://source.unsplash.com/random/800x600/?hotdog', // Stock image URL
  },
  {
    id: 3,
    name: 'Salchipapa Monstruosa',
    description: 'Papas a la francesa, salchicha, chorizo, butifarra, tocineta, queso costeño y huevo de codorniz.',
    price: '20.000',
    image: 'https://source.unsplash.com/random/800x600/?fries', // Stock image URL
  },
  {
    id: 4,
    name: 'Hamburguesa Doble Carne',
    description: 'Doble carne de res (300g), doble queso cheddar, tocineta, cebolla caramelizada y salsa BBQ.',
    price: '18.000',
    image: 'https://source.unsplash.com/random/800x600/?double-hamburger', // Stock image URL
  },
];