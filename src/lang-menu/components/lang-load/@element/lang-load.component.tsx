import { Component, ComponentInterface, h, Host, Prop, VNode } from '@stencil/core';

import { UniStoreType } from '../../../models';

@Component({ tag: 'uni-lang-load' })
export class UniLangLoadComponent implements ComponentInterface {

  @Prop({ reflect: true }) url!: string;

  @Prop({ reflect: true }) top: boolean = false;

  @Prop({ reflect: true }) shadow: boolean = false;

  @Prop({ reflect: true }) isShadow: boolean = false;

  @Prop({ reflect: true }) frame: boolean = false;

  @Prop({ reflect: true }) type: UniStoreType = 'memory';

  @Prop({ reflect: true }) feature: string = 'uni.store';

  @Prop({ reflect: true }) separator: string = '.';

  @Prop({ reflect: true }) languagesPath: string = 'loc.languages';

  @Prop({ reflect: true }) activePath: string = 'loc.active';

  @Prop({ reflect: true }) translatePath: string = 'loc.translate';

  render(): VNode {
    return (
      <Host>
        <uni-load-store
          multi={true}
          top={this.top}
          shadow={this.isShadow}
          frame={this.frame}
          type={this.type}
          feature={this.feature}
          separator={this.separator}
          path={this.languagesPath}
          url={this.url}
        />

        <uni-event-store-get
          top={this.top}
          type={this.type}
          feature={this.feature}
          separator={this.separator}
          path={`${this.languagesPath}[0]`}
          prop={'state'}
        >
          <uni-store-set
            top={this.top}
            shadow={this.isShadow}
            frame={this.frame}
            type={this.type}
            feature={this.feature}
            separator={this.separator}
            mode={'init'}
            path={this.activePath}
          />
        </uni-event-store-get>

        <uni-event-store-get
          top={this.top}
          type={this.type}
          feature={this.feature}
          separator={this.separator}
          path={`${this.activePath}.translation`}
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
