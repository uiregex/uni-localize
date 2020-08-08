import { h, Host, VNode } from '@stencil/core';

import { UniTemplate } from '@uni/common';

export const UniTranslateTemplate = function({ props, replaceProps }, template: VNode): VNode {
  return UniTemplate(
    <Host style={{ display: 'inline-flex' }}>
      <uni-store active {...props} target="uni-replace" prop="state">
        <uni-replace {...replaceProps}>
          {template}
        </uni-replace>
      </uni-store>
    </Host>
  );
};
