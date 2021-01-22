import { Component, ComponentInterface, VNode } from '@stencil/core';

import { UniHostTemplate } from '@uni/common';

import { uniLangMenuWrapInit } from '../../utils/lang-menu-wrap.init';

@Component({
  tag: 'uni-lang-menu-wrap',
  styleUrl: '../../styles/lang-menu.css',
})
export class UniLangMenuWrapComponent implements ComponentInterface {

  componentDidLoad(): void {
    uniLangMenuWrapInit();
  }

  render(): VNode {
    return UniHostTemplate({ classes: 'mdc-menu-surface--anchor uni-lang-menu' });
  }
}
