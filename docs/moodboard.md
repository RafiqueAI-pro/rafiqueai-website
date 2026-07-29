# Rafique AI - Moodboard e Identidade Visual

## Visão Geral
Este documento centraliza as referências visuais, paletas de cores e assets para o ecossistema Rafique AI e seus produtos.

---

## 🎨 Paletas de Cores

### Rafique AI (Site Principal / Domínio)
> Identidade principal da empresa

| Cor | Hex | Uso Sugerido |
|-----|-----|--------------|
| Azul Escuro | `#2B375D` | Primária - Headers, textos, backgrounds escuros |
| Azul Vibrante | `#3376E1` | Secundária - Botões CTA, links, destaques |
| Azul Claro | `#A2ccF3` | Terciária - Gradientes, backgrounds suaves |
| Off-White | `#FAF7F4` | Backgrounds, textos sobre cores escuras |

**Exemplo de aplicação:**
```css
:root {
  --rafique-dark: #2B375D;
  --rafique-blue: #3376E1;
  --rafique-light: #A2ccF3;
  --rafique-cream: #FAF7F4;
}
```

---

### Cadia
> Produto do ecossistema

| Cor | Hex | Uso Sugerido |
|-----|-----|--------------|
| Laranja Vibrante | `#f96842` | Primária - Energia, ação |
| Laranja Escuro | `#fc8623` | Secundária - Hover states, gradientes |
| Azul Escuro | `#303850` | Textos, elementos estruturais |
| Bege Claro | `#f5e4d0` | Backgrounds, áreas de respiro |

**Exemplo de aplicação:**
```css
:root {
  --cadia-primary: #f96842;
  --cadia-secondary: #fc8623;
  --cadia-dark: #303850;
  --cadia-cream: #f5e4d0;
}
```

---

### Orkesta
> Produto do ecossistema

| Cor | Hex | Uso Sugerido |
|-----|-----|--------------|
| Cinza Escuro 1 | `#363234` | Primária - Textos, estrutura |
| Cinza Escuro 2 | `#444143` | Secundária - Borders, divisores |
| Off-White | `#eae6de` | Backgrounds principais |
| Roxo/Magenta | `#7565ba` | Destaque - CTAs, ícones, links |

**Exemplo de aplicação:**
```css
:root {
  --orkesta-dark-1: #363234;
  --orkesta-dark-2: #444143;
  --orkesta-light: #eae6de;
  --orkesta-accent: #7565ba;
}
```

---

### Ascenda
> Produto do ecossistema

| Cor | Hex | Uso Sugerido |
|-----|-----|--------------|
| Verde Água | `#27877d` | Primária - Confiança, crescimento |
| Verde Escuro | `#1e5c50` | Secundária - Hover, profundidade |
| Azul Escuro | `#263247` | Textos, áreas escuras |
| Verde Menta | `#98d6bb` | Terciária - Destaques suaves |
| Bege Claro | `#fbf5ea` | Backgrounds, áreas de respiro |

**Exemplo de aplicação:**
```css
:root {
  --ascenda-primary: #27877d;
  --ascenda-dark: #1e5c50;
  --ascenda-navy: #263247;
  --ascenda-mint: #98d6bb;
  --ascenda-cream: #fbf5ea;
}
```

---

## 📁 Logos e Assets

### Localização dos Arquivos
Todos os logos estão centralizados na pasta:
```
C:\Users\henri\Desktop\rafiqueai\logos\
```

### Arquivos Disponíveis
| Arquivo | Descrição | Caminho Relativo |
|---------|-----------|------------------|
| `rafiqueai.png` | Logo Rafique AI (principal) | `/logos/rafiqueai.png` |
| `cadia.png` | Logo Cadia | `/logos/cadia.png` |
| `orkesta.png` | Logo Orkesta | `/logos/orkesta.png` |
| `ascenda.png` | Logo Ascenda | `/logos/ascenda.png` |

### Uso no Next.js
```tsx
import Image from 'next/image';

// Exemplo de uso
<Image 
  src="/logos/rafiqueai.png" 
  alt="Rafique AI" 
  width={120} 
  height={40} 
/>
```

---

## 🔗 Integração com Tailwind CSS

Para usar as cores no `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        rafique: {
          dark: '#2B375D',
          blue: '#3376E1',
          light: '#A2ccF3',
          cream: '#FAF7F4',
        },
        cadia: {
          primary: '#f96842',
          secondary: '#fc8623',
          dark: '#303850',
          cream: '#f5e4d0',
        },
        orkesta: {
          dark1: '#363234',
          dark2: '#444143',
          light: '#eae6de',
          accent: '#7565ba',
        },
        ascenda: {
          primary: '#27877d',
          dark: '#1e5c50',
          navy: '#263247',
          mint: '#98d6bb',
          cream: '#fbf5ea',
        },
      },
    },
  },
};
```

---

## 📝 Notas de Design
- O site principal (Rafique AI) serve como base visual para todo o ecossistema
- Cada produto (Cadia, Orkesta, Ascenda) mantém identidade própria mas harmoniza com a paleta principal
- Recomenda-se usar as cores "cream" como backgrounds neutros para garantir legibilidade
- O contraste entre azuis escuros (#2B375D) e off-whites (#FAF7F4, #fbf5ea) deve ser priorizado

---

*Documento gerado em: 2026-07-29*
*Local: C:\Users\henri\Desktop\rafiqueai\docs\moodboard.md*
