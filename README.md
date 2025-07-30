# Porto Vue - Professional Portfolio

A modern, responsive portfolio application built with Vue 3 and Vite. Features a beautiful glass-morphism design with elegant animations and a comprehensive admin panel for content management.

![Porto Vue Preview](https://via.placeholder.com/800x400/0f0f23/00eaff?text=Porto+Vue+Preview)

## ✨ Features

- **Modern Design**: Glass-morphism UI with elegant animations and gradients
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Navigation**: Bottom navigation with hover animations
- **Multiple Pages**: Home, About, Blog, Projects, and Certifications
- **Interactive Components**: Hover effects, animations, and micro-interactions
- **Admin Panel**: Complete content management system with drawer layout
- **SVG Icons**: Custom SVG icons throughout the application
- **Professional Content**: Portfolio sections with real-world examples

## 🚀 Pages

### 🏠 Home
- Profile header with social links
- Recent blog posts with elegant cards
- Experience timeline with company logos
- Featured projects with technology tags
- Music player integration
- Contact information
- Certification highlights
- Arrow navigation buttons for each section

### 👤 About
- Detailed personal information
- Skills organized by category
- Interactive skill tags
- Professional statistics
- Experience overview

### 📝 Blog
- Latest blog posts with images
- Category filtering
- Popular tags cloud
- Read time and metadata
- Responsive post layout

### 💼 Projects
- Project showcase with images
- Technology stack tags
- Category filtering
- Project descriptions
- Interactive project cards

### 🏆 Certifications
- Professional certifications display
- Status indicators (Completed/In Progress)
- Credential verification links
- Issuer logos and details
- Statistics summary

### 🔐 Admin Panel (`/admin`)
- **Secure Login**: Beautiful login page with glass-morphism design
- **Drawer Layout**: Responsive sidebar that auto-opens on large screens
- **Content Management**: 
  - About: List, Add, Edit pages
  - Blog: List, Add, Edit pages
  - Projects: List, Add, Edit pages
  - Certifications: List, Add, Edit pages
- **Smart Navigation**: Auto-expanding submenus based on current route
- **SVG Icons**: Custom icons throughout the admin interface
- **Logout Functionality**: Secure logout button at bottom of drawer

## 🛠️ Tech Stack

- **Frontend Framework**: Vue 3 with Composition API
- **Build Tool**: Vite
- **Routing**: Vue Router 4
- **Styling**: CSS with glass-morphism effects
- **Icons**: Custom SVG icons
- **Animations**: CSS animations and transitions
- **Responsive Design**: Mobile-first approach

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/porto-vue.git
   cd porto-vue
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build Commands

```bash
# Development with hot-reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
porto-vue/
├── src/
│   ├── assets/                    # Global styles and assets
│   │   ├── base.css              # Base styles
│   │   ├── logo.svg              # Logo
│   │   └── main.css              # Main styles
│   ├── components/               # Reusable Vue components
│   │   ├── BottomNav.vue         # Bottom navigation
│   │   └── layout/               # Layout-specific components
│   │       └── home/             # Home page components
│   │           └── card/         # Card components
│   │               ├── CertificationCard.vue
│   │               ├── ContactCard.vue
│   │               ├── ExperienceTimelineCard.vue
│   │               ├── MusicCard.vue
│   │               ├── ProfileHeaderCard.vue
│   │               ├── ProjectCard.vue
│   │               └── RecentPostCard.vue
│   ├── router/                   # Vue Router configuration
│   │   └── index.js              # Route definitions
│   ├── views/                    # Page components
│   │   ├── AboutView.vue         # About page
│   │   ├── BlogView.vue          # Blog page
│   │   ├── CertificationsView.vue # Certifications page
│   │   ├── HomeView.vue          # Home page
│   │   └── ProjectsView.vue      # Projects page
│   ├── App.vue                   # Root component
│   └── main.js                   # Application entry point
├── public/                       # Static assets
│   └── favicon.ico              # Favicon
├── index.html                    # HTML template
├── package.json                  # Dependencies and scripts
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

## 🎨 Design System

### Colors
- **Primary**: `#00eaff` (Cyan)
- **Secondary**: `#b2b8ff` (Light blue)
- **Background**: `#0f0f23` (Dark blue)
- **Glass**: `rgba(255, 255, 255, 0.05)` with backdrop blur
- **Text**: `#ffffff` (White) and `#cfd8dc` (Light gray)

### Typography
- **Font Family**: System fonts with fallbacks
- **Headings**: Bold weights with optimal spacing
- **Body**: Regular weight with optimal line-height

### Components
- **Glass Cards**: Semi-transparent with blur effects
- **Gradient Backgrounds**: Animated gradient overlays
- **Interactive Elements**: Hover states and transitions
- **Responsive Grid**: Flexible layouts for all screen sizes
- **SVG Icons**: Custom vector icons throughout

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/views/`
2. Add the route in `src/router/index.js`
3. Update the navigation in `src/components/BottomNav.vue`

### Styling
- Global styles in `src/assets/main.css`
- Component-specific styles use scoped CSS
- Follow the existing glass-morphism design patterns

### Content
- Update profile information in `ProfileHeaderCard.vue`
- Modify project data in `ProjectsView.vue`
- Edit blog posts in `BlogView.vue`
- Update certifications in `CertificationsView.vue`

### Admin Panel
- Access admin panel at `/admin/login`
- All admin pages are ready for content management implementation
- Customize admin styling in the respective admin components

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vue.js](https://vuejs.org/) - Progressive JavaScript framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Vue Router](https://router.vuejs.org/) - Official router for Vue.js

## 📞 Contact

- **Portfolio**: [Porto Vue](https://your-portfolio-url.com)
- **LinkedIn**: [Fauzan (Gracia) Ramadhani](https://www.linkedin.com/in/fauzan-ramadhani-0a4ab4247/)
- **GitHub**: [Fauzan Ramadhani](https://github.com/fauzanramadhani)
- **Email**: [fauzanramadhani06@gmail.com](mailto:fauzanramadhani06@gmail.com)

---

Made with ❤️ using Vue 3 and Vite
