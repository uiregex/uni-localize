import { UniFlagName } from '../../../flag/models';

export interface UniLangMenuItem {
  lang: string;
  name: string;
  flag?: UniFlagName;
  flagSrc?: string;
  translation: string;
}
