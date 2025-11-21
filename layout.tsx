import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Fila de Pacientes",
  description: "Sistema de chamada de pacientes para UBS/CAPS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-900 text-white">
        {children}
      </body>
    </html>
  );
}
