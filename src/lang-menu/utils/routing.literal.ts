export function uniLangItemRoutingLiteral(data, storeData): string {
  const { linear, mini, round, route, mode, activePath, isShadow } = data;
  const { top, frame, type, feature, separator } = storeData;

  return `<uni-router-link params='${route}=(( lang ))'>
         <uni-event-store-get
           top='${top}'
           type='${type}'
           feature='${feature}'
           separator='${separator}'
           path='${activePath}.lang'
           equal='(( lang ))'
           selector='${linear ? 'uni-lang-list-button' : 'uni-lang-menu-list-item'}'
           prop='selected'
         >
           ${linear
              ? `<uni-lang-list-button mode='${mode}' mini='${mini}' round='${round}' flag='(( flag ))' name='(( name ))'/>`
              : `<uni-lang-menu-list-item round='${round}' flag='(( flag ))' name='(( name ))'/>`
            }
         </uni-event-store-get>
       </uni-router-link>

       <uni-route params='${route}=(( lang ))' prop='activate'>
         <uni-store-set
           inactive
           top='${top}'
           shadow='${isShadow}'
           frame='${frame}'
           type='${type}'
           feature='${feature}'
           separator='${separator}'
           path='${activePath}'
           state='(( uniself ))'
         />
       </uni-route>`;
}
