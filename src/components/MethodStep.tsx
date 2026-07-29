"use client";

interface MethodStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const MethodStep = ({ number, title, description, isLast = false }: MethodStepProps) => {
  return (
    <article className="relative flex flex-col items-center text-center group" tabIndex={0} role="article" aria-labelledby={`method-step-title-${number}`}>
      {/* Connection Line */}
      {!isLast && (
        <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-orkesta-light/10 z-0" aria-hidden="true">
          <div className="h-full bg-orkesta-accent/30 w-0 group-hover:w-full transition-all duration-700" />
        </div>
      )}

      {/* Step Number */}
      <div className="relative z-10 w-20 h-20 rounded-full bg-orkesta-dark2 border-2 border-orkesta-light/20 flex items-center justify-center mb-6 group-hover:border-orkesta-accent/50 transition-colors duration-500" aria-label={`Passo ${number}`}>
        <span className="font-manrope text-4xl font-bold text-orkesta-accent/80 group-hover:text-orkesta-accent transition-colors duration-500">
          {number}
        </span>
      </div>

      {/* Content */}
      <h3 id={`method-step-title-${number}`} className="font-manrope text-xl font-semibold text-orkesta-light mb-3">
        {title}
      </h3>
      <p className="font-inter text-orkesta-light/60 text-sm max-w-xs leading-relaxed">
        {description}
      </p>
    </article>
  );
};

export default MethodStep;
