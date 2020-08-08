import { uniLoad, UniResponse, uniWatermark } from '@uni/common';
import { uniGetStorePath, uniHandleStore } from '@uni/udk';

import { UniLangMenuItem } from '../../models';

export function uniLangMenuInit({ type, menuState, languages }): Promise<UniLangMenuItem[]> {
  uniWatermark('uni-lang-menu', 'innerText');

  const data = {
    type,
    feature: 'uni.store',
    separator: '.',
    state: menuState
  };
  uniHandleStore(uniGetStorePath(data), data, null, false, false);

  return languages
    ? uniLoad(languages, 'json' as UniResponse, {
      // mode: 'no-cors',
      // credentials: 'include'
    })
    : new Promise(null);
}


