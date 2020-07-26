import { Component, ComponentInterface, Prop, VNode } from '@stencil/core';

import { uniWatermark } from '@uni/common';

import { uniFlagUsSvg } from '../../../utils/templates/us';

@Component({
  tag: 'uni-flag-us-shadow',
  styleUrl: '../../../styles/flag.css',
  shadow: true
})
export class UniFlagUsShadowComponent implements ComponentInterface {
  @Prop() rounded: boolean;

  componentDidLoad(): void {
    uniWatermark('uni-flag', 'window');
  }

  render(): VNode {
    const { rounded } = this;

    return uniFlagUsSvg({ 'uni-flag': true, rounded });
  }
}
