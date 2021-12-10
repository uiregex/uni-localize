import { h, VNode } from '@stencil/core';

export const UniTranslateTemplate = function({ props }, template: VNode): VNode {
  const { inactive, activate, top, feature, type, path, separator, bindstart, bindend } = props;

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
        bindstart={bindstart}
        bindend={bindend}
      >
        {template}
      </uni-replace>
    </uni-event-store-get>
  );
};
