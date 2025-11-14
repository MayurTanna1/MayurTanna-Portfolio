# Mayur Tanna - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional UI with gradient accents
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **SEO Optimized**: Meta tags and OpenGraph support
- **Fast Performance**: Static site generation for optimal speed
- **GitHub Pages Ready**: Configured for easy deployment

## 📦 Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: GitHub Pages

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Configuration

### Update Portfolio Data

Edit the file `app/data/portfolio.ts` to customize:
- Personal information
- Skills and expertise
- Work experience
- Education
- Projects
- Contact details

### Configure for GitHub Pages

1. **If using a repository name (e.g., username.github.io/portfolio):**
   - Update `next.config.ts` and uncomment the basePath line
   - Set basePath to your repository name: `basePath: '/your-repo-name'`

2. **If using custom domain or username.github.io:**
   - Leave the configuration as is (no basePath needed)

## 🚀 Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

1. **Create a new GitHub repository**

2. **Push your code:**
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Build and deployment":
     - Source: Select "GitHub Actions"
   - The workflow will automatically deploy your site

4. **Access your site:**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
   - Or `https://YOUR_USERNAME.github.io` if using username.github.io repo

### Method 2: Manual Deployment

1. **Build the project:**
```bash
npm run build
```

2. **The static files will be in the `out` folder**

3. **Deploy the `out` folder to any static hosting service**

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── data/
│   │   └── portfolio.ts       # Portfolio data
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   ├── Hero.tsx               # Hero section
│   ├── About.tsx              # About/Skills section
│   ├── Experience.tsx         # Experience timeline
│   ├── Projects.tsx           # Projects showcase
│   ├── Contact.tsx            # Contact section
│   ├── Navigation.tsx         # Navigation bar
│   └── ThemeToggle.tsx        # Dark mode toggle
├── public/
│   └── MayurTanna_iOS.pdf     # Resume PDF
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions workflow
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind configuration
└── package.json               # Dependencies
```

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` and `app/globals.css` to change the color scheme.

### Sections

- Add or remove sections by editing `app/page.tsx`
- Create new components in the `components/` directory
- Update section data in `app/data/portfolio.ts`

### Resume PDF

Replace `public/MayurTanna_iOS.pdf` with your own resume file.

## 📱 Sections

- **Hero**: Introduction with name, title, and social links
- **About**: Skills visualization with proficiency levels
- **Experience**: Career timeline with achievements
- **Projects**: Showcase of published iOS apps
- **Contact**: Contact information and download resume

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Mayur Tanna**
- LinkedIn: [mayur-tanna-ios](https://linkedin.com/in/mayur-tanna-ios)
- Email: tnnmayur@gmail.com
- Phone: +91 8460473271

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

⭐ If you found this helpful, please star the repository!
