# Arlingga Cahya Ramdhana — Portfolio

A clean, minimal, non-scrollable portfolio built with **React + Vite**.

## Getting Started

```bash
# Install dependencies
yarn install

# Start dev server
yarn run dev

# Build for production
yarn run build

# Preview production build
yarn run preview
```

## Project Structure

```
src/
├── main.jsx                     # Entry point
├── App.jsx                      # Root component + keyboard navigation
├── App.css                      # Global styles & design tokens
├── data/
│   └── resume.js                # All content: skills, experience, projects, certs
└── components/
    ├── Sidebar.jsx              # Left sidebar with nav + contact links
    └── panels/
        ├── IntroPanel.jsx       # Introduction + skills
        ├── ExperiencePanel.jsx  # Work history timeline
        ├── ProjectsPanel.jsx    # Side projects
        └── EducationPanel.jsx   # Education + certifications
```

## Customising Content

All content lives in `src/data/resume.js` — edit that file to update your skills, experience, projects, and certifications.

## Navigation

- Click sidebar items to switch panels
- Use **↑ / ↓** or **← / →** arrow keys to navigate between sections
- Active panel is persisted in `localStorage`
