import { h, Host, VNode } from '@stencil/core';

import { UniTemplate } from '@uni/common';

export const UniLangMenuWrapTemplate = function(
  { feature, separator, type, activePath, translatePath },
  template: VNode,
): VNode {
  return UniTemplate(
    <Host>
      <uni-event
        active={true}
        listen='click'
        selector='uni-menu-surface'
        prop='opened'
        stop={true}
      >
        {template}
      </uni-event>

      <uni-event-store-get
        active={true}
        feature={feature}
        type={type}
        separator={separator}
        path={`${activePath}.translation`}
        selector='uni-store-load'
        prop='url'
      >
        <uni-store-load
          activate={true}
          multi={true}
          clean={true}
          feature={feature}
          type={type}
          separator={separator}
          path={translatePath}
        />
      </uni-event-store-get>
    </Host>,
  );
};
