module.exports = {
  productionBrowserSourceMaps: true, 
  reactStrictMode: true,
  images: {
    domains: ['images.nasa.gov', 'apod.nasa.gov'],
  },
  env: {
    NASA_API_KEY: process.env.NASA_API_KEY,
    NASA_API_URL: process.env.NASA_API_URL,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      config.devtool = 'source-map'; // Ensure proper source map generation
    }
    return config;
  },
};