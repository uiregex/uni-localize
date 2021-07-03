import { h, VNode } from '@stencil/core';

import { UniTemplate } from '@uni/common';
import { uniGetStorePath } from '@uni/udk';

export const UniTranslateTemplate = function({ props }, template: VNode): VNode {
  const { inactive, activate, top, feature, type, path, separator, bindStart, bindEnd } = props;

  return UniTemplate(
    <uni-event
      capture={true}
      listen={uniGetStorePath({ type, feature, separator, path })}
      prop={'activate'}
      value={true}
    >
      <uni-store-get
        top={top}
        type={type}
        feature={feature}
        separator={separator}
        path={path}
        prop='state'
      >
        <uni-replace
          activate={activate}
          inactive={inactive}
          bindStart={bindStart}
          bindEnd={bindEnd}
        >
          {template}
        </uni-replace>
      </uni-store-get>
    </uni-event>,
  );
};
