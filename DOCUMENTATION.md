# NeuZenAI Website Documentation

## 🚀 Project Overview
**NeuZenAI** is a premium, high-performance web application built to showcase next-generation AI solutions. The website is designed with a modern aesthetic, featuring deep-tech themes (Orange & Black), glassmorphism, and interactive animations.

---

## 🛠 Technology Stack
- **Framework**: [React 19](https://react.dev/) (Vite-powered)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: 
  - **Vanilla CSS**: Custom utility-first system defined in `index.css`.
  - **Modular CSS**: Page-specific styles (e.g., `Home.css`, `About.css`).
  - **Mobile-First**: Dedicated `mobile.css` for cross-device responsiveness.

---

## 📂 Directory Structure

```text
NeuzenAI_Website_2/
├── public/                 # Static assets (images, logos, icons)
├── src/
│   ├── assets/             # Raw assets used in components
│   ├── components/         # Reusable global components
│   ├── pages/              # Main route components
│   ├── styles/             # Global style overrides (mobile.css)
│   ├── App.jsx             # Main router and layout wrapper
│   ├── index.css           # Design system and utility classes
│   └── main.jsx            # Entry point
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration
```

---

## 🎨 Design System

### Color Palette
- **Primary (Orange)**: `#F97316` (Used for CTAs, highlights, and branding)
- **Secondary (Black)**: `#000000` (Used for backgrounds and text contrast)
- **Glass Effect**: `rgba(255, 255, 255, 0.85)` with `backdrop-filter: blur(12px)`

### Typography
- **Headings**: `Outfit`, sans-serif (Bold, premium feel)
- **Body**: `Inter`, sans-serif (Clean, readable)

### Utility Classes
We use a "Mini-Tailwind" approach in `index.css`. Common classes include:
- `.container`: Standardized max-width (1280px).
- `.flex`, `.grid`: Layout engines.
- `.btn-primary`: The branded orange button style.
- `.glass-card`: Standardized card style with blur and subtle border.

---

## 🧩 Core Components

Detailed breakdown of the components found in `src/components/`:

### 1. `Navbar.jsx`
- **Purpose**: Global navigation bar with logic for scrolling and mobile menus.
- **Key Features**:
  - **Glassmorphism**: Changes background from transparent to glass-white on scroll.
  - **Dynamic Dropdowns**: Interactive menus for "Capabilities", "Industries", and "Products".
  - **Responsive**: Includes a toggle-able mobile menu (`Menu`/`X` icons).
  - **Routes**: Integrated with `react-router-dom`'s `Link`.

### 2. `Footer.jsx`
- **Purpose**: Brand-focused footer with site-wide links and contact info.
- **Sections**: Company info, Services links, Industries, and Social links.

### 3. `GravityBackground.jsx`
- **Purpose**: High-performance particle animation used in the Hero section.
- **Technical**: Uses Canvas/SVG to create an "antigravity" effect, providing a technical and innovative first impression.

### 4. `NeuralBackground.jsx`
- **Purpose**: Global background component that renders a subtle neural-network network pattern using CSS/SVG.
- **Visuals**: Provides depth to the site without distracting from the main content.

---

## 📄 Page Architecture

Detailed breakdown of all pages found in `src/pages/`:

### Main Navigation Pages
| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home.jsx` | Landing page featuring Hero, Story, Capabilities, Industry metrics, and Success Stories. |
| `/about` | `About.jsx` | Detailed company narrative, vision, and values. |
| `/services` | `Services.jsx` | Overview of all AI-driven capabilities. |
| `/industries` | `Industries.jsx` | Summary of sectors served (Media, Health, etc.). |
| `/products` | `Products.jsx` | Showcase page for NeuZenAI products. |
| `/case-studies` | `CaseStudies.jsx` | Grid of client success stories with key performance metrics. |
| `/careers` | `Careers.jsx` | Information on joining NeuZenAI and open roles. |
| `/insights` | `Insights.jsx` | Educational content and thought leadership. |
| `/contact` | `Contact.jsx` | Lead generation form and office locations. |

### 🚀 External Product Ecosystem
The following proprietary products are linked via the Navbar and direct users to their respective platforms:
- **[SwassAI](https://swass.neuzenai.com/)**: Intelligent Swass solutions.
- **[LensAI](https://lens.neuzenai.com/)**: Computer vision and analysis platform.
- **[NvisionAI](https://nvision.neuzenai.com/)**: Advanced visualization and predictive insights.
- **[Flux](https://fluxai.neuzenai.com/login)**: Enterprise AI login portal.

### Capability Detail Pages
Detailed services offered under `/services/`:
- `AdvancedAnalytics.jsx`: Statistical models and predictive tools.
- `CustomAI.jsx`: Bespoke ML models tailored to specific business needs.
- `AIStrategy.jsx`: Adoption roadmaps and consulting.
- `ProcessAutomation.jsx`: Intelligent RPA and workflow optimization.

### Industry Detail Pages
Sector-specific solutions under `/industries/`:
- `MediaEntertainment.jsx`: Content recommendation and spectator analytics.
- `HealthcareInsurance.jsx`: Risk assessment and claims automation.
- `TransportationLogistics.jsx`: Route optimization and fleet management.
- `EcommerceRetail.jsx`: Personalization and inventory AI.

### Specialty Pages
- `CaseStudyDetail.jsx`: Dynamic detail view for specific client projects.

---

## 💻 Development Workflow

### Installation
```bash
npm install
```

### Run Locally
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## 📱 Responsiveness
The project follows a mobile-first strategy. 
- **Base Styles**: `index.css` handles Desktop and general layout.
- **Mobile Overrides**: `src/styles/mobile.css` handles specific breakpoints:
  - `max-width: 991px`: General mobile/tablet adjustments.
  - `max-width: 768px`: Stacked layouts and hidden elements.
  - `max-width: 480px`: Aggressive font scaling and padding adjustments for phones.

---

## 💡 Best Practices for Scaling
1. **New Pages**: Create a `.jsx` file in `src/pages/`, add a corresponding `.css` if needed, and register the route in `src/App.jsx`.
2. **Components**: Keep components stateless where possible. Use Lucide icons consistently for a unified look.
3. **Styles**: Use CSS variables defined in `:root` of `index.css` to maintain brand consistency.
