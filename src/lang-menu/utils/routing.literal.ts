import { uniListItemLiteral } from './list-item.literal';

export function uniLangItemRoutingLiteral(data, storeData): string {
  const { route, round, activePath, isShadow } = data;
  const { top, frame, type, feature, separator } = storeData;

  return `<uni-router-link params='${route}={{ lang }}'>
         <uni-event-store-get
           top='${top}'
           type='${type}'
           feature='${feature}'
           separator='${separator}'
           path='${activePath}.lang'
           equal='{{ lang }}'
           selector='uni-list-item'
           prop='selected'
         >
           ${uniListItemLiteral(round)}
         </uni-event-store-get>
       </uni-router-link>

       <uni-route params='${route}={{ lang }}' prop='activate'>
         <uni-store-set
           inactive
           top='${top}'
           shadow='${isShadow}'
           frame='${frame}'
           type='${type}'
           feature='${feature}'
           separator='${separator}'
           path='${activePath}'
           state='{{ uniself }}'
         />
       </uni-route>`;
}
