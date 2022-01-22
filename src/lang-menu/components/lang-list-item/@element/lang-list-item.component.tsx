import { Component, ComponentInterface, Prop, VNode, h } from '@stencil/core';

import { UniTemplate } from '@uiwebkit/common';

@Component({ tag: 'uni-lang-list-item' })
export class UniLangListItemComponent implements ComponentInterface {

  @Prop({ reflect: true }) activate: boolean = false;

  @Prop({ reflect: true }) round: boolean = false;

  @Prop({ reflect: true }) flag: string;

  @Prop({ reflect: true }) name: string;

  render(): VNode {
    return UniTemplate(
      <uni-list-item selected={this.activate} index='-1'>
        {this.flag ? UniTemplate(
          <uni-list-item-graphic only={true}>
            <uni-flag round={this.round} name={this.flag} />
          </uni-list-item-graphic>
        ) : null}

        <uni-list-item-text>{this.name}</uni-list-item-text>
      </uni-list-item>
    );
  }
}
