/**
 * External dependencies.
 */
import type { UserConfig } from 'vite';

/**
 * Internal dependencies.
 */
import type { PluginConfig, WordPressPlugin } from '../types';

/**
 * Setup the project (plugin/theme) configurations.
 */
export default function project(pluginConfig: Required<PluginConfig>): WordPressPlugin {
  let userConfig: UserConfig;

  const defaultAliases: Record<string, string> = {
    '@': '/resources/js',
  };

  return {
    name: 'wordpress',
    enforce: 'post',
    config: (config, env) => {
      userConfig = config;

      return {
        build: {
          manifest: userConfig.build?.manifest ?? 'manifest.json',
          outDir: userConfig.build?.outDir ?? pluginConfig.buildDirectory,
          rolldownOptions: {
            input: userConfig.build?.rolldownOptions?.input
              ?? pluginConfig.input
          },
          assetsInlineLimit: userConfig.build?.assetsInlineLimit ?? 0,
        },
        resolve: {
          alias: Array.isArray(userConfig.resolve?.alias)
            ? [
              ...userConfig.resolve?.alias ?? [],
              ...Object.keys(defaultAliases).map(alias => ({
                find: alias,
                replacement: defaultAliases[alias]
              }))
            ]
            : {
              ...defaultAliases,
              ...userConfig.resolve?.alias,
            }
        },
      };
    },
  }
}
