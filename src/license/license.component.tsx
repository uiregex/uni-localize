import { Component, ComponentInterface, Element } from '@stencil/core';

@Component({ tag: 'uni-license-loc' })
export class UniLicenseLocComponent implements ComponentInterface {
  @Element() el!: HTMLElement

  componentDidLoad() {
    const loc = this.el.innerText || window['uni']?.codes.loc;
    this.el.hidden = true;
    window['uni'] = { ...window['uni'], codes: { ...window['uni']?.codes, loc } };
  }
}
