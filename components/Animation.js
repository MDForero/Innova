'use client'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'

// animacion de entrada desde la derecha
export const MoveRight = ({children}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    if (elementRef.current) {
      observer.observe(elementRef.current);
    } 
    return () => observer.disconnect();
  }, []);

  return (
    <d1v ref={elementRef}  className={isVisible ? 'move-right ': 'opacity-0 '} >{children}</d1v>
  )
}

// animacion de entrada desde abajo
export const FadeIn = ({ children }) => {
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
    <d1v ref={elementRef} className={(isVisible ? 'fade-in ' : 'opacity-0 ') + children.props.className} >{children}</d1v>
  )
}


// animacion de entrada desde la izquierda
export const MoveLeft = ({ children }) => {
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
    <d1v ref={elementRef} className={(isVisible ? 'move-left ' : 'opacity-0 ') + children.props.className} >{children}</d1v>
  )
}

export const ZoomIn = ({ children }) => {
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
    <d1v ref={elementRef} className={(isVisible ? 'zoom-in ' : 'opacity-0 ') + children.props.className} >{children}</d1v>
  )
}