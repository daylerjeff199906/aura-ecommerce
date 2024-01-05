"use client";
import { Divider, Input, Link } from "@nextui-org/react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
} from "@tabler/icons-react";

export const Footer = () => {
  return (
    <section className="container text-center space-y-4">
      <div className="py-6 justify-center">
        <h1>
          SUBSCRÍBETE A NUESTRA NEWSLETTER Y ENTÉRATE DE NUESTRAS NOVEDADES.
        </h1>
        <div className="flex justify-center py-4">
          <Input
            placeholder="Email"
            variant="bordered"
            className="max-w-72"
            radius="none"
          />
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <Link
          href="https://www.facebook.com/aurora.ve.1"
          target="_blank"
          className="text-pink-500 "
        >
          <IconBrandFacebook size={42} />
        </Link>
        <Link
          href="https://www.instagram.com/aurora.ve/"
          target="_blank"
          className="text-pink-500 "
        >
          <IconBrandInstagram size={42} />
        </Link>
        <Link
          href="https://www.tiktok.com/@aurora_ve"
          target="_blank"
          className="text-pink-500 "
        >
          <IconBrandTiktok size={42} />
        </Link>
      </div>
      <div className="space-x-3 pt-6">
        <Link href="/politicas-de-privacidad">Home</Link>
        <Link href="/politicas-de-privacidad">Nuestros Productos</Link>
        <Link href="/politicas-de-privacidad">Promociones</Link>
        <Link href="/politicas-de-privacidad">Políticas de privacidad</Link>
      </div>
      <Divider />
      <h1 className="pt-4">
        Aurora {new Date().getFullYear()} - Todos los derechos reservados.
      </h1>
    </section>
  );
};
