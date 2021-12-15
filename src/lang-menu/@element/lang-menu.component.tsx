import { Component, ComponentInterface, Prop, VNode, h, Host } from '@stencil/core';

import { UniButtonMode, UniStoreType } from '../models';
import { UniLangMenuTemplate } from '../utils/lang-menu.template';
import { UniLangListTemplate } from '../utils/lang-list.template';

@Component({
  tag: 'uni-lang-menu',
  styleUrl: '../styles/lang-menu.css',
})
export class UniLangMenuComponent implements ComponentInterface {

  @Prop({ reflect: true }) url!: string;

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

  @Prop({ reflect: true }) only: boolean = false;

  render(): VNode {
    if (this.only) {
      const classes = {
        'uni-lang-menu': !this.linear,
        'uni-lang-list': this.linear
      };

      return <Host class={classes} />;
    } else {
      const {
        url, linear, mini, round, routing, route, mode, top, shadow, frame, type, feature, separator,
        languagesPath, activePath, translatePath,
      } = this;
      const data = { url, linear, mini, round, routing, route, mode, languagesPath, activePath, translatePath };
      const storeData = { top, shadow, frame, type, feature, separator };

      return this.linear ? UniLangListTemplate(data, storeData) : UniLangMenuTemplate(data, storeData);
    }
  }
}
