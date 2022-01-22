import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniTemplate } from '@uiwebkit/common';

import { UniButtonMode } from '../../../models';

@Component({ tag: 'uni-lang-list-button' })
export class UniLangListButtonComponent implements ComponentInterface {

  @Prop({ reflect: true }) activate: boolean = false;

  @Prop({ reflect: true }) mini: boolean = false;

  @Prop({ reflect: true }) round: boolean = false;

  @Prop({ reflect: true }) mode: UniButtonMode;

  @Prop({ reflect: true }) flag: string;

  @Prop({ reflect: true }) name: string;

  render(): VNode {
    return UniTemplate(
      <uni-selection inactive={!this.activate}>
        <uni-button pro={true} mode={this.mode}>
          <uni-lang-button-icon round={this.round} name={this.flag} />

          <uni-display inactive={this.mini}>
            <uni-button-label>{this.name}</uni-button-label>
          </uni-display>
        </uni-button>
      </uni-selection>,
    );
  }
}
