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
    name: 'Hamburguesa Guayatuna',
    description: 'Deliciosa hamburguesa con ingredientes frescos y nuestra salsa especial.',
    price: '29.700',
    image: '/images/hamburguesa.jpg', // Local image path
  },
  {
    id: 2,
    name: 'Pechuga a la Plancha',
    description: 'Jugosa pechuga de pollo a la plancha, acompañada de ensalada fresca.',
    price: '29.800',
    image: '/images/pechuga.jpg', // Local image path
  },
  {
    id: 3,
    name: 'Churrasco',
    description: 'Exquisito corte de churrasco, cocinado a la perfección.',
    price: '32.800',
    image: '/images/churrasco.jpg', // Local image path
  },
  {
    id: 4,
    name: 'Uslete (Perro Caliente)',
    description: 'Nuestro famoso perro caliente con salchicha premium y aderezos únicos.',
    price: '23.700',
    image: '/images/hotdog.jpg', // Local image path
  },
  {
    id: 5,
    name: 'Atisbe (Picada)',
    description: 'Variedad de carnes y embutidos, papas y salsas para compartir.',
    price: '41.700',
    image: '/images/picada.jpg', // Local image path
  },
  {
    id: 6,
    name: 'Alitas BBQ',
    description: 'Crujientes alitas de pollo bañadas en nuestra salsa BBQ casera.',
    price: '25.000', // Assuming a price, as it wasn't provided
    image: '/images/alitas.jpg', // Local image path
  },
];