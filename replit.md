# BraceCraft - Athletic Injury Prevention Platform

## Overview

BraceCraft is a full-stack web application focused on athletic injury prevention and recovery guidance. The platform provides comprehensive injury guides, exercise videos, and resources specifically designed for competitive athletes. The application is built as a content-driven platform with a focus on plantar fasciitis treatment for athletes who want to continue training while healing.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state
- **Build Tool**: Vite for development and bundling

### Backend Architecture
- **Runtime**: Node.js 20 with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Schema**: Shared schema definition between client and server
- **Storage Interface**: Abstracted storage layer with in-memory fallback

### Development Environment
- **Platform**: Replit with PostgreSQL 16 module
- **Hot Reload**: Vite development server with HMR
- **Type Safety**: Full TypeScript coverage across client, server, and shared code

## Key Components

### Content Management System
- **Injury Guides**: Multi-chapter guide system with progress tracking
- **Video Library**: Exercise and instructional video collection
- **Resources**: Tools and assessments for injury evaluation
- **SEO Optimization**: Comprehensive meta tag management and structured data

### User Interface System
- **Design System**: Custom color palette with athletic/medical theme
- **Responsive Design**: Mobile-first approach with breakpoint system
- **Component Library**: Reusable UI components built on Radix primitives
- **Navigation**: Multi-level navigation with mobile menu support

### Database Schema
- **Users Table**: Basic user authentication structure
- **Content Storage**: File-based content with database metadata
- **Progress Tracking**: User progress through guides and assessments

## Data Flow

### Content Delivery
1. Static content served from client build
2. Dynamic content loaded via API endpoints
3. Progress tracking stored in localStorage and database
4. SEO metadata dynamically injected per route

### User Interactions
1. Guide navigation with chapter progression
2. Video playback and interaction tracking
3. Assessment tools with result calculation
4. Email capture for marketing conversion

### Storage Pattern
- **Development**: In-memory storage for rapid iteration
- **Production**: PostgreSQL with Drizzle ORM abstraction
- **Shared Types**: Type-safe schema definitions across stack

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: PostgreSQL connection for serverless deployment
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router

### UI Framework
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first styling
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon system

### Development Tools
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling for server code

## Deployment Strategy

### Build Process
1. Client build via Vite to `dist/public`
2. Server bundle via esbuild to `dist/index.js`
3. Database migrations via Drizzle Kit
4. Static asset optimization and compression

### Environment Configuration
- **Development**: Local Vite dev server with Express API
- **Production**: Single Node.js process serving static files and API
- **Database**: PostgreSQL with connection pooling
- **Scaling**: Replit autoscale deployment target

### Performance Optimizations
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: WebP format with lazy loading
- **Caching**: Static asset caching with cache busting
- **Bundle Analysis**: Vite bundle analyzer integration

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

- June 18, 2025: Expanded guide structure to 9 chapters (Introduction + 7 core chapters + Conclusion)
- June 18, 2025: Implemented Chapters 4-7 with complete LLM optimization
- June 18, 2025: Created Introduction and Conclusion placeholder sections ready for authentic content
- June 18, 2025: Updated navigation system for seamless 9-chapter flow

## Changelog

- June 14, 2025: Initial setup
- June 18, 2025: Complete 9-chapter guide structure with LLM optimization patterns