# GGSIPU ACM - Announcements React App

A React.js application with Tailwind CSS for the GGSIPU ACM Announcements page, converted from the original HTML/CSS version.

## 🚀 Tech Stack

- **React 18** - UI Library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **Google Fonts** - Lexend and Poppins fonts

## 📁 Project Structure

```
announcement-page/
├── src/
│   ├── components/
│   │   └── AnnouncementCard.jsx    # Main announcement card component
│   ├── assets/
│   │   └── images/                 # Image assets
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # App entry point
│   └── index.css                   # Global styles
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
└── README-REACT.md                 # This file
```

## 🛠️ Installation

1. **Install dependencies:**
```bash
npm install
```

## 🏃 Running the App

**Development mode:**
```bash
npm run dev
```
This will start the Vite dev server at `http://localhost:5173`

**Build for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

## 🎨 Features

- ✅ **React Components** - Modular, reusable components
- ✅ **Tailwind CSS** - Utility-first styling with responsive design
- ✅ **Responsive Design** - Works on all screen sizes
- ✅ **Fast Development** - Hot module replacement with Vite
- ✅ **Optimized Build** - Production-ready builds
- ✅ **Same Design** - Exact visual match with original HTML/CSS

## 📦 Dependencies

### Production
- `react` - React library
- `react-dom` - React DOM renderer

### Development
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin for Vite
- `tailwindcss` - CSS framework
- `autoprefixer` - CSS vendor prefixes
- `postcss` - CSS processor
- `eslint` - Linting

## 🎯 Components

### App.jsx
Main application component that renders the title and announcement card.

### AnnouncementCard.jsx
The announcement card component containing:
- Background blur effect
- Event title and description
- Register button
- Event image

## 📝 Notes

- All styles are converted to Tailwind CSS utility classes
- Custom fonts (Lexend and Poppins) are loaded via Google Fonts
- Image assets should be moved to `src/assets/images/`
- The component is fully responsive with Tailwind breakpoints
- Hover effects and transitions are maintained

## 🆚 Migration from HTML/CSS

### Changes Made:

1. **Converted classes to Tailwind:**
   - `container` → Tailwind flex and max-width utilities
   - `announcement-card` → Tailwind bg, rounded, backdrop-filter
   - `register-btn` → Tailwind button styling with hover

2. **Component Structure:**
   - Split into modular React components
   - Separated AnnouncementCard for reusability

3. **Styling Approach:**
   - Replaced custom CSS with Tailwind utilities
   - Maintained exact pixel values where needed
   - Used `font-['Lexend']` syntax for custom fonts

4. **Responsive Design:**
   - Tailwind breakpoints: `sm`, `md`, `lg`, `xl`
   - Maintained original responsive behavior

---

**Original Design:** HTML/CSS
**Converted Design:** React.js + Tailwind CSS

