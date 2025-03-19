// vite.config.js
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode (development, production, etc.)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: mode === 'development' ? '/' : '/portfolio-new/', // Adjust base path for production
    server: {
      host: '::',
      port: 8080,
    },
    plugins: [
      react(),
      mode === 'development' && componentTagger(),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      // Provide empty object to prevent "process is not defined" errors
      'process.env': {},
      // Alternatively, expose specific environment variables
      // 'process.env.SOME_KEY': JSON.stringify(env.VITE_SOME_KEY)
    },
  };
});
