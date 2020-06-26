import { Component, ComponentInterface, Element, h, Host, Prop, State, VNode } from '@stencil/core';

import { uniLoad } from '@uni/adk';

interface UniLangMenuList {
  lang: string;
  name: string;
  flag?: string;
  translation: string;
}

@Component({ tag: 'uni-lang-menu' })
export class UniLangMenuComponent implements ComponentInterface {
  @Element() el!: HTMLElement;

  @Prop() languages: string;

  @Prop() activeLang: string;

  @Prop() menuState = 'loc.menu.opened';

  @Prop() activeState = 'loc.menu.active';

  @Prop() translateState = 'loc.translate';

  @State() list: UniLangMenuList[] = [];

  @State() lang: UniLangMenuList;

  connectedCallback() {
    this.el['package'] = 'loc';
  }

  componentDidLoad(): void {
    if (this.languages) {
      uniLoad(this.languages, 'json')
        .then((data: UniLangMenuList[]) => {
          this.list = data;
          this.lang = data.filter((item: UniLangMenuList): boolean => item.lang === this.activeLang)[0];
        });
    }
  }

  render(): VNode {
    const { activeState, list, lang } = this;

    return (
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
                    <uni-router-link params={`lang=${item.lang}`}>
                      <uni-list-item-mat>
                        {item.flag ? <uni-flag src={item.flag}/> : <i/>}
                        {item.name}
                      </uni-list-item-mat>

                      <uni-route params={`lang=${item.lang}`}>
                        <uni-store type="session" state={activeState} value={item}/>
                      </uni-route>
                    </uni-router-link>
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
    );
  }
}
