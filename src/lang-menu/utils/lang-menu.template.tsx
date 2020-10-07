import { h, VNode } from '@stencil/core';

export const UniLangMenuTemplate =
  function({ type, mini, rounded, routing, route, activeState, list, lang }): VNode {
    return (
      <div class="mdc-menu-surface--anchor uni-lang-menu">
        <uni-store-set active={true} init={true} type={type} path={activeState} state={lang}/>

        <uni-button-mat>
          <uni-button-icon-mat>
            <uni-store-event-get active={true} type={type} path={`${activeState}.flag`} target="uni-flag" prop="name">
              <uni-store-event-get
                active={true}
                type={type}
                path={`${activeState}.flagSrc`}
                target="uni-flag"
                prop="src"
              >
                <uni-flag rounded={rounded}/>
              </uni-store-event-get>
            </uni-store-event-get>
          </uni-button-icon-mat>

          {mini ? '' : <uni-button-label-mat>
            <uni-store-get active={true} type={type} path={`${activeState}.name`} target="uni-text" prop="content">
              <uni-text class="uni-lang-menu-label"/>
            </uni-store-get>
          </uni-button-label-mat>}

          <uni-button-icon-mat>
            <uni-icon-arrow-drop-down-mat/>
          </uni-button-icon-mat>
        </uni-button-mat>

        <uni-menu-surface-mat>
          {list.map((item) =>
            <uni-list-mat>
              <uni-store-event-set
                active={!routing}
                listen="click"
                type={type}
                path={activeState}
                state={item}
                target="uni-store-set"
                prop="active"
                stop={true}
              >
                <uni-router-link params={routing ? `${route}=${item.lang}` : ''}>
                  <uni-list-item-mat>
                    <uni-flag src={item.flagSrc} name={item.flag} rounded={rounded}/>
                    <uni-text content={item.name}/>
                  </uni-list-item-mat>
                </uni-router-link>
              </uni-store-event-set>

              <uni-route params={routing ? `${route}=${item.lang}` : ''}>
                <uni-store-set type={type} path={activeState} state={item}/>
              </uni-route>
            </uni-list-mat>
          )}
        </uni-menu-surface-mat>
      </div>
    );
  };
