"use client";

import React, { useState, useEffect } from "react";
import styles from "./Banner.module.css"

export const Banner: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {open && (
        <div
          className="fixed inset-x-0 top-0 bg-[var(--blue)] p-5 drop-shadow-2xl flex gap-4 flex-wrap md:flex-nowrap text-center items-center justify-center md:justify-between"
          style={{
            transition: "opacity 0.2s ease, transform 0.2s ease",
            opacity: open ? 1 : 0,
            transform: open ? "scale(1)" : "scale(0.9)",
            height: "50px",
            zIndex: 50, 
          }}
        >
          <div className={styles["home__promo-banner"]}>
            ¡Aprovecha el 20% de descuento en todos nuestros productos! ¡Solo por tiempo limitado!
            <a href="/products" className="text-[var(--yellow)] whitespace-nowrap hover:underline ml-3 ">
              ver más
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
