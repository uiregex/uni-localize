import { h, VNode } from '@stencil/core';

import { UniTemplate } from '@uni/common';
import { UniTranslateTemplate } from './translate.template';

export const UniTranslateRenderedTemplate = function({ props }, template: VNode): VNode {
  const { inactive, activate, top, feature, type, path, separator, bindStart, bindEnd } = props;

  return UniTemplate(
    <uni-event
      listen={'uniRendered'}
      selector={'uni-replace'}
      prop={'activate'}
      value={true}
    >
      <UniTranslateTemplate props={{ inactive, activate, top, feature, type, path, separator, bindStart, bindEnd }}>
        {template}
      </UniTranslateTemplate>
    </uni-event>,
  );
};
