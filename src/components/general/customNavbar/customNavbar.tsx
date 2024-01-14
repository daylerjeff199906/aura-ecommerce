"use client";
import { useState } from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  Link,
  NavbarMenu,
  NavbarMenuItem,
  Badge,
} from "@nextui-org/react";
import { useLogicShopCart } from "@/providers";
import { IconShoppingCart, IconHeart } from "@tabler/icons-react";
import { DrawerShopCart } from "..";

const optionsNavbar = [
  { name: "Home", href: "/", subItems: [] },
  { name: "Productos", href: "/productos", subItems: [] },
  { name: "Promociones", href: "/promociones", subItems: [] },
  { name: "Contáctanos", href: "/contact", subItems: [] },
];

export const CustomNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { listProducts, removeToCart } = useLogicShopCart();

  return (
    <div className="fixed z-50 top-0 right-0 left-0">
      <div className="bg-pink-500 px-4 py-2">
        <h1 className="text-sm font-semibold text-white line-clamp-1 text-center">
          Hasta 50% de descuento en productos seleccionados
        </h1>
      </div>
      <Navbar
        maxWidth="2xl"
        isBlurred={false}
        className="z-50"
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="lg:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavbarContent>
          <NavbarBrand>
            <Link href="/" color="foreground">
              <h1 className="font-bold text-3xl">Aura</h1>
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4 " justify="center">
          {optionsNavbar.map((option) => (
            <NavbarItem key={option.name}>
              <Link href={option.href} color="foreground">
                {option.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem key="shopping-cart">
            <Button
              isIconOnly
              variant="light"
              onClick={() => setIsDrawerOpen(true)}
            >
              <Badge
                color="danger"
                content={listProducts?.length}
                isInvisible={listProducts?.length === 0}
              >
                <IconShoppingCart />
              </Badge>
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {optionsNavbar.map((option, index) => (
            <NavbarMenuItem key={index}>
              <Link
                href={option.href}
                className="text-base w-full"
                color="foreground"
              >
                {option.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      <DrawerShopCart
        isOpen={isDrawerOpen}
        setOpen={setIsDrawerOpen}
        lisProducts={listProducts ?? []}
        deleteProduct={removeToCart}
      />
    </div>
  );
};
