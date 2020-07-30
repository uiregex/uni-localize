import { h, VNode } from '@stencil/core';

import { UniHostTemplate, UniObject, UniTemplate } from '@uni/common';

import { UniFlag } from '../../models';
import { uniFlagCnSvg } from './cn';
import { uniFlagEnSvg } from './en';
import { uniFlagRuSvg } from './ru';
import { uniFlagUsSvg } from './us';

export function uniFlag({ src, alt, svg, rounded, shadow }: UniFlag): VNode {
  const classes = { 'uni-flag': true, rounded };

  return shadow
    ? UniTemplate(src ? <img src={src} alt={alt}/> : uniSwitchFlag(svg, classes))
    : UniHostTemplate({ classes }, src ? <img src={src} alt={alt}/> : uniSwitchFlag(svg)
  );
}

function uniSwitchFlag(svg: string, classes?: UniObject<boolean>): VNode {
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
