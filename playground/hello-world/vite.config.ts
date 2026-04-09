/**
 * External dependencies.
 */
import { defineConfig } from 'vite';
import wordpress from 'vite-plugin-wordpress';

export default defineConfig({
  plugins: [
    wordpress({
      input: [
        'resources/scripts/app.ts'
      ],
    })
  ],
  // build: {
  //   outDir: 'build',
  //   rolldownOptions: {
  //     input: 'app.tsx',
  //     output: {
  //       format: 'iife'
  //     }
  //   },
  // }
});
