# Saikiran Asamwar - Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing AWS DevOps expertise, certifications, and projects.

## 🚀 Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Language:** JavaScript/React
- **Deployment Ready:** Vercel, AWS Amplify, or any Node.js host

## ✨ Features

- 🌓 Dark/Light mode toggle with persistent theme
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast loading with Next.js optimizations
- 🎨 Modern glassmorphism UI design
- 📧 Contact form integration ready
- 🎯 SEO optimized with meta tags
- ♿ Accessibility features (ARIA labels, semantic HTML)
- 🎭 Smooth animations and transitions
- 📊 Project showcase with detailed pages
- 🏆 Certifications display with credentials

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Update Personal Information

1. **Home Page** - Edit `pages/index.js`
2. **About Page** - Edit `pages/about.js`
3. **Projects** - Update project data in `pages/index.js` and `pages/projects.js`
4. **Certifications** - Modify certification data in `pages/certifications.js`
5. **Contact Info** - Update in `pages/contact.js`

### Add Your Avatar

Place your profile image as `avatar.png` in the `public/` folder

### Modify Theme Colors

Edit `tailwind.config.js` and `styles/globals.css` to customize colors

## 📧 Contact Form Setup

The contact form (`components/ContactForm.js`) currently logs to console. To make it functional:

1. Set up SendGrid, AWS SES, or similar email service
2. Update `pages/api/contact.js` with your email service credentials
3. Add environment variables for API keys

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### AWS Amplify
1. Connect your GitHub repository
2. Configure build settings (auto-detected)
3. Deploy

### Docker
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📄 Project Structure

```
portfolio-frontend/
├── components/          # Reusable React components
│   ├── Nav.js          # Navigation bar
│   ├── Hero.js         # Hero section
│   ├── Footer.js       # Footer component
│   ├── Skills.js       # Skills display
│   ├── ProjectCard.js  # Project card component
│   ├── ContactForm.js  # Contact form
│   └── WelcomeScreen.js # Welcome animation
├── pages/              # Next.js pages
│   ├── _app.js        # App wrapper
│   ├── index.js       # Home page
│   ├── about.js       # About page
│   ├── projects.js    # Projects page
│   ├── certifications.js # Certifications page
│   ├── contact.js     # Contact page
│   ├── api/           # API routes
│   ├── project/       # Individual project pages
│   └── certification/ # Individual certification pages
├── public/            # Static assets
├── styles/            # Global styles
│   └── globals.css    # Main stylesheet
├── tailwind.config.js # Tailwind configuration
├── next.config.js     # Next.js configuration
└── package.json       # Dependencies
```

## 🌟 Features to Add (Optional)

- [ ] Blog section
- [ ] Newsletter subscription
- [ ] Analytics integration (Google Analytics, Plausible)
- [ ] Performance monitoring
- [ ] CMS integration (Contentful, Sanity)
- [ ] Automated testing

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Saikiran Asamwar**
- AWS Certified Solutions Architect - Associate
- DevOps & Cloud Engineer

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

For questions or support, reach out via:
- Email: saikiranasamwar@gmail.com
- LinkedIn: [linkedin.com/in/saikiran-asamwar](https://linkedin.com/in/saikiran-asamwar)
- GitHub: [github.com/SaikiranAsamwar](https://github.com/SaikiranAsamwar)
