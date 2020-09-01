import { h, VNode } from '@stencil/core';

import { Fragment, UniTemplate } from '@uni/common';

export const UniLangMenuWrapTemplate = function(
  { feature, separator, type, activeState, translateState },
  template: VNode
): VNode {
  const props = { feature, separator, type };

  return UniTemplate(
    <Fragment>
      <uni-button-layout-mat hidden={true}/>

      <uni-event active={true} listen="click" target="uni-menu-surface-mat" prop="opened" stop={true}>
        {template}
      </uni-event>

      <uni-store-event-set
        active={true}
        clean={true}
        listen="uniLoadSuccess"
        {...props}
        path={translateState}
        stop={true}
      >
        <uni-store-event-get active={true} {...props} path={`${activeState}.translation`} target="uni-load" prop="url">
          <uni-load active={true}/>
        </uni-store-event-get>
      </uni-store-event-set>
    </Fragment>
  );
};
