import { h, VNode } from '@stencil/core';

import { isDefined } from '@uiwebkit/common';

import { UniLangItem } from '../models';

export const UniLangRepeatTemplate = function(data, storeData): VNode[] {
  const { value, linear, mini, round, mode, activePath, isShadow } = data;
  const { top, frame, type, feature, separator } = storeData;

  return value.map((item: UniLangItem): VNode => (
    <uni-event-store-set
      listen='click'
      top={top}
      shadow={isShadow}
      frame={frame}
      mode={'set'}
      type={type}
      feature={feature}
      separator={separator}
      path={activePath}
      state={item}
      class={linear ? 'uni-lang-list' : ''}
    >
      {isDefined(item.route)
        ? (
          <uni-router-link params={item.route}>
            <uni-route
              params={item.route}
              selector={linear ? 'uni-lang-list-button' : 'uni-lang-list-item'}
              prop={'activate'}
            >
              {linear
                ? <uni-lang-list-button mode={mode} mini={mini} round={round} flag={item.flag} name={item.textLabel} />
                : <uni-lang-list-item round={round} flag={item.flag} name={item.textLabel} />
              }
            </uni-route>

            <uni-route params={item.route} prop={'activate'}>
              <uni-store-set
                inactive={true}
                top={top}
                shadow={isShadow}
                frame={frame}
                mode={'set'}
                type={type}
                feature={feature}
                separator={separator}
                path={activePath}
                state={item}
              />
            </uni-route>
          </uni-router-link>
        ) : (
          <uni-event-store-get
            top={top}
            type={type}
            feature={feature}
            separator={separator}
            path={`${activePath}.textLabel`}
            equal={item.textLabel}
            selector={linear ? 'uni-lang-list-button' : 'uni-lang-list-item'}
            prop={'activate'}
          >
            {linear
              ? <uni-lang-list-button mode={mode} mini={mini} round={round} flag={item.flag} name={item.textLabel} />
              : <uni-lang-list-item round={round} flag={item.flag} name={item.textLabel} />
            }
          </uni-event-store-get>
        )}
    </uni-event-store-set>
  )) as VNode[];
};
