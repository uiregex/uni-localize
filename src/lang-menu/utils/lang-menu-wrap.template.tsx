import { Fragment, h, VNode } from '@stencil/core';

import { UniTemplate } from '@uni/common';
import { uniGetStorePath } from '@uni/udk';

export const UniLangMenuWrapTemplate = function(
  { feature, separator, type, activePath, translatePath },
  template: VNode,
): VNode {
  return UniTemplate(
    <Fragment>
      {template}

      <uni-event
        capture={true}
        listen={uniGetStorePath({ type, feature, separator, path: `${activePath}.translation` })}
        prop={'activate'}
        value={true}
      >
        <uni-store-get
          feature={feature}
          type={type}
          separator={separator}
          path={`${activePath}.translation`}
          prop='url'
        >
          <uni-load-store
            multi={true}
            mode={'assign'}
            feature={feature}
            type={type}
            separator={separator}
            path={translatePath}
          />
        </uni-store-get>
      </uni-event>
    </Fragment>,
  );
};
