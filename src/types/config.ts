/**
 * External dependencies.
 */
import type { Rolldown } from 'vite';

/**
 * WordPress dependencies.
 */


/**
 * Internal dependencies.
 */


export interface PluginConfig {
  /**
   * The path or paths of the entry points to compile.
   */
  input?: Rolldown.InputOption;

  /**
   * The public subdirectory where compiled assets should be written.
   *
   * @default 'build'
   */
  buildDirectory?: string;

  /**
   * The output format.
   */
  outputFormat?: Rolldown.ModuleFormat;
}
