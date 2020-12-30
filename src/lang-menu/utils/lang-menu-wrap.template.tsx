import { h, Host, VNode } from '@stencil/core';

import { UniTemplate } from '@uni/common';

export const UniLangMenuWrapTemplate = function(
  { feature, separator, type, activeState, translateState },
  template: VNode,
): VNode {
  return UniTemplate(
    <Host>
      <uni-loc/>

      <uni-event-loc
        active={true}
        listen="click"
        target="uni-menu-surface-mat-loc"
        prop="opened"
        stop={true}
      >
        {template}
      </uni-event-loc>

      <uni-store-event-get-loc
        suf={'loc'}
        active={true}
        feature={feature}
        type={type}
        separator={separator}
        path={`${activeState}.translation`}
        target="uni-store-load-loc"
        prop="url"
      >
        <uni-store-load-loc
          suf={'loc'}
          active={true}
          clean={true}
          feature={feature}
          type={type}
          separator={separator}
          path={translateState}
          />
      </uni-store-event-get-loc>
    </Host>,
  );
};
