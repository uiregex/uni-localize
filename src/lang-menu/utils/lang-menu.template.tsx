import { Fragment, h, VNode } from '@stencil/core';

import { uniLangItemRoutingLiteral } from './routing.literal';
import { uniLangItemStoreLiteral } from './store.literal';

export const UniLangMenuTemplate = function(data, storeData): VNode {
  const { url, mini, round, mode, routing, route, languagesPath, activePath, translatePath, isShadow } = data;
  const { top, shadow, frame, type, feature, separator } = storeData;

  return (
    <Fragment>
      <uni-menu selector={'uni-menu-surface'} class='uni-lang-menu'>
        <uni-lang-menu-button
          mini={mini}
          round={round}
          mode={mode}
          top={top}
          type={type}
          feature={feature}
          separator={separator}
          activePath={activePath}
        />

        <uni-menu-surface>
          <uni-list-wrap pro={true}>
            <ul>
              <uni-event-store-get
                top={top}
                type={type}
                feature={feature}
                separator={separator}
                path={languagesPath}
                prop={'state'}
              >
                <uni-repeat strict={true} value={routing
                  ? uniLangItemRoutingLiteral({ route, round, activePath, isShadow }, storeData)
                  : uniLangItemStoreLiteral({ round, activePath, isShadow }, storeData)} />
              </uni-event-store-get>
            </ul>
          </uni-list-wrap>
        </uni-menu-surface>
      </uni-menu>

      <uni-lang-load
        url={url}
        top={top}
        shadow={shadow}
        isShadow={isShadow}
        frame={frame}
        type={type}
        feature={feature}
        separator={separator}
        languagesPath={languagesPath}
        activePath={activePath}
        translatePath={translatePath}
      />
    </Fragment>
  ) as VNode;
};
