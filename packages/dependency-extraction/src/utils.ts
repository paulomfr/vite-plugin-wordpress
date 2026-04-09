/**
 * External dependencies.
 */
import { readFileSync } from 'fs';
import { createRequire } from 'module';

/**
 * WordPress dependencies.
 */


/**
 * Internal dependencies.
 */
import type { PackageJson, WpPackageJson } from './types';

/**
 * Get the package.json data.
 *
 * @param packageName The package name. E.g, '@wordpress/dom-ready'.
 * @param context The fully resolved file path of the importing module.
 */
export function getPackageJson(packageName: string, context: string|undefined): PackageJson|undefined {
  if (!context) {
    return undefined;
  }

  const require = createRequire(context);

  try {
    const packageJsonPath = require.resolve(`${packageName}/package.json`);
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    return (packageJson as PackageJson);
  } catch {}
}

/**
 * Check if a package import is a script module.
 * A package is considered a script module if it has wpScriptModuleExports
 * and the specific import path (root or subpath) is declared in wpScriptModuleExports.
 *
 * @param packageJson Package.json object.
 * @param subpath     Subpath after package name, or null for root import.
 */
export function isScriptModule(packageJson: WpPackageJson, subpath: string|null): boolean {
  const { wpScriptModuleExports } = packageJson;

  if (!wpScriptModuleExports) {
    return false;
  }

  // Root import: @wordpress/package-name
  if (!subpath) {
    if (typeof wpScriptModuleExports === 'string') {
      return true;
    }
    if (
      typeof wpScriptModuleExports === 'object' &&
      wpScriptModuleExports['.']
    ) {
      return true;
    }

    return false;
  }

  // Subpath import: @wordpress/package-name/subpath
  if (
    typeof wpScriptModuleExports === 'object' &&
    wpScriptModuleExports[`./${ subpath }`]
  ) {
    return true;
  }

  return false;
}
