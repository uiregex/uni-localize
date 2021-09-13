import { UniStorePath } from '../models/store-path.interface';

export function uniGetStorePath(paths: UniStorePath): string {
  return `${paths.feature}${paths.separator}${paths.type}${paths.path ? paths.separator + paths.path : ''}`;
}
