import { Component, ComponentInterface, Prop, VNode } from '@stencil/core';

import { uniWatermark } from '@uni/common';

import { UniFlagName } from '../../models';
import { UniFlagShadowTemplate } from '../../utils';

@Component({
  tag: 'uni-flag-shadow',
  styleUrl: '../../styles/flag-shadow.css',
  shadow: true
})
export class UniFlagShadowComponent implements ComponentInterface {
  @Prop() src: string;

  @Prop() alt: string = 'flag';

  @Prop() name: UniFlagName;

  @Prop() rounded: boolean;

  componentDidLoad(): void {
    uniWatermark('uni-flag-shadow', 'window');
  }

  render(): VNode {
    const { src, alt, name, rounded } = this;
    const classes = { 'uni-flag': true, rounded };

    return UniFlagShadowTemplate({ src, alt, name, classes });
  }
}
