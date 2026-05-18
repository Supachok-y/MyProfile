# Supachok Yotphet — Personal Portfolio

Personal portfolio website built with React, Three.js, and TailwindCSS. Deployed on Vercel.

## Tech Stack

| Category | Tools |
|---|---|
| Framework | React 18 + Vite |
| Styling | TailwindCSS |
| 3D / WebGL | Three.js, React Three Fiber, @react-three/drei |
| Smooth Scroll | Lenis |
| Routing | React Router DOM |

## Project Structure

```
src/
├── pages/
│   ├── HomePage.jsx        # Main portfolio page
│   └── Learn3dPage.jsx     # Interactive 3D playground
├── components/
│   ├── sections/           # Hero, Skills, Projects, Experience, Education, Certificates, Languages, Footer
│   ├── three/              # CoinBackground, Scene3D, CoinDraggable
│   └── ui/                 # Shared UI components, Icons
├── hooks/
│   └── useLenis.js         # Smooth scroll hook
└── index.css
```

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Deployment

Deployed on Vercel. The `vercel.json` rewrites all routes to `index.html` to support SPA client-side routing.

## Contact

- Email: supachok.yotphet@gmail.com
- GitHub: https://github.com/Supachok-y
