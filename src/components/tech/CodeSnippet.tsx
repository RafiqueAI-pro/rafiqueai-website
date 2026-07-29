interface CodeSnippetProps {
  code?: string;
  language?: string;
  position?: string;
  className?: string;
}

export default function CodeSnippet({ 
  code = `const rafique = {\n  tech: "inteligente",\n  future: true\n};`,
  language = "typescript",
  position = "",
  className = ""
}: CodeSnippetProps) {
  return (
    <div className={`absolute ${position} pointer-events-none z-0 w-80 opacity-[0.07] hover:opacity-[0.12] transition-opacity duration-500 ${className}`}>
      <div className="bg-rafique-dark/80 backdrop-blur-sm rounded-lg border border-rafique-light/10 overflow-hidden">
        {/* Header estilo terminal */}
        <div className="flex items-center gap-2 px-4 py-2 bg-rafique-dark/90 border-b border-rafique-light/10">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
          <span className="ml-2 text-xs text-rafique-cream/50 font-mono">{language}</span>
        </div>
        {/* Code content */}
        <pre className="p-4 text-xs font-mono text-rafique-cream/70 overflow-hidden">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
