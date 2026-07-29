# Guia de Desenvolvimento - Rafique AI

## Configuração do Ambiente

### Node.js via Scoop
O Node.js está instalado via **Scoop** no caminho:
```
C:\Users\henri\scoop\apps\nodejs\current\
```

**Versão instalada:** 26.5.0.0

### Configuração do PATH (Temporária)
Como o Node.js foi instalado via Scoop, o PATH pode não estar disponível em todos os terminais. Para usar nesta sessão:

```cmd
set PATH=C:\Users\henri\scoop\apps\nodejs\current;%PATH%
```

### Comandos Disponíveis
- `npm run dev` - Servidor de desenvolvimento (Turbopack)
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção
- `npm run lint` - Linting com ESLint

---

## Subindo o Servidor de Desenvolvimento

### Passo a Passo (CMD)

1. Abra o terminal (CMD)
2. Navegue até a pasta do projeto:
   ```cmd
   cd C:\Users\henri\Desktop\rafiqueai
   ```
3. Configure o PATH do Node.js:
   ```cmd
   set PATH=C:\Users\henri\scoop\apps\nodejs\current;%PATH%
   ```
4. Inicie o servidor:
   ```cmd
   npm run dev
   ```

### URLs de Acesso
Após subir o servidor, acesse no navegador:

| Página | URL |
|--------|-----|
| Homepage | http://localhost:3000 |
| Quem Somos | http://localhost:3000/quem-somos |
| Contato | http://localhost:3000/contato |
| Orkesta | http://localhost:3000/produtos/orkesta |
| Cadia | http://localhost:3000/produtos/cadia |
| Ascenda | http://localhost:3000/produtos/ascenda |
| Ascenda Pro | http://localhost:3000/produtos/ascenda-pro |
| Privacidade | http://localhost:3000/privacidade |
| Termos | http://localhost:3000/termos |

---

## Estrutura de Pastas Importante

```
rafiqueai/
├── public/
│   └── logos/              ← Logos das marcas (acessíveis via /logos/)
├── src/
│   ├── app/
│   │   ├── layout.tsx      ← Metadata e Viewport configurados
│   │   ├── page.tsx        ← Homepage (Server Component)
│   │   └── globals.css     ← Cores e tipografia
│   └── components/
│       ├── Navbar.tsx      ← Header fixo
│       └── Footer.tsx      ← Footer
├── tailwind.config.js      ← Cores das 4 marcas
└── next.config.ts          ← Configuração Next.js
```

---

## Problemas Conhecidos e Soluções

### 1. Erro: "npm não é reconhecido"
**Causa:** PATH do Node.js não configurado.
**Solução:** Execute `set PATH=C:\Users\henri\scoop\apps\nodejs\current;%PATH%`

### 2. Erro: "Port 3000 is in use"
**Causa:** Outro servidor Next.js rodando.
**Solução:** 
```cmd
taskkill /PID <PID> /F
```
Ou use a porta 3001 que o Next.js sugere automaticamente.

### 3. Erro: "metadata" em componente "use client"
**Causa:** `metadata` deve estar em Server Components.
**Solução:** Remova `'use client'` da página e adicione nos componentes filhos que precisam de interatividade.

### 4. Imagens 404
**Causa:** Imagens devem estar em `public/`.
**Solução:** Mova arquivos para `public/` (ex: `public/logos/`).

---

## Build de Produção

Para testar o build de produção:

```cmd
set PATH=C:\Users\henri\scoop\apps\nodejs\current;%PATH%
cd rafiqueai
npm run build
npm run start
```

---

## Notas de Desenvolvimento

- **Turbopack:** O Next.js 16 usa Turbopack por padrão no `dev` (mais rápido)
- **Server Components:** Páginas são Server Components por padrão (melhor para SEO)
- **Metadata:** Configurado via `export const metadata` (Server Component only)
- **Viewport:** Configurado via `export const viewport` (Next.js 16+)

---

*Documento criado em: 2026-07-29*
*Autor: Refatoração Rafique AI*
