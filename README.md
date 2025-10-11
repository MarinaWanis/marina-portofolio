# Marina Maged - Portfolio Website

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14.2.5-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-11.0.0-pink?style=for-the-badge&logo=framer" alt="Framer Motion" />
</div>

<br>

<div align="center">
  <h3>🚀 A modern, responsive portfolio website showcasing RPA & Power BI expertise</h3>
  <p>Built with Next.js 14, TypeScript, and Tailwind CSS for optimal performance and user experience</p>
</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

This is a professional portfolio website for **Marina Maged**, an RPA & Power BI Specialist. The website showcases expertise in:

- **RPA Automation** - Intelligent automation solutions
- **Power BI** - Data visualization and business intelligence
- **Software Engineering** - Full-stack development
- **Data Analytics** - Transforming data into actionable insights

The portfolio features a modern, responsive design with smooth animations and a clean user interface that effectively communicates professional capabilities and achievements.

## ✨ Features

### 🎨 Design & User Experience
- **Responsive Design** - Optimized for all devices and screen sizes
- **Dark/Light Theme** - Toggle between themes for better user preference
- **Smooth Animations** - Powered by Framer Motion for engaging interactions
- **Modern UI/UX** - Clean, professional design with Tailwind CSS

### 📱 Sections
- **Hero Section** - Compelling introduction with call-to-action buttons
- **Skills Showcase** - Interactive display of technical expertise
- **Featured Projects** - Portfolio of notable work and achievements
- **Blog Preview** - Latest insights and technical articles
- **Contact CTA** - Easy ways to get in touch

### 🚀 Performance
- **Next.js 14** - Latest features including App Router and Server Components
- **TypeScript** - Type-safe development for better code quality
- **Optimized Images** - Next.js Image component for optimal loading
- **SEO Ready** - Built-in SEO optimization

## 🛠 Tech Stack

### Frontend
- **Next.js 14.2.5** - React framework with App Router
- **TypeScript 5.0** - Type-safe JavaScript
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **Framer Motion 11.0.0** - Animation library
- **Lucide React** - Beautiful icon library

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **MDX** - Markdown with JSX support for blog content

### Deployment
- **Docker** - Containerization support
- **Node.js 20** - Runtime environment

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/marina-portfolio.git
   cd marina-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
marina-portfolio/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # Reusable React components
│   │   ├── hero.tsx         # Hero section
│   │   ├── skills-showcase.tsx
│   │   ├── featured-projects.tsx
│   │   ├── blog-preview.tsx
│   │   ├── call-to-action.tsx
│   │   ├── navigation.tsx
│   │   ├── footer.tsx
│   │   └── theme-provider.tsx
│   ├── content/             # MDX blog content
│   ├── data/                # Static data files
│   ├── lib/                 # Utility functions
│   └── types/               # TypeScript type definitions
├── public/                  # Static assets
├── Dockerfile              # Docker configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🐳 Deployment

### Docker Deployment

1. **Build the Docker image**
   ```bash
   docker build -t marina-portfolio .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 marina-portfolio
   ```

### Vercel Deployment (Recommended)

1. **Connect your GitHub repository to Vercel**
2. **Deploy automatically** on every push to main branch
3. **Custom domain** configuration available

### Other Platforms

The application can be deployed to any platform that supports Node.js:
- **Netlify**
- **AWS Amplify**
- **Railway**
- **Heroku**

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Built with ❤️ by Marina Maged</p>
  <p>
    <a href="https://linkedin.com/in/marina-maged">LinkedIn</a> •
    <a href="mailto:marina@example.com">Email</a> •
    <a href="https://github.com/marina-maged">GitHub</a>
  </p>
</div>
