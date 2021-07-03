import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { uniWatermark } from '@uni/common';
import { UniStoreType } from '@uni/udk';

import { UniTranslateTemplate } from '../utils/translate.template';

@Component({
  tag: 'uni-translate-shadow',
  shadow: true,
})
export class UniTranslateShadowComponent implements ComponentInterface {

  @Prop({ reflect: true }) inactive: boolean = false;

  @Prop({ mutable: true }) activate: boolean = false;

  @Prop({ reflect: true }) top: boolean = false;

  @Prop({ reflect: true }) type: UniStoreType = 'memory';

  @Prop({ reflect: true }) feature: string = 'uni.store';

  @Prop({ reflect: true }) separator: string = '.';

  @Prop({ reflect: true }) path = 'app.loc.translate';

  @Prop({ reflect: true }) bindStart: string = '{{';

  @Prop({ reflect: true }) bindEnd: string = '}}';

  render(): VNode {
    const { inactive, activate, top, feature, separator, type, path, bindStart, bindEnd } = this;
    const props = { inactive, activate, top, feature, separator, type, path, bindStart, bindEnd };

    return UniTranslateTemplate({ props }, <slot />);
  }

  componentDidLoad(): void {
    uniWatermark('uni-translate-shadow', 'get');
  }
}
