import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

import { IconShoppingCart, IconHeart } from "@tabler/icons-react";

const optionsNavbar = [
  { name: "Home", href: "/", subItems: [] },
  { name: "Productos", href: "/productos", subItems: [] },
  { name: "Contáctanos", href: "/contact", subItems: [] },
];

const iconsOptions = [
  { name: "favoritos", href: "/", icon: <IconHeart /> },
  { name: "carrito", href: "/", icon: <IconShoppingCart /> },
];

export const CustomNavbar = () => {
  return (
    <Navbar maxWidth="2xl" isBlurred={false}>
      <NavbarContent>
        <NavbarBrand>
          <h1 className="font-bold text-3xl">Aurora</h1>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {optionsNavbar.map((option) => (
          <NavbarItem key={option.name}>
            <Link href={option.href}>{option.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {iconsOptions.map((option) => (
          <NavbarItem key={option.name}>
            <Link href={option.href}>{option.icon}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};
