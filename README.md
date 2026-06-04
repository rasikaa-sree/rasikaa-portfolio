# Rasikaa Sree S — Portfolio

A React portfolio website with full routing and case study pages.

## Project Structure

```
src/
├── App.jsx                  # Router setup
├── styles/
│   └── globals.css          # CSS variables & shared styles
├── data/
│   └── index.js             # All content (projects, experience, etc.)
├── components/
│   ├── FadeIn.jsx            # Scroll-triggered fade animation
│   ├── Navbar.jsx / .css     # Fixed responsive navbar
│   ├── Footer.jsx / .css     # Footer with links
│   └── ProjectCard.jsx / .css  # Reusable project card
└── pages/
    ├── Home.jsx / .css       # Full home page (all sections)
    └── CaseStudy.jsx / .css  # Individual project case study
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Home page with all sections |
| `/project/lirante` | Lirante case study |
| `/project/calathea` | Calathea case study |
| `/project/fintrack` | FinTrack case study |
| `/project/medsync` | MedSync case study |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build for production
npm run build
```

## Customization

- **Content**: Edit `src/data/index.js` to update projects, experience, testimonials, blog posts
- **Colors**: Edit CSS variables in `src/styles/globals.css`
- **Add a project**: Add a new object to the `projects` array in `data/index.js` with the same shape
- **Fonts**: Change the Google Fonts import in `globals.css`

## Dependencies

- React 18
- React Router DOM v6
- No other dependencies — all styles are plain CSS
