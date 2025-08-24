# Creative Personal Website

A playful, interactive personal website with mouse-tracking eyes and a radial navigation menu. Built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- **Interactive Portrait**: Eyes that follow your mouse pointer with realistic movement constraints
- **Radial Menu**: Circular navigation around the portrait with smooth hover effects
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Accessibility**: Full keyboard navigation, ARIA labels, and reduced motion support
- **SEO Optimized**: Proper meta tags, semantic HTML, and performance optimized
- **Professional Pages**: Resume, Portfolio, Contact, and About sections

## 🎨 Design Philosophy

**"Creative but professional -- playful, minimal, fast"**

- Near-monochrome color palette with electric cyan accents
- Space Grotesk and Inter typography for modern readability
- Smooth animations and micro-interactions
- Clean, minimal layout with purposeful whitespace

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd <your-project-name>

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
# Build optimized version
npm run build

# Preview production build
npm run preview
```

## 🖼️ Customizing Your Portrait

1. **Replace the placeholder image**:
   - Add your portrait image to `src/assets/` (recommended: 512x512px, circular crop works best)
   - Update the import in `src/components/InteractivePortrait.tsx`:
   ```tsx
   import yourPhoto from '@/assets/your-photo.png';
   ```

2. **Adjust eye positions** (if needed):
   - Modify the `.eye-left` and `.eye-right` CSS classes in `src/index.css`
   - Fine-tune the `top` and `left/right` percentages to match your photo

## 📝 Content Customization

### Personal Information
- Update contact details in `src/pages/Contact.tsx`
- Modify the resume content in `src/pages/Resume.tsx`
- Replace project information in `src/pages/Portfolio.tsx`
- Personalize the about section in `src/pages/About.tsx`

### Resume PDF
- Replace `public/assets/resume.pdf` with your actual resume
- The download button in the Resume page will automatically serve the new file

### Site Metadata
- Update the `<title>` and meta tags in `index.html`
- Modify the SEO content in each page component

## 🎯 Key Components

### InteractivePortrait
- **Eye Tracking**: Pupils follow mouse movement within realistic bounds
- **Blinking**: Random blinks every 6-10 seconds
- **Mobile Support**: Eyes track touch position
- **Accessibility**: Respects `prefers-reduced-motion` setting

### RadialMenu
- **Responsive Layout**: Adjusts spacing based on screen size
- **Keyboard Navigation**: Full tab navigation support
- **Hover Effects**: Smooth scale and rotation animations

## 🔧 Technical Details

### Eye Tracking Algorithm
- Calculates relative mouse position to portrait center
- Constrains pupil movement within eye boundaries (30% of eye size)
- Uses trigonometry for natural eye movement
- Includes smooth CSS transitions for realistic motion

### Performance Optimizations
- Lazy loading for images
- CSS-based animations over JavaScript
- Efficient event listeners with cleanup
- Optimized bundle size with tree shaking

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Graceful Degradation
- Static eyes for users with `prefers-reduced-motion`
- Fallback fonts for typography
- Progressive enhancement for animations

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel
1. Import your GitHub repository
2. Vercel auto-detects React settings
3. Deploy!

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run build && npm run deploy`

## 🎨 Customization Tips

### Color Scheme
- Modify CSS custom properties in `src/index.css`
- All colors use HSL format for easy adjustment
- Main accent color: `--electric: 195 100% 50%`

### Typography
- Google Fonts are loaded in `src/index.css`
- Font families defined in design system
- Easy to swap fonts by updating imports and CSS variables

### Animations
- All animations respect `prefers-reduced-motion`
- Timing and easing curves defined in CSS custom properties
- Easy to adjust animation speeds globally

## 🐛 Troubleshooting

### Eyes not tracking properly
- Check that the portrait image is properly centered
- Adjust eye position CSS if using a different aspect ratio image
- Ensure mouse events aren't being blocked by other elements

### Mobile touch not working
- Verify touch events are enabled
- Check for CSS pointer-events blocking touches
- Test on actual devices, not just browser dev tools

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Built with curiosity and caffeine** ☕