/**
 * External dependencies.
 */
import type { Plugin } from 'vite';

/**
 * WordPress dependencies.
 */


/**
 * Internal dependencies.
 */


export default function dependencyExtraction(): Plugin[] {
  return [{
    name: 'wordpress-dependency-extraction',
    enforce: 'pre',
  }];
}
