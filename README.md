# Porto App - Professional Portfolio

A modern, responsive portfolio application built with Vue 3, Vuetify, and Vite. Features a beautiful glass morphism design with animated aurora backgrounds and smooth navigation.

![Porto App Preview](https://via.placeholder.com/800x400/1e223c/00eaff?text=Porto+App+Preview)

## ✨ Features

- **Modern Design**: Glass morphism UI with animated aurora backgrounds
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Navigation**: Bottom navigation with hover animations
- **Multiple Pages**: Home, About, Blog, Projects, and Certifications
- **Interactive Components**: Hover effects, animations, and micro-interactions
- **Professional Content**: Portfolio sections with real-world examples

## 🚀 Pages

### 🏠 Home
- Profile header with social links
- Recent blog posts
- Experience timeline
- Featured projects
- Music player integration
- Contact information
- Certification highlights

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

## 🛠️ Tech Stack

- **Frontend Framework**: Vue 3 with Composition API
- **UI Framework**: Vuetify 3
- **Build Tool**: Vite
- **Routing**: Vue Router 4
- **Styling**: SCSS with CSS custom properties
- **Icons**: Font Awesome
- **Animations**: CSS animations and transitions

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/porto-app.git
   cd porto-app
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
porto-app/
├── src/
│   ├── assets/          # Global styles and assets
│   ├── components/      # Reusable Vue components
│   │   ├── layout/      # Layout-specific components
│   │   └── icons/       # Icon components
│   ├── router/          # Vue Router configuration
│   ├── stores/          # Pinia stores (if needed)
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── views/           # Page components
│   ├── App.vue          # Root component
│   └── main.js          # Application entry point
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## 🎨 Design System

### Colors
- **Primary**: `#00eaff` (Cyan)
- **Background**: `#181926` (Dark blue)
- **Glass**: `rgba(30, 34, 60, 0.65)` with backdrop blur
- **Text**: `#ffffff` (White) and `#b0b0b0` (Gray)

### Typography
- **Font Family**: Inter, Roboto, Arial, sans-serif
- **Headings**: Bold weights with letter-spacing
- **Body**: Regular weight with optimal line-height

### Components
- **Glass Cards**: Semi-transparent with blur effects
- **Aurora Background**: Animated gradient overlays
- **Interactive Elements**: Hover states and transitions
- **Responsive Grid**: Flexible layouts for all screen sizes

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/views/`
2. Add the route in `src/router/index.js`
3. Update the navigation in `src/components/BottomNav.vue`

### Styling
- Global styles in `src/assets/main.css`
- Component-specific styles use scoped CSS
- Follow the existing design patterns for consistency

### Content
- Update profile information in `ProfileHeaderCard.vue`
- Modify project data in `ProjectsView.vue`
- Edit blog posts in `BlogView.vue`
- Update certifications in `CertificationsView.vue`

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
- [Vuetify](https://vuetifyjs.com/) - Material Design component framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Font Awesome](https://fontawesome.com/) - Icon library

## 📞 Contact

- **Portfolio**: Coming Soon!
- **LinkedIn**: [Your LinkedIn] (https://fontawesome.com/)
- **GitHub**: [Your GitHub] (https://www.linkedin.com/in/fauzan-ramadhani-0a4ab4247/)
- **Email**: [fauzanramadhani06@gmail.com](mailto:fauzanramadhani06@gmail.com)

---

Made with ❤️ using Vue 3 and Vuetify
