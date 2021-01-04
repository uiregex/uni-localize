import { Component, ComponentInterface, Prop, VNode } from '@stencil/core';

import { uniWatermark } from '@uni/common';

import { UniFlagName } from '../../models';
import { UniFlagTemplate } from '../../utils';

@Component({
  tag: 'uni-flag',
  styleUrl: '../../styles/flag.css'
})
export class UniFlagComponent implements ComponentInterface {

  @Prop({reflect: true}) src: string;

  @Prop({reflect: true}) alt: string = 'flag';

  @Prop({reflect: true}) name: UniFlagName;

  @Prop({reflect: true}) rounded: boolean;

  componentDidLoad(): void {
    uniWatermark('uni-flag', 'map');
  }

  render(): VNode {
    const { src, alt, name, rounded } = this;
    const classes = { 'uni-flag': true, rounded };

    return UniFlagTemplate({ src, alt, name, classes });
  }
}
