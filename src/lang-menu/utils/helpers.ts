import { isJSON, isString } from '@uiwebkit/common';

import { UniLangItem } from '../models';

export function parseValue(value: string | Array<UniLangItem>): Array<UniLangItem> {
  return isString(value) && isJSON(value) ? JSON.parse(value) : [...value];
}
