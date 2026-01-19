# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Strapi 5.18.1** CMS backend for a physiotherapy application (PhysioB). It uses PostgreSQL as the database and is deployed on Railway.app.

## Common Commands

```bash
npm run develop        # Start development server (port 1337)
npm run dev            # Alias for develop
npm start              # Start production server
npm run build          # Build for production
npm run console        # Strapi interactive console
railway run npm run develop  # Run locally with Railway environment variables
```

Admin panel: http://127.0.0.1:1337/admin

## Architecture

### Content Types (src/api/)

- **author/** - Author profiles with name, bio, avatar; has oneToMany relation to blog_posts
- **page/** - Hierarchical pages with parent/child relationships; pageType enum: `conditions_hub`, `conditions_category`, `conditions_group`, `condition`, `blogPost`, `generic`
- **blog-post/** - Blog articles with author FK, publishDate, SEO fields, rich-text blocks
- **demo/** - Test collection for examples

All content types use:
- Draft/publish workflow
- i18n (internationalization) support
- Strapi factory patterns for auto-generated controllers/services

### Components (src/components/)

Reusable content blocks used in dynamic zones:
- `blocks/rich-text` - Rich text editor component
- `demo/shared-cta` - Call-to-action component

### Configuration (config/)

- `server.js` - Host, port, webhook settings
- `database.js` - PostgreSQL connection (Railway)
- `admin.js` - Admin panel auth/security
- `middlewares.js` - CORS, security, logger pipeline

### Extensions (src/extensions/)

- `users-permissions/config/jwt.js` - Custom JWT configuration

### Key Plugins

- `strapi-plugin-populate-all` - Deep relation population
- `strapi-v5-plugin-populate-deep` - Advanced relationship queries

## Database

PostgreSQL hosted on Railway. Connection configured via environment variables:
- `DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_NAME`
- `DATABASE_USERNAME`, `DATABASE_PASSWORD`

## Code Style

- 2-space indentation
- Semicolons required
- Single quotes
- LF line endings
