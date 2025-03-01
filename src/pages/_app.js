import '/src/styles/globals.css'; // Ensure global styles are loaded
import '/src/styles/tailwind.css'; // Load TailwindCSS

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
