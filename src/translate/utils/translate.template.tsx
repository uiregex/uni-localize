import { h, VNode } from '@stencil/core';

import { UniTemplate } from '@uni/common';

export const UniTranslateTemplate = function({ props }, template: VNode): VNode {
  const { activate, inactive, feature, separator, type, path, bindStart, bindEnd } = props;

  return UniTemplate(
    <uni-event-store-get
      feature={feature}
      separator={separator}
      type={type}
      path={path}
      selector='uni-replace'
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
    </uni-event-store-get>
  );
};
