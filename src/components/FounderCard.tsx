"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface FounderCardProps {
  name: string;
  role?: string;
  description?: string;
  initials: string;
  links?: { label: string; href: string }[];
  index?: number;
}

const FounderCard: React.FC<FounderCardProps> = ({
  name,
  role,
  description,
  initials,
  links = [],
  index = 0,
}) => {
  return (
    <article
      className={cn(
        "group relative overflow-hidden",
        "bg-rafique-dark/50 border border-rafique-light/10",
        "rounded-2xl p-8 md:p-10",
        "transition-all duration-500 ease-editorial",
        "hover:border-rafique-light/20 hover:bg-rafique-dark/70",
        "animate-fade-in-up"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Avatar Placeholder */}
      <div className="mb-8 flex justify-center md:justify-start">
        <div
          className={cn(
            "flex h-24 w-24 items-center justify-center rounded-full",
            "bg-rafique-blue/20 text-rafique-cream",
            "text-3xl font-manrope font-bold",
            "transition-transform duration-500 ease-editorial",
            "group-hover:scale-105"
          )}
          aria-label={`Avatar de ${name}`}
        >
          {initials}
        </div>
      </div>

      {/* Name */}
      <h3 className="font-manrope text-3xl font-semibold text-rafique-cream mb-2">
        {name}
      </h3>

      {/* Role */}
      {role && (
        <p className="font-manrope text-rafique-light/80 text-lg mb-4">{role}</p>
      )}

      {/* Description */}
      {description && (
        <p className="font-inter text-rafique-cream/70 text-base leading-relaxed mb-6">
          {description}
        </p>
      )}

      {/* Links */}
      {links.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-auto">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className={cn(
                "inline-flex items-center gap-2",
                "px-4 py-2 rounded-full",
                "border border-rafique-light/20",
                "text-sm font-manrope text-rafique-cream/70",
                "transition-all duration-300 ease-editorial",
                "hover:border-rafique-blue hover:text-rafique-blue",
                "focus:outline-none focus:ring-2 focus:ring-rafique-blue focus:ring-offset-2 focus:ring-offset-rafique-dark"
              )}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.label}
              {link.href.startsWith("http") && (
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              )}
            </a>
          ))}
        </div>
      )}
    </article>
  );
};

export default FounderCard;
