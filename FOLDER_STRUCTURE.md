# Project Folder Structure

## Overview
This project has been reorganized with a modern, scalable folder structure that follows React best practices.

## Directory Structure

```
src/
├── assets/              # Static assets (images, icons, etc.)
├── components/          # Reusable UI components
│   ├── JsPlayground.jsx
│   ├── JsPlayground.css
│   ├── LivePlayground.jsx
│   ├── LivePlayground.css
│   ├── MobileMenu.jsx
│   ├── MobileMenu.css
│   ├── ThemeToggle.jsx
│   └── ThemeToggle.css
├── hooks/              # Custom React hooks
│   ├── useTheme.js     # Theme management hook
│   └── useMediaQuery.js # Responsive design hook
├── layout/             # Layout components
│   ├── MainLayout.jsx
│   └── MainLayout.css
├── modules/            # Feature modules
│   ├── css/
│   ├── fundamentals/
│   └── javascript/
├── styles/             # Global styles and themes
│   └── theme.css       # Theme system with CSS variables
├── App.jsx             # Main app component
├── App.css             # App-specific styles
├── index.css           # Entry point for global styles
└── main.jsx            # Application entry point
```

## Key Features

### 1. Theme System (`src/styles/theme.css`)
- **Light and Dark themes** with CSS variables
- **Automatic theme detection** based on system preferences
- **Theme persistence** in localStorage
- **Smooth transitions** between themes

### 2. Responsive Design
- **Mobile-first approach** with breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Collapsible sidebar** on mobile devices
- **Mobile menu** with overlay
- **Responsive grids** and layouts

### 3. Custom Hooks
- **`useTheme`**: Manages theme state and persistence
- **`useMediaQuery`**: Handles responsive breakpoints

### 4. Components
- **ThemeToggle**: Button to switch between light/dark themes
- **MobileMenu**: Slide-in menu for mobile navigation
- **LivePlayground**: Interactive code playground
- **JsPlayground**: JavaScript code execution playground

## Styling Approach

### CSS Variables
All colors, spacing, shadows, and other design tokens are defined as CSS variables in `theme.css`, making it easy to:
- Switch between themes
- Customize the design
- Maintain consistency

### Responsive Breakpoints
```css
/* Mobile */
@media (max-width: 767px) { ... }

/* Tablet */
@media (min-width: 768px) and (max-width: 1023px) { ... }

/* Desktop */
@media (min-width: 1024px) { ... }
```

## Usage

### Using the Theme
The theme is automatically applied via the `useTheme` hook. Users can toggle between light and dark themes using the theme toggle button in the header.

### Adding New Components
1. Create component file in `src/components/`
2. Create corresponding CSS file
3. Use CSS variables from `theme.css` for styling
4. Ensure responsive design with media queries

### Adding New Hooks
1. Create hook file in `src/hooks/`
2. Export the hook function
3. Import and use in components

## Benefits

1. **Maintainability**: Clear separation of concerns
2. **Scalability**: Easy to add new features and components
3. **Consistency**: Centralized theme system
4. **Responsiveness**: Mobile-friendly design
5. **Accessibility**: Proper semantic HTML and ARIA labels
6. **Performance**: Optimized CSS with CSS variables

