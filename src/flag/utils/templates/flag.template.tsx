import { h, VNode } from '@stencil/core';

import { UniHostTemplate } from '@uni/common';

import { UniFlag } from '../../models';
import { uniSwitchFlag } from './switch-flag.template';

export const UniFlagTemplate = function({ src, alt, name, classes }: UniFlag): VNode {
  return UniHostTemplate({ classes }, src ? <img src={src} alt={alt}/> : uniSwitchFlag(name));
};
