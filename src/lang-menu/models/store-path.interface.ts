import { UniStoreType } from './types/store-type.type';

export interface UniStorePath {
  feature: string;
  separator: string;
  type: UniStoreType;
  path: string;
}
