import { Component, ComponentInterface, h, Host, Prop, State, VNode } from '@stencil/core';

import { uniWatermark, uniLoad, UniResponse } from '@uni/common';

import { UniLangMenuItem } from '../../models';

@Component({
  tag: 'uni-lang-menu',
  styleUrl: '../../styles/lang-menu.css'
})
export class UniLangMenuComponent implements ComponentInterface {
  @Prop() init: string;

  @Prop() languages: string;

  @Prop() type: string; // add types

  @Prop() mini: boolean;

  @Prop() rounded: boolean;

  @Prop() routing: boolean;

  @Prop() menuState = 'app.loc.menu.opened';

  @Prop() activeState = 'app.loc.menu.active';

  @Prop() translateState = 'app.loc.translate';

  @State() list: UniLangMenuItem[] = [];

  @State() lang: UniLangMenuItem;

  componentDidLoad(): void {
    uniWatermark('uni-lang-menu', 'innerText');

    if (this.languages) {
      uniLoad(this.languages, 'json' as UniResponse, {
        // mode: 'no-cors',
        // credentials: 'include'
      })
        .then((data: UniLangMenuItem[] = []) => {
          this.list = data;
          this.lang = data.filter((item: UniLangMenuItem): boolean => item.lang === this.init)[0] || data[0];
        });
    }
  }

  render(): VNode {
    const { mini, rounded, routing, activeState, list, lang } = this;

    return lang ? (
        <Host>
          <uni-button-layout-mat hidden/>
          <uni-store active init type="session" state={activeState} value={lang}/>

          <uni-store active event="click" state={this.menuState}>
            <uni-store active state={this.menuState} target="uni-menu-surface-mat" prop="opened">
              <div class="mdc-menu-surface--anchor uni-lang-menu">
                <uni-button-mat>
                  <uni-button-icon-mat>
                    <uni-store active type="session" state={`${activeState}.flag`} target="uni-flag" prop="svg">
                      <uni-store active type="session" state={`${activeState}.flagSrc`} target="uni-flag" prop="src">
                        <uni-flag rounded={rounded}/>
                      </uni-store>
                    </uni-store>
                  </uni-button-icon-mat>

                  {mini ? '' : <uni-button-label-mat>
                    <uni-store active type="session" state={activeState} target="uni-replace" prop="state">
                      <uni-replace style={{ color: '#333', 'text-transform': 'none' }}>name</uni-replace>
                    </uni-store>
                  </uni-button-label-mat>}

                  <uni-button-icon-mat>
                    <uni-icon-arrow-drop-down-mat/>
                  </uni-button-icon-mat>
                </uni-button-mat>

                <uni-menu-surface-mat>
                  <uni-list-mat>
                    {list.map((item) =>
                      <uni-store active={!routing} type="session" event="click" state={activeState} value={item}>
                        <uni-route-link params={routing ? `lang=${item.lang}` : ''}>
                          <uni-list-item-mat>
                            <uni-flag src={item.flagSrc} svg={item.flag} rounded={rounded}/>
                            <span style={{ 'margin-left': '5px' }}>{item.name}</span>
                          </uni-list-item-mat>

                          <uni-route params={routing ? `lang=${item.lang}` : ''}>
                            <uni-store type="session" state={activeState} value={item}/>
                          </uni-route>
                        </uni-route-link>
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

// function uniSwitchFlag(name: string, src: string) {
//   switch(name) {
//     case 'en':
//       return <uni-flag-us/>;
//     case 'cn':
//       return <uni-flag-cn/>;
//     case 'ru':
//       return <uni-flag-ru/>;
//     default:
//       return src ? <uni-flag src={src} /> : <i/>;
//   }
// }
