import { uniLoad, UniResponse } from '@uni/common';

import { UniLangMenuItem } from '../models';

export function uniLangMenuInit(languages: string): Promise<UniLangMenuItem[]> {
  return languages
    ? uniLoad(languages, 'json' as UniResponse, {
      // mode: 'no-cors',
      // credentials: 'include'
    })
    : new Promise(() => null);
}


