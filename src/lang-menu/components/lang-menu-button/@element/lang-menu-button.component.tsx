import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniButtonMode, UniStoreType } from '../../../models';

@Component({ tag: 'uni-lang-menu-button' })
export class UniLangMenuButtonComponent implements ComponentInterface {

  @Prop({ reflect: true }) mini: boolean = false;

  @Prop({ reflect: true }) round: boolean = false;

  @Prop({ reflect: true }) mode: UniButtonMode;

  @Prop({ reflect: true }) top: boolean = false;

  @Prop({ reflect: true }) type: UniStoreType = 'memory';

  @Prop({ reflect: true }) feature: string = 'uni.store';

  @Prop({ reflect: true }) separator: string = '.';

  @Prop({ reflect: true }) activePath: string = 'loc.active';

  render(): VNode {
    return (
      <uni-button pro={true} mode={this.mode}>
        <uni-button-icon only={true}>
          <uni-event-store-get
            top={this.top}
            type={this.type}
            feature={this.feature}
            separator={this.separator}
            path={`${this.activePath}.flag`}
            selector={'uni-flag'}
            prop={'name'}
          >
            <uni-flag round={this.round} />
          </uni-event-store-get>
        </uni-button-icon>

        <uni-display inactive={this.mini}>
          <uni-button-label>
            <uni-event-store-get
              top={this.top}
              type={this.type}
              feature={this.feature}
              separator={this.separator}
              path={`${this.activePath}.name`}
              selector={'uni-render'}
              prop={'value'}
            >
              <uni-render text={true} />
            </uni-event-store-get>
          </uni-button-label>
        </uni-display>

        <uni-drop-down />
      </uni-button>
    );
  }
}
