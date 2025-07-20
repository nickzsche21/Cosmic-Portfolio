# Nikhil's Cosmic Space Portfolio

## Overview

This is a full-stack React application featuring an interactive 3D space-themed portfolio website. The application showcases a cosmic developer's portfolio with stunning 3D visuals, animations, and modern web technologies. It's built as a single-page application with immersive space-themed design elements including star fields, floating planets, and holographic effects.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Styling**: Tailwind CSS with custom cosmic color scheme and dark theme support
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent design
- **3D Graphics**: Three.js with React Three Fiber for immersive 3D elements (star fields, planets, astronaut)
- **Animations**: Framer Motion for smooth page transitions and GSAP for advanced animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state and React hooks for local state

### Backend Architecture  
- **Server**: Express.js with TypeScript running in ESM mode
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Storage**: In-memory storage implementation with interface for easy swapping to database
- **Session Management**: Express sessions with PostgreSQL store support

### Key Components

#### 3D Elements
- **StarField**: Animated particle system creating a cosmic background
- **PlanetScroll**: Interactive scrolling planets with parallax effects  
- **FloatingAstronaut**: 3D astronaut model with floating animations
- **BlackHole**: Animated black hole with accretion disk and particle effects

#### UI Components
- **CustomCursor**: Interactive cursor with trailing effects
- **TypewriterText**: Animated text typing effect for hero section
- **HolographicCard**: Futuristic card design with hover effects
- **Navigation**: Smooth scrolling navigation with space theme

#### Page Sections
- **HeroSection**: Landing area with 3D background and animated text
- **AboutSection**: Developer information with floating astronaut
- **ProjectsSection**: Portfolio showcase with holographic project cards
- **ContactSection**: Contact form with 3D black hole animation

## Data Flow

1. **Application Bootstrap**: Main app renders with React Query provider and routing setup
2. **3D Rendering**: Three.js scenes render in background using React Three Fiber
3. **User Interactions**: Navigation triggers smooth scrolling between sections
4. **Form Submissions**: Contact form data flows through React Hook Form with validation
5. **Animations**: GSAP and Framer Motion handle scroll-triggered and interaction-based animations

## External Dependencies

### Core Technologies
- **React Ecosystem**: React, React DOM, React Three Fiber for 3D integration
- **Build Tools**: Vite for development and building, TypeScript for type safety
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer for responsive design
- **3D Graphics**: Three.js for WebGL rendering, React Three Drei for helpers

### UI and Animation Libraries
- **Component Library**: Radix UI primitives, shadcn/ui components
- **Animation**: Framer Motion for React animations, GSAP for advanced effects
- **Forms**: React Hook Form with Zod validation and resolvers
- **Icons**: Lucide React for consistent iconography

### Backend Dependencies
- **Server**: Express.js, CORS middleware
- **Database**: Drizzle ORM, @neondatabase/serverless driver
- **Session**: Express session, connect-pg-simple for PostgreSQL sessions
- **Utilities**: Date-fns for date handling, nanoid for ID generation

### Development Tools
- **Replit Integration**: Vite plugin for runtime error overlay and cartographer
- **TypeScript**: Full type safety across frontend and backend
- **Development**: Hot module replacement and fast refresh for smooth development

## Deployment Strategy

### Build Process
- **Frontend Build**: Vite builds React app to `dist/public` directory
- **Backend Build**: esbuild bundles Express server to `dist/index.js`
- **Static Assets**: Vite handles asset optimization and bundling

### Environment Setup
- **Development**: Uses tsx for TypeScript execution with hot reload
- **Production**: Node.js runs the compiled JavaScript bundle
- **Database**: Drizzle migrations manage PostgreSQL schema changes

### Configuration Files
- **Vite Config**: Handles React compilation, path aliases, and development plugins
- **Tailwind Config**: Custom color scheme with space-themed variables
- **TypeScript Config**: Shared configuration for client, server, and shared code
- **Drizzle Config**: Database connection and migration settings

The application is designed for easy deployment on platforms like Replit, with proper environment variable handling and build optimization for production use.