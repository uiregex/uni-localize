import { Component, ComponentInterface, Prop, VNode } from '@stencil/core';

import { uniWatermark } from '@uni/common';

import { uniFlagEnSvg } from '../../../utils/templates/en';

@Component({
  tag: 'uni-flag-en',
  styleUrl: '../../../styles/flag.css'
})
export class UniFlagEnComponent implements ComponentInterface {
  @Prop() rounded: boolean;

  componentDidLoad(): void {
    uniWatermark('uni-flag', 'window');
  }

  render(): VNode {
    const { rounded } = this;

    return uniFlagEnSvg({ 'uni-flag': true, rounded });
  }
}
