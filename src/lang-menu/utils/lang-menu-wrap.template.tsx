import { Fragment, h, VNode } from '@stencil/core';

import { UniTemplate } from '@uni/common';

export const UniLangMenuWrapTemplate = function(
  { feature, separator, type, activePath, translatePath },
  template: VNode,
): VNode {
  return UniTemplate(
    <Fragment>
      {template}

      <uni-event-store-get
        feature={feature}
        type={type}
        separator={separator}
        path={`${activePath}.translation`}
        selector='uni-store-load'
        prop='url'
      >
        <uni-load-store
          multi={true}
          clean={true}
          feature={feature}
          type={type}
          separator={separator}
          path={translatePath}
        />
      </uni-event-store-get>
    </Fragment>
  );
};
