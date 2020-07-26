import { h, VNode } from '@stencil/core';

import { UniObject, UniTemplate } from '@uni/common';

import { uniFlagCnSvg } from './cn';
import { uniFlagEnSvg } from './en';
import { uniFlagRuSvg } from './ru';
import { uniFlagUsSvg } from './us';

interface UniFlag {
  src: string;
  alt: string;
  svg: string;
  rounded: boolean;
}

export function uniFlag({ src, alt, svg, rounded }: UniFlag): VNode {
  const classes = { 'uni-flag': true, rounded };

  return UniTemplate(src ? <img src={src} alt={alt}/> : uniSwitchFlag(svg, classes));
}


export function uniSwitchFlag(svg: string, classes: UniObject<boolean>): VNode {
  switch (svg) {
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
