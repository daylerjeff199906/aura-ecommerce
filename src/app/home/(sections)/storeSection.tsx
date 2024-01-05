import { Button, Image } from "@nextui-org/react";
import img_store from "@/assets/images/store_section.webp";

export const StoreSection = () => {
  return (
    <section className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center bg-black sm:h-72 sm:mx-14">
        <Image
          src={img_store.src}
          alt="Mujer con bisuteria"
          className="object-cover h-72 w-full"
          removeWrapper={true}
          radius="none"
        />
        <div className="h-fit space-y-4 p-4 sm:p-6">
          <h1 className="text-2xl font-bold text-white">
            PROXIMAMENTE UBICA TU TIENDA FAVORITA
          </h1>
          <p className="font-semibold text-zinc-300">
            Recojo en tienda GRATIS. Más de 50 tiendas en todo el país.
          </p>
          <Button radius="none">Ver tiendas</Button>
        </div>
      </div>
    </section>
  );
};
