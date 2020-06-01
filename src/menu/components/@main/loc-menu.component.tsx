import { Component, ComponentInterface, Element, h, Host, Prop, VNode } from '@stencil/core';

@Component({ tag: 'uni-loc-menu' })
export class UniLocMenuComponent implements ComponentInterface {
  @Element() el!: HTMLElement;

  @Prop() menuState = 'loc.menu.opened';

  @Prop() urlState = 'loc.menu.url';

  @Prop() translateState = 'loc.translate';

  render(): VNode {
    return (
      <Host>
        <uni-icons-mat/>

        <uni-store event="click" state={this.menuState}>
          <uni-store state={this.menuState} target="uni-menu-surface-mat" prop="opened">
            <div class="mdc-menu-surface--anchor">
              <uni-icon-button-mat>language</uni-icon-button-mat>

              <uni-menu-surface-mat>
                <uni-list-mat>
                  <uni-store type="session" event="click" state={this.urlState} value="assets/json/i18n/en.json">
                    <uni-list-item-mat>English</uni-list-item-mat>
                  </uni-store>

                  <uni-store type="session" event="click" state={this.urlState} value="assets/json/i18n/ru.json">
                    <uni-list-item-mat>Русский</uni-list-item-mat>
                  </uni-store>
                </uni-list-mat>
              </uni-menu-surface-mat>
            </div>
          </uni-store>
        </uni-store>

        <uni-event name="uniLoadSuccess" stop>
          <uni-store type="session" event="uniLoadSuccess" state={this.translateState}>
            <uni-store type="session" state={this.urlState} target="uni-load" prop="url">
              <uni-load active/>
            </uni-store>
          </uni-store>
        </uni-event>
      </Host>
    );
  }
}
