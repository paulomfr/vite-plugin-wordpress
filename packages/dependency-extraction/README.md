# Vite Plugin for WordPress Dependency Extraction
This plugin is intended to extract script handles from bundle compilation so that a list of script dependencies does not need to be manually maintained.

## How it works
- Externalize dependencies that are available as shared scripts or modules on WordPress sites.
- Add an asset file for each entry point that declares an object with the list of WordPress script or module dependencies for the entry point. The asset file also contains the current version calculated for the current source code.

We require you to install your dependencies (e.g, `pnpm add @wordpress/dom-ready`). Why? For Intellisense and better development experience. Even you installing your dependencies, we'll not add it to the bundle.

For `@wordpress/*` packages we check the `package.json` to determine if this dependency should be a script or script module dependency. That's one more reason to have it installed.
