import { Fragment, h, VNode } from '@stencil/core';

import { UniTemplate } from '@uni/common';
import { uniGetStorePath } from '@uni/udk';

export const UniLangMenuWrapTemplate = function(
  { top, frame, shadow, type, feature, separator, activePath, translatePath }, template: VNode,
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
          top={top}
          feature={feature}
          type={type}
          separator={separator}
          path={`${activePath}.translation`}
          prop='url'
        >
          <uni-load-store
            top={top}
            shadow={shadow}
            frame={frame}
            multi={true}
            mode={'set'}
            feature={feature}
            separator={separator}
            path={translatePath}
          />
        </uni-store-get>
      </uni-event>
    </Fragment>,
  );
};
