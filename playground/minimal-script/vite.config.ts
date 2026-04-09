/**
 * External dependencies.
 */
import { defineConfig } from 'vite';
import dependencyExtraction from 'vite-plugin-wordpress-dependency-extraction';

export default defineConfig({
  plugins: [
    // dependencyExtraction(),
  ],
  build: {
    outDir: 'build',
    rolldownOptions: {
      input: 'app.tsx',
      output: {
        format: 'iife'
      }
    },
  }
});
