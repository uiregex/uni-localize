import { Component, ComponentInterface, Element, h, Prop, VNode } from '@stencil/core';

import { UniHostTemplate } from '@uni/common';

import { uniLocWatermark } from '../../../watermark';

@Component({
  tag: 'uni-flag',
  styleUrl: '../../styles/flag.css'
})
export class UniFlagComponent implements ComponentInterface {
  @Element() el!: HTMLElement;

  @Prop() src: string;

  @Prop() alt: string = 'flag';

  @Prop() square: boolean;

  connectedCallback(): void {
    uniLocWatermark(this.el);
  }

  render(): VNode {
    const { src, alt, square } = this;
    const classes = {
      'uni-flag': true,
      square
    };

    return UniHostTemplate({ classes }, src ? <img src={src} alt={alt}/> : <i/>);
  }
}
