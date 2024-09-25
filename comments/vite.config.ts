import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation ({
      name: 'comments',
      filename: 'remoteEntry.js',
      remotes: {
        mediastore: 'http://localhost:3001/assets/remoteEntry.js',
        front_and_sidebar: 'http://localhost:3002/assets/remoteEntry.js',
        profile: 'http://localhost:3003/assets/remoteEntry.js',
        login: 'http://localhost:3004/assets/remoteEntry.js',
      },
      exposes: {
        './CommentArea': './src/components/CommentArea',
        './CommentForm': './src/components/CommentForm',
        './Comment': './src/components/Comment',
        './hooks/formHooks': './src/hooks/formHooks',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 3005,
  },
  preview: {
    port: 3005,
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
