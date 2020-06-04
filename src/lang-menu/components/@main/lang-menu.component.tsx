import { Component, ComponentInterface, h, Host, Prop, State, VNode } from '@stencil/core';

import { uniLoad } from '@uni/adk';

interface UniLangMenuList {
  name: string;
  flag?: string;
  translation: string;
}

@Component({ tag: 'uni-lang-menu' })
export class UniLangMenuComponent implements ComponentInterface {
  @Prop() name: string;

  @Prop() flag: string;

  @Prop() translation: string;

  @Prop() menuState = 'loc.menu.opened';

  @Prop() activeState = 'loc.menu.active';

  @Prop() translateState = 'loc.translate';

  @Prop() langs: string;

  @State() list: UniLangMenuList[] = [];

  componentDidLoad(): void {
    if (this.langs) {
      uniLoad(this.langs, 'json')
        .then((data: UniLangMenuList[]) => this.list = data);
    }
  }

  render(): VNode {
    const { name, flag, translation, activeState, list } = this;

    return (
      <Host>
        <uni-icons-mat/>

        <uni-store type="session" state={activeState} value={{ name, flag, translation }} init/>

        <uni-store event="click" state={this.menuState}>
          <uni-store state={this.menuState} target="uni-menu-surface-mat" prop="opened">
            <div class="mdc-menu-surface--anchor">
              <uni-button kind="outlined">
                <uni-store type="session" state={this.activeState + '.flag'} target="uni-flag" prop="src">
                  <uni-flag></uni-flag>
                </uni-store>

                <uni-button-label>
                  <uni-store type="session" state={this.activeState} target="uni-replace" prop="state">
                    <uni-replace>name</uni-replace>
                  </uni-store>
                </uni-button-label>

                <uni-button-icon>arrow_drop_down</uni-button-icon>
              </uni-button>

              <uni-menu-surface-mat>
                <uni-list-mat>
                  {list.map((item) =>
                    <uni-store type="session" event="click" state={activeState} value={item}>
                      <uni-list-item-mat>
                        {item.flag ? <uni-flag src={item.flag}/> : <i></i>}
                        {item.name}
                      </uni-list-item-mat>
                    </uni-store>
                  )}
                </uni-list-mat>
              </uni-menu-surface-mat>
            </div>
          </uni-store>
        </uni-store>

        <uni-event name="uniLoadSuccess" stop>
          <uni-store type="session" event="uniLoadSuccess" state={this.translateState} clean>
            <uni-store type="session" state={this.activeState + '.translation'} target="uni-load" prop="url">
              <uni-load active></uni-load>
            </uni-store>
          </uni-store>
        </uni-event>
      </Host>
    );
  }
}
