import { Fragment, h, VNode } from '@stencil/core';

export const UniLangMenuTemplate =
  function({
             top, shadow, frame, type, feature, separator, activePath, mini, round, routing, route, languages, lang,
           }): VNode {
    return (
      <Fragment>
        <uni-store-set
          top={top}
          shadow={shadow}
          frame={frame}
          mode={'patch'}
          type={type}
          feature={feature}
          separator={separator}
          path={activePath}
          state={lang}
        />

        <uni-menu-wrap selector='uni-menu-surface' class='uni-lang-menu'>
          <uni-button pro={true}>
            <uni-button-icon only={true}>
              <uni-event-store-get
                top={top}
                type={type}
                feature={feature}
                separator={separator}
                path={`${activePath}.flag`}
                selector='uni-flag'
                prop='name'
              >
                {/*<uni-event-store-get*/}
                {/*top={top}*/}
                {/*  type={type}*/}
                {/*  path={`${activeState}.flagSrc`}*/}
                {/*  selector="uni-flag"*/}
                {/*  prop="src"*/}
                {/*>*/}
                <uni-flag round={round} />
                {/*</uni-event-store-get>*/}
              </uni-event-store-get>
            </uni-button-icon>

            {mini ? '' : <uni-button-label>
              <uni-event-store-get
                top={top}
                type={type}
                feature={feature}
                separator={separator}
                path={`${activePath}.name`}
                selector='uni-render'
                prop='value'
              >
                <uni-render text={true} class='uni-space' />
              </uni-event-store-get>
            </uni-button-label>}

            <uni-button-icon name={'arrow-drop-down'} />
          </uni-button>

          <uni-menu-surface>
            <uni-list-wrap pro={true}>
              <ul>
                {languages.map((item) => routing ? (
                    <uni-router-link params={routing ? `${route}=${item.lang}` : ''}>
                      <uni-event-store-get
                        top={top}
                        type={type}
                        feature={feature}
                        separator={separator}
                        path={`${activePath}.lang`}
                        equal={item.lang}
                        selector='uni-list-item'
                        prop='selected'
                      >
                        <uni-list-item index={-1}>
                          {item.flag ? (
                            <uni-list-item-graphic only={true}>
                              <uni-flag name={item.flag} round={round} />
                            </uni-list-item-graphic>
                          ) : ''}

                          <uni-list-item-text>{item.name}</uni-list-item-text>
                        </uni-list-item>
                      </uni-event-store-get>

                      <uni-route params={`${route}=${item.lang}`} prop={'activate'}>
                        <uni-store-set
                          inactive={true}
                          top={top}
                          shadow={shadow}
                          frame={frame}
                          type={type}
                          feature={feature}
                          separator={separator}
                          path={activePath}
                          state={item}
                        />
                      </uni-route>
                    </uni-router-link>
                  ) : (
                    <uni-event-store-set
                      listen='click'
                      top={top}
                      shadow={shadow}
                      frame={frame}
                      type={type}
                      feature={feature}
                      separator={separator}
                      path={activePath}
                      state={item}
                    >
                      <uni-event-store-get
                        top={top}
                        type={type}
                        feature={feature}
                        separator={separator}
                        path={`${activePath}.lang`}
                        equal={item.lang}
                        selector={'uni-list-item'}
                        prop={'selected'}
                      >
                        <uni-list-item index={-1}>
                          {item.flag ? (
                            <uni-list-item-graphic only={true}>
                              <uni-flag name={item.flag} round={round} />
                            </uni-list-item-graphic>
                          ) : ''}

                          <uni-list-item-text>{item.name}</uni-list-item-text>
                        </uni-list-item>
                      </uni-event-store-get>
                    </uni-event-store-set>
                  ),
                )}
              </ul>
            </uni-list-wrap>
          </uni-menu-surface>
        </uni-menu-wrap>
      </Fragment>
    ) as VNode;
  };
