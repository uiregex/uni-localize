import { Component, ComponentInterface, Prop, VNode } from '@stencil/core';

import { UniButtonMode, UniStoreType } from '../models';
import { UniLangMenuTemplate } from '../utils/lang-menu.template';
import { UniLangListTemplate } from '../utils/lang-list.template';

@Component({
  tag: 'uni-lang-menu-shadow',
  styleUrl: '../styles/lang-menu.css',
  shadow: true,
})
export class UniLangMenuShadowComponent implements ComponentInterface {

  @Prop({ reflect: true }) list!: string;

  @Prop({ reflect: true }) linear: boolean = false;

  @Prop({ reflect: true }) mini: boolean = false;

  @Prop({ reflect: true }) round: boolean = false;

  @Prop({ reflect: true }) routing: boolean = false;

  @Prop({ reflect: true }) route: string = 'lang';

  @Prop({ reflect: true }) mode: UniButtonMode;

  @Prop({ reflect: true }) top: boolean = false;

  @Prop({ reflect: true }) shadow: boolean = false;

  @Prop({ reflect: true }) frame: boolean = false;

  @Prop({ reflect: true }) type: UniStoreType = 'memory';

  @Prop({ reflect: true }) feature: string = 'uni.store';

  @Prop({ reflect: true }) separator: string = '.';

  @Prop({ reflect: true }) languagesPath: string = 'loc.languages';

  @Prop({ reflect: true }) activePath: string = 'loc.active';

  @Prop({ reflect: true }) translatePath: string = 'loc.translate';

  render(): VNode {
    const {
      list, linear, mini, round, routing, route, mode, top, shadow, frame, type, feature, separator,
      languagesPath, activePath, translatePath,
    } = this;
    const data = { list, linear, mini, round, routing, route, mode, languagesPath, activePath, translatePath, isShadow: true };
    const storeData = { top, shadow, frame, type, feature, separator };

    return this.linear ? UniLangListTemplate(data, storeData) : UniLangMenuTemplate(data, storeData);
  }
}
