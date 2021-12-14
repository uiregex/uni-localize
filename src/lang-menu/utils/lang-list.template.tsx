import { Fragment, h, VNode } from '@stencil/core';

import { uniLangItemRoutingLiteral } from './routing.literal';
import { uniLangItemStoreLiteral } from './store.literal';

export const UniLangListTemplate = function(data, storeData): VNode {
  const { list, linear, mini, round, routing, route, mode, languagesPath, activePath, translatePath, isShadow } = data;
  const { top, shadow, frame, type, feature, separator } = storeData;

  return (
    <Fragment>
      <uni-event-store-get
        top={top}
        type={type}
        feature={feature}
        separator={separator}
        path={languagesPath}
        prop={'state'}
      >
        <uni-repeat strict={true} class='uni-lang-list' value={routing
          ? uniLangItemRoutingLiteral({ linear, mini, round, route, mode, activePath, isShadow }, storeData)
          : uniLangItemStoreLiteral({ linear, mini, round, mode, activePath, isShadow }, storeData)} />
      </uni-event-store-get>

      <uni-load-store
        multi={true}
        top={top}
        shadow={isShadow}
        frame={frame}
        type={type}
        feature={feature}
        separator={separator}
        path={languagesPath}
        url={list}
      />

      <uni-event-store-get
        top={top}
        type={type}
        feature={feature}
        separator={separator}
        path={`${languagesPath}[0]`}
        prop={'state'}
      >
        <uni-store-set
          top={top}
          shadow={isShadow}
          frame={frame}
          type={type}
          feature={feature}
          separator={separator}
          mode={'init'}
          path={activePath}
        />
      </uni-event-store-get>

      <uni-event-store-get
        top={top}
        type={type}
        feature={feature}
        separator={separator}
        path={`${activePath}.translation`}
        prop={'url'}
      >
        <uni-load-store
          multi={true}
          top={top}
          shadow={shadow}
          frame={frame}
          mode={'set'}
          feature={feature}
          separator={separator}
          path={translatePath}
        />
      </uni-event-store-get>
    </Fragment>
  ) as VNode;
};
