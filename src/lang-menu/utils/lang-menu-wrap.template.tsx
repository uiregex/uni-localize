import { h, Host, VNode } from '@stencil/core';

import { UniTemplate } from '@uni/common';

export const UniLangMenuWrapTemplate = function(
  { routing, feature, separator, type, activePath, translatePath },
  template: VNode,
): VNode {
  return UniTemplate(
    <Host>
      {/*<uni-loc routing={routing} />*/}
      {routing ? <uni-router /> : ''}

      <uni-event
        active={true}
        listen="click"
        target="uni-menu-surface-mat"
        prop="opened"
        stop={true}
      >
        {template}
      </uni-event>

      <uni-store-event-get
        active={true}
        feature={feature}
        type={type}
        separator={separator}
        path={`${activePath}.translation`}
        target="uni-store-load"
        prop="url"
      >
        <uni-store-load
          active={true}
          clean={true}
          feature={feature}
          type={type}
          separator={separator}
          path={translatePath}
          />
      </uni-store-event-get>
    </Host>,
  );
};
