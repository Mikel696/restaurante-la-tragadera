import Logo from '@/components/ui/Logo';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center space-y-8 p-4 text-center">
      <Logo />
      <div className="space-y-4">
        <h2 className="text-3xl font-extrabold uppercase tracking-wider text-primary md:text-4xl text-shadow-heavy">
          Porque el Hambre no se Negocia
        </h2>
        <Button size="lg" className="bg-primary text-dark hover:bg-primary/90">
          <a href="https://wa.me/573148342452" target="_blank" rel="noopener noreferrer">
            Pide por WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;