# Deployment Instructions

This document provides instructions for deploying the Frahman & Brothers website to GitHub Pages.

## Automatic Deployment (Recommended)

The project is configured to deploy automatically using GitHub Actions whenever changes are pushed to the `main` branch.

### Setup Steps:

1. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings > Pages**
   - Under **Build and deployment**:
     - Set **Source** to: `GitHub Actions`
   - Save the settings

2. **Merge the PR**:
   - Merge this pull request to the `main` branch
   - The GitHub Actions workflow will automatically:
     - Install dependencies
     - Build the Next.js application
     - Deploy to GitHub Pages

3. **Access the Website**:
   - After deployment completes (usually 2-3 minutes), your website will be live at:
     - `https://syed-reza98.github.io/frahmanandbrothers`

### Viewing Deployment Status:

- Go to the **Actions** tab in your repository
- Look for the "Deploy Next.js to GitHub Pages" workflow
- Click on a specific run to see the deployment logs

## Manual Deployment

If you prefer to deploy manually:

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Deploy the `out/` directory**:
   - The static files are generated in the `out/` directory
   - You can deploy these files to any static hosting service:
     - GitHub Pages
     - Netlify
     - Vercel
     - Cloudflare Pages
     - AWS S3
     - etc.

## Configuration

The website is configured for GitHub Pages deployment with:

- **basePath**: `/frahmanandbrothers` (matches repository name)
- **output**: `export` (static export mode)
- **images.unoptimized**: `true` (required for static export)

These settings are in `next.config.ts`.

## Updating the Website

To make changes to the website:

1. Create a new branch
2. Make your changes
3. Test locally with `npm run dev`
4. Build and test with `npm run build`
5. Create a pull request
6. Merge to `main` when ready
7. The site will auto-deploy

## Troubleshooting

### Build Fails
- Check the Actions tab for error messages
- Ensure all dependencies are listed in `package.json`
- Verify `node-version` in `.github/workflows/deploy.yml` matches your local version

### 404 Errors on Deployment
- Verify the `basePath` in `next.config.ts` matches your repository name
- Check that all internal links use the basePath
- Clear browser cache

### Images Not Loading
- Ensure images are in the `public/` directory
- Use the Next.js `Image` component for optimization
- Remember that `images.unoptimized: true` is required for static export

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain name
2. Configure DNS settings with your domain provider
3. In GitHub repository settings, add your custom domain under **Pages > Custom domain**
4. Update `metadataBase` in `app/layout.tsx` to your custom domain

## Support

For issues or questions:
- Email: info@frahmanandbrothers.com
- Phone: +880 1750-188004
