"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.location.href = "/Login";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecionando para a tela de login...</p>
    </div>
  );
}
