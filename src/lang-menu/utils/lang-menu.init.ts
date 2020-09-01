import { uniLoad, UniResponse, uniWatermark } from '@uni/common';

import { UniLangMenuItem } from '../models';

export function uniLangMenuInit(languages: string): Promise<UniLangMenuItem[]> {
  uniWatermark('uni-lang-menu', 'innerText');

  return languages
    ? uniLoad(languages, 'json' as UniResponse, {
      // mode: 'no-cors',
      // credentials: 'include'
    })
    : new Promise(null);
}


