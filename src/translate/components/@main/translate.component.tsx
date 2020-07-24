import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';
import { uniWatermark } from '@uni/common';


@Component({ tag: 'uni-translate' })
export class UniTranslateComponent implements ComponentInterface {
  @Prop() type = 'session';

  @Prop() state = 'app.loc.translate';

  @Prop() start: string = '{{ ';

  @Prop() end: string = ' }}';

  componentDidLoad(): void {
    uniWatermark('uni-translate', 'switch');
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
