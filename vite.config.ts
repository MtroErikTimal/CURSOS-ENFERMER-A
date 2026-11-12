import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  // GitHub Pages publica el proyecto dentro de /CURSOS-ENFERMER-A/.
  // Vercel sirve la vista previa desde la raíz del dominio.
  base: process.env.VERCEL ? "/" : mode === "production" ? "/CURSOS-ENFERMER-A/" : "/",
  plugins: [react()],
}));