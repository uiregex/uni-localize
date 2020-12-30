import { Component, h, VNode } from '@stencil/core';

import '../../import/build';

@Component({ tag: 'uni-loc' })
export class MyComponent {
  render():VNode {
    return <uni-router-loc/>;
  }
}
