"use client";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Image,
} from "@nextui-org/react";
import { IProducts } from "@/types";
import { IconHeartPlus, IconShoppingCartPlus } from "@tabler/icons-react";

export const CardGallery = ({ data }: { data?: IProducts }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Card
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      shadow="none"
      className="border border-zinc-100"
    >
      <div className="relative w-full">
        {data?.isOffer && (
          <Chip
            className="absolute top-2 left-2 z-20 font-bold"
            color="danger"
            radius="sm"
          >
            En promoción
          </Chip>
        )}
        <Image
          src={data?.image}
          alt="img_data"
          removeWrapper={true}
          className="object-cover w-full h-64"
          radius="none"
        />
        <Button
          isIconOnly
          radius="full"
          endContent={<IconHeartPlus size={24} strokeWidth={1.5} />}
          className="absolute bottom-14 right-4 z-20 bg-white"
        />
        <Button
          isIconOnly
          radius="full"
          endContent={<IconShoppingCartPlus size={24} strokeWidth={1.5} />}
          className="absolute bottom-2 right-4 z-20 bg-white"
        />
      </div>
      <CardBody>
        <p className="text-sm text-zinc-400">{data?.category}</p>
        <h3 className="text-xl font-bold line-clamp-1">{data?.name}</h3>
        <p className="text-lg text-gray-500">
          {data?.discount ? (
            <>
              <span className="line-through">${data?.price}</span>{" "}
              <span className="font-bold">
                ${data?.price - (data?.price * data?.discount) / 100}
              </span>
            </>
          ) : (
            <span className="font-bold">${data?.price}</span>
          )}
        </p>
      </CardBody>
      <CardFooter>
        <Button
          className={
            isHover ? "bg-black text-white" : "bg-zinc-100 text-zinc-400"
          }
          radius="none"
          fullWidth
        >
          Ver producto
        </Button>
      </CardFooter>
    </Card>
  );
};
