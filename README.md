# HBS Deep Tech Club - React Website

A modern, interactive React website for the Harvard Business School Automation & Deep Tech Club, built with TypeScript, styled-components, and Framer Motion.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript, and modern hooks
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Interactive Elements**: Hover effects, scroll animations, and interactive components
- **Performance Optimized**: Efficient rendering with React.memo and optimized animations
- **Accessibility**: ARIA labels, focus management, and semantic HTML
- **Modern Styling**: Styled-components with CSS-in-JS approach

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Styled-components
- **Animations**: Framer Motion
- **Build Tool**: Create React App
- **Fonts**: Google Fonts (Orbitron, Exo 2)
- **Icons**: Emoji icons for visual appeal

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with CTA
│   ├── About.tsx       # Mission and tech icons
│   ├── CoreSystems.tsx # Feature cards
│   ├── Footer.tsx      # Footer with social links
│   └── BackgroundEffects.tsx # Animated background
├── styles/             # Global styles
│   └── GlobalStyles.tsx
├── App.tsx             # Main app component
└── index.tsx           # Entry point
```

## 🎨 Design Features

- **Sci-fi Aesthetic**: Dark theme with red accent colors (#A51C30)
- **Animated Grid Background**: Moving grid pattern for depth
- **Floating Particles**: Dynamic particle system
- **Gradient Text**: Eye-catching gradient effects
- **Hover Animations**: Interactive robot popups and effects
- **Smooth Scrolling**: Seamless navigation between sections

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hbs-deep-tech-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## 🔧 Customization

### Colors
The main color scheme is defined in the styled components:
- Primary: #A51C30 (Deep Red)
- Secondary: #C8102E (Bright Red)
- Accent: #D2232A (Orange Red)

### Content
Update the content in each component:
- `Hero.tsx`: Main title and description
- `About.tsx`: Mission statement and tech icons
- `CoreSystems.tsx`: Feature cards and descriptions
- `Footer.tsx`: Social links and contact information

### Animations
Modify animation parameters in Framer Motion variants:
- Duration, easing, and delay values
- Hover and tap animations
- Scroll-triggered animations

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Focus management
- Keyboard navigation support
- Screen reader friendly

## 🎯 Performance

- Optimized animations with Framer Motion
- Efficient re-renders with React hooks
- CSS-in-JS for better performance
- Lazy loading for components

## 🔮 Future Enhancements

- **Dark/Light Theme Toggle**
- **Internationalization (i18n)**
- **Content Management System**
- **Blog/News Section**
- **Event Calendar Integration**
- **Member Portal**
- **Analytics Dashboard**

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or support, please contact the HBS Deep Tech Club team.

---

**Built with ❤️ for the HBS Deep Tech Community**
