# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the corporate website for 株式会社Senrigan (Senrigan Corporation), built as a React/TypeScript single-page application with Vite.

## Essential Commands

```bash
# Development
npm run dev        # Start dev server on http://localhost:3000

# Building
npm run build      # TypeScript check + production build
npm run preview    # Preview production build

# Code Quality
npm run lint       # Run ESLint

# Cleanup
npm run clean      # Remove dist and Vite cache
```

## Architecture Overview

### Tech Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom animations
- **Routing**: React Router v7
- **Animations**: Framer Motion + React Spring
- **Backend**: Express.js API (`src/server/`) + PHP endpoints (`api/`)

### Key Architectural Patterns

1. **Component Organization**:
   - Pages are route-based components in `src/components/`
   - Shared components in subdirectories (e.g., `Hero/`, `news/`, `technology/`)
   - Service-specific pages in `src/services/`

2. **API Structure**:
   - TypeScript API in `src/server/api/` (contact, apply endpoints)
   - PHP endpoints in `api/` directory
   - Email service using Nodemailer

3. **Import Aliases**:
   - Use `@/` for `src/` directory imports
   - Example: `import { Component } from '@/components/Component'`

4. **Form Handling**:
   - Contact and application forms with Google reCAPTCHA
   - Email notifications via Nodemailer

## Development Guidelines

### When modifying components:
- Maintain existing animation patterns using Framer Motion
- Follow the established Tailwind utility patterns
- Use TypeScript for all new code

### When working with API:
- Check both TypeScript (`src/server/`) and PHP (`api/`) implementations
- Email configuration is in `src/server/config/email.ts`

### Build considerations:
- Vite config includes code splitting for vendor libraries
- Assets are organized into specific output directories
- Production builds strip console/debugger statements