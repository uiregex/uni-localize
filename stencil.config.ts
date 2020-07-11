import { Config } from '@stencil/core';
// import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'loc',
  taskQueue: 'async',
  buildEs5: false,
  enableCache: false,
  excludeUnusedDependencies: true,
  extras: {
    cssVarsShim: false,
    dynamicImportShim: false,
    safari10: false,
    scriptDataOpts: false,
    shadowDomShim: false,
    slotChildNodesFix: true,
    appendChildSlotFix: true,
    cloneNodeFix: true
  },
  devServer: {
    // logRequests: true,
    openBrowser: false,
    reloadStrategy: 'pageReload',
    port: 7777
  },
  // plugins: [sass()],
  bundles: [
    { components: [ 'uni-store', 'uni-event', 'uni-load' ] },
    { components: [ 'uni-icons-mat', 'uni-icon-mat', 'uni-icon-button-mat' ] },
    { components: [ 'uni-list-mat', 'uni-list-item-mat' ] }
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      empty: true
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
