import { Component, ComponentInterface, Prop, VNode } from '@stencil/core';

import { uniWatermark } from '@uni/common';

import { UniFlagName } from '../../models';
import { UniFlagTemplate } from '../../utils';

@Component({
  tag: 'uni-flag',
  styleUrl: '../../styles/flag.css'
})
export class UniFlagComponent implements ComponentInterface {
  @Prop() src: string;

  @Prop() alt: string = 'flag';

  @Prop() name: UniFlagName;

  @Prop() rounded: boolean;

  componentDidLoad(): void {
    uniWatermark('uni-flag', 'window');
  }

  render(): VNode {
    const { src, alt, name, rounded } = this;
    const classes = { 'uni-flag': true, rounded };

    return UniFlagTemplate({ src, alt, name, classes });
  }
}
