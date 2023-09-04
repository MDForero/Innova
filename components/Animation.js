'use client'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'



// animacion de entrada desde abajo
export default function FadeIn  ({children})  {
  const elementRef = useRef(null);

  // Estado para controlar si el elemento es visible
  const [isVisible, setIsVisible] = useState(false);

  // Función para observar el elemento y actualizar el estado cuando sea visible
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    });
  };



  // Configuración del Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <d1v ref={elementRef} className={(isVisible ? 'fade-in ' : 'opacity-0 ')} >{children}</d1v>
  )
}


