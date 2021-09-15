import { Component, ComponentInterface, Prop, VNode, h, Host } from '@stencil/core';

import { UniStoreType } from '../models';
import { UniLangMenuTemplate } from '../utils/lang-menu.template';

@Component({
  tag: 'uni-lang-menu-shadow',
  styleUrl: '../styles/lang-menu.css',
  shadow: true,
})
export class UniLangMenuShadowComponent implements ComponentInterface {

  @Prop({ reflect: true }) list!: string;

  @Prop({ reflect: true }) mini: boolean = false;

  @Prop({ reflect: true }) round: boolean = false;

  @Prop({ reflect: true }) routing: boolean = false;

  @Prop({ reflect: true }) route: string = 'lang';

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
      const classes = { 'uni-lang-menu': true };

      return (
        <Host class={classes}>
          <slot />
        </Host>
      );
    } else {
      const {
        list, mini, round, routing, route,
        top, shadow, frame, type, feature, separator,
        languagesPath, activePath, translatePath,
      } = this;
      const data = { list, mini, round, routing, route, languagesPath, activePath, translatePath, isShadow: true };
      const storeData = { top, shadow, frame, type, feature, separator };

      return UniLangMenuTemplate(data, storeData);
    }
  }
}
