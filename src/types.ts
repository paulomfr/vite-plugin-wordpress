/**
 * External dependencies.
 */
import type { ConfigEnv, Plugin, Rolldown, UserConfig } from 'vite';

export interface PluginConfig {
  /**
   * The path or paths of the entry points to compile.
   */
  input: Rolldown.InputOption;

  /**
   * The public subdirectory where compiled assets should be written.
   *
   * @default 'build'
   */
  buildDirectory?: string
}

export interface WordPressPlugin extends Plugin {
  config: (config: UserConfig, env: ConfigEnv) => UserConfig
}
