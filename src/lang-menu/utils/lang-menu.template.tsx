import { Fragment, h, VNode } from '@stencil/core';

import { UniTemplate } from '@uiwebkit/common';

import { UniLangRepeatTemplate } from './lang-repeat.template';

export const UniLangMenuTemplate = function(data, storeData): VNode {
  const { value, selectedIndex, mini, round, mode, activePath, translatePath, isShadow } = data;
  const { top, shadow, frame, type, feature, separator } = storeData;

  return UniTemplate(
    <Fragment>
      <uni-lang-default
        value={value}
        selectedIndex={selectedIndex}
        isShadow={isShadow}
        top={top}
        shadow={shadow}
        frame={frame}
        type={type}
        feature={feature}
        activePath={activePath}
      />

      <uni-menu selector={'uni-menu-surface'} class='uni-lang-menu'>
        <uni-button pro={true} mode={mode}>
          <uni-event-store-get
            top={top}
            type={type}
            feature={feature}
            separator={separator}
            path={`${activePath}.flag`}
            prop={'name'}
          >
            <uni-lang-button-icon round={round} />
          </uni-event-store-get>

          <uni-display inactive={mini}>
            <uni-button-label>
              <uni-event-store-get
                top={top}
                type={type}
                feature={feature}
                separator={separator}
                path={`${activePath}.textLabel`}
                selector={'uni-render'}
                prop={'value'}
              >
                <uni-render text={true} />
              </uni-event-store-get>
            </uni-button-label>
          </uni-display>

          <uni-drop-down />
        </uni-button>

        <uni-menu-surface>
          <uni-list-wrap pro={true}>
            <ul>
              {UniLangRepeatTemplate(data, storeData)}
            </ul>
          </uni-list-wrap>
        </uni-menu-surface>
      </uni-menu>

      <uni-translate-load
        top={top}
        shadow={shadow}
        frame={frame}
        type={type}
        feature={feature}
        separator={separator}
        activePath={activePath}
        translatePath={translatePath}
      />
    </Fragment>
  ) as VNode;
};
