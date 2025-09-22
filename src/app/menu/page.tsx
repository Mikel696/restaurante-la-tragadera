import { menuItems } from '@/data/menu';
import MenuItemCard from '@/components/ui/MenuItemCard';
import AnimationWrapper from '@/components/ui/AnimationWrapper';

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
              <MenuItemCard item={item} />
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </main>
  );
}
