import { Component, ComponentInterface, Prop, VNode, h } from '@stencil/core';

@Component({ tag: 'uni-lang-menu-list-item' })
export class UniLangMenuListItemComponent implements ComponentInterface {

  @Prop({ reflect: true }) selected: boolean = false;

  @Prop({ reflect: true }) round: boolean = false;

  @Prop({ reflect: true }) flag: string;

  @Prop({ reflect: true }) name: string;

  render(): VNode {
    return (
      <uni-list-item selected={this.selected} index='-1'>
        <uni-modify state={this.flag} action='isBind' prop='inactive'>
          <uni-display inactive={true}>
            <uni-list-item-graphic only={true}>
              <uni-modify state={this.flag} action='unbind' prop='name'>
                <uni-flag round={this.round} />
              </uni-modify>
            </uni-list-item-graphic>
          </uni-display>
        </uni-modify>

        <uni-list-item-text>{this.name}</uni-list-item-text>
      </uni-list-item>
    );
  }
}
