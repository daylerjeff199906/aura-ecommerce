import { Button, Divider } from "@nextui-org/react";
import {
  IconX,
  IconShoppingCart,
  IconShoppingCartOff,
} from "@tabler/icons-react";
import { IProducts } from "@/types";

export const DrawerShopCart = ({
  isOpen,
  setOpen,
  lisProducts,
}: {
  isOpen: boolean;
  setOpen?: (value: boolean) => void;
  lisProducts?: IProducts[];
}) => {
  const drawerClasses = `fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform ${
    isOpen ? "translate-x-0" : "translate-x-full"
  } bg-white w-80 dark:bg-gray-800`;

  const overlayClasses = `fixed top-0 right-0 bottom-0 left-0 z-50 transition-opacity ${
    isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
  } bg-black`;

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
        <div>
          {lisProducts &&
            (lisProducts?.length > 0 ? (
              <></>
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
      </div>
    </div>
  );
};
