import { h, VNode } from '@stencil/core';

import { UniCssClasses, UniTemplate } from '@uni/common';

export const UniFlagRuTemplate = function(classes?: UniCssClasses): VNode {
  return UniTemplate(
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512" class={classes}>
      <g fill-rule="evenodd" stroke-width="1pt">
        <path fill="#fff" d="M0 0h512v512H0z"/>
        <path fill="#0039a6" d="M0 170.7h512V512H0z"/>
        <path fill="#d52b1e" d="M0 341.3h512V512H0z"/>
      </g>
    </svg>
  );
}
