# Portfolio Website

## Overview
A modern, responsive personal portfolio website built with React.js. This portfolio showcases projects, skills, professional experience, and contact information with a clean, user-friendly interface.

## Features
- Responsive design that works on all devices
- Project showcase with descriptions and links
- Skills section categorized by expertise areas
- Professional experience timeline
- Contact form
- Downloadable resume functionality
- Social media integration

## Technologies Used
- **React.js**: Frontend library for building the user interface
- **CSS3**: Custom styling with responsive design
- **Font Awesome**: For icons and visual elements
- **EmailJS**: For contact form functionality
- **React Router**: For navigation between different sections

## Prerequisites
- Node.js (v12 or higher)
- npm or pnpm package manager

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arjun-ms/portfolio-website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```

3. Install dependencies using npm:
   ```bash
   npm install
   ```
   
   Or if you prefer using pnpm:
   ```bash
   pnpm install
   ```

## Usage

### Development Server
To start the development server with Node.js SSL legacy provider:
```bash
npm start
```

This will launch the application at `http://localhost:3000`.

### Building for Production
To create a production build:
```bash
npm run build
```

The build artifacts will be located in the `build/` directory.

## Project Structure
- `public/`: Static assets and HTML template
  - `index.html`: Main HTML file
  - `manifest.json`: Web app manifest
  - `projects/`: Project images
- `src/`: Source code
  - `assets/`: Images and other assets
  - `components/`: React components
  - `styles/`: CSS stylesheets
  - `data.js`: Portfolio content data
  - `index.js`: Application entry point

## Customization
To customize this portfolio for your own use:

1. Edit the `src/data.js` file to update:
   - Project information
   - Skills
   - Experience details
   - Contact information

2. Replace images in the `public/projects/` and `src/assets/images/` directories.

3. Modify the styling in CSS files to match your preferred color scheme.

## Deployment
This project is configured to be deployed on GitHub Pages. You can deploy using:
```bash
npm run deploy
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Author
Arjun M S

## Acknowledgments
- FontAwesome for providing free icons
- Create React App for the project setup