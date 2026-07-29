"use client";

import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
  theme?: "orkesta" | "cadia" | "ascenda" | "rafique";
}

const themeClasses = {
  orkesta: {
    card: "bg-orkesta-dark2/50 backdrop-blur-sm border-orkesta-light/10 hover:border-orkesta-accent/30 hover:bg-orkesta-dark2/80",
    iconContainer: "bg-orkesta-accent/10 group-hover:bg-orkesta-accent/20",
    icon: "text-orkesta-accent",
    title: "text-orkesta-light",
    description: "text-orkesta-light/80",
    accentLine: "bg-orkesta-accent",
  },
  cadia: {
    card: "bg-cadia-dark/50 backdrop-blur-sm border-cadia-cream/10 hover:border-cadia-primary/30 hover:bg-cadia-dark/80",
    iconContainer: "bg-cadia-primary/10 group-hover:bg-cadia-primary/20",
    icon: "text-cadia-primary",
    title: "text-cadia-cream",
    description: "text-cadia-cream/80",
    accentLine: "bg-cadia-primary",
  },
  ascenda: {
    card: "bg-ascenda-navy/50 backdrop-blur-sm border-ascenda-mint/10 hover:border-ascenda-primary/30 hover:bg-ascenda-navy/80",
    iconContainer: "bg-ascenda-primary/10 group-hover:bg-ascenda-primary/20",
    icon: "text-ascenda-primary",
    title: "text-ascenda-cream",
    description: "text-ascenda-cream/80",
    accentLine: "bg-ascenda-primary",
  },
  rafique: {
    card: "bg-rafique-dark/50 backdrop-blur-sm border-rafique-light/10 hover:border-rafique-blue/30 hover:bg-rafique-dark/80",
    iconContainer: "bg-rafique-blue/10 group-hover:bg-rafique-blue/20",
    icon: "text-rafique-blue",
    title: "text-rafique-cream",
    description: "text-rafique-cream/80",
    accentLine: "bg-rafique-blue",
  },
};

const FeatureCard = ({ icon, title, description, index = 0, theme = "orkesta" }: FeatureCardProps) => {
  const classes = themeClasses[theme];
  
  return (
    <article
      className={`group relative border rounded-2xl p-8 transition-[transform,box-shadow] duration-500 ease-editorial [perspective:1000px] [transform-style:preserve-3d] ${classes.card} hover:[transform:rotateX(2deg)_rotateY(-2deg)_translateZ(10px)] hover:shadow-[0_20px_60px_-15px_rgba(51,118,225,0.15),0_10px_30px_-10px_rgba(51,118,225,0.1)] focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-rafique-blue`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      tabIndex={0}
      role="article"
      aria-labelledby={`feature-title-${index}`}
    >
      {/* Icon Container with float animation */}
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500 ${classes.iconContainer} group-hover:animate-float`}>
        <div className={`w-7 h-7 ${classes.icon}`}>
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 id={`feature-title-${index}`} className={`font-manrope text-2xl font-semibold mb-4 ${classes.title}`}>
        {title}
      </h3>
      <p className={`font-inter leading-relaxed ${classes.description}`}>
        {description}
      </p>

      {/* Hover Accent Line */}
      <div className={`absolute bottom-0 left-8 right-8 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full ${classes.accentLine}`} />
    </article>
  );
};

export default FeatureCard;
