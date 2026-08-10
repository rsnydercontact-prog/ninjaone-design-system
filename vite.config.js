import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The demo app. The design system itself ships as source — consumers import
// from src/ and load tokens/tokens.css; there is no library build step.
export default defineConfig({
  plugins: [react()],
  base: './',
});
