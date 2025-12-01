import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import './index.css';

// getStaticPaths is exported from routes.tsx and auto-detected by vite-react-ssg
export const createRoot = ViteReactSSG({
  routes,
  basename: import.meta.env.BASE_URL,
});
