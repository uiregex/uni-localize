import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniTemplate } from '@uiwebkit/common';

import { UniButtonMode } from '../../../models';

@Component({ tag: 'uni-lang-list-button' })
export class UniLangListButtonComponent implements ComponentInterface {

  @Prop({ reflect: true }) selected: boolean = false;

  @Prop({ reflect: true }) mini: boolean = false;

  @Prop({ reflect: true }) round: boolean = false;

  @Prop({ reflect: true }) mode: UniButtonMode;

  @Prop({ reflect: true }) flag: string;

  @Prop({ reflect: true }) name: string;

  render(): VNode {
    return UniTemplate(
      <uni-selection inactive={!this.selected}>
        <uni-button pro={true} mode={this.mode}>
          <uni-modify state={this.flag} action='isBind' prop='inactive'>
            <uni-display inactive={true}>
              <uni-button-icon only={true}>
                <uni-modify state={this.flag} action='unbind' prop='name'>
                  <uni-flag round={this.round} />
                </uni-modify>
              </uni-button-icon>
            </uni-display>
          </uni-modify>

          <uni-display inactive={this.mini}>
            <uni-button-label>{this.name}</uni-button-label>
          </uni-display>
        </uni-button>
      </uni-selection>,
    );
  }
}
