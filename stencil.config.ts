import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'localize',
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
  bundles: [
    { components: ['uni-lang-button-icon', 'uni-lang-list-item'] },
  ],
  outputTargets: [
    {
      type: 'dist',
      polyfills: true,
      empty: true,
    },
    {
      type: 'dist-custom-elements',
      empty: true,
    },
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
  ],
};
