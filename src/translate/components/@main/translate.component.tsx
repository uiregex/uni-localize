import { Component, ComponentInterface, Element, h, Prop, VNode } from '@stencil/core';

import { uniLocWatermark } from '../../../watermark';

@Component({ tag: 'uni-translate' })
export class UniTranslateComponent implements ComponentInterface {
  @Element() el!: HTMLElement;

  @Prop() type = 'session';

  @Prop() state = 'app.loc.translate';

  @Prop() start: string = '{{ ';

  @Prop() end: string = ' }}';

  componentDidLoad(): void {
    uniLocWatermark(this.el);
  }

  render(): VNode {
    const { type, state, start, end } = this;
    const props = { type, state };
    const replaceProps = { start, end }

    return (
      <uni-store active {...props} target="uni-replace" prop="state">
        <uni-replace {...replaceProps}>
          <slot/>
        </uni-replace>
      </uni-store>
    );
  }
}
