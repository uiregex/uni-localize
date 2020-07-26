import { Component, ComponentInterface, Prop, VNode } from '@stencil/core';

import { uniWatermark } from '@uni/common';

import { uniFlag } from '../../utils';

@Component({
  tag: 'uni-flag-shadow',
  styleUrl: '../../styles/flag.css',
  shadow: true
})
export class UniFlagShadowComponent implements ComponentInterface {
  @Prop() svg: string;

  @Prop() src: string;

  @Prop() alt: string = 'flag';

  @Prop() rounded: boolean;

  componentDidLoad(): void {
    uniWatermark('uni-flag', 'window');
  }

  render(): VNode {
    const { svg, src, alt, rounded } = this;

    return uniFlag({ src, alt, svg, rounded });
  }
}
