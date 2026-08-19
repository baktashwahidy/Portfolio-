# Baktash Portfolio

Premium Next.js portfolio for Baktash, structured so the personal site, IMKON agency, and IMKON SHOP can evolve independently.

## Run locally

```powershell
pnpm install
pnpm dev
```

Use `pnpm build` for a production build and `pnpm check` for TypeScript validation.

## Content handoff

- Update contact details and social profile URLs in `data/site.ts`.
- Add, remove, or edit project case studies in `data/projects.ts`; page components consume the typed data through `lib/projects.ts`.
- Replace the supplied SVG concept art in `public/images/projects/` with production artwork as it becomes available.
- IMKON and IMKON SHOP have independent routes (`/imkon`, `/shop`) and a shared future-destination component, ready to be developed without reworking the portfolio shell.
