import federation from "@originjs/vite-plugin-federation";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';


export default defineConfig({
  plugins: [
    react(),
    federation ({
      name : 'profile',
      filename : 'remoteEntry.js',
      remotes: {
          mediastore: 'http://localhost:3001/assets/remoteEntry.js',
          front_and_sidebar: 'http://localhost:3002/assets/remoteEntry.js',
          login: 'http://localhost:3004/assets/remoteEntry.js',
        },
      exposes: {
        './user': './src/components/user/UserInfo',
        './deleteMedia': './src/components/user/DeleteMedia',
        './modifyMedia': './src/components/user/ModifyMedia',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
      }),
  ],
  server: {
    port: 3003,
  },
  preview: {
    port: 3003,
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
