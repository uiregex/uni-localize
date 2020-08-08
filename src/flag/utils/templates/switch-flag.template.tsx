import { h, VNode } from '@stencil/core';

import { UniCssClasses } from '@uni/common';

import { UniFlagCnTemplate } from './flag-cn.template';
import { UniFlagEnTemplate } from './flag-en.template';
import { UniFlagUsTemplate } from './flag-us.template';
import { UniFlagRuTemplate } from './flag-ru.template';

export function uniSwitchFlag(name: string, classes?: UniCssClasses): VNode {
  switch (name) {
    case 'cn':
      return UniFlagCnTemplate(classes);
    case 'en':
      return UniFlagEnTemplate(classes);
    case 'us':
      return UniFlagUsTemplate(classes);
    case 'ru':
      return UniFlagRuTemplate(classes);
    default:
      return <i/>;
  }
}
