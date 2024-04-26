"use client";
// hooks/useAOS.ts
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const useAOS = (): void => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    // Adding refresh might be redundant since init handles it usually
  }, []);

  return; // Explicitly indicate return for clarity, even though it's void
};
