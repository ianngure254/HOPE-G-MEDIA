# Recommended Folder Structure
src/
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/
│   ├── common/
│   ├── layout/
│   ├── portfolio/
│   ├── forms/
│   └── ui/
│
├── pages/
│   ├── Home/
│   ├── About/
│   ├── Portfolio/
│   ├── ProjectDetails/
│   └── Contact/
│
├── layouts/
│   └── MainLayout.tsx
│
├── context/
│   └── ThemeContext.tsx
│
├── hooks/
│   ├── useTheme.ts
│   ├── useProjects.ts
│   └── useSearch.ts
│
├── data/
│   ├── projects.ts
│   ├── testimonials.ts
│   ├── services.ts
│   └── categories.ts
│
├── types/
│   ├── project.ts
│   ├── testimonial.ts
│   └── global.ts
│
├── utils/
│   ├── cn.ts
│   ├── filterProjects.ts
│   ├── formatDate.ts
│   └── imageHelpers.ts
│
├── routes/
│   └── AppRoutes.tsx
│
├── styles/
│   └── globals.css
│
├── App.tsx
├── main.tsx
└── vite-env.d.ts

---

## Folder Responsibilities

### assets/

Stores:
- static images
- icons
- fonts

---

### components/

Reusable UI and feature components.

#### common/

Shared reusable components.

#### layout/

Navbar, Footer, MobileMenu.

#### portfolio/

Portfolio-specific UI.

#### forms/

Inquiry/contact forms.

#### ui/

Generic design system components.

---

### pages/

Page-level containers.

Each page should:
- assemble components
- handle page logic
- avoid reusable business logic

---

### context/

Global application state.

Initially:
- Theme management only

---

### hooks/

Custom reusable hooks.

Examples:
- filtering
- search
- theme logic

---

### data/

Temporary content layer.

Stores:
- projects
- testimonials
- services
- categories

Future:
Replace with CMS.

---

### types/

Centralized TypeScript interfaces.

---

### utils/

Reusable helper functions.

Keep pure and framework-independent.

---

### routes/

Central route definitions.

---

## Scalability Notes

The structure is intentionally designed to:
- support CMS integration
- scale to larger portfolios
- support future features
- keep code maintainable

---

## Recommended Future Additions

Potential future folders:
- services/
- api/
- lib/
- animations/
- constants/
- store/

Only add when necessary.

Avoid premature abstraction.

---

## Final Engineering Notes

Priorities:

1. Clean UI
2. Fast performance
3. Mobile responsiveness
4. Maintainability
5. Great portfolio experience
6. Reusable architecture
7. Professional execution

The portfolio itself should feel like a premium creative product.