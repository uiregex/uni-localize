import { Component, ComponentInterface, Prop, VNode } from '@stencil/core';

import { uniWatermark } from '@uni/common';

import { uniFlagCnSvg } from '../../../utils/templates/cn';

@Component({
  tag: 'uni-flag-cn',
  styleUrl: '../../../styles/flag.css'
})
export class UniFlagCnComponent implements ComponentInterface {
  @Prop() rounded: boolean;

  componentDidLoad(): void {
    uniWatermark('uni-flag', 'window');
  }

  render(): VNode {
    const { rounded } = this;

    return uniFlagCnSvg({ 'uni-flag': true, rounded });
  }
}
