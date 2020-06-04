import { Component, ComponentInterface, h, Host, Prop, VNode } from '@stencil/core';

@Component({ tag: 'uni-lang-menu-wrap' })
export class UniLangMenuWrapComponent implements ComponentInterface {
  @Prop() menuState = 'loc.menu.opened';

  @Prop() urlState = 'loc.menu.url';

  @Prop() translateState = 'loc.translate';

  render(): VNode {
    return (
      <Host>
        <uni-icons-mat/>

        <uni-store type="session" event="click" state={this.menuState}>
          <uni-store type="session" state={this.menuState} target="uni-menu-surface-mat" prop="opened">
            <div class="mdc-menu-surface--anchor">
              <slot/>
            </div>
          </uni-store>
        </uni-store>

        <uni-event name="uniLoadSuccess" stop>
          <uni-store type="session" event="uniLoadSuccess" state={this.translateState} clean>
            <uni-store type="session" state={this.urlState} target="uni-load" prop="url">
              <uni-load active/>
            </uni-store>
          </uni-store>
        </uni-event>
      </Host>
    );
  }
}
