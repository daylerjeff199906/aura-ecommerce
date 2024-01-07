import { Image } from "@nextui-org/react";
import Link from "next/link";

export const AdvertisementSection = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <Link href={"/productos?isCustomized=1"}>
          <Image
            alt="cutom-bracelets"
            src="https://firebasestorage.googleapis.com/v0/b/aurora-ecommerce.appspot.com/o/aurora-ecommerce%2Fadvertising%2Fhome-tag.webp?alt=media&token=44f7c813-e6a2-4b55-a0ee-897f0ea63653"
            radius="none"
            removeWrapper={true}
            className=" object-cover w-full hover:cursor-pointer"
          />
        </Link>
        <Link href={"/productos?isNew=1"}>
          <Image
            alt="cutom-bracelets"
            src="https://firebasestorage.googleapis.com/v0/b/aurora-ecommerce.appspot.com/o/aurora-ecommerce%2Fadvertising%2Facces-more.webp?alt=media&token=6a8d29a7-8252-429a-ad20-f07a9cbbce20"
            radius="none"
            removeWrapper={true}
            className=" object-cover w-full hover:cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};
