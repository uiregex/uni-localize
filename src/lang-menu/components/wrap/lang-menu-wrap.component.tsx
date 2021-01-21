import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniStoreType } from '@uni/udk';

import { uniLangMenuWrapInit } from '../../utils/lang-menu-wrap.init';
import { UniLangMenuWrapTemplate } from '../../utils/lang-menu-wrap.template';

@Component({
  tag: 'uni-lang-menu-wrap',
  styleUrl: '../../styles/lang-menu.css'
})
export class UniLangMenuWrapComponent implements ComponentInterface {

  @Prop({ reflect: true }) routing: boolean = false;

  @Prop({ reflect: true }) feature: string = 'uni.store';

  @Prop({ reflect: true }) separator: string = '.';

  @Prop({ reflect: true }) type: UniStoreType = 'memory';

  @Prop({ reflect: true }) activePath = 'app.loc.active';

  @Prop({ reflect: true }) translatePath = 'app.loc.translate';

  componentDidLoad(): void {
    uniLangMenuWrapInit();
  }

  render(): VNode {
    const { routing, feature, separator, type, activePath, translatePath } = this;

    return UniLangMenuWrapTemplate({ routing, feature, separator, type, activePath, translatePath }, <slot/>);
  }
}
