# Portfolio

Portfolio personal enfocado en backend, cloud y arquitectura de software.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript (strict)
- Tailwind CSS v4
- npm workspaces (monorepo)

## Estructura del proyecto

```text
portfolio/
├── apps/
│   └── web/                 # App principal del portfolio
│       ├── src/
│       │   ├── app/         # Rutas (App Router)
│       │   ├── components/  # Componentes compartidos
│       │   └── features/    # Features por dominio (home, theme, etc.)
│       └── public/          # Assets estaticos
├── packages/                # Paquetes compartidos (expansion futura)
└── package.json             # Configuracion raiz del monorepo
```

## Secciones actuales del portfolio

- Navbar con toggle de tema
- Hero principal con terminal animada
- Carrusel de tecnologias
- Seccion de proyectos
- Footer con enlaces sociales

## Comandos

Ejecutar desde la raiz del repo:

```bash
npm run dev
npm run build
npm run typecheck
npm run lint
```
