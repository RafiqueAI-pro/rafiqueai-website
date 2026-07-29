// /components/ProductCard.tsx

import React, { ReactNode } from 'react';

// Definindo as propriedades que o componente aceitará
interface ProductCardProps {
  // Ícone a ser exibido. Pode ser um componente SVG ou um <img>
  icon: ReactNode;
  // Título do produto
  title: string;
  // Breve descrição do produto
  description: string;
  // Classe de cor do Tailwind para o brilho (ex: 'shadow-ascenda/30')
  glowColorClass: string;
  // URL para onde o card deve levar ao ser clicado
  href: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  icon,
  title,
  description,
  glowColorClass,
  href,
}) => {
  return (
    // 'group' é essencial para que o hover no container ative estilos nos elementos filhos.
    // 'perspective' define a profundidade do cenário 3D.
    <div style={{ perspective: '1000px' }} className="group">
      <a
        href={href}
        // O container interno que aplica a transformação 3D e a transição.
        // '[transform-style:preserve-3d]' diz ao navegador para tratar os filhos como elementos 3D.
        className={`
          block h-full w-full rounded-xl border border-white/10 bg-neutral-900/50 p-8
          backdrop-blur-sm transition-all duration-500 ease-in-out
          [transform-style:preserve-3d]
          group-hover:[transform:rotateY(10deg)_rotateX(5deg)]
          group-hover:shadow-2xl ${glowColorClass}
        `}
      >
        <div 
          // Este div aplica uma transformação inversa para manter o conteúdo 'plano' e legível.
          // O conteúdo não se inclinará com o card, criando um efeito de profundidade.
          className="transition-transform duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[transform:translateZ(40px)]"
        >
          {/* Ícone do produto */}
          <div className="mb-4 h-16 w-16 transition-transform duration-500 ease-in-out group-hover:scale-110">
            {icon}
          </div>

          {/* Título do produto */}
          <h3 className="mb-2 text-2xl font-bold text-neutral-100">
            {title}
          </h3>

          {/* Descrição do produto */}
          <p className="text-neutral-400">
            {description}
          </p>

          {/* Link "Saiba mais" */}
          <div className="mt-6 font-semibold text-white">
            Saiba mais <span className="transition-transform duration-300 inline-block group-hover:translate-x-1">&rarr;</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
