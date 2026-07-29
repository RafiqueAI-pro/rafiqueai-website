"use client";

import { useState } from "react";

interface ProductSwitcherProps {
  onSwitch: (target: "user" | "professional") => void;
  activeTarget: "user" | "professional";
}

const ProductSwitcher = ({ onSwitch, activeTarget }: ProductSwitcherProps) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-16" role="tablist" aria-label="Alternar entre visualizações de usuário e profissional">
      <button
        onClick={() => onSwitch("user")}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            onSwitch("professional");
          }
        }}
        className={`px-8 py-3 rounded-full font-manrope text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cadia-primary focus-visible:ring-offset-2 focus-visible:ring-offset-cadia-dark ${
          activeTarget === "user"
            ? "bg-cadia-primary text-cadia-dark"
            : "border border-cadia-primary text-cadia-primary hover:bg-cadia-primary/10"
        }`}
        aria-pressed={activeTarget === "user"}
        role="tab"
        aria-selected={activeTarget === "user"}
        tabIndex={activeTarget === "user" ? 0 : -1}
      >
        Para mim
      </button>
      <button
        onClick={() => onSwitch("professional")}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            onSwitch("user");
          }
        }}
        className={`px-8 py-3 rounded-full font-manrope text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cadia-primary focus-visible:ring-offset-2 focus-visible:ring-offset-cadia-dark ${
          activeTarget === "professional"
            ? "bg-cadia-primary text-cadia-dark"
            : "border border-cadia-primary text-cadia-primary hover:bg-cadia-primary/10"
        }`}
        aria-pressed={activeTarget === "professional"}
        role="tab"
        aria-selected={activeTarget === "professional"}
        tabIndex={activeTarget === "professional" ? 0 : -1}
      >
        Para profissionais
      </button>
    </div>
  );
};

export default ProductSwitcher;
