# Frahman & Brothers Website

A modern Next.js 16 website for Frahman & Brothers, a fertilizer distributor serving verified retailers in Bangladesh.

## Features

- ✨ Built with Next.js 16 (App Router) and Tailwind CSS
- 🎨 Modern, responsive design with dark mode support
- 📱 Mobile-friendly navigation
- 🚀 Static site generation for fast performance
- 📄 SEO-optimized with metadata
- 🎯 Clean, reusable components

## Pages

- **Home** - Main landing page with featured products
- **About** - Company information and team
- **Products** - Catalog of fertilizer products
- **Supply Chain** - Information about the distribution process
- **Contact** - Contact form and location details

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000/frahmanandbrothers](http://localhost:3000/frahmanandbrothers) in your browser.

### Build

```bash
# Build for production
npm run build
```

The static files will be generated in the `out/` directory.

### Lint

```bash
# Run ESLint
npm run lint
```

## Deployment to GitHub Pages

This website is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Setup

1. Go to your repository settings
2. Navigate to **Settings > Pages**
3. Under **Build and deployment**, select:
   - **Source**: GitHub Actions
4. Push changes to the `main` branch

The website will be automatically deployed to: `https://syed-reza98.github.io/frahmanandbrothers`

### Manual Deployment

If you want to deploy manually:

```bash
# Build the project
npm run build

# The static files are in the out/ directory
# You can deploy them to any static hosting service
```

## Technology Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── products/          # Products page
│   ├── supply-chain/      # Supply chain page
│   ├── contact/           # Contact page
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── Section.tsx
│   ├── ProductCard.tsx
│   └── ContactForm.tsx
├── lib/                   # Utility functions and data
│   └── data.ts           # Product data
├── public/               # Static assets
└── .github/workflows/    # GitHub Actions workflows
```

## License

Licensed under the MIT License. See LICENSE file for details.

## Contact

- **Address**: Kawkhali, South Bazar, Pirojpur
- **Phone**: +880 1750-188004
- **Email**: info@frahmanandbrothers.com