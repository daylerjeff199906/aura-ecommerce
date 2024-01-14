import {
  Button,
  Divider,
  Link,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";

import {
  IconX,
  IconLayoutDashboard,
  IconShoppingBag,
  IconCategory2,
  IconCarouselHorizontal,
} from "@tabler/icons-react";

const itemsMenu = [
  {
    id: "home",
    nameOption: "Dashboard",
    hrefLink: "/admin",
    icon: <IconLayoutDashboard />,
    subItems: [],
  },
  {
    id: "products",
    nameOption: "Products",
    hrefLink: null,
    icon: <IconShoppingBag />,
    subItems: [
      {
        id: "products-list",
        nameOption: "Lista de productos",
        url: "/admin/productos",
      },
      {
        id: "products-create",
        nameOption: "Crear producto",
        url: "/admin/productos/create",
      },
    ],
  },
  {
    id: "categories",
    nameOption: "Categories",
    hrefLink: null,
    icon: <IconCategory2 />,
    subItems: [
      {
        id: "categories-list",
        nameOption: "Lista de categorias",
        url: "/admin/categorias",
      },
      {
        id: "categories-create",
        nameOption: "Crear categoria",
        url: "/admin/categorias/create",
      },
    ],
  },
  {
    id: "carousel",
    nameOption: "Carousel",
    hrefLink: "/admin/slider",
    icon: <IconCarouselHorizontal />,
    subItems: [],
  },
];

export const DrawerMenuAdmin = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen?: (value: boolean) => void;
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
            Menu
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
        {/** contenido */}
        <div className="flex flex-col gap-4 mt-4">
          {" "}
          <div className="w-full">
            {itemsMenu?.map((item, index) =>
              item?.subItems?.length > 0 ? (
                <Accordion
                  key={index}
                  disableAnimation
                  className="w-full"
                  itemClasses={{
                    base: "py-0 mx-2 w-full",
                    title: "font-normal text-small",
                    trigger: "data-[hover=true]:bg-default-100 h-14 w-full",
                    content: "w-full",
                  }}
                >
                  <AccordionItem
                    key={item?.id}
                    title={item?.nameOption}
                    startContent={item?.icon}
                  >
                    <div className="">
                      {item?.subItems?.map((subItem, index) => (
                        <Button
                          as={Link}
                          href={subItem?.url || ""}
                          key={index}
                          fullWidth
                          className="flex justify-start"
                          variant="light"
                          radius="none"
                        >
                          {subItem?.nameOption}
                        </Button>
                      ))}
                    </div>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Button
                  key={index}
                  as={Link}
                  href={item?.hrefLink || ""}
                  fullWidth
                  variant="light"
                  className="flex justify-start"
                  startContent={item?.icon}
                  radius="none"
                >
                  {item?.nameOption}
                </Button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
