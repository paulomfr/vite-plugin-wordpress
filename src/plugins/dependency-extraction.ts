/**
 * External dependencies.
 */
import { Plugin } from 'vite';

/**
 * Internal dependencies.
 */
import { PluginConfig } from '../types';

/**
 * Extract WordPress dependencies.
 */
export default function dependencyExtraction(pluginConfig: Required<PluginConfig>): Plugin[] {
  return [{
    name: 'dependency-extraction',
    enforce: 'pre',
  }];
}
