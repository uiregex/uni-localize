import { Component, ComponentInterface, h, Host, Prop, VNode } from '@stencil/core';

import { UniStoreType } from '../../../models';

@Component({ tag: 'uni-translate-load' })
export class UniTranslateLoadComponent implements ComponentInterface {

  @Prop({ reflect: true }) top: boolean = false;

  @Prop({ reflect: true }) shadow: boolean = false;

  @Prop({ reflect: true }) frame: boolean = false;

  @Prop({ reflect: true }) type: UniStoreType = 'memory';

  @Prop({ reflect: true }) feature: string = 'uni.store';

  @Prop({ reflect: true }) separator: string = '.';

  @Prop({ reflect: true }) activePath: string = 'loc.active';

  @Prop({ reflect: true }) translatePath: string = 'loc.translate';

  render(): VNode {
    return (
      <Host>
        <uni-event-store-get
          top={this.top}
          type={this.type}
          feature={this.feature}
          separator={this.separator}
          path={`${this.activePath}.translationUrl`}
          prop={'url'}
        >
          <uni-load-store
            multi={true}
            top={this.top}
            shadow={this.shadow}
            frame={this.frame}
            mode={'set'}
            feature={this.feature}
            separator={this.separator}
            path={this.translatePath}
          />
        </uni-event-store-get>
      </Host>
    );
  }
}
