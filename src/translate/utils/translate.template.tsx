import { h, VNode } from '@stencil/core';

import { UniTemplate } from '@uni/common';

export const UniTranslateTemplate = function({ storeProps, replaceProps }, template: VNode): VNode {
  return UniTemplate(
    <uni-store-event-get active={true} {...storeProps} target="uni-replace" prop="state">
      <uni-replace {...replaceProps}>
        {template}
      </uni-replace>
    </uni-store-event-get>
  );
};
