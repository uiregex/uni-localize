import { Component, ComponentInterface, Element, h, Host, Prop, VNode } from '@stencil/core';

import { uniLocWatermark } from '../../../watermark';

@Component({ tag: 'uni-lang-menu-wrap' })
export class UniLangMenuWrapComponent implements ComponentInterface {
  @Element() el!: HTMLElement;

  @Prop() menuState = 'loc.menu.opened';

  @Prop() urlState = 'loc.menu.url';

  @Prop() translateState = 'loc.translate';

  componentDidLoad(): void {
    uniLocWatermark(this.el);
  }

  render(): VNode {
    return (
      <Host>
        <uni-store active type="session" event="click" state={this.menuState}>
          <uni-store active type="session" state={this.menuState} target="uni-menu-surface-mat" prop="opened">
            <div class="mdc-menu-surface--anchor">
              <slot/>
            </div>
          </uni-store>
        </uni-store>

        <uni-event stop name="uniLoadSuccess">
          <uni-store active clean type="session" event="uniLoadSuccess" state={this.translateState} >
            <uni-store active type="session" state={this.urlState} target="uni-load" prop="url">
              <uni-load active/>
            </uni-store>
          </uni-store>
        </uni-event>
      </Host>
    );
  }
}
