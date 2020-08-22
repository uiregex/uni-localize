import { Component, ComponentInterface, h, Prop, State, VNode } from '@stencil/core';

import { UniStoreType } from '@uni/udk';

import { UniLangMenuItem } from '../../models';
import { uniLangMenuInit, UniLangMenuTemplate, UniLangMenuWrapTemplate } from '../../utils';

@Component({
  tag: 'uni-lang-menu',
  styleUrl: '../../styles/lang-menu.css'
})
export class UniLangMenuComponent implements ComponentInterface {
  @Prop() mini: boolean;

  @Prop() rounded: boolean;

  @Prop() routing: boolean;

  @Prop() route: string = 'lang';

  @Prop() select: string;

  @Prop() languages: string;

  @Prop() type: UniStoreType = 'session';

  @Prop() menuState = 'app.loc.menu.opened';

  @Prop() activeState = 'app.loc.menu.active';

  @Prop() translateState = 'app.loc.translate';

  @State() list: UniLangMenuItem[] = [];

  @State() lang: UniLangMenuItem;

  componentDidLoad(): void {
    const { type, menuState, languages } = this;

    uniLangMenuInit({ type, menuState, languages })
      .then((data: UniLangMenuItem[] = []) => {
        this.list = data;
        this.lang = data.filter((item: UniLangMenuItem): boolean => item.lang === this.select)[0] || data[0];
      });
  }

  render(): VNode {
    const { type, mini, rounded, routing, route, menuState, activeState, translateState, list, lang } = this;
    const template = UniLangMenuTemplate({ type, mini, rounded, routing, route, activeState, list, lang });

    return lang
      ? UniLangMenuWrapTemplate({ type, menuState, activeState, translateState }, template)
      : (
        <uni-component>
          <slot/>
        </uni-component>
      );
  }
}
