import { h, VNode } from '@stencil/core';

import { UniTemplate } from '@uni/common';

import { UniFlag } from '../../models';
import { uniSwitchFlag } from './switch-flag.template';

export const UniFlagShadowTemplate = function({ src, alt, name, classes }: UniFlag): VNode {
  return UniTemplate(src ? <img src={src} alt={alt}/> : uniSwitchFlag(name, classes));
};
