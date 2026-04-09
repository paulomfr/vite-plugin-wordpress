/**
 * BasePackageJson interface used for all package.json.
 */
export interface BasePackageJson {
  /**
   * The package name.
   */
  name: string;

  /**
   * The package version.
   */
  version?: string;
}

export interface WpPackageJson {
  /**
   * The package is a WordPress script.
   */
  wpScript?: boolean;

  /**
   * The package is a WordPress script module.
   */
  wpScriptModuleExports?: string | Record< string, string >;
}

type BlockJsonAssetDefinition = string | string[];

export interface BlockJson {
  /**
   * The name for a block is a unique string that identifies a block.
   */
  name: string;

  /**
   * Block type editor script definition.
   */
  editorScript?: BlockJsonAssetDefinition;

  /**
   * Block type frontend and editor script definition.
   */
  script?: BlockJsonAssetDefinition;

  /**
   * Block type frontend script definition.
   */
  viewScript?: BlockJsonAssetDefinition;

  /**
   * Block type frontend script module definition.
   */
  viewScriptModule?: BlockJsonAssetDefinition;

  /**
   * Block type frontend script module definition.
   */
  viewModule?: BlockJsonAssetDefinition;

  /**
   * Block type editor style definition.
   */
  editorStyle?: BlockJsonAssetDefinition;

  /**
   * Block type frontend style definition.
   */
  style?: BlockJsonAssetDefinition;

  /**
   * Block type frontend style definition.
   */
  viewStyle?: BlockJsonAssetDefinition;
}
