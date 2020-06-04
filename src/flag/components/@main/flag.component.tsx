import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniHostTemplate } from '@uni/common';

@Component({
  tag: 'uni-flag',
  styleUrl: '../../styles/flag.css'
})
export class UniFlagComponent implements ComponentInterface {
  @Prop() src: string;

  @Prop() alt: string = 'flag';

  @Prop() square: boolean;

  render(): VNode {
    const { src, alt, square } = this;
    const classes = {
      'uni-flag': true,
      square
    };

    return UniHostTemplate({ classes }, src ? <img src={src} alt={alt}/> : <i/>);
  }
}
