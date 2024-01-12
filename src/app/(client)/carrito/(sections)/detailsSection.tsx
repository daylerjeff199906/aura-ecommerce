import { BreadcrumbItem, Breadcrumbs, Divider, Image } from "@nextui-org/react";
import { useLogicShopCart } from "@/providers";

const headerTable = [
  {
    label: "Producto",
    minWidth: 240,
  },
  {
    label: "Cantidad",
    minWidth: 100,
  },
  {
    label: "Precio",
    minWidth: 100,
  },
  {
    label: "Total",
    minWidth: 100,
  },
  {
    label: "",
    minWidth: 100,
  },
];

export const DetailsSection = () => {
  const { listProducts } = useLogicShopCart();
  return (
    <section className="container max-w-5xl">
      <div className="pt-12 text-center">
        <h1 className="text-3xl font-medium">Shopping Cart</h1>
        <h3 className="text-sm text-pink-500">Shop</h3>
      </div>
      <div className="">
        <Breadcrumbs className="text-sm">
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>Tu carrito</BreadcrumbItem>
        </Breadcrumbs>
        <div className="py-6 block sm:flex gap-4 w-full">
          <div className="w-full">
            <div className="flex gap-2 w-full">
              {headerTable.map((item, index) => (
                <div
                  key={index}
                  className={`text-center min-w-[${item.minWidth}px] w-full`}
                >
                  {item.label}
                </div>
              ))}
            </div>
            <Divider />
            {listProducts?.map((item, index) => (
              <div key={index} className="flex gap-2 w-full items-center">
                <div className=" min-w-[240px] w-full flex gap-4 items-center">
                  <Image
                    src={item?.image}
                    alt={item?.name}
                    className="object-cover w-24 h-24"
                    removeWrapper
                  />
                  <div className="text-sm">{item.name}</div>
                </div>
                <div className="text-center min-w-[100px] w-full">1</div>
                <div className="text-center min-w-[100px] w-full">
                  s/. {item.price}
                </div>
                <div className="text-center min-w-[100px] w-full">
                  s/. {item.price}
                </div>
                <div className="text-center min-w-[100px] w-full">
                  <button className="btn btn-sm btn-error">Eliminar</button>
                </div>
              </div>
            ))}
          </div>
          <aside className="w-full sm:w-96 bg-zinc-100 h-fit">
            <div className="p-4 space-y-2">
              <h2>Total</h2>
              <Divider />
              <h4>
                Subtotal: <span>0</span>
              </h4>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
