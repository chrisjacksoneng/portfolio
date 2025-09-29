# Chris Jackson - Portfolio

A modern, animated portfolio website built with React and Framer Motion.

## 🚀 Features

- **Smooth Animations** - Powered by Framer Motion for professional-grade animations
- **Custom Cursor** - Interactive purple cursor that responds to hover states
- **Responsive Design** - Optimized for all device sizes
- **Modern UI** - Clean, minimalist design with purple gradient background
- **Interactive Elements** - Hover effects, scroll animations, and smooth transitions
- **Terminal Animation** - Animated terminal-style bio section

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Framer Motion** - Animation library for smooth interactions
- **CSS3** - Custom styling with modern features
- **GitHub Pages** - Automated deployment

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/chrisjacksoneng/portfolio.git

# Navigate to the directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Deployment

The portfolio is automatically deployed to GitHub Pages when you push to the main branch.

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── Projects.jsx
│   │   └── WorkExperience.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── images/
├── .github/
│   └── workflows/
│       └── deploy.yml
└── package.json
```

## 🎨 Customization

### Colors

The portfolio uses a purple gradient theme. You can customize colors in `src/styles/index.css`:

```css
/* Main gradient colors */
#7c3aed 0%,    /* Bright purple */
#5b21b6 15%,   /* Darker purple */
#4c1d95 30%,   /* Deep purple */
#1e1b4b 50%,   /* Indigo */
#0f0f23 70%,   /* Dark blue */
#000000 100%   /* Black */
```

### Content

Update your information in the respective component files:

- `src/components/Hero.jsx` - Personal info and terminal content
- `src/components/WorkExperience.jsx` - Work history
- `src/components/Projects.jsx` - Project showcase

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Development

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Chris Jackson

- Email: c8jackso@uwaterloo.ca
- LinkedIn: [chrisjackson-](https://www.linkedin.com/in/chrisjackson-/)
- GitHub: [chrisjacksoneng](https://github.com/chrisjacksoneng)
