import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { uniWatermark } from '@uni/common';
import { UniStoreType } from '@uni/udk';

import { UniLangMenuWrapTemplate } from '../../utils';

@Component({
  tag: 'uni-lang-menu-wrap',
  styleUrl: '../../styles/lang-menu.css'
})
export class UniLangMenuWrapComponent implements ComponentInterface {
  @Prop() type: UniStoreType = 'session';

  @Prop() menuState = 'app.loc.menu.opened';

  @Prop() activeState = 'app.loc.menu.active';

  @Prop() translateState = 'app.loc.translate';

  componentDidLoad(): void {
    uniWatermark('uni-lang-menu-wrap', 'innerHTML');
  }

  render(): VNode {
    const { type, menuState, activeState, translateState } = this;

    return UniLangMenuWrapTemplate({ type, menuState, activeState, translateState }, <slot/>);
  }
}
