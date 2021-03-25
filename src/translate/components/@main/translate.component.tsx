import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniStoreType } from '@uni/udk';

import { uniTranslateInit } from '../../utils/translate.init';
import { UniTranslateTemplate } from '../../utils/translate.template';

@Component({ tag: 'uni-translate' })
export class UniTranslateComponent implements ComponentInterface {

  @Prop({ mutable: true }) activate: boolean = false;

  @Prop({ reflect: true }) inactive: boolean = false;

  @Prop({ reflect: true }) type: UniStoreType = 'memory';

  @Prop({ reflect: true }) feature: string = 'uni.store';

  @Prop({ reflect: true }) separator: string = '.';

  @Prop({ reflect: true }) path = 'app.loc.translate';

  @Prop({ reflect: true }) bindStart: string = '{{';

  @Prop({ reflect: true }) bindEnd: string = '}}';

  render(): VNode {
    const { activate, inactive, feature, separator, type, path, bindStart, bindEnd } = this;
    const props = { activate, inactive, feature, separator, type, path, bindStart, bindEnd };

    return UniTranslateTemplate({ props }, <slot />);
  }

  componentDidLoad(): void {
    uniTranslateInit();
  }
}
