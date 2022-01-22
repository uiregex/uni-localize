import { Component, ComponentInterface, Fragment, h, Prop, VNode } from '@stencil/core';

import { UniLangItem, UniStoreType } from '../../../models';

@Component({ tag: 'uni-lang-default' })
export class UniLangDefaultComponent implements ComponentInterface {

  @Prop({ reflect: true }) value: Array<UniLangItem> = [];

  @Prop({ reflect: true }) selectedIndex: number = 0;

  @Prop({ reflect: true }) indexMode: 'init' | 'set' | 'merge' = 'init';

  @Prop({ reflect: true }) isShadow: boolean = false;

  @Prop({ reflect: true }) top: boolean = false;

  @Prop({ reflect: true }) shadow: boolean = false;

  @Prop({ reflect: true }) frame: boolean = false;

  @Prop({ reflect: true }) type: UniStoreType = 'memory';

  @Prop({ reflect: true }) feature: string = 'uni.store';

  @Prop({ reflect: true }) activePath: string = 'loc.active';

  render(): VNode {
    return (
      <Fragment>
        <uni-event-store-get
          type={this.type}
          feature={this.feature}
          path={this.activePath}
          prop={'inactive'}
        >
          <uni-store-set
            inactive={true}
            top={this.top}
            frame={this.frame}
            shadow={this.isShadow}
            mode={'set'}
            type={this.type}
            feature={this.feature}
            path={this.activePath}
            state={this.value[0]}
          />
        </uni-event-store-get>

        {this.value[0]?.route ? (
          <Fragment>
            <uni-router frame={this.frame} shadow={this.shadow} />

            <uni-store-get
              type={this.type}
              feature={this.feature}
              path={`${this.activePath}.route`}
              prop={'inactive'}
            >
              <uni-route
                inactive={true}
                no-params={this.value[0].route.split('=')[0]}
                prop='activate'
              >
                <uni-router-link params={this.value[this.selectedIndex].route} />
              </uni-route>
            </uni-store-get>

            <uni-store-get
              type={this.type}
              feature={this.feature}
              path={`${this.activePath}.route`}
              selector={'uni-router-link'}
              prop={'activate'}
            >
              <uni-store-get
                type={this.type}
                feature={this.feature}
                path={`${this.activePath}.route`}
                prop={'params'}
              >
                <uni-router-link />
              </uni-store-get>
            </uni-store-get>
          </Fragment>
        ) : null}
      </Fragment>
    );
  };
}
