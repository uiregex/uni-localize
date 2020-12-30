import { h, VNode } from '@stencil/core';

export const UniLangMenuTemplate =
  function({ type, mini, rounded, routing, route, activeState, list, lang }): VNode {
    return (
      <div class="mdc-menu-surface--anchor uni-lang-menu">
        <uni-store-set-loc
          suf={'loc'}
          active={true}
          init={true}
          type={type}
          path={activeState}
          state={lang}
        />

        <uni-button-mat-loc per={'loc'}>
          <uni-button-icon-mat-loc>
            <uni-store-event-get-loc
              suf={'loc'}
              active={true}
              type={type}
              path={`${activeState}.flag`}
              target="uni-flag"
              prop="name"
            >
              <uni-store-event-get-loc
                suf={'loc'}
                active={true}
                type={type}
                path={`${activeState}.flagSrc`}
                target="uni-flag"
                prop="src"
              >
                <uni-flag rounded={rounded} />
              </uni-store-event-get-loc>
            </uni-store-event-get-loc>
          </uni-button-icon-mat-loc>

          {mini ? '' : <uni-button-label-mat-loc>
            <uni-store-event-get-loc
              suf={'loc'}
              active={true}
              type={type}
              path={`${activeState}.name`}
              target="uni-text-loc"
              prop="content"
            >
              <uni-text-loc class="uni-lang-menu-label" />
            </uni-store-event-get-loc>
          </uni-button-label-mat-loc>}

          <uni-button-icon-mat-loc>
            <uni-mat-f-arrow-drop-down />
          </uni-button-icon-mat-loc>
        </uni-button-mat-loc>

        <uni-menu-surface-mat-loc>
          {list.map((item) =>
            <uni-list-mat-loc>
              <uni-store-event-set-loc
                suf={'loc'}
                active={!routing}
                listen="click"
                type={type}
                path={activeState}
                state={item}
              >
                <uni-router-link-loc suf={'loc'} params={routing ? `${route}=${item.lang}` : ''}>
                  <uni-list-item-mat-loc>
                    <uni-flag src={item.flagSrc} name={item.flag} rounded={rounded} />
                    <uni-text-loc content={item.name} />
                  </uni-list-item-mat-loc>
                </uni-router-link-loc>
              </uni-store-event-set-loc>

              <uni-route-loc params={routing ? `${route}=${item.lang}` : ''}>
                <uni-store-set-loc suf={'loc'} type={type} path={activeState} state={item} />
              </uni-route-loc>
            </uni-list-mat-loc>,
          )}
        </uni-menu-surface-mat-loc>
      </div>
    );
  };
