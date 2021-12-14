export function uniLangItemStoreLiteral(data, storeData): string {
  const { linear, mini, round, mode, activePath, isShadow } = data;
  const { top, frame, type, feature, separator } = storeData;

  return `<uni-event-store-set
         listen='click'
         top='${top}'
         shadow='${isShadow}'
         frame='${frame}'
         type='${type}'
         feature='${feature}'
         separator='${separator}'
         path='${activePath}'
         state='(( uniself ))'
       >
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
       </uni-event-store-set>`;
}
