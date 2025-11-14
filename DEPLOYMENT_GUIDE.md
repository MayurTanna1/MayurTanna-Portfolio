# 🚀 Deployment Guide for Mayur Tanna Portfolio

This guide will help you deploy your portfolio website to GitHub Pages.

## Prerequisites

- Git installed on your computer
- GitHub account
- Your portfolio code ready

## Step-by-Step Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Choose a repository name:
   - For personal portfolio: `username.github.io` (replace username with your GitHub username)
   - Or any name like: `portfolio`, `my-portfolio`, etc.
5. Keep it **Public**
6. **Do NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### Step 2: Configure Your Portfolio

**Important:** Before deploying, you need to configure the base path if you're NOT using `username.github.io` as your repository name.

#### Option A: Using `username.github.io` Repository
- No configuration needed!
- Your site will be at: `https://username.github.io`

#### Option B: Using a Named Repository (e.g., "portfolio")
1. Open `next.config.ts`
2. Find the commented line: `// basePath: '/repository-name',`
3. Uncomment it and replace with your repository name:
   ```typescript
   basePath: '/portfolio',  // Replace 'portfolio' with your actual repo name
   ```
4. Save the file

### Step 3: Initialize Git and Push to GitHub

Open Terminal/Command Prompt and navigate to your portfolio folder:

```bash
cd /path/to/your/portfolio
```

Then run these commands one by one:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create your first commit
git commit -m "Initial commit: Portfolio website"

# Rename branch to main
git branch -M main

# Add your GitHub repository as remote
# Replace YOUR_USERNAME and YOUR_REPO_NAME with actual values
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**Example:**
If your username is `mayurtanna` and repo is `portfolio`:
```bash
git remote add origin https://github.com/mayurtanna/portfolio.git
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. In the left sidebar, click "Pages"
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. The GitHub Actions workflow will automatically trigger and deploy your site

### Step 5: Wait for Deployment

1. Go to "Actions" tab in your repository
2. You'll see the deployment workflow running
3. Wait for it to complete (usually 1-2 minutes)
4. Once it shows a green checkmark, your site is live!

### Step 6: Access Your Site

Your portfolio will be available at:

- **Option A (username.github.io)**: `https://username.github.io`
- **Option B (named repo)**: `https://username.github.io/repository-name`

Example: `https://mayurtanna.github.io/portfolio`

## Updating Your Portfolio

After making changes to your portfolio:

```bash
# Stage your changes
git add .

# Commit with a message
git commit -m "Updated portfolio content"

# Push to GitHub
git push
```

The GitHub Actions workflow will automatically rebuild and redeploy your site!

## Common Issues and Solutions

### Issue 1: CSS/Images Not Loading

**Problem**: Styles and images not showing on GitHub Pages.

**Solution**:
1. Make sure you configured the `basePath` in `next.config.ts` (if using named repository)
2. Rebuild and push again:
   ```bash
   npm run build
   git add .
   git commit -m "Fix basePath configuration"
   git push
   ```

### Issue 2: 404 Error on GitHub Pages

**Problem**: Getting 404 error when accessing the site.

**Solution**:
1. Check that GitHub Pages is enabled in repository settings
2. Make sure the source is set to "GitHub Actions"
3. Check the Actions tab to see if deployment succeeded
4. Wait a few minutes - sometimes it takes time to propagate

### Issue 3: Build Failing in GitHub Actions

**Problem**: The workflow fails during build.

**Solution**:
1. Check the error message in the Actions tab
2. Try building locally first: `npm run build`
3. Fix any TypeScript or build errors
4. Commit and push the fixes

### Issue 4: Old Version Still Showing

**Problem**: Changes not reflecting on the live site.

**Solution**:
1. Hard refresh your browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Wait a few minutes for CDN to update
4. Check if the new deployment succeeded in Actions tab

## Custom Domain (Optional)

To use a custom domain like `mayurtanna.com`:

1. Buy a domain from a domain registrar
2. Add a `CNAME` file to the `public` folder with your domain:
   ```
   mayurtanna.com
   ```
3. In your domain registrar, add these DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153

   Type: A
   Name: @
   Value: 185.199.109.153

   Type: A
   Name: @
   Value: 185.199.110.153

   Type: A
   Name: @
   Value: 185.199.111.153

   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```
4. In GitHub repository settings > Pages, add your custom domain
5. Wait for DNS propagation (can take up to 24 hours)

## Need Help?

- Check [GitHub Pages Documentation](https://docs.github.com/en/pages)
- Check [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- Review the GitHub Actions logs in the Actions tab

---

## Quick Reference Commands

```bash
# Check git status
git status

# View git logs
git log --oneline

# Check current remote
git remote -v

# Pull latest changes
git pull

# View branches
git branch

# Switch branch
git checkout branch-name
```

## Portfolio Structure Reminder

```
portfolio/
├── app/data/portfolio.ts    ← Update your info here
├── components/              ← React components
├── public/                  ← Static files (resume PDF, images)
├── next.config.ts          ← Configure basePath here
└── README.md               ← Documentation
```

---

**Congratulations! Your portfolio is now live! 🎉**

Share your portfolio link:
- LinkedIn
- Resume
- Email signature
- Social media

Good luck with your job search! 🚀
