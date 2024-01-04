import { Button, Image } from "@nextui-org/react";
import img_1 from "@/assets/images/manos_collar.webp";
import img_2 from "@/assets/images/manos_pulseras.webp";
import img_3 from "@/assets/images/pulsera_modelo.webp";

export const Banner = () => {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 gap-2 h-screen xl:max-h-[6  0rem] items-center">
      <div className="space-y-4">
        <h3>YOUR IMAGINATION, OUR EXPERTISE</h3>
        <h2 className="text-6xl font-bold">
          Quality and convenience, every time.
        </h2>
        <p>
          Ready to make your mark with custom printing? Welcome to our store -
          where imagination meets print.
        </p>
        <Button radius="none" color="secondary">
          Ver productos
        </Button>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="grid gap-4 items-center justify-end">
            <Image
              className="hidden sm:block w-full rounded-md sm:h-96 lg:h-80 xl:h-80 xl:w-72 object-cover"
              src={img_1.src}
              alt="pulseras"
              removeWrapper={true}
            />
          </div>
          <div className="grid gap-4">
            <div>
              <Image
                className="w-full rounded-md sm:h-96 lg:h-80 xl:h-64 xl:w-72 object-cover"
                src={img_2.src}
                alt="manos con pulseras"
                removeWrapper={true}
              />
            </div>
            <div>
              <Image
                className="w-full rounded-md sm:h-96 lg:h-80 xl:h-64 xl:w-72 object-cover"
                src={img_3.src}
                alt="Graduado de la universidad"
                removeWrapper={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
