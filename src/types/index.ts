/**
 * External dependencies.
 */
import type { ConfigEnv, Plugin, UserConfig } from 'vite';

export interface WordPressPlugin extends Plugin {
  config: (config: UserConfig, env: ConfigEnv) => UserConfig
}

export * from './json';
export * from './config';
