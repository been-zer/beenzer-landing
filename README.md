<div align="center">
  <img src="images/logo.png" alt="Beenzer Logo" width="120"/>
  
  # Beenzer Landing Page
  
  ### 🚀 Revolutionary NFT Social App - Mint, Own, and Monetize Your Content
  
  [![Version](https://img.shields.io/badge/Version-1.0.0-brightgreen)](CHANGELOG.md)
  [![Website](https://img.shields.io/badge/Website-beenzer.app-blue)](https://beenzer.app)
  [![DAO Platform](https://img.shields.io/badge/DAO-dao.beenzer.app-purple)](https://dao.beenzer.app)
  [![Play Store](https://img.shields.io/badge/Download-Google_Play-green)](https://play.google.com/store/apps/details?id=beenzer.dapp)
  [![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
  
  [Live Demo](https://beenzer.app) • [DAO Platform](https://dao.beenzer.app) • [Download App](https://play.google.com/store/apps/details?id=beenzer.dapp)
  
</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Screenshots](#-screenshots)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development Workflow](#-development-workflow)
- [Usage](#-usage)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Links](#-links)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 About

**Beenzer** is a revolutionary NFT social application that empowers users to create, mint, and monetize their digital content using blockchain technology. This repository contains the official landing page for the Beenzer platform, showcasing the app's features, tokenomics, and DAO functionality.

With Beenzer, users can:
- 📸 **Create NFTs** directly from their smartphone camera
- 🎨 **Own their content** completely, without centralized control
- 💰 **Monetize creations** by selling NFTs to their community
- 🏛️ **Participate in governance** through the Beenzer DAO
- 🪙 **Invest and earn** real dividends with $BEEN and $BEENZ tokens

Unlike traditional social media platforms, Beenzer puts the power back in the hands of users, not big tech companies.

---

## 📱 Screenshots

<div align="center">
  <img src="images/app/1.PNG" alt="App Screenshot 1" width="250"/>
  <img src="images/app/2.PNG" alt="App Screenshot 2" width="250"/>
  <img src="images/app/3.PNG" alt="App Screenshot 3" width="250"/>
</div>

<div align="center">
  <em>Beenzer Mobile App - Create, Own, and Trade NFTs</em>
</div>

---

## 🎬 Demo Video

Experience the Beenzer mobile app in motion by watching our latest walkthrough:

- [Download or view the Beenzer app demo](videos/beenzer_app.mp4)

> Tip: The video is stored in the `videos/` directory inside this repository. Clone the project or click the link above on GitHub to preview it directly.

---

## ✨ Features

### Landing Page Features

- **📱 Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **🌓 Dark/Light Mode** - Automatic theme switching with user preference persistence
- **🎭 Modern UI/UX** - Beautiful gradient effects and smooth animations
- **🎨 Multiple Color Schemes** - 12+ pre-built color themes
- **📊 Interactive Statistics** - Real-time NFT metrics and user engagement data
- **🗺️ Google Maps Integration** - Location-based features for geo-NFTs
- **✨ Particle Effects** - Engaging visual effects powered by Particles.js
- **📹 Video Showcase** - Embedded demo videos of the mobile app
- **🎯 Smooth Scrolling** - Enhanced navigation with scroll animations
- **🔄 Carousel/Slider** - Interactive content galleries

### Application Features (Highlighted on Landing Page)

- **NFT Minting from Mobile Camera** - Create unique digital collectibles instantly
- **Geo-NFTs** - Location-based NFT creation and discovery
- **DAO Tokenomics** - Dual-token economy ($BEEN and $BEENZ)
- **Marketplace** (Coming Soon) - Buy, sell, and trade NFTs
- **Staking** (Coming Soon) - Earn rewards by staking tokens
- **Governance** (Coming Soon) - Vote on platform decisions

---

## 🛠️ Tech Stack

### Core Technologies

- **HTML5** - Semantic markup and modern web standards
- **CSS3** - Advanced styling with gradients, animations, and transitions
- **JavaScript (ES6+)** - Interactive functionality and DOM manipulation

### Frameworks & Libraries

- **Bootstrap 5** - Responsive grid system and UI components
- **jQuery** - DOM manipulation and event handling
- **Owl Carousel** - Touch-enabled carousel/slider
- **Particles.js** - Animated particle backgrounds
- **WOW.js** - Scroll-triggered animations
- **Animate.css** - Pre-built CSS animations
- **Font Awesome** - Icon library
- **Elegant Icons** - Additional icon sets
- **ET-Line Icons** - Custom line icons

### External Integrations

- **Google Maps API** - Map integration for geo-location features
- **Google Fonts** - Custom typography

### Design Features

- **Custom Font Families** - Multiple font options (3 custom fonts included)
- **Color Schemes** - 12+ pre-designed color themes
- **Design Modes** - Modern, Retro, Pure, Pop, Clivus, and custom variations
- **RTL Support** - Right-to-left language compatibility

---

## 📁 Project Structure

```
beenzer-landing/
│
├── index.html              # Main landing page
├── dao.html                # DAO information page
├── favicon.ico             # Site favicon
├── README.md               # Project documentation
├── settings.json           # Editor settings
│
├── css/                    # Stylesheets
│   ├── bootstrap.min.css   # Bootstrap framework
│   ├── style.css           # Main custom styles
│   ├── plugins.css         # Plugin styles
│   ├── coloring.css        # Color utilities
│   ├── coloring-gradient.css # Gradient color schemes
│   ├── de-*.css            # Design variations (modern, retro, etc.)
│   ├── custom-font-*.css   # Custom font definitions
│   └── colors/             # Color scheme variations
│
├── js/                     # JavaScript files
│   ├── designesia.js       # Main theme functionality
│   ├── plugins.js          # jQuery plugins bundle
│   ├── particles.js        # Particle effect library
│   ├── particles-settings.js # Particle configurations
│   ├── map.js              # Google Maps integration
│   ├── validation.js       # Form validation
│   └── cookit.js           # Cookie consent
│
├── images/                 # Image assets
│   ├── logo.png            # Main logo
│   ├── logo-light.png      # Light theme logo
│   ├── app/                # App screenshots
│   ├── dao/                # DAO graphics
│   ├── background/         # Background images
│   ├── misc/               # Miscellaneous assets
│   ├── author/             # Author avatars
│   ├── items/              # NFT item thumbnails
│   ├── collections/        # Collection images
│   └── ...                 # Other asset categories
│
├── fonts/                  # Font files
│   ├── elegant_font/       # Elegant icon font
│   └── et-line-font/       # ET-Line icon font
│
├── videos/                 # Video assets
│   ├── app.mp4             # Legacy app demonstration video
│   └── beenzer_app.mp4     # Updated Beenzer walkthrough
│
└── html/                   # Additional HTML templates
    ├── 02_dark-*.html      # Dark mode page variations
    └── ...                 # Other template pages
```

---

## 🚀 Getting Started

### Prerequisites

To run this project locally, you'll need:

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended for full functionality)
- Git (for cloning the repository)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/alexcolls/beenzer-landing.git
cd beenzer-landing
```

2. **Open in browser**

You can simply open `index.html` directly in your browser, or use a local server:

**Option A: Using Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option B: Using Node.js (http-server)**
```bash
npx http-server -p 8000
```

**Option C: Using PHP**
```bash
php -S localhost:8000
```

**Option D: Using VS Code**
- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

3. **Access the site**

Open your browser and navigate to:
```
http://localhost:8000
```

---

## 🔄 Development Workflow

This project uses a branching strategy for organized development:

### Branch Structure

- **`main`** - Production-ready code, stable releases
- **`dev`** - Development branch for all new features and fixes
- **`feature/*`** - Optional feature branches for larger changes

### Development Process

1. **Start from dev branch**

```bash
git checkout dev
git pull origin dev
```

2. **Make your changes**

Edit files as needed using your preferred editor.

3. **Test locally**

Open the files in a local web server and test all changes:
- Check responsive design on different screen sizes
- Test dark/light mode switching
- Verify all links and navigation work correctly
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)

4. **Commit with meaningful messages**

Use emoji prefixes for clarity:

```bash
git add <files>
git commit -m "✨ Add new feature"
```

Common prefixes:
- 🌿 Branch operations
- 📝 Content updates
- 🔧 Bug fixes
- ♿ Accessibility improvements
- ⚡ Performance optimizations
- 📱 Responsive design changes
- 🔍 SEO improvements
- 📚 Documentation updates

5. **Push to dev**

```bash
git push origin dev
```

6. **Merge to main when ready**

Only merge to `main` when the `dev` branch is stable and tested:

```bash
git checkout main
git merge dev
git push origin main
```

### Version Management

The project follows semantic versioning (MAJOR.MINOR.PATCH):
- **PATCH** (0.9.x) - Bug fixes, content updates, minor improvements
- **MINOR** (0.x.0) - New features, significant enhancements
- **MAJOR** (x.0.0) - Major releases (requires explicit decision)

Update the version in `CHANGELOG.md` following these rules:
- Stay within the current major version (e.g., 0.9.x → 0.9.y or 0.10.0)
- Do NOT increment to next major version without explicit approval
- Document all changes in the CHANGELOG

### Quick Reference

```bash
# Check current branch
git branch --show-current

# Switch to dev branch
git checkout dev

# Create a new feature branch (optional)
git checkout -b feature/my-new-feature

# View changes
git status
git diff

# Stage and commit
git add .
git commit -m "✨ Your commit message"

# Push changes
git push origin dev
```

### Configuration

**Google Maps API (Optional)**

If you want to use the map functionality, you'll need to:

1. Get a Google Maps API key from the [Google Cloud Console](https://console.cloud.google.com/)
2. Replace the placeholder in `dao.html` (line 701):

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&v=weekly" defer></script>
```

---

## 💻 Usage

### Main Pages

- **index.html** - Main landing page showcasing the Beenzer app features
- **dao.html** - DAO information with tokenomics details

### Navigation Structure

The site includes the following main sections:

**App Page (index.html)**
- Home - Hero section with app introduction
- Own - NFT ownership benefits
- Create - Content creation features
- Drop - NFT dropping functionality
- Monetize - Revenue generation options
- Features - Platform capabilities
- Team - Team member profiles
- News - Latest updates and announcements

**DAO Page (dao.html)**
- Tokenomics - Token economy overview
- Minting - Token minting process
- Burning - Token burning mechanism
- Staking - Coming soon
- Governance - Coming soon
- Marketplace - Coming soon
- Stats - Coming soon

---

## 🎨 Customization

### Changing Color Schemes

The landing page includes multiple color schemes located in the `css/colors/` directory:

```html
<!-- In index.html or dao.html, modify this line: -->
<link id="colors" href="css/colors/scheme-12.css" rel="stylesheet" type="text/css" />
```

Available schemes: `scheme-01.css` through `scheme-12.css`

### Design Variations

Switch between different design modes by changing the design stylesheet:

```html
<link href="css/de-modern.css" rel="stylesheet" type="text/css" />
```

Available designs:
- `de-modern.css` - Modern design (default)
- `de-retro.css` - Retro style
- `de-pure.css` - Minimalist design
- `de-pop.css` - Pop art style
- `de-clivus.css` - Clivus variation
- `de-black.css` - Black theme
- `de-grey.css` - Grey theme
- `de-custom-1.css` - Custom variation

### Custom Fonts

Choose from 3 custom font families:

```html
<link href="css/custom-font-1.css" rel="stylesheet" type="text/css" />
<link href="css/custom-font-2.css" rel="stylesheet" type="text/css" />
<link href="css/custom-font-3.css" rel="stylesheet" type="text/css" />
```

### Gradient Colors

Enable gradient color schemes:

```html
<link href="css/coloring-gradient.css" rel="stylesheet" type="text/css" />
```

### Modifying Content

1. **Text Content** - Edit directly in `index.html` or `dao.html`
2. **Images** - Replace files in the `images/` directory
3. **Videos** - Add your videos to the `videos/` directory
4. **Styles** - Modify `css/style.css` for custom styling
5. **Scripts** - Update `js/designesia.js` for custom functionality

---

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select the branch (usually `main`)
4. Click Save
5. Your site will be live at `https://yourusername.github.io/beenzer-landing/`

### Netlify

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - **Build command:** (leave empty)
   - **Publish directory:** `/`
3. Click "Deploy site"

### Vercel

1. Import your GitHub repository to Vercel
2. Configure project:
   - **Framework Preset:** Other
   - **Root Directory:** `./`
3. Click "Deploy"

### Traditional Web Hosting

1. Upload all files via FTP/SFTP to your web server
2. Ensure `index.html` is in the root directory
3. Set proper file permissions (644 for files, 755 for directories)

### Pre-Deployment Checklist

- [ ] Replace Google Maps API key with your own
- [ ] Update meta tags (title, description, keywords)
- [ ] Optimize images for web (compress, resize)
- [ ] Test all links and navigation
- [ ] Verify mobile responsiveness
- [ ] Test dark/light mode switching
- [ ] Check browser compatibility
- [ ] Remove any development/debug code

---

## 🤝 Contributing

We welcome contributions to the Beenzer Landing Page! Here's how you can help:

### Reporting Issues

1. Check existing issues to avoid duplicates
2. Use the issue template (if available)
3. Provide detailed information:
   - Browser and version
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Submitting Pull Requests

1. **Fork** the repository
2. **Create** a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit** your changes with descriptive messages:
   ```bash
   git commit -m "✨ Add new feature: description"
   ```
4. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open** a Pull Request with a clear title and description

### Development Guidelines

- Follow existing code style and conventions
- Test thoroughly across different browsers
- Ensure responsive design works on all screen sizes
- Comment your code where necessary
- Update documentation for significant changes

---

## 🔗 Links

### Official Platforms

- **Website:** [https://beenzer.app](https://beenzer.app)
- **DAO Platform:** [https://dao.beenzer.app](https://dao.beenzer.app)
- **Mobile App (Android):** [Download on Google Play](https://play.google.com/store/apps/details?id=beenzer.dapp)
- **GitHub:** [https://github.com/alexcolls/beenzer-landing](https://github.com/alexcolls/beenzer-landing)

### Social Media

- **X (Twitter):** [@beenzer_app](https://x.com/beenzer_app)
- **Instagram:** [@beenzer_app](https://instagram.com/beenzer_app)
- **Discord:** [Join our community](https://discord.gg/Ta9X6zbg)

### Related Repositories

- **beenzer-dao** - DAO smart contracts and governance
- **beenzer-expo** - Mobile application (React Native/Expo)
- **beenzer-server** - Backend API and services

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

> **Note:** If you plan to use this code for commercial purposes, please review the license terms carefully and ensure proper attribution.

---

## 📧 Contact

**Beenzer Team**

- **Email:** [contact@beenzer.app](mailto:contact@beenzer.app)
- **Website:** [https://beenzer.app](https://beenzer.app)
- **Discord:** [Community Server](https://discord.gg/Ta9X6zbg)

For business inquiries, partnerships, or press, please reach out via email.

---

## 🙏 Acknowledgments

- **Bootstrap** - Responsive framework
- **jQuery** - JavaScript library
- **Font Awesome** - Icon library
- **Particles.js** - Particle effects
- **WOW.js** - Scroll animations
- **Owl Carousel** - Carousel functionality
- All contributors and community members who have helped improve this project

---

<div align="center">
  
  ### Made with 💚 by the Beenzer Team
  
  **Join the Web3 Revolution - Create, Own & Trade Your Content Through NFTs**
  
  ⭐ **Star this repository if you find it useful!** ⭐
  
</div>
