"use client";
import { useState, useEffect } from "react";
import auth from "@/firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Input, Spinner } from "@nextui-org/react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null as string | null);
  const [isVisible, setIsVisible] = useState(false);

  //   const validateEmail = (value: string) =>
  //     value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = async () => {
    setLoading(true);
    try {
      // Iniciar sesión con Firebase Auth
      // Puedes usar también createUserWithEmailAndPassword para el registro
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      console.log("Inicio de sesión exitoso");
    } catch (error) {
      setLoading(false);
      setError("Error al iniciar sesión");
    }
  };

  const clearError = () => setError(null);

  useEffect(() => {
    const timer = setTimeout(clearError, 5000);
    return () => clearTimeout(timer);
  }, [error]);

  return (
    <div className="w-full h-screen">
      <div className="flex items-center justify-center h-full p-4">
        <div className="w-full max-w-md p-4 sm:p-6 border border-slate-300 rounded-lg">
          <h1 className="text-2xl font-semibold mb-5">Inicia sesión</h1>
          {loading && (
            <div className="flex w-full items-center justify-center py-3">
              <Spinner color="primary" />
            </div>
          )}
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="space-y-4">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onClear={() => setEmail("")}
              placeholder="Correo electrónico"
              radius="sm"
              isClearable
            />
            <Input
              type={isVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              radius="sm"
              endContent={
                <Button
                  variant="light"
                  onClick={toggleVisibility}
                  isIconOnly
                >
                  {isVisible ? <IconEyeOff /> : <IconEye />}
                </Button>
              }
            />
            <Button
              onClick={handleLogin}
              fullWidth
              variant="ghost"
              color="danger"
              radius="sm"
            >
              Iniciar sesión
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
