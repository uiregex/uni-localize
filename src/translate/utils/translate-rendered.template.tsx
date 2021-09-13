import { h, VNode } from '@stencil/core';

import { UniTranslateTemplate } from './translate.template';

export const UniTranslateRenderedTemplate = function({ props }, template: VNode): VNode {
  return (
    <uni-event
      listen={'uniRendered'}
      selector={'uni-replace'}
      prop={'activate'}
      value={true}
    >
      <UniTranslateTemplate props={props}>
        {template}
      </UniTranslateTemplate>
    </uni-event>
  );
};
