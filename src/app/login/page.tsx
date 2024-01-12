"use client";
import { useState } from "react";
import auth from "@/firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      // Iniciar sesión con Firebase Auth
      // Puedes usar también createUserWithEmailAndPassword para el registro
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Inicio de sesión exitoso");
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }
  };

  return (
    <div>
      <h1>Página de inicio de sesión</h1>
      <div className="flex flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
    </div>
  );
}
