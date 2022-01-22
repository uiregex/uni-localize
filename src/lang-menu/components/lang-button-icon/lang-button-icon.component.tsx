import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { isDefined, UniTemplate } from '@uiwebkit/common';

@Component({ tag: 'uni-lang-button-icon' })
export class UniLangButtonIconComponent implements ComponentInterface {

  @Prop({ reflect: true }) round: boolean = false;

  @Prop({ reflect: true }) name: string;

  render(): VNode {
    return isDefined(this.name) ? UniTemplate(
      <uni-button-icon only={true}>
        <uni-flag round={this.round} name={this.name} />
      </uni-button-icon>,
    ) : null;
  }
}
