import { useEffect, useState, useContext, createContext } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import auth from "@/firebase/auth";

export const authContext = createContext<{
  handleLogout: () => void;
}>({
  handleLogout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login"); // Redirige a la página de inicio de sesión si el usuario no está autenticado
      }
    });
    return () => unsubscribe();
  }, [router]);

  // if (loading) return <div>Cargando...</div>;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <authContext.Provider
      value={{
        handleLogout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
