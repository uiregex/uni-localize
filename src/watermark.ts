import { uniWatermark } from '@uni/common';

export function uniLocWatermark(el: HTMLElement): void {
  el['package'] = 'loc';
  uniWatermark('loc');
}
