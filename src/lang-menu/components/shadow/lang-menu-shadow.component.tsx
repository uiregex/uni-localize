import { Component, ComponentInterface, h, Prop, State, VNode } from '@stencil/core';

import { UniStoreType } from '@uni/udk';

import { UniLangMenuItem } from '../../models';
import { uniLangMenuInit } from '../../utils/lang-menu.init';
import { UniLangMenuTemplate } from '../../utils/lang-menu.template';
import { UniLangMenuWrapTemplate } from '../../utils/lang-menu-wrap.template';
import { UniHostTemplate } from '@uni/common';

@Component({
  tag: 'uni-lang-menu-shadow',
  styleUrl: '../../styles/lang-menu.css',
  shadow: true
})
export class UniLangMenuShadowComponent implements ComponentInterface {
  @Prop() mini: boolean;

  @Prop() rounded: boolean;

  @Prop() routing: boolean;

  @Prop() route: string = 'lang';

  @Prop() select: string;

  @Prop() languages: string;

  @Prop() feature: string = 'uni.store';

  @Prop() separator: string = '.';

  @Prop() type: UniStoreType = 'session';

  @Prop() activeState = 'app.loc.menu.active';

  @Prop() translateState = 'app.loc.translate';

  @State() list: UniLangMenuItem[] = [];

  @State() lang: UniLangMenuItem;

  componentDidLoad(): void {
    uniLangMenuInit(this.languages)
      .then((data: UniLangMenuItem[] = []) => {
        this.list = data;
        this.lang = data.filter((item: UniLangMenuItem): boolean => item.lang === this.select)[0] || data[0];
      });
  }

  render(): VNode {
    const { feature, separator, type, mini, rounded, routing, route, activeState, translateState, list, lang } = this;
    const template = UniLangMenuTemplate({ type, mini, rounded, routing, route, activeState, list, lang });

    return lang
      ? UniLangMenuWrapTemplate({ feature, separator, type, activeState, translateState }, template)
      : UniHostTemplate({}, <slot/>);
  }
}
