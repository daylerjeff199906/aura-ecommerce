/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Input,
  Select,
  Textarea,
  SelectItem,
  Spinner,
} from "@nextui-org/react";
import { useProducts } from "@/hooks";
import { useDataProducts } from "@/hooks";
import { useDataCategory } from "@/hooks";
import { IconCircleCheck } from "@tabler/icons-react";

export const FrmProduct = ({ id }: { id: string }) => {
  const { getProductById, product: dataProduct } = useDataProducts();
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
    category: "",
    createdAt: new Date(),
  });

  const radius = "sm";

  const handleAddProduct = () => {
    if (id) {
      editProduct(id, product);
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
      category: "",
      createdAt: new Date(),
    });
  };

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    if (id) {
      getProductById(id);
    }
  }, [id]);

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
        category: dataProduct.category,
        createdAt: dataProduct.createdAt,
      });
    }
  }, [dataProduct]);

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        router.push("/admin/productos");
      }, 2000);
    }
  }, [message]);

  return (
    <>
      {loading && (
        <div className="flex gap-2 py-2 items-center">
          <Spinner />
          <h3>Agregando producto...</h3>
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
            arial-label="Precio"
            disabled={loading}
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
            disabled={loading}
            label="Descuento"
            aria-label="Descuento"
            placeholder="discount"
            value={product.discount.toString()}
            onChange={(e) =>
              setProduct({ ...product, discount: parseInt(e.target.value) })
            }
          />
        </div>
        <div className="flex gap-2">
          <Button
            color="primary"
            onClick={handleAddProduct}
            radius={radius}
            disabled={loading}
          >
            {id ? "Guardar cambios" : "Agregar"}
          </Button>
          <Button
            color="danger"
            onClick={handleClearProduct}
            radius={radius}
            variant="ghost"
          >
            Cancelar
          </Button>
        </div>
      </div>
    </>
  );
};
