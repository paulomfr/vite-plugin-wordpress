# Vite Plugin for WordPress

```ts
// vite.config.ts

import { defineConfig } from 'vite';
import wordpress from 'vite-plugin-wordpress';

export default defineConfig({
  plugins: [
    wordpress({
      input: [
        'resources/scripts/admin.ts'
      ],
      blocks: {
        inputDir: 'resource/scripts/blocks' // or ['resource/scripts/blocks', 'src/blocks']
        phpManifest: 'blocks-manifest.php'
      }
    })
  ],
});

```

## Options

### Input
`Rolldown.InputOption` inputs to bundle scripts.

### Blocks.InputDir
`string|array` of directories to look for blocks.

### Blocks.PhpManifest
`string|bool` generate blocks manifest to blocks collection registration.
