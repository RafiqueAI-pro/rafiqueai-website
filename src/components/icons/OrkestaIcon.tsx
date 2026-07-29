import { cn } from "@/lib/utils";
import React from "react";

const OrkestaIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={cn("h-12 w-12", className)}
    >
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
};
export default OrkestaIcon;
