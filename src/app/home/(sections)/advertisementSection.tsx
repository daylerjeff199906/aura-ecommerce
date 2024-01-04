import banner_img from "@/assets/images/brazaletes-con-manos.webp";
import { Image } from "@nextui-org/react";

export const AdvertisementSection = () => {
  return (
    <section className="">
      <Image
        alt="publicidad"
        src={banner_img.src}
        radius="none"
        removeWrapper={true}
        className="h-[27rem] object-cover w-full"
      />
    </section>
  );
};
