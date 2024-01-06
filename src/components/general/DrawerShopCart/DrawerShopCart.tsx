import { Button, Divider, Image, Link } from "@nextui-org/react";
import {
  IconX,
  IconShoppingCart,
  IconShoppingCartOff,
  IconTrash,
} from "@tabler/icons-react";
import { IProducts } from "@/types";

export const DrawerShopCart = ({
  isOpen,
  setOpen,
  lisProducts,
  deleteProduct,
}: {
  isOpen: boolean;
  setOpen?: (value: boolean) => void;
  lisProducts?: IProducts[];
  deleteProduct?: (id: string) => void;
}) => {
  const drawerClasses = `fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform ${
    isOpen ? "translate-x-0" : "translate-x-full"
  } bg-white w-80 dark:bg-gray-800`;

  const overlayClasses = `fixed top-0 right-0 bottom-0 left-0 z-50 transition-opacity ${
    isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
  } bg-black`;

  const totalPrice = lisProducts?.reduce(
    (acc, product) => acc + Number(product.price),
    0
  );

  return (
    <div>
      <div
        className={overlayClasses}
        onClick={() => setOpen && setOpen(false)}
      />
      <div
        id="drawer-right-example"
        className={drawerClasses}
        arial-aria-labelledby="drawer-right-label"
      >
        <div className="flex justify-between gap-6">
          <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
            <IconShoppingCart className="mr-2" />
            Shoppping Cart
          </h5>
          <Button
            variant="light"
            size="sm"
            isIconOnly
            onClick={() => setOpen && setOpen(false)}
          >
            <IconX />
          </Button>
        </div>
        <Divider />
        {/** Lista de productos en carrito */}
        <div className="flex-grow overflow-y-auto">
          {lisProducts &&
            (lisProducts?.length > 0 ? (
              <>
                {lisProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between py-4"
                  >
                    <div className="flex items-center gap-4">
                      <Image
                        src={product?.image}
                        alt={product.name}
                        className="h-16 w-20 object-cover"
                        removeWrapper={true}
                        radius="sm"
                      />
                      <div>
                        <h5 className="text-sm font-semibold line-clamp-1 mb-1">
                          {product.name}
                        </h5>
                        <p className="text-base text-gray-500 font-semibold">
                          s/. {product.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="light"
                        size="sm"
                        isIconOnly
                        onClick={() =>
                          deleteProduct && deleteProduct(product.id)
                        }
                      >
                        <IconTrash stroke={1} />
                      </Button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="py-6 space-y-4 text-center">
                <div className="flex items-center justify-center">
                  <IconShoppingCartOff
                    className=" text-gray-400 "
                    size={132}
                    stroke={0.7}
                  />
                </div>
                <h3 className="text-sm text-zinc-600 font-medium">
                  No hay productos en el carrito
                </h3>
              </div>
            ))}
        </div>
        {/** Total y acciones */}
        <Divider />
        <div className="py-4 space-y-3">
          <h3 className="text-sm">
            Total a pagar:
            <span className="text-lg font-semibold ml-4">s/. {totalPrice}</span>
          </h3>
          <Button
            radius="none"
            variant="ghost"
            color="danger"
            fullWidth
            as={Link}
            href="/carrito"
          >
            Adquirir producto(s)
          </Button>
        </div>
      </div>
    </div>
  );
};
