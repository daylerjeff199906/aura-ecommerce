"use client";
import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  Image,
  Tooltip,
} from "@nextui-org/react";
import { IProducts } from "@/types";
import { IconHeartPlus, IconShoppingCartPlus } from "@tabler/icons-react";
import { useLogicShopCart } from "@/providers";
import Link from "next/link";

export const CardGallery = ({ data }: { data?: IProducts }) => {
  const [isHover, setIsHover] = useState(false);
  const { addToCart } = useLogicShopCart();

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
        <Tooltip content="Agregar al carrito" placement="right-end" showArrow>
          <Button
            isIconOnly
            radius="full"
            endContent={<IconShoppingCartPlus size={24} strokeWidth={1.5} />}
            className="absolute bottom-2 right-4 z-20 bg-white"
            onClick={() => data && addToCart(data)}
          />
        </Tooltip>
      </div>
      <CardBody>
        <p className="text-sm text-zinc-400">{data?.category?.name}</p>
        <h3 className="text-xl font-bold line-clamp-1">{data?.name}</h3>
        <p className="text-lg text-gray-500">
          {data?.discount ? (
            <>
              <span className="line-through">s/. {data?.price}</span>{" "}
              <span className="font-bold">
                s/ {data?.price - (data?.price * data?.discount) / 100}
              </span>
            </>
          ) : (
            <span className="font-bold">s/. {data?.price}</span>
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
          as={Link}
          href={`/productos/${data?.id}`}
        >
          Ver producto
        </Button>
      </CardFooter>
    </Card>
  );
};
