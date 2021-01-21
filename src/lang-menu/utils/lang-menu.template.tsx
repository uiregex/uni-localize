import { h, VNode } from '@stencil/core';

export const UniLangMenuTemplate =
  function({ type, mini, round, routing, route, activePath, langs, lang }): VNode {
    return (
      <div class="mdc-menu-surface--anchor uni-lang-menu">
        <uni-store-set
          active={true}
          init={true}
          type={type}
          path={activePath}
          state={lang}
        />

        <uni-button-mat>
          <uni-button-icon-mat>
            <uni-store-event-get
              active={true}
              type={type}
              path={`${activePath}.flag`}
              target="uni-flag"
              prop="name"
            >
              {/*<uni-store-event-get*/}
              {/*  active={true}*/}
              {/*  type={type}*/}
              {/*  path={`${activeState}.flagSrc`}*/}
              {/*  target="uni-flag"*/}
              {/*  prop="src"*/}
              {/*>*/}
                <uni-flag round={round} />
              {/*</uni-store-event-get>*/}
            </uni-store-event-get>
          </uni-button-icon-mat>

          {mini ? '' : <uni-button-label-mat>
            <uni-store-event-get
              active={true}
              type={type}
              path={`${activePath}.name`}
              target="uni-text"
              prop="content"
            >
              <uni-text class="uni-lang-menu-label" />
            </uni-store-event-get>
          </uni-button-label-mat>}

          <uni-button-icon-mat>
            <uni-mat-f-arrow-drop-down />
          </uni-button-icon-mat>
        </uni-button-mat>

        <uni-menu-surface-mat>
          {langs.map((item) =>
            <uni-list-mat>
              <uni-store-event-set
                active={!routing}
                listen="click"
                type={type}
                path={activePath}
                state={item}
              >
                <uni-router-link params={routing ? `${route}=${item.lang}` : ''}>
                  <uni-list-item-mat>
                    <uni-flag name={item.flag} round={round} />
                    <uni-text content={item.name} />
                  </uni-list-item-mat>
                </uni-router-link>
              </uni-store-event-set>

              <uni-route params={routing ? `${route}=${item.lang}` : ''}>
                <uni-store-set
                  type={type}
                  path={activePath}
                  state={item}
                />
              </uni-route>
            </uni-list-mat>,
          )}
        </uni-menu-surface-mat>
      </div>
    );
  };
