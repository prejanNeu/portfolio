"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  const [hidden, setHidden] = useState(true);
  const [isPointer, setIsPointer] = useState(false);

  // Keep track of coordinates without triggering React state re-renders
  const mouseCoords = useRef({ x: 0, y: 0 });
  const dotCoords = useRef({ x: 0, y: 0 });
  const ringCoords = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    // Only run on devices with fine pointer (mouse)
    const isTouchDevice = () => {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
      );
    };

    if (isTouchDevice()) {
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHidden(false);

    const handleMouseMove = (e: MouseEvent) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") !== null || 
        target.closest("button") !== null ||
        target.classList.contains("interactive-hover");
      
      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Animation loop using requestAnimationFrame (60/120fps)
    const animateCursor = () => {
      const targetX = mouseCoords.current.x;
      const targetY = mouseCoords.current.y;

      // Linear interpolation (lerp) for smooth trailing
      dotCoords.current.x = targetX;
      dotCoords.current.y = targetY;

      ringCoords.current.x += (targetX - ringCoords.current.x) * 0.15;
      ringCoords.current.y += (targetY - ringCoords.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotCoords.current.x}px, ${dotCoords.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringCoords.current.x}px, ${ringCoords.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestRef.current = requestAnimationFrame(animateCursor);
    };

    requestRef.current = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${isPointer ? "hovered" : ""}`} />
    </>
  );
}
