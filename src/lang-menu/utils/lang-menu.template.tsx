import { Fragment, h, VNode } from '@stencil/core';

export const UniLangMenuTemplate =
  function({ type, mini, round, routing, route, activePath, langs, lang }): VNode {
    return (
      <Fragment>
        <uni-store-set
          initial={true}
          type={type}
          path={activePath}
          state={lang}
        />

        <uni-menu-wrap class='uni-lang-menu'>
          <uni-button pro={true}>
            <uni-button-icon-wrap>
              <uni-event-store-get
                type={type}
                path={`${activePath}.flag`}
                selector='uni-flag'
                prop='name'
              >
                {/*<uni-event-store-get*/}
                {/*  active={true}*/}
                {/*  type={type}*/}
                {/*  path={`${activeState}.flagSrc`}*/}
                {/*  selector="uni-flag"*/}
                {/*  prop="src"*/}
                {/*>*/}
                <uni-flag round={round} />
                {/*</uni-event-store-get>*/}
              </uni-event-store-get>
            </uni-button-icon-wrap>

            {mini ? '' : <uni-button-label>
              <uni-event-store-get
                type={type}
                path={`${activePath}.name`}
                selector='uni-text'
                prop='value'
              >
                <uni-text />
              </uni-event-store-get>
            </uni-button-label>}

            <uni-button-icon name={'arrow-drop-down'} />
          </uni-button>

          <uni-menu-surface-wrap>
            <uni-list-wrap>
              <ul>
                {langs.map((item) =>
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
                          <uni-text value={item.name} />
                        </uni-list-item>
                      </uni-route>
                    </uni-router-link>

                    {routing ? <uni-route params={`${route}=${item.lang}`} prop={'activate'}>
                      <uni-store-set type={type} path={activePath} state={item} />
                    </uni-route> : ''}
                  </uni-event-store-set>,
                )}
              </ul>
            </uni-list-wrap>
          </uni-menu-surface-wrap>
        </uni-menu-wrap>
      </Fragment>
    );
  };
