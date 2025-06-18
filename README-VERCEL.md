# Vercel Deployment Setup for BraceCraft

## Purpose
This configuration enables AI models (Claude, ChatGPT, etc.) to access your site for collaborative analysis and feedback.

## Setup Instructions

1. **Connect to Vercel:**
   - Go to https://vercel.com
   - Sign up/login with GitHub
   - Import this repository

2. **Configure Environment Variables:**
   - In Vercel dashboard, go to Project Settings > Environment Variables
   - Add any required environment variables (DATABASE_URL, etc.)

3. **Deploy:**
   - Vercel will automatically build and deploy
   - You'll get a URL like `https://your-project.vercel.app`

4. **Usage:**
   - Use the Vercel URL when asking AI models to analyze your site
   - Keep developing on Replit - sync changes to trigger Vercel rebuilds

## Technical Notes

- Frontend: Vite build outputs to `dist/public`
- Backend: Currently static-only for AI access
- Database: Use Replit's database for development
- Syncing: Manual git push to trigger Vercel redeploy

## Benefits

- AI models can access and analyze your site
- Separate from your main Replit development environment
- Automatic HTTPS and global CDN
- No rate limiting for AI services