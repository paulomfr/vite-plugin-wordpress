/**
 * External dependencies.
 */
import type { Plugin } from 'vite';

/**
 * Internal dependencies.
 */
import type { PluginConfig, WordPressPlugin } from './types';
import { getPluginConfig } from './utils';

/**
 * Vite plugin for WordPress.
 */
export default function wordpress( config: string | string[] | PluginConfig ): [ WordPressPlugin, ...Plugin[] ] {
  const pluginConfig = getPluginConfig( config );

  return [
    wp(pluginConfig),
  ];
}

/**
 * The WordPress Plugin configuration.
 */
function wp( pluginConfig: Required< PluginConfig > ): WordPressPlugin {
  const defaultAliases: Record<string, string> = {
    '@': '/resources/js',
  };

  return {
    name: 'wordpress',
    enforce: 'post',
    config: (config) => ({
      build: {
        manifest: config.build?.manifest ?? 'manifest.json',
        outDir: config.build?.outDir ?? pluginConfig.buildDirectory,
        rolldownOptions: {
          input: config.build?.rolldownOptions?.input
            ?? pluginConfig.input,
          output: {
            format: pluginConfig.outputFormat
          }
        },
        assetsInlineLimit: config.build?.assetsInlineLimit ?? 0,
      },
      resolve: {
        alias: Array.isArray(config.resolve?.alias)
          ? [
            ...config.resolve?.alias ?? [],
            ...Object.keys(defaultAliases).map(alias => ({
              find: alias,
              replacement: defaultAliases[alias]
            }))
          ]
          : {
            ...defaultAliases,
            ...config.resolve?.alias,
          }
      },
    }),
  }
}
