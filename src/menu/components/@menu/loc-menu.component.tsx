import { Component, ComponentInterface, Element, h, Host, VNode } from '@stencil/core';

@Component({ tag: 'uni-loc-menu' })
export class UniLocMenuComponent implements ComponentInterface {
  @Element() el!: HTMLElement;

  render(): VNode {
    return (
      <Host>
        <uni-icons-mat/>

        <uni-store event="click" state="test">
          <uni-store state="test" target="uni-menu-surface-mat" prop="opened">
            <div class="mdc-menu-surface--anchor">
              <uni-icon-button-mat>language</uni-icon-button-mat>

              <uni-menu-surface-mat>
                <uni-list-mat>
                  <uni-store type="session" event="click" state="packages.loc.url" value="assets/json/loc/eng.json">
                    <uni-list-item-mat>English</uni-list-item-mat>
                  </uni-store>

                  <uni-store type="session" event="click" state="packages.loc.url" value="assets/json/loc/rus.json">
                    <uni-list-item-mat>Русский</uni-list-item-mat>
                  </uni-store>
                </uni-list-mat>
              </uni-menu-surface-mat>
            </div>
          </uni-store>
        </uni-store>

        <uni-event name="uniLoadSuccess" stop>
          <uni-store type="session" event="uniLoadSuccess" state="packages.loc.translate">
            <uni-store type="session" state="packages.loc.url" target="uni-load" prop="url">
              <uni-load active/>
            </uni-store>
          </uni-store>
        </uni-event>
      </Host>
    );
  }
}
