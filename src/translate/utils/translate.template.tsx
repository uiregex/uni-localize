import { h, VNode } from '@stencil/core';

import { UniTemplate } from '@uni/common';

export const UniTranslateTemplate = function({ props }, template: VNode): VNode {
  const { active, feature, separator, type, path, start, end } = props;

  return UniTemplate(
    <uni-store-event-get
      active={active}
      feature={feature}
      separator={separator}
      type={type}
      path={path}
      target='uni-replace'
      prop='state'
    >
      <uni-replace
        active={active}
        start={start}
        end={end}
      >
        {template}
      </uni-replace>
    </uni-store-event-get>,
  );
};
