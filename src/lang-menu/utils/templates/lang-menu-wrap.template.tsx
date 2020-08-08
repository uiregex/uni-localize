import { h, Host, VNode } from '@stencil/core';

import { UniTemplate } from '@uni/common';

export const UniLangMenuWrapTemplate = function({ type, menuState, activeState, translateState }, template: VNode): VNode {
  return UniTemplate(
    <Host>
      <uni-button-layout-mat hidden/>

      <uni-store active event="click" state={menuState}>
        <uni-store active state={menuState} target="uni-menu-surface-mat" prop="opened">
          {template}
        </uni-store>
      </uni-store>

      <uni-event stop name="uniLoadSuccess">
        <uni-store active clean type={type} event="uniLoadSuccess" state={translateState}>
          <uni-store active type={type} state={`${activeState}.translation`} target="uni-load" prop="url">
            <uni-load active/>
          </uni-store>
        </uni-store>
      </uni-event>
    </Host>
  );
};
