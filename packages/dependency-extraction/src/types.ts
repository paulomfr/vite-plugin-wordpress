export interface PackageJson {
  /**
   * Package name.
   */
  name: string;

  /**
   * Package version.
   */
  version?: string;
}

export interface WpPackageJson extends PackageJson {
  /**
   * WordPress script handles for dependency extraction.
   */
  wpScript?: boolean;

  /**
   * WordPress script module exports.
   */
  wpScriptModuleExports?: string|Record<string,string>
}
