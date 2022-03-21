import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniLangItem, UniStoreType } from '../../../models';

@Component({ tag: 'uni-lang-default' })
export class UniLangDefaultComponent implements ComponentInterface {

  @Prop({ reflect: true }) value: Array<UniLangItem> = [];

  @Prop({ reflect: true }) selectedIndex: number = 0;

  @Prop({ reflect: true }) isShadow: boolean = false;

  @Prop({ reflect: true }) top: boolean = false;

  @Prop({ reflect: true }) shadow: boolean = false;

  @Prop({ reflect: true }) frame: boolean = false;

  @Prop({ reflect: true }) type: UniStoreType = 'memory';

  @Prop({ reflect: true }) feature: string = 'uni.store';

  @Prop({ reflect: true }) activePath: string = 'loc.active';

  render(): VNode {
    return (
      <uni-event-store-get
        type={this.type}
        feature={this.feature}
        path={this.activePath}
        prop={'inactive'}
      >
        <uni-store-set
          inactive={true}
          top={this.top}
          frame={this.frame}
          shadow={this.isShadow}
          mode={'set'}
          type={this.type}
          feature={this.feature}
          path={this.activePath}
          state={this.value[this.selectedIndex]}
        />
      </uni-event-store-get>
    );
  };
}
