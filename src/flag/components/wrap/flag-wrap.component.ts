import { Component, ComponentInterface, Prop, VNode } from '@stencil/core';

import { UniHostTemplate, uniWatermark } from '@uni/common';

@Component({
  tag: 'uni-flag-wrap',
  styleUrl: '../../styles/flag.css'
})
export class UniFlagComponent implements ComponentInterface {
  @Prop({ reflect: true }) rounded: boolean;

  componentDidLoad(): void {
    uniWatermark('uni-flag-wrap', 'window');
  }

  render(): VNode {
    const { rounded } = this;
    const classes = { 'uni-flag': true, rounded };

    return UniHostTemplate({ classes });
  }
}
