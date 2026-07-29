// components/AnimatedAuroraBackground.tsx
const AnimatedAuroraBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-product-ascenda/10 rounded-full filter blur-3xl opacity-50 
                   animate-aurora-1"
      />
      <div
        className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-product-orkesta/10 rounded-full filter blur-3xl opacity-50 
                   animate-aurora-2"
      />
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-rafique-highlight/10 rounded-full filter blur-3xl opacity-50
                   animate-aurora-3"
      />
    </div>
  );
};

export default AnimatedAuroraBackground;