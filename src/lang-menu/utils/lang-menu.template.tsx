import { Fragment, h, VNode } from '@stencil/core';

import { uniGetStorePath } from './get-store-path';
import { uniCaseLiteral } from './case.literal';

export const UniLangMenuTemplate = function(data, storeData): VNode {
  const { list, mini, round, routing, route, languagesPath, activePath, translatePath, isShadow } = data;
  const { top, shadow, frame, type, feature, separator } = storeData;

  return (
    <Fragment>
      <uni-menu selector={'uni-menu-surface'} class='uni-lang-menu'>
        <uni-button pro={true}>
          <uni-button-icon only={true}>
            <uni-event-store-get
              top={top}
              type={type}
              feature={feature}
              separator={separator}
              path={`${activePath}.flag`}
              selector={'uni-flag'}
              prop={'name'}
            >
              <uni-flag round={round} />
            </uni-event-store-get>
          </uni-button-icon>

          <uni-display inactive={mini}>
            <uni-button-label>
              <uni-event-store-get
                top={top}
                type={type}
                feature={feature}
                separator={separator}
                path={`${activePath}.name`}
                selector={'uni-render'}
                prop={'value'}
              >
                <uni-render text={true} className='uni-space' />
              </uni-event-store-get>
            </uni-button-label>
          </uni-display>

          <uni-button-icon name={'arrow-drop-down'} />
        </uni-button>

        <uni-menu-surface>
          <uni-list-wrap pro={true}>
            <ul>
              <uni-event-store-get
                type={type}
                feature={feature}
                separator={separator}
                path={languagesPath}
                prop={'state'}
              >
                <uni-repeat strict={true}>
                  <template innerHTML={uniCaseLiteral({ round, routing, route, activePath, isShadow }, storeData)} />
                </uni-repeat>
              </uni-event-store-get>
            </ul>
          </uni-list-wrap>
        </uni-menu-surface>
      </uni-menu>

      <uni-load-store
        top={top}
        shadow={shadow}
        frame={frame}
        type={type}
        feature={feature}
        separator={separator}
        path={languagesPath}
        url={list}
      />

      <uni-event-store-get type={type} path={`${languagesPath}[0]`} prop={'state'}>
        <uni-store-set
          top={top}
          shadow={shadow}
          frame={frame}
          type={type}
          feature={feature}
          separator={separator}
          mode={'init'}
          path={activePath}
        />
      </uni-event-store-get>

      <uni-event
        capture={true}
        listen={uniGetStorePath({ type, feature, separator, path: `${activePath}.translation` })}
        prop={'activate'}
        value={true}
      >
        <uni-store-get
          top={top}
          feature={feature}
          type={type}
          separator={separator}
          path={`${activePath}.translation`}
          prop={'url'}
        >
          <uni-load-store
            top={top}
            shadow={shadow}
            frame={frame}
            multi={true}
            mode={'set'}
            feature={feature}
            separator={separator}
            path={translatePath}
          />
        </uni-store-get>
      </uni-event>
    </Fragment>
  ) as VNode;
};
