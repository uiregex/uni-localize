import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniStoreType } from '@uni/udk';

import { uniLangMenuWrapInit } from '../../utils/lang-menu-wrap.init';
import { UniLangMenuWrapTemplate } from '../../utils/lang-menu-wrap.template';

@Component({
  tag: 'uni-lang-menu-wrap',
  styleUrl: '../../styles/lang-menu.css'
})
export class UniLangMenuWrapComponent implements ComponentInterface {
  @Prop() feature: string = 'uni.store';

  @Prop() separator: string = '.';

  @Prop() type: UniStoreType = 'session';

  @Prop() activeState = 'app.loc.menu.active';

  @Prop() translateState = 'app.loc.translate';

  componentDidLoad(): void {
    uniLangMenuWrapInit();
  }

  render(): VNode {
    const { feature, separator, type, activeState, translateState } = this;

    return UniLangMenuWrapTemplate({ feature, separator, type, activeState, translateState }, <slot/>);
  }
}
