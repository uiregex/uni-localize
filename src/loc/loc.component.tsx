// import { Component, h, Host, Prop, VNode, Watch } from '@stencil/core';
//
// import '../../import/build';
//
// @Component({ tag: 'uni-loc' })
// export class MyComponent {
//
//   @Prop({ reflect: true }) routing: boolean = false;
//
//   @Prop({ reflect: true, mutable: true }) active: boolean = false;
//
//   @Watch('active')
//   test() {
//
//   }
//
//   render(): VNode {
//     return (
//       <Host>
//         <svg xmlns='http://www.w3.org/2000/svg' width={0} height={0} />
//         <uni-store-set-loc/>
//         {this.routing ? <uni-router-loc selector={'uni-route-loc'} link-prevent={'uni-router-link-loc'} /> : ''}
//         <slot />
//       </Host>
//     );
//   }
// }
