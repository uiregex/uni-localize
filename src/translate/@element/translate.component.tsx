import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { uniWatermark } from '@uni/common';
import { UniStoreType } from '@uni/udk';

import { UniTranslateTemplate } from '../utils/translate.template';
import { UniTranslateRenderedTemplate } from '../utils/translate-rendered.template';

@Component({ tag: 'uni-translate' })
export class UniTranslateComponent implements ComponentInterface {

  @Prop({ reflect: true }) inactive: boolean = false;

  @Prop({ mutable: true }) activate: boolean = false;

  @Prop({ reflect: true }) rendered: boolean = false;

  @Prop({ reflect: true }) top: boolean = false;

  @Prop({ reflect: true }) type: UniStoreType = 'memory';

  @Prop({ reflect: true }) feature: string = 'uni.store';

  @Prop({ reflect: true }) separator: string = '.';

  @Prop({ reflect: true }) path = 'app.loc.translate';

  @Prop({ reflect: true }) bindStart: string = '{{';

  @Prop({ reflect: true }) bindEnd: string = '}}';

  render(): VNode {
    const { inactive, activate, rendered, top, feature, separator, type, path, bindStart, bindEnd } = this;
    const props = { inactive, activate, rendered, top, feature, separator, type, path, bindStart, bindEnd };

    return this.rendered
      ? UniTranslateRenderedTemplate({ props }, <slot />)
      : UniTranslateTemplate({ props }, <slot />);
  }

  componentDidRender(): void {
    setTimeout(() => this.activate = false);
  }

  componentDidLoad(): void {
    uniWatermark('uni-translate', 'switch');
  }
}
