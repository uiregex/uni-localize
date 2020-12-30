import { Config } from '@stencil/core';
// import { sass } from '@stencil/sass';

import cleanup from 'rollup-plugin-cleanup';

export const config: Config = {
  namespace: 'loc',
  buildEs5: 'prod',
  enableCache: false,
  taskQueue: 'async',
  extras: {
    appendChildSlotFix: true,
    cloneNodeFix: true,
    cssVarsShim: true,
    dynamicImportShim: true,
    safari10: true,
    scriptDataOpts: false,
    shadowDomShim: true,
    initializeNextTick: true,
    slotChildNodesFix: true,
    tagNameTransform: true,
  },
  hydratedFlag: {
    name: `hydrated`,
    selector: 'class',
    property: `visibility`,
    initialValue: `hidden`,
    hydratedValue: `inherit`,
  },
  devServer: {
    port: 5555,
    openBrowser: false,
    reloadStrategy: 'pageReload',
    // experimentalDevModules: true,
    // logRequests: true,
  },
  plugins: [
    // sass({ includePaths: ['./node_modules'] }),
    cleanup({ comments: 'none' })
  ],
  // bundles: [
  // { components: [ 'uni-store', 'uni-event', 'uni-load' ] },
  // { components: [ 'uni-icon-button-mat' ] },
  // { components: [ 'uni-list-mat', 'uni-list-item-mat' ] }
  // ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      polyfills: true,
      empty: true,
    },
    // {
    //   type: 'dist-custom-elements-bundle',
    //   empty: true,
    // },
    {
      type: 'docs-readme',
      footer: '*Powered by [UiWebKit](https://uiwebkit.com/)*',
      dependencies: true,
      // strict: true,
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ]
};
