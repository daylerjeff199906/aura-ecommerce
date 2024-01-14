import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import Link from "next/link";

import {
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
    hrefLink: null,
    icon: <IconCarouselHorizontal />,
    subItems: [
      {
        id: "carousel-list",
        nameOption: "Lista de carousel",
        url: "/admin/sliders",
      },
      {
        id: "carousel-create",
        nameOption: "Crear carousel",
        url: "/admin/sliders/create",
      },
    ],
  },
];

export const SiderBarMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-6 ">
      <div className="w-64 py-4 hidden lg:block bg-white">
        <div className="flex flex-col gap-4">
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
      <div className="container p-4">{children}</div>
    </div>
  );
};
