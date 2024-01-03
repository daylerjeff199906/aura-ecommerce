import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

const optionsNavbar = [
  { name: "Home", href: "/", subItems: [] },
  { name: "Catálogo", href: "/catalogo", subItems: [] },
  { name: "Contáctanos", href: "/contact", subItems: [] },
];

export const CustomNavbar = () => {
  return (
    <Navbar>
      <NavbarBrand>NextUI</NavbarBrand>
      <NavbarContent>
        {optionsNavbar.map((option) => (
          <NavbarItem key={option.name}>
            <Link href={option.href}>{option.name}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
};
