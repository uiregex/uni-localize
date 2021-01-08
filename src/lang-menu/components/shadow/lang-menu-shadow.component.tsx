import { Component, ComponentInterface, h, Prop, State, VNode } from '@stencil/core';

import { UniStoreType } from '@uni/udk';

import { UniLangMenuItem } from '../../models';
import { uniLangMenuInit } from '../../utils/lang-menu.init';
import { UniLangMenuTemplate } from '../../utils/lang-menu.template';
import { UniLangMenuWrapTemplate } from '../../utils/lang-menu-wrap.template';
import { UniHostTemplate, uniWatermark } from '@uni/common';

@Component({
  tag: 'uni-lang-menu-shadow',
  styleUrl: '../../styles/lang-menu.css',
  shadow: true
})
export class UniLangMenuShadowComponent implements ComponentInterface {

  @Prop({ reflect: true }) mini: boolean = false;

  @Prop({ reflect: true }) round: boolean = false;

  @Prop({ reflect: true }) routing: boolean = false;

  @Prop({ reflect: true }) route: string = 'lang';

  @Prop({ reflect: true }) select: string;

  @Prop({ reflect: true }) languages: string;

  @Prop({ reflect: true }) feature: string = 'uni.store';

  @Prop({ reflect: true }) separator: string = '.';

  @Prop({ reflect: true }) type: UniStoreType = 'session';

  @Prop({ reflect: true }) activeState = 'app.loc.menu.active';

  @Prop({ reflect: true }) translateState = 'app.loc.translate';

  @State() list: UniLangMenuItem[] = [];

  @State() lang: UniLangMenuItem;

  componentDidLoad(): void {
    uniWatermark('uni-lang-menu-shadow', 'input');

    uniLangMenuInit(this.languages)
      .then((data: UniLangMenuItem[] = []) => {
        this.list = data;
        this.lang = data.filter((item: UniLangMenuItem): boolean => item.lang === this.select)[0] || data[0];
      });
  }

  render(): VNode {
    const { feature, separator, type, mini, round, routing, route, activeState, translateState, list, lang } = this;
    const template = UniLangMenuTemplate({ type, mini, round, routing, route, activeState, list, lang });

    return lang
      ? UniLangMenuWrapTemplate({ routing, feature, separator, type, activeState, translateState }, template)
      : UniHostTemplate({}, <slot/>);
  }
}
