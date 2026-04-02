/**
 * External dependencies.
 */
import type { Plugin } from 'vite';

/**
 * Internal dependencies.
 */
import type { PluginConfig, WordPressPlugin } from './types';
import { getPluginConfig } from './utils';
import project from './plugins/project';
import dependencyExtraction from './plugins/dependency-extraction';

/**
 * WordPress plugin for Vite.
 *
 * @param config - A config object o relative path(s) of the scripts to be compiled.
 */
export default function wordpress(
  config: string|string[]|PluginConfig
): [WordPressPlugin, ...Plugin[]] {

  const pluginConfig = getPluginConfig(config);

  return [
    project(pluginConfig),
    ...dependencyExtraction(pluginConfig)
  ];
}
