# GGSIPU ACM - Announcements Landing Page

A responsive landing page for announcements based on the Figma design for GGSIPU ACM New Website.

## 🎨 Design Implementation

This landing page has been faithfully recreated from the Figma design with:
- **Exact color matching**: Including the gradient title, pink button (#E644A3), and transparent card background
- **Precise typography**: Using Lexend and Poppins fonts with matching sizes, weights, and letter spacing
- **Layout accuracy**: 1492px × 765px container with matching spacing and gaps
- **Visual effects**: Glassmorphism blur, gradient text, and drop shadows

## 📁 Project Structure

```
Announcement Page/
├── index.html              # Main HTML structure
├── style.css               # All styling and responsive design
├── README.md              # This file
└── assets/
    └── images/
        ├── background-blur.svg        # Background blur effect
        └── event-image-31e03c.png     # Event poster image
```

## 🚀 Features

### Design Elements
- **Glassmorphism Card**: Transparent background with backdrop blur
- **Gradient Title**: "Announcements" with white-to-dark-blue gradient
- **Event Layout**: Horizontal layout with content and image (150px gap)
- **Pink CTA Button**: "Register Now" button with hover effects
- **Image Effects**: Drop shadow and inset shadow on event image

### Responsive Design
- **Desktop** (>1600px): Full design as specified
- **Large Tablets** (1200-1600px): Slightly scaled down
- **Tablets** (768-1200px): Vertical stacking of content
- **Mobile** (480-768px): Compact layout with adjusted sizing
- **Small Mobile** (<480px): Optimized for small screens

### Typography
- **Title**: Lexend 500, 72px, black
- **Event Title**: Lexend 500, 58px, black
- **Description**: Poppins 400, 24px, white
- **Button**: Lexend 400, 28px, white

### Colors
- Background: `#FFFFFF` (white)
- Card: `#87CEEB` (sky blue)
- Button: `#E644A3` (magenta) with hover opacity effect
- Title Text: `#000000` (black) for "Announcements"
- Event Title: `#000000` (black) for "Aagaz 4.0"
- Description Text: `#FFFFFF` (white)

## 🎯 Usage

Simply open `index.html` in a web browser to view the landing page. No build process required.

### Customization

To update the content:

1. **Event Information**: Edit the text in `index.html` (lines 22-25)
2. **Event Image**: Replace `assets/images/event-image-31e03c.png`
3. **Button Text**: Update the button text in `index.html` (line 27)
4. **Colors**: Modify CSS variables in `style.css`

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- The design maintains exact pixel-perfect dimensions from Figma
- All fonts are loaded from Google Fonts
- Images are optimized and properly sized
- CSS is organized for easy maintenance
- Fully responsive without JavaScript requirements

## 🎨 Design Specs

- **Container**: 1492px × 765px
- **Title**: 589px × 92.54px
- **Card**: 1492px × 637.5px
- **Button**: 324px × 63px
- **Image**: 442px × 442px
- **Border Radius**: 20px (card), 8px (button), 10px (image)

---

Designed for GGSIPU ACM New Website

