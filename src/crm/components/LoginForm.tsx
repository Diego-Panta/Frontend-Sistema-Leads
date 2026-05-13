// src/crm/components/LoginForm.tsx

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Lock, LogIn, AlertCircle, Eye, EyeOff } from "lucide-react";
import { BrandMark } from "@/components/core/BrandMark";
import { siteShortName } from "@/shared/site";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Por ahora solo simulamos la autenticación
    // TODO: Conectar con el backend después
    setTimeout(() => {
      if (email === "admin@example.com" && password === "password") {
        // Simular login exitoso
        localStorage.setItem("auth_token", "fake_token");
        localStorage.setItem("user", JSON.stringify({ name: "Administrador", email }));
        window.location.href = "/crm/dashboard";
      } else {
        setError("Credenciales incorrectas. Prueba con admin@example.com / password");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Card className="w-full max-w-md shadow-2xl border-[#BDBF65]/20">
      <CardHeader className="space-y-4 text-center">
        <div className="flex justify-center">
          <BrandMark iconSize={48} />
        </div>
        <CardTitle className="text-2xl font-bold text-[#2C312D]">
          Bienvenido a {siteShortName}
        </CardTitle>
        <CardDescription className="text-[#2C312D]/60">
          Ingresa tus credenciales para acceder al sistema
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {error && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 text-red-600 text-sm border border-red-200">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#2C312D]">
              Correo electrónico
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#2C312D]/40" />
              <Input
                id="email"
                type="email"
                placeholder="usuario@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 border-[#BDBF65]/30 focus:border-[#BDBF65] focus:ring-[#BDBF65]/20"
                required
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#2C312D]">
              Contraseña
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#2C312D]/40" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 pr-10 border-[#BDBF65]/30 focus:border-[#BDBF65] focus:ring-[#BDBF65]/20"
                required
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2C312D]/40 hover:text-[#BDBF65] transition-colors"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-[#2C312D]/60">
              <input type="checkbox" className="rounded border-[#BDBF65]/30" />
              Recordarme
            </label>
            <a
              href="#"
              className="text-sm text-[#BDBF65] hover:text-[#BDBF65]/80 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                // TODO: Implementar recuperación de contraseña
                alert("Funcionalidad en desarrollo");
              }}
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4">
          <Button
            type="submit"
            className="w-full bg-[#BDBF65] hover:bg-[#BDBF65]/90 text-[#2C312D] font-bold shadow-lg transition-all duration-300 hover:scale-[1.02]"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#2C312D] mr-2" />
                Iniciando sesión...
              </>
            ) : (
              <>
                <LogIn className="mr-2 h-4 w-4" />
                Iniciar Sesión
              </>
            )}
          </Button>

          <p className="text-center text-sm text-[#2C312D]/60">
            ¿No tienes una cuenta?{" "}
            <a
              href="/crm/register"
              className="text-[#BDBF65] hover:text-[#BDBF65]/80 font-medium transition-colors"
            >
              Regístrate aquí
            </a>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}