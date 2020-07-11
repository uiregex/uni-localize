import { Component, ComponentInterface, Element, h, Host, Prop, State, VNode } from '@stencil/core';

import { uniLoad } from '@uni/adk';

import { uniLocWatermark } from '../../../watermark';
import { UniLangMenuItem } from '../../models';

@Component({ tag: 'uni-lang-menu' })
export class UniLangMenuComponent implements ComponentInterface {
  @Element() el!: HTMLElement;

  @Prop() init: string;

  @Prop() languages: string;

  @Prop() type: string; // add types

  @Prop() routing: boolean;

  @Prop() menuState = 'app.loc.menu.opened';

  @Prop() activeState = 'app.loc.menu.active';

  @Prop() translateState = 'app.loc.translate';

  @State() list: UniLangMenuItem[] = [];

  @State() lang: UniLangMenuItem;

  connectedCallback(): void {
    uniLocWatermark(this.el);
  }

  componentDidLoad(): void {
    if (this.languages) {
      uniLoad(this.languages, 'json')
        .then((data: UniLangMenuItem[] = []) => {
          this.list = data;
          this.lang = data.filter((item: UniLangMenuItem): boolean => item.lang === this.init)[0] || data[0];
        });
    }
  }

  render(): VNode {
    const { routing, activeState, list, lang } = this;

    return lang ? (
        <Host>
          <uni-store active init type="session" state={activeState} value={lang}/>

          <uni-store active event="click" state={this.menuState}>
            <uni-store active state={this.menuState} target="uni-menu-surface-mat" prop="opened">
              <div class="mdc-menu-surface--anchor">
                <uni-button kind="outlined">
                  <uni-store active type="session" state={`${activeState}.flag`} target="uni-flag" prop="src">
                    <uni-flag/>
                  </uni-store>

                  <uni-button-label>
                    <uni-store active type="session" state={activeState} target="uni-replace" prop="state">
                      <uni-replace>name</uni-replace>
                    </uni-store>
                  </uni-button-label>

                  <uni-button-icon>arrow_drop_down</uni-button-icon>
                </uni-button>

                <uni-menu-surface-mat>
                  <uni-list-mat>
                    {list.map((item) =>
                      <uni-store active={!routing} type="session" event="click" state={activeState} value={item}>
                        <uni-router-link params={routing ? `lang=${item.lang}` : ''}>
                          <uni-list-item-mat>
                            {item.flag ? <uni-flag src={item.flag}/> : <i/>}
                            {item.name}
                          </uni-list-item-mat>

                          <uni-route params={routing ? `lang=${item.lang}` : ''}>
                            <uni-store type="session" state={activeState} value={item}/>
                          </uni-route>
                        </uni-router-link>
                      </uni-store>
                    )}
                  </uni-list-mat>
                </uni-menu-surface-mat>
              </div>
            </uni-store>
          </uni-store>

          <uni-event stop name="uniLoadSuccess">
            <uni-store active clean type="session" event="uniLoadSuccess" state={this.translateState}>
              <uni-store active type="session" state={`${activeState}.translation`} target="uni-load" prop="url">
                <uni-load active/>
              </uni-store>
            </uni-store>
          </uni-event>
        </Host>
      )
      : '';
  }
}
