import { Component, ComponentInterface, Prop, State, VNode, Watch } from '@stencil/core';

import { UniHostTemplate, uniWatermark } from '@uni/common';
import { UniStoreType } from '@uni/udk';

import { UniLangMenuItem } from '../models';
import { uniLangMenuInit } from '../utils/lang-menu.init';
import { UniLangMenuTemplate } from '../utils/lang-menu.template';
import { UniLangMenuWrapTemplate } from '../utils/lang-menu-wrap.template';

@Component({
  tag: 'uni-lang-menu',
  styleUrl: '../styles/lang-menu.css',
})
export class UniLangMenuComponent implements ComponentInterface {

  @Prop({ reflect: true }) list!: string;

  @Prop({ reflect: true }) mini: boolean = false;

  @Prop({ reflect: true }) round: boolean = false;

  @Prop({ reflect: true }) routing: boolean = false;

  @Prop({ reflect: true }) route: string = 'lang';

  @Prop({ reflect: true }) select: string;

  @Prop({ reflect: true }) type: UniStoreType = 'memory';

  @Prop({ reflect: true }) feature: string = 'uni.store';

  @Prop({ reflect: true }) separator: string = '.';

  @Prop({ reflect: true }) activePath = 'app.loc.active';

  @Prop({ reflect: true }) translatePath = 'app.loc.translate';

  @State() languages: UniLangMenuItem[] = [];

  @State() lang: UniLangMenuItem;

  @Watch('list')
  onList(newValue: string): void {
    this.languages = [];

    uniLangMenuInit(newValue)
      .then((data: UniLangMenuItem[] = []) => {
        this.languages = data;
        this.lang = data.filter((item: UniLangMenuItem): boolean => item.lang === this.select)[0] || data[0];
      });
  }

  render(): VNode {
    const { feature, separator, type, mini, round, routing, route, activePath, translatePath, languages, lang } = this;
    let template;

    if (this.languages.length) {
      template = UniLangMenuTemplate({
        type,
        feature,
        separator,
        activePath,
        mini,
        round,
        routing,
        route,
        languages,
        lang,
      });
    }

    return template
      ? UniLangMenuWrapTemplate({ type, feature, separator, activePath, translatePath }, template)
      : UniHostTemplate({});
  }

  componentDidLoad(): void {
    uniWatermark('uni-lang-menu', 'output');

    if (!this.languages.length) {
      this.onList(this.list)
    }
  }
}
