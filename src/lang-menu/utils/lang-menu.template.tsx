import { h, VNode } from '@stencil/core';

export const UniLangMenuTemplate =
  function({ type, mini, round, routing, route, activePath, langs, lang }): VNode {
    return (
      <div class='mdc-menu-surface--anchor uni-lang-menu'>
        <uni-store-set
          activate={true}
          initial={true}
          type={type}
          path={activePath}
          state={lang}
        />

        <uni-button-mat>
          <uni-button-icon-mat>
            <uni-event-store-get
              active={true}
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
          </uni-button-icon-mat>

          {mini ? '' : <uni-button-label-mat>
            <uni-event-store-get
              active={true}
              type={type}
              path={`${activePath}.name`}
              selector='uni-text'
              prop='value'
            >
              <uni-text />
            </uni-event-store-get>
          </uni-button-label-mat>}

          <uni-button-icon-mat>
            <uni-mat-f-arrow-drop-down />
          </uni-button-icon-mat>
        </uni-button-mat>

        <uni-menu-surface-mat>
          {langs.map((item) =>
            <uni-list-mat>
              <uni-event-store-set
                active={!routing}
                listen='click'
                type={type}
                path={activePath}
                state={item}
              >
                <uni-router-link params={routing ? `${route}=${item.lang}` : ''}>
                  <uni-list-item-mat>
                    <uni-flag name={item.flag} round={round} />
                    <uni-text value={item.name} />
                  </uni-list-item-mat>
                </uni-router-link>
              </uni-event-store-set>

              {!routing ? '' : <uni-route params={`${route}=${item.lang}`} prop={'activate'}>
                <uni-store-set
                  type={type}
                  path={activePath}
                  state={item}
                />
              </uni-route>}
            </uni-list-mat>,
          )}
        </uni-menu-surface-mat>
      </div>
    );
  };
