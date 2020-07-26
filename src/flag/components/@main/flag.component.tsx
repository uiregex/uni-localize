import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniObject, UniTemplate, uniWatermark } from '@uni/common';

import { uniFlagCnSvg } from '../../utils/templates/cn';
import { uniFlagEnSvg } from '../../utils/templates/en';
import { uniFlagRuSvg } from '../../utils/templates/ru';
import { uniFlagUsSvg } from '../../utils/templates/us';

@Component({
  tag: 'uni-flag',
  styleUrl: '../../styles/flag.css'
})
export class UniFlagComponent implements ComponentInterface {
  @Prop() svg: string;

  @Prop() src: string;

  @Prop() alt: string = 'flag';

  @Prop() rounded: boolean;

  componentDidLoad(): void {
    uniWatermark('uni-flag', 'window');
  }

  render(): VNode {
    const { svg, src, alt, rounded } = this;
    const classes = { 'uni-flag': true, rounded };

    return UniTemplate(src ? <img src={src} alt={alt} /> : uniSwitchFlag(svg, classes));
  }
}

function uniSwitchFlag(svg: string, classes: UniObject<boolean>) {
  switch(svg) {
    case 'cn':
      return uniFlagCnSvg(classes);
    case 'en':
      return uniFlagEnSvg(classes);
    case 'ru':
      return uniFlagRuSvg(classes);
    case 'us':
      return uniFlagUsSvg(classes);
    default:
      return <i/>;
  }
}
