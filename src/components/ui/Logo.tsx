import Image from 'next/image';

const Logo = () => {
  return (
    <div className="mx-auto w-full max-w-md">
      <Image
        src="/images/banner_principal.png" // Ruta directa y explícita
        alt="Logo de La Tragadera Fast Food"
        width={700} // Proporción original de la imagen
        height={700}
        priority // Carga esta imagen primero
        className="h-auto w-full"
      />
    </div>
  );
};

export default Logo;