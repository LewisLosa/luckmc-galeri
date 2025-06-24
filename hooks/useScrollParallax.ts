// hooks/useScrollParallax.ts
import { useEffect, useState } from "react";

export function useScrollParallax(multiplier: number = 1) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffset(scrollY * multiplier);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [multiplier]);

  return offset;
}
