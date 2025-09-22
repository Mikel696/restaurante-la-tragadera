import type { MenuItem } from '@/data/menu';
import Button from './Button';
import PlaceholderImage from './PlaceholderImage'; // Import the new component

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="w-full h-48">
        <PlaceholderImage
          alt={item.name}
          className="w-full h-full"
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