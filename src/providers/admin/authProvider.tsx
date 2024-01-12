// PrivateRoute.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
// import auth from "./auth"; // Importa tu módulo auth

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (user) => {
  //       if (!user) {
  //         router.push("/login"); // Redirige a la página de inicio de sesión si el usuario no está autenticado
  //       }
  //     });

  //     return () => unsubscribe();
  //   }, [router]);

  return <>{children}</>;
};
