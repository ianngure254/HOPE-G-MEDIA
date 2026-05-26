# Designer Portfolio Website - Main Instructions

## Project Overview

Build a modern portfolio and lead generation website for a freelance graphic designer. The primary goal is to showcase creative work professionally while converting visitors into clients through inquiry forms and WhatsApp communication.

The platform will focus heavily on visual presentation, performance, responsiveness, and maintainability.

The designer specializes in:
- Flyers
- Posters
- Social media graphics
- Business cards
- Branding materials
- Marketing assets
- Templates
- Creative print work

The website should feel premium, fast, modern, and visually clean.

---

## Core Objectives

1. Showcase 50+ design projects professionally
2. Enable easy client inquiries
3. Allow monthly/weekly project uploads
4. Maintain excellent mobile responsiveness
5. Keep the architecture scalable
6. Prioritize performance and image optimization
7. Build reusable UI components
8. Keep the codebase clean and production-ready

---

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion

### UI Utilities
- shadcn/ui
- Lucide React Icons
- clsx
- tailwind-merge

### State Management
- React Context API

### Forms
- EmailJS OR Formspree

### Deployment
- Render

### Image Handling
- Lazy loading
- WebP optimization
- Responsive image sizing

---

## Project Goals

The project should:
- Feel modern and creative
- Load fast on mobile devices
- Be easy to maintain
- Support dark/light mode
- Support future CMS integration
- Be scalable for future upgrades

Avoid:
- Over-engineering
- Excessive animations
- Unnecessary dependencies
- Complex backend logic
- Heavy UI libraries

---

## Important UX Requirements

### Portfolio Experience

The portfolio experience is the most important part of the application.

Requirements:
- Masonry/grid layout
- Category filtering
- Search functionality
- Fullscreen image previews
- Smooth transitions
- Responsive behavior

Project cards should include:
- Cover image
- Title
- Category
- Short description

Project detail pages should include:
- Full gallery
- Challenge/problem
- Design solution
- Tools used
- Client/project type
- CTA section

---

## Design Direction

The UI should:
- Feel clean and premium
- Use whitespace effectively
- Prioritize typography
- Focus on visual hierarchy
- Use subtle motion only
- Support both dark/light mode

Preferred design characteristics:
- Minimal
- Editorial
- Modern creative agency style
- Strong typography
- Soft shadows
- Rounded corners

---

## Performance Rules

CRITICAL:
- Optimize all images
- Use lazy loading
- Avoid unnecessary rerenders
- Split components properly
- Keep bundle size small
- Avoid large animation libraries
- Prefer CSS animations where possible

---

## Coding Standards

### General
- Use TypeScript strictly
- Use reusable components
- Keep components small
- Avoid deeply nested logic
- Prefer composition over prop drilling
- Write readable code

### Naming Conventions

#### Components
PascalCase

Examples:
- Navbar.tsx
- ProjectCard.tsx

#### Hooks
camelCase with use prefix

Examples:
- useTheme.ts
- useProjects.ts

#### Utilities
camelCase

Examples:
- formatDate.ts
- filterProjects.ts

---

## Folder Organization Rules

- Separate UI from business logic
- Group reusable components
- Keep page-level logic inside pages
- Store static data separately
- Avoid dumping files into src/

---

## Accessibility Requirements

- Proper semantic HTML
- Keyboard navigable UI
- Proper button labels
- Alt text for images
- Accessible forms
- Good color contrast

---

## SEO Preparation

Even though advanced SEO is not phase 1, prepare for scalability.

Requirements:
- Semantic HTML
- Meta title structure
- Proper heading hierarchy
- OpenGraph readiness
- Clean URLs

---

## Features Scope

### Included
- Home page
- About section
- Services section
- Portfolio page
- Project detail pages
- Search functionality
- Category filters
- Dark/light mode
- Contact form
- WhatsApp CTA
- Testimonials
- Responsive design
- Fullscreen image modal

### Excluded
- Authentication
- Admin dashboard
- Payments
- Blog system
- Analytics dashboard
- Multi-language support
- Complex backend

---

## Expected Deliverables

- Clean React + TypeScript codebase
- Responsive production-ready UI
- Reusable architecture
- Deployment-ready application
- Maintainable folder structure
- Optimized assets

---

## AI Assistant Instructions

When generating code:

1. Prioritize clean architecture
2. Avoid unnecessary abstractions
3. Prefer reusable components
4. Use TypeScript properly
5. Keep styling modular
6. Ensure responsiveness
7. Focus on production-ready quality
8. Use modern React practices
9. Avoid legacy patterns
10. Keep performance in mind

When creating components:
- Make them reusable
- Keep them composable
- Avoid excessive props
- Ensure accessibility

When styling:
- Use Tailwind utility classes
- Avoid inline styles
- Keep spacing consistent
- Use responsive utilities properly