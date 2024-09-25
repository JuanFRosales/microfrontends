import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation ({
      name: 'login',
      filename: 'remoteEntry.js',
      remotes: {
        mediastore: 'http://localhost:3001/assets/remoteEntry.js',
        front_and_sidebar: 'http://localhost:3002/assets/remoteEntry.js',
      },
      exposes: {
        './Login': './src/components/LoginForm',
        './Register': './src/components/RegisterForm',
        './FormSwitch': './src/components/FormSwitch',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3004,
  },
  preview: {
    port: 3004,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
  },

})
