import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniStoreType } from '../../lang-menu';
import { UniTranslateTemplate } from '../utils/translate.template';
import { UniTranslateRenderedTemplate } from '../utils/translate-rendered.template';

@Component({
  tag: 'uni-translate-shadow',
  shadow: true,
})
export class UniTranslateShadowComponent implements ComponentInterface {

  @Prop({ reflect: true }) inactive: boolean = false;

  @Prop({ mutable: true }) activate: boolean = false;

  @Prop({ reflect: true }) rendered: boolean = false;

  @Prop({ reflect: true }) top: boolean = false;

  @Prop({ reflect: true }) type: UniStoreType = 'memory';

  @Prop({ reflect: true }) feature: string = 'uni.store';

  @Prop({ reflect: true }) separator: string = '.';

  @Prop({ reflect: true }) path = 'loc.translate';

  @Prop({ reflect: true }) bindstart: string = '((';

  @Prop({ reflect: true }) bindend: string = '))';

  render(): VNode {
    const { inactive, activate, top, feature, separator, type, path, bindstart, bindend } = this;
    const props = { inactive, activate, top, feature, separator, type, path, bindstart, bindend };

    return this.rendered
      ? UniTranslateRenderedTemplate({ props }, <slot />)
      : UniTranslateTemplate({ props }, <slot />);
  }

  componentDidRender(): void {
    setTimeout(() => this.activate = false);
  }
}
