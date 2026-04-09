#!/usr/bin/env node
/**
 * External dependencies.
 */
import esbuild from 'esbuild';

const watch = process.argv.slice(1).includes('--watch')

/** @type import('esbuild').BuildOptions */
const config = {
  bundle: true,
  format: 'esm',
  platform: 'node',
  packages: 'external',
  entryPoints: ['./src/index.ts'],
  outfile: 'build-module/index.mjs',
};

const context = await esbuild.context(config);

if (watch) {
  await context.watch();
} else {
  await context.rebuild();
  context.dispose();
}
