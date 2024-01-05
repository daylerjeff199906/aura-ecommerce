import { Button, Image } from "@nextui-org/react";

export const StoreSection = () => {
  return (
    <section className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center bg-black h-72 sm:m-14">
        <div>
          {/* <Image /> */}
        </div>
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
