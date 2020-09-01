import { Component, ComponentInterface, Prop, State, VNode } from '@stencil/core';

import { UniHostTemplate } from '@uni/common';
import { UniStoreType } from '@uni/udk';

import { UniLangMenuItem } from '../../models';
import { uniLangMenuInit } from '../../utils/lang-menu.init';
import { UniLangMenuTemplate } from '../../utils/lang-menu.template';
import { UniLangMenuWrapTemplate } from '../../utils/lang-menu-wrap.template';

@Component({
  tag: 'uni-lang-menu',
  styleUrl: '../../styles/lang-menu.css'
})
export class UniLangMenuComponent implements ComponentInterface {
  @Prop({ reflect: true }) mini: boolean;

  @Prop({ reflect: true }) rounded: boolean;

  @Prop({ reflect: true }) routing: boolean;

  @Prop({ reflect: true }) route: string = 'lang';

  @Prop({ reflect: true }) select: string;

  @Prop({ reflect: true }) languages: string;

  @Prop({ reflect: true }) feature: string = 'uni.store';

  @Prop({ reflect: true }) separator: string = '.';

  @Prop({ reflect: true }) type: UniStoreType = 'memory';

  @Prop({ reflect: true }) activeState = 'app.loc.menu.active';

  @Prop({ reflect: true }) translateState = 'app.loc.translate';

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
      : UniHostTemplate({});
  }
}
