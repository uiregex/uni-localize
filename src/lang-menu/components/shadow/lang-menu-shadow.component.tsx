import { Component, ComponentInterface, h, Prop, State, VNode } from '@stencil/core';

import { UniTemplate, uniWatermark } from '@uni/common';
import { UniStoreType } from '@uni/udk';

import { UniLangMenuItem } from '../../models';
import { uniLangMenuInit } from '../../utils/lang-menu.init';
import { UniLangMenuTemplate } from '../../utils/lang-menu.template';
import { UniLangMenuWrapTemplate } from '../../utils/lang-menu-wrap.template';

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

  @Prop({ reflect: true }) list: string;

  @Prop({ reflect: true }) feature: string = 'uni.store';

  @Prop({ reflect: true }) separator: string = '.';

  @Prop({ reflect: true }) type: UniStoreType = 'memory';

  @Prop({ reflect: true }) activePath = 'app.loc.active';

  @Prop({ reflect: true }) translatePath = 'app.loc.translate';

  @State() langs: UniLangMenuItem[] = [];

  @State() lang: UniLangMenuItem;

  render(): VNode {
    const { feature, separator, type, mini, round, routing, route, activePath, translatePath, langs, lang } = this;
    const template = UniLangMenuTemplate({ type, mini, round, routing, route, activePath, langs, lang });

    return lang
      ? UniLangMenuWrapTemplate({ routing, feature, separator, type, activePath, translatePath }, template)
      : UniTemplate(<slot/>);
  }

  componentDidLoad(): void {
    uniWatermark('uni-lang-menu-shadow', 'input');

    uniLangMenuInit(this.list)
      .then((data: UniLangMenuItem[] = []) => {
        this.langs = data;
        this.lang = data.filter((item: UniLangMenuItem): boolean => item.lang === this.select)[0] || data[0];
      });
  }
}
