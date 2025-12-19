# 🚀 Saikiran Asamwar - Portfolio Website

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**A modern, responsive portfolio website showcasing AWS DevOps expertise, certifications, and real-world projects.**

[Live Demo](#) • [Report Bug](https://github.com/SaikiranAsamwar/Portfolio-Website/issues) • [Request Feature](https://github.com/SaikiranAsamwar/Portfolio-Website/issues)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Email Configuration](#email-configuration)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🎯 About

This is a professional portfolio website built for showcasing AWS DevOps engineering skills, certifications, and project work. It features a clean, modern design with dark/light mode support, animated components, and a fully functional contact form with email integration.

**Key Highlights:**
- 🏆 AWS Certified Solutions Architect - Associate
- ⚙️ DevOps & Cloud Engineering Focus
- 🔧 6+ Real-world Project Showcases
- 📜 Professional Certifications Display
- 📧 Integrated Contact System

---

## ✨ Features

### 🎨 Design & UI
- 🌓 **Dark/Light Mode** - Smooth theme toggle with localStorage persistence
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎭 **Smooth Animations** - Floating elements, gradient effects, and transitions
- 🪟 **Glassmorphism UI** - Modern frosted glass design elements
- 🎬 **Welcome Screen** - Professional animated landing experience

### 🛠️ Functionality
- 📧 **Contact Form** - Gmail SMTP integration with Nodemailer
- 🔗 **Project Details** - Individual pages for each project with tech stacks
- 🏆 **Certifications** - Display with credential verification links
- 🎯 **SEO Optimized** - Comprehensive meta tags and descriptions
- ⚡ **Performance** - Next.js optimizations and lazy loading
- ♿ **Accessible** - ARIA labels and semantic HTML

### 📊 Content Sections
- **Hero Section** - Professional introduction with certifications
- **Experience** - DevOps internship details and responsibilities
- **Featured Projects** - 6 production-ready AWS/DevOps projects
- **Skills** - Technical expertise with documentation links
- **About Me** - Detailed professional background
- **Contact** - Multi-channel communication options

---

## 💻 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | Next.js 14, React 18, JavaScript |
| **Styling** | Tailwind CSS, Custom CSS animations |
| **Email** | Nodemailer with Gmail SMTP |
| **Deployment** | Vercel, AWS Amplify, Docker-ready |
| **Version Control** | Git & GitHub |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- npm or yarn
- Gmail account (for contact form)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SaikiranAsamwar/Portfolio-Website.git
   cd Portfolio-Website/portfolio-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` with your Gmail credentials (see [Email Configuration](#email-configuration))

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

---

## 📧 Email Configuration

The contact form uses Gmail SMTP to send emails. Follow these steps:

### Step 1: Enable 2-Step Verification
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification**

### Step 2: Generate App Password
1. Visit [Google App Passwords](https://myaccount.google.com/apppasswords)
2. Select **Mail** and **Other (Custom name)**
3. Enter "Portfolio Website"
4. Copy the 16-character password

### Step 3: Update .env.local
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
```

### Step 4: Restart Server
```bash
npm run dev
```

📖 **Detailed Guide:** See [EMAIL_SETUP_GUIDE.md](./EMAIL_SETUP_GUIDE.md)

---

## 🌐 Deployment

### Option 1: Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SaikiranAsamwar/Portfolio-Website)

**Manual Deployment:**
```bash
npm install -g vercel
vercel
```

**Environment Variables:**
- Add `EMAIL_USER` and `EMAIL_PASS` in Vercel dashboard
- Settings → Environment Variables

### Option 2: AWS Amplify

1. Connect GitHub repository
2. Build settings (auto-detected):
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - cd portfolio-frontend
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: portfolio-frontend/.next
       files:
         - '**/*'
     cache:
       paths:
         - portfolio-frontend/node_modules/**/*
   ```
3. Add environment variables in Amplify console

### Option 3: Docker

**Build image:**
```bash
docker build -t portfolio-website .
```

**Run container:**
```bash
docker run -p 3000:3000 \
  -e EMAIL_USER=your-email@gmail.com \
  -e EMAIL_PASS=your-app-password \
  portfolio-website
```

---

## 📁 Project Structure

```
portfolio-frontend/
├── 📂 components/          # Reusable React components
│   ├── ContactForm.js     # Contact form with email
│   ├── Footer.js          # Footer with links
│   ├── Hero.js            # Hero section
│   ├── Nav.js             # Navigation bar
│   ├── ProjectCard.js     # Project cards
│   ├── Skills.js          # Skills showcase
│   └── WelcomeScreen.js   # Animated welcome
├── 📂 pages/              # Next.js pages & routing
│   ├── _app.js           # App wrapper & theme
│   ├── index.js          # Home page
│   ├── about.js          # About page
│   ├── projects.js       # Projects listing
│   ├── certifications.js # Certifications
│   ├── contact.js        # Contact page
│   ├── 404.js            # Custom error page
│   ├── 📂 api/           # API routes
│   │   └── contact.js    # Email sending API
│   ├── 📂 project/       # Project details
│   │   ├── nodejs-media-compressor.js
│   │   ├── task-manager-python.js
│   │   ├── java-shopnow.js
│   │   ├── serverless-student-management.js
│   │   ├── quickloan-autoscaling.js
│   │   └── insured-elastic-beanstalk.js
│   └── 📂 certification/ # Certification details
│       ├── saa-c03.js
│       ├── aws-course.js
│       └── devops-tools.js
├── 📂 public/            # Static assets
│   ├── avatar.png        # Profile image
│   ├── resume.pdf        # Resume/CV
│   └── favicon.ico       # Site favicon
├── 📂 styles/            # Stylesheets
│   └── globals.css       # Global styles & animations
├── 📄 .env.example       # Environment variables template
├── 📄 .env.local         # Local environment (not committed)
├── 📄 .gitignore         # Git ignore rules
├── 📄 tailwind.config.js # Tailwind configuration
├── 📄 next.config.js     # Next.js configuration
├── 📄 package.json       # Dependencies
├── 📄 README.md          # This file
└── 📄 EMAIL_SETUP_GUIDE.md # Email setup instructions
```

---

## 🎨 Customization

### Update Personal Information

| File | Content |
|------|---------|
| `pages/index.js` | Home page, featured projects, about section |
| `pages/about.js` | Professional experience, education |
| `pages/projects.js` | Project listings and data |
| `pages/certifications.js` | Certifications and achievements |
| `components/Hero.js` | Personal intro, social links |
| `components/Footer.js` | Footer links and info |

### Modify Theme Colors

**Tailwind Config** (`tailwind.config.js`):
```javascript
theme: {
  extend: {
    colors: {
      primary: "#YOUR_COLOR",
      accent: "#YOUR_COLOR",
    },
  },
}
```

**Global Styles** (`styles/globals.css`):
- Update gradient colors
- Modify dark mode colors
- Customize animations

### Add Your Assets

- **Profile Image:** Replace `public/avatar.png`
- **Resume:** Replace `public/resume.pdf`
- **Favicon:** Replace `public/favicon.ico`

---

## 📸 Screenshots

<details>
<summary>Click to expand</summary>

### Home Page
![Home Page - Light Mode](#)
![Home Page - Dark Mode](#)

### Projects Section
![Projects](#)

### Certifications
![Certifications](#)

### Contact Form
![Contact](#)

</details>

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Saikiran Asamwar**

- 🎓 AWS Certified Solutions Architect - Associate
- 💼 DevOps & Cloud Engineer
- 🎯 Specializing in CI/CD, Kubernetes, Docker, Terraform

### 📫 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/saikiran-asamwar)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SaikiranAsamwar)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:saikiranasamwar@gmail.com)
[![Docker Hub](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://hub.docker.com/u/saikiranasamwar4)

---

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!

---

## 📊 Project Stats

![GitHub last commit](https://img.shields.io/github/last-commit/SaikiranAsamwar/Portfolio-Website?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/SaikiranAsamwar/Portfolio-Website?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/SaikiranAsamwar/Portfolio-Website?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/SaikiranAsamwar/Portfolio-Website?style=flat-square)

---

<div align="center">

**Made with ❤️ by Saikiran Asamwar**

Portfolio • AWS • DevOps • Cloud Engineering

</div>

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Support

For questions or support, reach out via:
- Email: saikiranasamwar@gmail.com
- LinkedIn: [linkedin.com/in/saikiran-asamwar](https://linkedin.com/in/saikiran-asamwar)
- GitHub: [github.com/SaikiranAsamwar](https://github.com/SaikiranAsamwar)
