# ️santosha-yoga-app

A modern, responsive application built with Vite, React, TypeScript, and Tailwind CSS. This single-page application showcases fitness classes, benefits, and provides a contact form for user engagement.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling navigation between sections
- **Class Showcase**: Interactive slider displaying fitness classes
- **Contact Form**: Form validation with React Hook Form and Zod
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **TypeScript**: Full type safety throughout the application

## 🚀 Tech Stack

- **Frontend**: React 19.1.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.13
- **Build Tool**: Vite 7.1.7
- **Form Handling**: React Hook Form 7.65.0
- **Validation**: Zod 4.1.12
- **Animations**: Framer Motion 12.23.18
- **Icons**: React Icons 5.5.0
- **Sliders**: Swiper 12.0.2
- **Smooth Scrolling**: React Scroll 1.9.3

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/fitness-app.git
   cd fitness-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 🛠️ Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality checks

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Benefits/        # Benefits section components
│   ├── contact/         # Contact form components
│   ├── Footer/          # Footer component
│   ├── formElements/    # Reusable form components
│   ├── Home/            # Home section components
│   ├── nav/             # Navigation components
│   └── OurClasses/      # Classes showcase components
├── hooks/               # Custom React hooks
├── styles/              # Global styles
├── types/               # TypeScript type definitions
├── utils/               # Utility functions and data
└── App.tsx              # Main application component
```

## 🎨 Key Components

### Navigation
- Responsive navigation bar with smooth scrolling
- Mobile-friendly hamburger menu
- Active section highlighting

### Home Section
- Hero section with compelling fitness messaging
- Call-to-action buttons
- Background imagery

### Benefits Section
- Grid layout showcasing fitness benefits
- Icon-based benefit cards
- Smooth hover animations

### Our Classes Section
- Interactive class slider/carousel
- Class cards with images and descriptions
- Responsive grid layout

### Contact Section
- Form validation with real-time feedback
- Professional contact form design
- Form submission handling

## 🎯 Features in Detail

### Form Validation
- Real-time validation using Zod schemas
- User-friendly error messages
- Form state management with React Hook Form

### Animations
- Smooth page transitions
- Hover effects on interactive elements
- Scroll-triggered animations

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect your repository
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Any Static Host**: Upload the `dist` folder contents

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- All contributors and the open-source community

---

**Happy Coding! 🚀**