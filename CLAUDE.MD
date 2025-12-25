## 🛠️ Development Environment

- **Language**: TypeScript (`^5.0.0`)
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Component Library**: shadcn/ui
- **Data Fetching**: React Query (TanStack)
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint with `@typescript-eslint`
- **Formatting**: Prettier
- **Package Manager**: `npm` (preferred)

## 📂 Recommended Project Structure

```warp-runnable-command
.
├── app/                     # App Router structure
│   ├── layout.tsx
│   ├── page.tsx
│   ├── api/
├── components/              # UI components (shadcn or custom)
├── hooks/                   # Custom React hooks
├── lib/                     # Client helpers, API wrappers, etc.
├── styles/                  # Tailwind customizations
├── tests/                   # Unit and integration tests
├── public/
├── .eslintrc.js
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.js
├── next.config.js
├── package.json
└── README.md
```

## 📦 Installation Notes

- Tailwind setup with `postcss`
- shadcn/ui installed with `npx shadcn-ui@latest init`
- React Query initialized with `<QueryClientProvider>`

## ⚙️ Dev Commands

- **Dev server**: `npm run dev`
- **Build**: `npm run build`
- **Start**: `npm run start`
- **Lint**: `npm run lint`
- **Format**: `npm run format`
- **Test**: `npm run test`


## 📌 Prompt Examples

```warp-runnable-command
Claude, refactor `useUser.ts` to use React Query.
Claude, scaffold a new `Button.tsx` using shadcn/ui and Tailwind.
Claude, generate the Tailwind styles for this mockup screenshot.
Claude, build an API route handler for POST /api/user.
Claude, create a test for `ProfileCard.tsx` using RTL.
```

## 🧱 Component Guidelines

- Use `shadcn/ui` components by default for form elements, cards, dialogs, etc.
- Style components with Tailwind utility classes
- Co-locate CSS modules or component-specific styling in the same directory

## 📝 Code Style Standards

- Prefer actual functions not arrow functions
- Annotate return types
- Always destructure props
- Avoid `any` type, use `unknown` or strict generics
- Group imports: react → next → libraries → local

## Technical Implementation Notes
### Recommended Stack
```
Components: shadcn/ui or Radix UI
Animations: Framer Motion or https://motion-primitives.com
Forms: React Hook Form + Zod
Analytics: Vercel Analytics
Deployment: Vercel
```

### Performance Targets
```
- Lighthouse Score: 90+ all categories
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- Total Bundle Size: <200KB gzipped
```

### Accessibility Requirements
```
- WCAG 2.1 AA compliance
- Keyboard navigation for all interactive elements
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Sufficient color contrast (4.5:1 minimum)
- Focus indicators visible
- Screen reader tested
```
---

## 🔍 Documentation & Onboarding

- Each component and hook should include a short comment on usage
- Document top-level files (like `app/layout.tsx`) and configs
- Keep `README.md` up to date with getting started, design tokens, and component usage notes

## 🔐 Security

- Validate all server-side inputs (API routes)
- Use HTTPS-only cookies and CSRF tokens when applicable
- Protect sensitive routes with middleware or session logic