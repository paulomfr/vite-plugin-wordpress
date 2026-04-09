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
import {
  WORDPRESS_NAMESPACE,
  DEFAULT_PACKAGES_VENDOR,
} from './constants';
import { getPackageJson, isScriptModule } from './utils';
import { WpPackageJson } from './types';

export default function dependencyExtraction(): Plugin {
  const dependencies = new Set();

  return {
    name: 'wordpress-dependency-extraction',
    enforce: 'pre',

    /**
     * Collect the script dependencies handles.
     *
     * @param sourse The importee exactly as it is written in the import statement.
     *               For example, given import foo from './foo.js', the source will be "./foo.js".
     * @param importer The fully resolved id of the importing module.
     */
    resolveId: (source: string, importer: string|undefined) => {
      if (source in DEFAULT_PACKAGES_VENDOR) {
        const { handle } = DEFAULT_PACKAGES_VENDOR[source];
        dependencies.add(handle);
        return { id: source, external: true };
      }

      if (source.startsWith(WORDPRESS_NAMESPACE)) {
        // Extract package name and subpath from import
        // e.g., '@wordpress/blocks/sub/path' → packageName='@wordpress/blocks', subpath='sub/path'
        const parts = source.split( '/' );
        let packageName = source;
        let subpath = null;
        if ( parts.length > 2 ) {
          packageName = parts.slice( 0, 2 ).join( '/' );
          subpath = parts.slice( 2 ).join( '/' );
        }
        const shortName = parts[ 1 ];
        const handle = `wp-${ shortName }`;

        const packageJson = getPackageJson(packageName, importer) as WpPackageJson;

        if (!packageJson) {
          return null;
        }

        let isModule: boolean = isScriptModule(
          packageJson,
          subpath
        );
        let isScript = !!packageJson.wpScript;

        if (isScript) {
          dependencies.add(handle);
        }

        return { id: source, external: true };
      }

      return null;
    },
  };
}

export * from './types';
