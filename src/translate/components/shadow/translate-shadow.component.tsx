import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniStoreType } from '@uni/udk';

import { uniTranslateShadowInit } from '../../utils/translate-shadow.init';
import { UniTranslateTemplate } from '../../utils/translate.template';

@Component({
  tag: 'uni-translate-shadow',
  shadow: true
})
export class UniTranslateShadowComponent implements ComponentInterface {
  @Prop() feature: string = 'uni.store';

  @Prop() separator: string = '.';

  @Prop() type: UniStoreType;

  @Prop() path = 'app.loc.translate';

  @Prop() start: string = '{{ ';

  @Prop() end: string = ' }}';

  componentDidLoad(): void {
    uniTranslateShadowInit();
  }

  render(): VNode {
    const { feature, separator, type, path, start, end } = this;
    const storeProps = { feature, separator, type, path };
    const replaceProps = { start, end };

    return UniTranslateTemplate({ storeProps, replaceProps }, <slot/>);
  }
}
