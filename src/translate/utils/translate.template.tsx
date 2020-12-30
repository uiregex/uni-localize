import { h, VNode } from '@stencil/core';

import { UniHostTemplate } from '@uni/common';

export const UniTranslateTemplate = function({ props }, template: VNode): VNode {
  const { active, refresh, feature, separator, type, path, start, end } = props;

  return UniHostTemplate({ props: { hidden: !active } },
    <uni-store-event-get-loc
      suf={'loc'}
      active={active}
      feature={feature}
      separator={separator}
      type={type}
      path={path}
      target="uni-replace-loc"
      prop="state"
    >
      <uni-replace-loc
        suf={'loc'}
        refresh={refresh}
        start={start}
        end={end}
      >
        {template}
      </uni-replace-loc>
    </uni-store-event-get-loc>
  );
};
