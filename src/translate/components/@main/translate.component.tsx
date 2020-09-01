import { Component, ComponentInterface, Element, h, Prop, VNode, Watch } from '@stencil/core';

import { UniStoreType } from '@uni/udk';

import { uniTranslateInit } from '../../utils/translate.init';
import { UniTranslateTemplate } from '../../utils/translate.template';

@Component({ tag: 'uni-translate' })
export class UniTranslateComponent implements ComponentInterface {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true, mutable: true }) update: boolean = false;

  @Prop({ reflect: true }) feature: string = 'uni.store';

  @Prop({ reflect: true }) separator: string = '.';

  @Prop({ reflect: true }) type: UniStoreType = 'memory';

  @Prop({ reflect: true }) path = 'app.loc.translate';

  @Prop({ reflect: true }) start: string = '{{ ';

  @Prop({ reflect: true }) end: string = ' }}';

  @Watch('update')
  updateWatcher(newValue: boolean) {
    if (newValue) {
      setTimeout(() => this.update = false, 300);
    }
  }

  componentDidLoad(): void {
    uniTranslateInit();
  }

  render(): VNode {
    const { feature, separator, type, path, update, start, end } = this;
    const storeProps = { feature, separator, type, path };
    const replaceProps = { update, start, end };

    return UniTranslateTemplate({ storeProps, replaceProps }, <slot/>);
  }
}
