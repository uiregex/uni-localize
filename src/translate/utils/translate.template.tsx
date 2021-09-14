import { h, VNode } from '@stencil/core';

export const UniTranslateTemplate = function({ props }, template: VNode): VNode {
  const { inactive, activate, top, feature, type, path, separator, bindStart, bindEnd } = props;

  return (
    <uni-event-store-get
      top={top}
      type={type}
      feature={feature}
      separator={separator}
      path={path}
      prop={'state'}
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
