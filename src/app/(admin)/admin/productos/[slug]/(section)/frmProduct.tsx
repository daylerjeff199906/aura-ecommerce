/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { Button, Input, Select, Textarea, SelectItem } from "@nextui-org/react";
import { useProducts } from "@/hooks";
import { useDataCategory } from "@/hooks";

export const FrmProduct = () => {
  const { addProduct } = useProducts();
  const { categories, getCategory } = useDataCategory();
  const [product, setProduct] = useState({
    name: "",
    price: "0",
    stock: 0,
    discount: 0,
    description: "",
    image: "",
    isOffer: false,
    category: "",
    createdAt: new Date(),
  });

  const handleAddProduct = () => {
    addProduct(product);
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
      category: "",
      createdAt: new Date(),
    });
  };

  useEffect(() => {
    getCategory();
  }, []);

  // console.log(categories);

  return (
    <>
      <div className="space-y-4">
        <Input
          label="Nombre"
          placeholder="Nombre"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <Textarea
          label="Descripción"
          placeholder="Descripción"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <Select label="Categoría" placeholder="Categoría">
          {categories !== null ? (
            <>
              {categories?.map((category) => (
                <SelectItem
                  key={category?.id.toString()}
                  value={category?.id.toString()}
                >
                  {category?.name}
                </SelectItem>
              ))}
            </>
          ) : (
            <></>
          )}
        </Select>
        <Input
          label="Precio"
          placeholder="Precio"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <Input
          label="Stock"
          placeholder="Stock"
          value={product.stock.toString()}
          onChange={(e) =>
            setProduct({ ...product, stock: parseInt(e.target.value) })
          }
        />
        <Input
          label="discount"
          placeholder="discount"
          value={product.discount.toString()}
          onChange={(e) =>
            setProduct({ ...product, discount: parseInt(e.target.value) })
          }
        />
        <div className="flex gap-2">
          <Button color="primary" onClick={handleAddProduct}>
            Guardar
          </Button>
          <Button color="danger" onClick={handleClearProduct}>
            Cancelar
          </Button>
        </div>
      </div>
    </>
  );
};
