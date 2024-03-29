/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Button,
  Input,
  Select,
  Textarea,
  SelectItem,
  Spinner,
  Checkbox,
} from "@nextui-org/react";
import { useProducts, useDataCategory } from "@/hooks";
import {
  IconCircleCheck,
  IconPercentage,
  IconCurrencyDollar,
  IconBox,
} from "@tabler/icons-react";
import { IProducts } from "@/types";

export const FrmProduct = ({
  dataProduct,
}: {
  dataProduct: IProducts | null;
}) => {
  const { addProduct, editProduct, loading, message } = useProducts();
  const { categories, getCategory } = useDataCategory();
  const router = useRouter();

  const [product, setProduct] = useState({
    name: "",
    price: "0",
    stock: 0,
    discount: 0,
    description: "",
    image: "",
    isOffer: false,
    isActive: false,
    category: {
      id: "",
      name: "",
    },
    createdAt: new Date(),
  });

  const radius = "sm";

  const handleAddProduct = () => {
    if (dataProduct?.id) {
      editProduct(dataProduct?.id, product);
    } else {
      addProduct(product);
    }
  };

  const handleClearProduct = () => {
    setProduct({
      name: "",
      price: "0",
      stock: 0,
      discount: 0,
      description: "",
      image: "",
      isOffer: false,
      isActive: false,
      category: {
        id: "",
        name: "",
      },
      createdAt: new Date(),
    });
  };

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    if (dataProduct) {
      setProduct({
        name: dataProduct.name,
        price: dataProduct.price.toString(),
        stock: dataProduct.stock,
        discount: dataProduct.discount,
        description: dataProduct.description,
        image: dataProduct.image,
        isOffer: dataProduct.isOffer,
        isActive: dataProduct.isActive,
        category: {
          id: dataProduct.category.id,
          name: dataProduct.category.name,
        },
        createdAt: dataProduct.createdAt,
      });
    }
  }, [dataProduct]);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        router.push("/admin/productos");
      }, 1000);
    }
  }, [message]);

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const categoria = categories?.find(
      (category) => category.value === e.target.value
    );
    setProduct({
      ...product,
      category: {
        id: e.target.value,
        name: categoria?.name ?? "",
      },
    });
  };
  return (
    <div className="w-full">
      {loading && (
        <div className="flex gap-2 py-2 items-center">
          <Spinner />
          <h3 className="mb-2">
            {
              <span className="animate-pulse">
                {dataProduct?.id ? "Actualizando" : "Agregando"} producto...
              </span>
            }
          </h3>
        </div>
      )}
      {message && (
        <div className="flex gap-2 p-2 mb-4  items-center bg-green-100">
          <div className="text-green-500">
            <IconCircleCheck size={24} />
          </div>
          <h3>{message}</h3>
        </div>
      )}
      <div className="space-y-4">
        <h3 className="text-zinc-500">Datos del producto </h3>
        <Input
          radius={radius}
          label="Nombre"
          aria-label="Nombre"
          placeholder="Nombre"
          value={product.name}
          disabled={loading}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <Textarea
          radius={radius}
          label="Descripción"
          aria-label="Descripción"
          placeholder="Descripción"
          value={product.description}
          disabled={loading}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <Select
          label="Categoría"
          aria-label="Categoría"
          placeholder="Categoría"
          disabled={loading}
          radius={radius}
          selectedKeys={[product.category.id]}
          onChange={(e) => handleCategory(e)}
        >
          {categories ? (
            categories?.map((category) => (
              <SelectItem key={category?.value} value={category?.value}>
                {category?.name}
              </SelectItem>
            ))
          ) : (
            <SelectItem key="" value="">
              {"No hay categorías"}
            </SelectItem>
          )}
        </Select>

        <div className="flex gap-4">
          <Input
            radius={radius}
            arial-label="Precio"
            disabled={loading}
            label="Precio"
            placeholder="Precio"
            startContent={<IconCurrencyDollar className="text-zinc-500" />}
            type="number"
            min={0}
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
          <Input
            radius={radius}
            label="Stock"
            placeholder="Stock"
            type="number"
            startContent={<IconBox className="text-zinc-500" />}
            min={0}
            value={product.stock.toString()}
            onChange={(e) =>
              setProduct({ ...product, stock: parseInt(e.target.value) })
            }
          />
          <Input
            radius={radius}
            disabled={loading}
            label="Descuento"
            aria-label="Descuento"
            placeholder="discount"
            type="number"
            min={0}
            startContent={<IconPercentage className="text-zinc-500" />}
            value={product.discount.toString()}
            onChange={(e) =>
              setProduct({ ...product, discount: parseInt(e.target.value) })
            }
          />
        </div>
        <h3 className="text-zinc-500">Metadata del producto </h3>
        <Checkbox
          isSelected={product.isOffer}
          onValueChange={(value) => setProduct({ ...product, isOffer: value })}
        >
          En oferta
        </Checkbox>
        <div className="flex gap-2">
          <Button
            color="primary"
            onClick={handleAddProduct}
            radius={radius}
            isDisabled={loading}
          >
            {dataProduct ? "Guardar cambios" : "Agregar"}
          </Button>
          <Button
            color="danger"
            as={Link}
            href="/admin/productos"
            onClick={handleClearProduct}
            radius={radius}
            variant="ghost"
          >
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  );
};
