/**
 * Internal dependencies.
 */
import { PluginConfig } from './types';

/**
 * Convert the users configuration into a standard structure with defaults.
 */
export function getPluginConfig(
  config: string | string[] | PluginConfig
): Required< PluginConfig > {
  if ( typeof config === 'undefined' ) {
    throw new Error( 'vite-plugin-wordpress: missing configuration' );
  }

  if ( typeof config === 'string' || Array.isArray( config ) ) {
    config = { input: config };
  }

  if ( typeof config.input === 'undefined' ) {
    throw new Error( 'vite-plugin-wordpress: missing configuration for "input".' );
  }

  if ( typeof config.buildDirectory === 'string' ) {
    config.buildDirectory = config.buildDirectory
      .trim()
      .replace( /^\/+/, '' )
      .replace( /\/+$/, '' );

    if ( config.buildDirectory === '' ) {
      throw new Error( 'vite-plugin-wordpress: buildDirectory must be a subdirectory. E.g. \'build\'.' );
    }
  }

  return {
    input: config.input,
    buildDirectory: config.buildDirectory ?? 'build',
    outputFormat: 'iife',
  };
}
