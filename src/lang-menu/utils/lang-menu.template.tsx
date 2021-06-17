import { Fragment, h, VNode } from '@stencil/core';

export const UniLangMenuTemplate =
  function({ type, feature, separator, activePath, mini, round, routing, route, languages, lang }): VNode {
  return (
      <Fragment>
        <uni-store-set mode={'patch'} type={type} path={activePath} state={lang} />

        <uni-menu-wrap selector="uni-menu-surface" class='uni-lang-menu'>
          <uni-button pro={true}>
            <uni-button-icon only={true}>
              <uni-event-store-get
                type={type}
                feature={feature}
                separator={separator}
                path={`${activePath}.flag`}
                selector='uni-flag'
                prop='name'
              >
                {/*<uni-event-store-get*/}
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
                type={type}
                feature={feature}
                separator={separator}
                path={`${activePath}.name`}
                selector='uni-render'
                prop='value'
              >
                <uni-render text={true} />
              </uni-event-store-get>
            </uni-button-label>}

            <uni-button-icon name={'arrow-drop-down'} />
          </uni-button>

          <uni-menu-surface>
            <uni-list-wrap>
              <ul>
                {languages.map((item) =>
                  <uni-event-store-set
                    inactive={routing}
                    listen='click'
                    type={type}
                    path={activePath}
                    state={item}
                  >
                    <uni-router-link params={routing ? `${route}=${item.lang}` : ''}>
                      <uni-route params={`${route}=${item.lang}`} prop={'active'}>
                        <uni-list-item index={-1}>
                          <uni-flag name={item.flag} round={round} />
                          <uni-render text={true} value={item.name} />
                        </uni-list-item>
                      </uni-route>
                    </uni-router-link>

                    {routing ? <uni-route params={`${route}=${item.lang}`} prop={'activate'}>
                      <uni-store-set
                        inactive={true}
                        type={type}
                        feature={feature}
                        separator={separator}
                        path={activePath}
                        state={item}
                      />
                    </uni-route> : ''}
                  </uni-event-store-set>,
                )}
              </ul>
            </uni-list-wrap>
          </uni-menu-surface>
        </uni-menu-wrap>
      </Fragment>
    );
  };
