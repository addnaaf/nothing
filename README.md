# Adna Fika Agestifanka - Portfolio

A modern, ultra-professional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features dark mode by default, command palette navigation, and dynamic MDX content.

## ✨ Features

- **🚀 Next.js 14** with App Router and TypeScript
- **🎨 Modern Design** with Tailwind CSS and dark mode
- **⌨️ Command Palette** (Cmd/Ctrl + K) for navigation
- **📝 MDX Content** for dynamic project management
- **🎭 Framer Motion** animations
- **📱 Fully Responsive** design
- **🔍 SEO Optimized** with dynamic meta tags
- **⚡ Performance Optimized** for Vercel deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Command Palette**: cmdk
- **Content**: MDX with gray-matter
- **Deployment**: Vercel

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd adna-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── src/
│   ├── app/                 # App Router pages
│   │   ├── about/          # About page
│   │   ├── projects/       # Projects pages
│   │   │   └── [slug]/     # Dynamic project pages
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # React components
│   │   ├── navigation.tsx  # Navigation bar
│   │   ├── hero.tsx        # Hero section
│   │   ├── command-palette.tsx # Command palette
│   │   └── ...             # Other components
│   └── lib/                # Utility functions
│       └── projects.ts     # Project data management
├── content/
│   └── projects/           # MDX project files
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🎨 Features

### Command Palette
Press `Cmd/Ctrl + K` to open the command palette for quick navigation:
- Navigate to pages (Home, About, Projects)
- Toggle theme
- Access social links (GitHub, LinkedIn)

### Dynamic Projects
Projects are managed through MDX files in `content/projects/` with frontmatter:
```markdown
---
title: "Project Title"
description: "Project description"
tags: ["React", "TypeScript", "Next.js"]
date: "2024-01-01"
---

Project content in MDX format...
```

### Animations
Smooth animations powered by Framer Motion:
- Page transitions
- Stagger animations for project lists
- Hover effects and micro-interactions

## 🌐 Deployment

This project is optimized for Vercel deployment:

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Deploy automatically**

No environment variables or additional configuration needed!

## 📝 Customization

### Adding New Projects
1. Create a new MDX file in `content/projects/`
2. Add frontmatter with title, description, tags, and date
3. Write your project content in MDX format
4. The project will automatically appear in the projects list

### Modifying Content
- **Personal Info**: Update `src/components/hero.tsx` and `src/components/about.tsx`
- **Social Links**: Modify `src/components/command-palette.tsx` and `src/components/contact.tsx`
- **Styling**: Customize `src/app/globals.css` and `tailwind.config.js`

## 🎯 Performance

- ⚡ Optimized for Core Web Vitals
- 📱 Mobile-first responsive design
- 🎨 Efficient CSS with Tailwind
- 🚀 Static generation for optimal performance

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ❤️ by Adna Fika Agestifanka**