# Laia Xarau — SEO Consultant

Personal website built with [Astro](https://astro.build).

## Development

Requires Node 24 (see `.nvmrc`).

```sh
nvm use
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Structure

```
src/
├── components/   # one component per page section
├── data/site.ts  # name, role, URLs and contact details
├── layouts/      # BaseLayout: metadata, canonical, JSON-LD
├── pages/        # index.astro
└── styles/       # global.css: palette, type and shared classes
```

## Before publishing

Search the project for `TODO`: domain, LinkedIn URL, email, project links,
images and official tool logos.
