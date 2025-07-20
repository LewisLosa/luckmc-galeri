"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      ref={heroRef}
      style={{ opacity, translateY }}
      className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden"
    >

      {/* hero text */}
      <h1 className="drop-shadow-[0_0_128px_rgba(35,220,95,0.7)] relative z-10 text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter bg-gradient-to-r from-emerald-300 via-green-500 to-emerald-600 bg-clip-text text-transparent">
        LuckMC
      </h1>

      {/* cok guzel emojiler */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl -rotate-12 opacity-50 z-10">
        🍀
      </div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 text-5xl md:text-6xl rotate-12 opacity-50 z-10">
        🍀
      </div>

      {/* hero alt yazi */}
      <p className="mt-4 text-lg md:text-xl max-w-xl text-neutral-600 dark:text-neutral-300 z-10">
        İşte, aradığın Minecraft sunucusu.
      </p>

      {/* vignette efekt */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_35%,_rgba(0,0,0,0.6)_150%)]  dark:bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.7)_100%)]"></div>
    </motion.div>
  );
}
