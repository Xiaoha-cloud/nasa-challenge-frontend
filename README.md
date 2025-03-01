# NASA Explorer Frontend

## Overview
NASA Explorer is a web application that showcases stunning visuals and information from NASA's Astronomy Picture of the Day (APOD) and the NASA Image Library. The application features smooth animations, 3D visualizations, and a user-friendly interface to explore space-related content. [https://nasa-challenge-frontend.vercel.app/]

## Technologies Used
- **Next.js**: A React framework for server-side rendering and static site generation.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Framer Motion**: A library for creating animations in React applications.
- **Three.js**: A JavaScript library for creating 3D graphics in the browser.
- **Axios**: A promise-based HTTP client for making API requests.

## Project Structure
```
nasa-explorer-frontend/
├── public/                  # Static assets (logos, icons, images)
│   ├── assets/              # Custom images & background elements
│   ├── fonts/               # Custom fonts (e.g., Orbitron)
│   ├── videos/              # Space animations (if any)
│
├── src/                     # Main source directory
│   ├── components/          # Reusable UI components
│   ├── pages/               # Next.js routing system
│   ├── hooks/               # Custom React hooks
│   ├── context/             # Global state management
│   ├── utils/               # Helper functions
│   └── styles/              # Global and component-specific styles
│
├── .env                     # API keys (NASA API, ISS Tracker)
├── .gitignore               # Ignore node_modules, .env, logs
├── next.config.js           # Next.js configurations
├── tailwind.config.js       # TailwindCSS customization
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

## Setup Instructions

1. **Create a new Next.js project**:
   ```
   npx create-next-app nasa-explorer-frontend
   ```

2. **Navigate into the project directory**:
   ```
   cd nasa-explorer-frontend
   ```

3. **Install required dependencies**:
   ```
   npm install tailwindcss framer-motion three axios
   ```

4. **Initialize Tailwind CSS**:
   ```
   npx tailwindcss init -p
   ```

5. **Configure Tailwind CSS** by adding the following to `tailwind.config.js`:
   ```javascript
   module.exports = {
     content: [
       "./src/**/*.{js,jsx,ts,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

6. **Add Tailwind directives to `globals.css`**:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## API Integration
The application will integrate with the following NASA APIs:
- **Astronomy Picture of the Day (APOD)**: Provides daily images or videos from NASA.
- **NASA Image Library**: A comprehensive collection of NASA images.

## Contribution
Feel free to contribute to the project by submitting issues or pull requests. For any questions or suggestions, please reach out.

## License
This project is open-source and available under the MIT License.
