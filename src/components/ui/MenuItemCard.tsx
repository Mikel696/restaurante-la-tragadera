import Image from 'next/image'; // Re-import Image
import type { MenuItem } from '@/data/menu';
import { Button } from '@/components/ui/button';
// Removed: import PlaceholderImage from './PlaceholderImage';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="relative w-full h-48 bg-gray-200"> {/* Added relative and bg-gray-200 for fallback */}
        <Image
          src={item.image}
          alt={item.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-brand-dark">{item.name}</h3>
        <p className="text-gray-600 mt-2 flex-grow">{item.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl font-extrabold text-brand-dark">${item.price}</span>
          <Button variant="secondary">
            Añadir
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
