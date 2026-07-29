# Plano de Refatoração Visual 3D - Rafique AI

## Visão Geral
**Objetivo:** Transformar o site de "simples/genérico" para "tecnológico, limpo e moderno" com elementos 3D sutis.

**Mantém:** Cores, conteúdo, estrutura de páginas, acessibilidade.

**Adiciona:** Profundidade 3D, motion design, elementos de "clean tech".

---

## Direção Visual: "Clean Tech 3D"

### Referências de Estilo
- **Apple**: Minimalismo, tipografia forte, espaçamento generoso
- **Stripe**: Elementos 3D sutis, gradientes controlados, motion suave
- **Linear**: Geometria limpa, sombras realistas

### O que NÃO usar (já proibido no briefing)
- ❌ Neon
- ❌ Glassmorphism excessivo
- ❌ Gradientes psicodélicos
- ❌ Partículas aleatórias
- ❌ Cyberpunk

### O que USAR
- ✅ Sombras 3D realistas (`box-shadow` com múltiplas camadas)
- ✅ `perspective()` + `rotateX/Y` para profundidade
- ✅ Geometria limpa (círculos, quadrados, linhas de grade)
- ✅ Motion sutil (parallax, translateY, scale)
- ✅ Blur sutil (`backdrop-filter`)

---

## Fases de Implementação

### FASE A: Background Tecnológico (Hero)
**Status:** ⏳ Pendente

**O que fazer:**
1. Criar `GeometricBackground.tsx` (grid 3D de perspectiva)
2. Adicionar ao `HeroSection.tsx`
3. Movimento: Parallax no scroll (8-12px)

**Especificações técnicas:**
```tsx
// Grid 3D sutil
<svg viewBox="0 0 1000 1000" className="absolute inset-0 opacity-[0.03]">
  <defs>
    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grid)" />
</svg>
```

**Cores:** `rafique-blue` com opacidade 0.03-0.05

---

### FASE B: Cards 3D (ProductCard + FeatureCard)
**Status:** ⏳ Pendente

**O que fazer:**
1. Atualizar `FeatureCard.tsx` com efeito 3D
2. Criar `ProductCard3D.tsx` (se necessário)
3. Adicionar sombras realistas e hover 3D

**Especificações técnicas:**
```css
/* Card 3D */
.card-3d {
  perspective: 1000px;
  transform-style: preserve-3d;
}

.card-3d:hover {
  transform: rotateX(2deg) rotateY(-2deg) translateZ(10px);
  box-shadow: 
    0 20px 60px -15px rgba(51, 118, 225, 0.15),
    0 10px 30px -10px rgba(51, 118, 225, 0.1);
}
```

**Ícones:** Flutuando com `animate-float` (translateY: 0 → -5px)

---

### FASE C: Tipografia e Espaçamento
**Status:** ⏳ Pendente

**O que fazer:**
1. Ajustar `letter-spacing` em headings Manrope
2. Adicionar `text-balance` em headlines
3. Aumentar espaçamento entre seções

**Especificações:**
- `letter-spacing: 0.02em` em `.font-manrope` headings
- `text-wrap: balance` via Tailwind (`text-balance`)
- `gap-32` ou `gap-40` entre seções
- Linhas decorativas: `h-px bg-rafique-light/10`

---

### FASE D: Elementos de "Tech Clean"
**Status:** ⏳ Pendente

**O que fazer:**
1. Criar `CodeSnippet.tsx` (decoração)
2. Criar `GeometricDecoration.tsx` (círculos concêntricos)
3. Adicionar badges de tecnologia

**Exemplo de CodeSnippet:**
```tsx
<div className="bg-rafique-dark/80 backdrop-blur-sm rounded-lg p-4 font-mono text-sm text-rafique-cream/70">
  <span className="text-rafique-blue">const</span> rafique = {'{'}
  <br />
  <span className="ml-4">tech: <span className="text-cadia-primary">"inteligente"</span>,</span>
  <br />
  <span className="ml-4">future: <span className="text-ascenda-primary">true</span></span>
  <br />
  {'}'};
</div>
```

---

### FASE E: Motion Design
**Status:** ⏳ Pendente

**O que fazer:**
1. Scroll reveal (Intersection Observer)
2. Hover states 3D
3. Botões com feedback tátil

**Especificações:**
- Scroll reveal: `opacity: 0 → 1`, `translateY: 20px → 0`
- Hover cards: `scale(1.02)` + `translateZ(10px)`
- Botões: `active: scale(0.98)`
- Nav links: Sublinhado animado (width: 0 → 100%)

---

### FASE F: Refinamento de Cores
**Status:** ⏳ Pendente

**O que fazer:**
1. Ajustar contraste para "pop" visual
2. Adicionar blur sutil em cards

**Especificações:**
- Títulos: `text-rafique-cream` (mais brilho)
- Texto: `text-rafique-cream/80`
- Cards: `bg-rafique-dark/80 backdrop-blur-sm`
- Accents: `rafique-blue` em hover

---

## Cronograma Sugerido

| Fase | Descrição | Tempo Estimado |
|------|-----------|----------------|
| A | Background Tecnológico | 1h |
| B | Cards 3D | 2h |
| C | Tipografia | 1h |
| D | Elementos Tech | 1.5h |
| E | Motion Design | 1.5h |
| F | Cores e Contraste | 1h |

**Total:** ~8h

---

## Arquivos que serão alterados

### Novos arquivos
- `src/components/hero/GeometricBackground.tsx`
- `src/components/tech/CodeSnippet.tsx`
- `src/components/tech/GeometricDecoration.tsx`
- `src/hooks/useScrollReveal.ts` (opcional)

### Arquivos alterados
- `src/components/FeatureCard.tsx`
- `src/components/sections/HeroSection.tsx`
- `src/app/globals.css`
- `tailwind.config.js` (se necessário)
- Todas as `page.tsx` (ajustes de espaçamento)

---

## Critérios de Sucesso

1. ✅ Site mantém identidade visual (cores Rafique)
2. ✅ Elementos 3D são sutis (não distraem)
3. ✅ Motion é suave (respeita `prefers-reduced-motion`)
4. ✅ Acessibilidade mantida (WCAG AA)
5. ✅ Performance mantida (Core Web Vitals)
6. ✅ Conteúdo inalterado

---

*Criado em: 2026-07-29*
*Autor: Senior Designer (Refatoração Visual)*
