import { h, VNode } from '@stencil/core';

export const UniTranslateTemplate = function({ props }, template: VNode): VNode {
  const { inactive, activate, clean, empty, top, feature, type, path, separator, excludes, bindstart, bindend } = props;

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
        clean={clean}
        empty={empty}
        excludes={excludes}
        bindstart={bindstart}
        bindend={bindend}
      >
        {template}
      </uni-replace>
    </uni-event-store-get>
  );
};
