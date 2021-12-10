export function uniListItemLiteral(round): string {
  return `<uni-list-item index='-1'>
            <uni-modify state='(( flag ))' action='isBind' prop='inactive'>
              <uni-display inactive>
                <uni-list-item-graphic only>
                  <uni-modify state='(( flag ))' action='unbind' prop='name'>
                    <uni-flag round='${round}' />
                  </uni-modify>
                </uni-list-item-graphic>
              </uni-display>
            </uni-modify>

            <uni-list-item-text>(( name ))</uni-list-item-text>
          </uni-list-item>`;
}
