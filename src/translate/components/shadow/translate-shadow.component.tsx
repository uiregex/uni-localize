import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { uniWatermark } from '@uni/common';
import { UniStoreType } from '@uni/udk';

import { UniTranslateTemplate } from '../../utils';

@Component({
  tag: 'uni-translate-shadow',
  shadow: true
})
export class UniTranslateShadowComponent implements ComponentInterface {
  @Prop() type: UniStoreType = 'session';

  @Prop() state = 'app.loc.translate';

  @Prop() start: string = '{{ ';

  @Prop() end: string = ' }}';

  componentDidLoad(): void {
    uniWatermark('uni-translate', 'switch');
  }

  render(): VNode {
    const { type, state, start, end } = this;
    const props = { type, state };
    const replaceProps = { start, end };

    return UniTranslateTemplate({ props, replaceProps }, <slot/>);
  }
}
