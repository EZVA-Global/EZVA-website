import { useState, useEffect } from "react";

export default function ScrollIndicator() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Si la distancia al techo es menor o igual a 10px, se considera "inicio de página"
      if (window.scrollY <= 10) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    // Escuchar el evento de scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Ejecutar una vez al montar por si la página ya carga con scroll previo
    handleScroll();

    // Limpiar el evento al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`absolute bottom-11 left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out ${
        isAtTop
          ? "opacity-100 scale-100 animate-bounce"
          : "opacity-0 scale-75 pointer-events-none"
      }`}
    >
      <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  );
}
