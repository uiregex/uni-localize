import { h, VNode } from '@stencil/core';

export const UniLangMenuTemplate =
  function({ type, mini, rounded, routing, route, activeState, list, lang }): VNode {
    return (
      <div class="mdc-menu-surface--anchor uni-lang-menu">
        <uni-store active init type={type} state={activeState} value={lang}/>

        <uni-button-mat>
          <uni-button-icon-mat>
            <uni-store active type={type} state={`${activeState}.flag`} target="uni-flag" prop="name">
              <uni-store active type={type} state={`${activeState}.flagSrc`} target="uni-flag" prop="src">
                <uni-flag rounded={rounded}/>
              </uni-store>
            </uni-store>
          </uni-button-icon-mat>

          {mini ? '' : <uni-button-label-mat>
            <uni-store active type={type} state={`${activeState}.name`} target="uni-text" prop="content">
              <uni-text class="uni-lang-menu-label"/>
            </uni-store>
          </uni-button-label-mat>}

          <uni-button-icon-mat>
            <uni-icon-arrow-drop-down-mat/>
          </uni-button-icon-mat>
        </uni-button-mat>

        <uni-menu-surface-mat>
          <uni-list-mat>
            {list.map((item) =>
              <uni-store active={!routing} type={type} event="click" state={activeState} value={item}>
                <uni-route-link params={routing ? `${route}=${item.lang}` : ''}>
                  <uni-list-item-mat>
                    <uni-flag src={item.flagSrc} name={item.flag} rounded={rounded}/>
                    <uni-text content={item.name}/>
                  </uni-list-item-mat>
                </uni-route-link>

                <uni-route params={routing ? `${route}=${item.lang}` : ''}>
                  <uni-store type={type} state={activeState} value={item}/>
                </uni-route>
              </uni-store>
            )}
          </uni-list-mat>
        </uni-menu-surface-mat>
      </div>
    );
  };
