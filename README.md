# 👨‍💻 Mayur Kapadi – Portfolio

My personal **developer portfolio website** built with React. It introduces me, lists my skills, showcases recent projects with live demos and GitHub links, and has a working contact form.

<!-- Live site (confirm the URL, then uncomment) -->
🔗 **Live Site:** https://mayurkapadi24.vercel.app

<!-- Add a screenshot after saving it as screenshot.png -->
<!-- ![Portfolio preview](screenshot.png) -->

## ✨ Features

- **Hero section** with name, role (MERN Developer), social links and a **Download CV** button
- **About** section
- **Skills** section split into Frontend and Backend with skill levels
- **Projects** section with project cards, **Live Demo** and **GitHub** buttons
- **Contact** section with email and WhatsApp details, plus a **contact form** that sends messages to my inbox via EmailJS
- Sticky icon navigation bar with smooth scrolling to sections
- Footer with quick links and social icons
- Fully responsive layout (plain CSS)

## 🛠️ Tech Stack

| Technology | Usage |
| ---------- | ----- |
| React 18 (Create React App) | UI library |
| CSS3 | Custom styling and responsive layout |
| React Icons | Icons |
| EmailJS | Contact form emails (no backend needed) |
| Swiper | Testimonials slider (component ready, currently disabled) |

## 🧰 Skills Shown on the Site

| Frontend | Backend |
| -------- | ------- |
| HTML, CSS, Bootstrap, JavaScript, React, Tailwind CSS | Node.js, Express.js, MongoDB, PHP, Python |

## 🚀 Featured Projects

| Project | Live Demo | Code |
| ------- | --------- | ---- |
| E-commerce store | [mayuronlineshop.vercel.app](https://mayuronlineshop.vercel.app/) | [GitHub](https://github.com/mkkapadi12/E-commerce) |
| Budget App | [maintainyourbudget.vercel.app](https://maintainyourbudget.vercel.app) | [GitHub](https://github.com/mkkapadi12/budget-app) |
| Fresh Start | [fresh-start-rahulpanchal0106.vercel.app](https://fresh-start-rahulpanchal0106.vercel.app/) | [GitHub](https://github.com/mkkapadi12/FreshStart) |

## 📁 Project Structure

```
Portfolio/
├── public/
└── src/
    ├── assets/                 # Images, project screenshots, CV (cv.pdf)
    ├── components/
    │   ├── Header/             # Hero, CTA buttons, social links
    │   ├── Nav/                # Section navigation
    │   ├── About/
    │   ├── Experience/         # Skills
    │   ├── Projects/           # Project cards
    │   ├── Contact/            # Contact info and EmailJS form
    │   ├── Footer/
    │   ├── Service/            # (disabled)
    │   └── Testimonials/       # (disabled)
    ├── App.jsx                 # Page sections
    └── index.js
```

## 🚀 Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) 16 or higher and npm.

```bash
# 1. Clone the repository
git clone https://github.com/mkkapadi12/Portfolio.git

# 2. Go to the project folder
cd Portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Make It Your Own

1. **Text and skills:** edit `Header.jsx`, `About.jsx` and `Experience.jsx` in `src/components`.
2. **Projects:** update the `data` array in `src/components/Projects/Project.jsx` (image, title, GitHub and demo links).
3. **CV:** replace `src/assets/cv.pdf`.
4. **Contact form:** create a free [EmailJS](https://www.emailjs.com/) account, set up a service and template, then replace the service ID, template ID and public key in `src/components/Contact/Contact.jsx`.
5. **Social links:** update `Header_social.jsx` and `Footer.jsx`.

## 📜 Available Scripts

| Command | Description |
| ------- | ----------- |
| `npm start` | Run the app in development mode |
| `npm run build` | Create an optimised production build |
| `npm test` | Run tests in watch mode |

## ☁️ Deployment

Deploy for free on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/): connect the GitHub repo, use build command `npm run build` and output folder `build`.

## 🔮 Roadmap

- [ ] Add more projects (full-stack work, internship project)
- [ ] Enable Services and Testimonials sections
- [ ] Dark / light theme toggle
- [ ] Move EmailJS keys to environment variables
- [ ] Add a short blog or case studies

## 👤 Author

**Mayur Kapadi**

- GitHub: [@mkkapadi12](https://github.com/mkkapadi12)
- LinkedIn: [mayurkapadi24](https://www.linkedin.com/in/mayurkapadi24/)
- Email: mayurkapadi12@gmail.com

---

⭐ If you like this project, consider giving it a star!
