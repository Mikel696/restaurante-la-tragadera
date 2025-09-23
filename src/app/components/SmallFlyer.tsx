import Image from 'next/image';

const SmallFlyer = () => {
  return (
    <section className="container mx-auto my-12 flex justify-center">
      <div className="relative w-full max-w-md h-auto">
        <Image
          src="/images/banner-rotativo.jpg"
          alt="Flyer promocional"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default SmallFlyer;
