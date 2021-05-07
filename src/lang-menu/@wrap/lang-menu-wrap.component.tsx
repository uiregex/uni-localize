import { Component, ComponentInterface, h, VNode } from '@stencil/core';

import { UniTemplate, uniWatermark } from '@uni/common';

@Component({
  tag: 'uni-lang-menu-wrap',
  styleUrl: '../styles/lang-menu.css',
})
export class UniLangMenuWrapComponent implements ComponentInterface {

  render(): VNode {
    return UniTemplate(<uni-menu-wrap class={'uni-lang-menu'}><slot/></uni-menu-wrap>);
  }

  componentDidLoad(): void {
    uniWatermark('uni-lang-menu-wrap', 'inner');
  }
}
