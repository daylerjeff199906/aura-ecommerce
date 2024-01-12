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
  Tooltip,
} from "@nextui-org/react";
import { useAuth } from "@/providers";
import { IconLogout, IconHeart } from "@tabler/icons-react";

export const NavbarAdmin = () => {
  const { handleLogout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Navbar
      maxWidth="2xl"
      isBlurred={false}
      className="z-50"
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent>
        <NavbarBrand>
          <Link href="/" color="foreground">
            <h1 className="font-bold text-xl">Dashboard</h1>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem key="shopping-cart">
          <Tooltip content={"Cerrar sesión"} showArrow>
            <Button isIconOnly variant="light" onClick={handleLogout}>
              <IconLogout />
            </Button>
          </Tooltip>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
