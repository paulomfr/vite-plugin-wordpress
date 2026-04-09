/**
 * WordPress default packages vendor.
 *
 * @see https://developer.wordpress.org/reference/functions/wp_default_packages_vendor/
 */
export const DEFAULT_PACKAGES_VENDOR: Record<
  string, {
    global: string;
    handle: string;
  }
> = {
  react: {
    global: 'React',
    handle: 'react',
  },
  'react-dom': {
    global: 'ReactDOM',
    handle: 'react-dom',
  },
  'react/jsx-runtime': {
    global: 'ReactJSXRuntime',
    handle: 'react-jsx-runtime',
  },
  'react/jsx-dev-runtime': {
    global: 'ReactJSXRuntime',
    handle: 'react-jsx-runtime',
  },
  moment: {
    global: 'moment',
    handle: 'moment',
  },
  lodash: {
    global: 'lodash',
    handle: 'lodash',
  },
  'lodash-es': {
    global: 'lodash',
    handle: 'lodash',
  },
  jquery: {
    global: 'jQuery',
    handle: 'jquery',
  },
};

/**
 * The WordPress package namespace.
 */
export const WORDPRESS_NAMESPACE = '@wordpress/';
