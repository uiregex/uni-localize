import { Component, ComponentInterface, Element, h, Prop, VNode } from '@stencil/core';

@Component({ tag: 'uni-translate' })
export class UniTranslateComponent implements ComponentInterface {
  @Element() el!: HTMLElement;

  @Prop() type = 'session';

  @Prop() state = 'loc.translate';

  @Prop() start: string = '{{ ';

  @Prop() end: string = ' }}';

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
