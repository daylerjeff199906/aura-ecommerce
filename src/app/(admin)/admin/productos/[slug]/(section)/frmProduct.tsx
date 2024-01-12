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

  const radius = "sm";

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
          radius={radius}
          label="Nombre"
          placeholder="Nombre"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
        />
        <Textarea
          radius={radius}
          label="Descripción"
          placeholder="Descripción"
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
        <Select
          label="Categoría"
          placeholder="Categoría"
          radius={radius}
          selectedKeys={[product.category]}
          onChange={(e) => setProduct({ ...product, category: e.target.value })}
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
            label="Precio"
            placeholder="Precio"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
          <Input
            radius={radius}
            label="Stock"
            placeholder="Stock"
            type="number"
            min={0}
            value={product.stock.toString()}
            onChange={(e) =>
              setProduct({ ...product, stock: parseInt(e.target.value) })
            }
          />
          <Input
            radius={radius}
            label="Discount"
            placeholder="discount"
            value={product.discount.toString()}
            onChange={(e) =>
              setProduct({ ...product, discount: parseInt(e.target.value) })
            }
          />
        </div>
        <div className="flex gap-2">
          <Button color="primary" onClick={handleAddProduct} radius={radius}>
            Guardar
          </Button>
          <Button color="danger" onClick={handleClearProduct} radius={radius}>
            Cancelar
          </Button>
        </div>
      </div>
    </>
  );
};
