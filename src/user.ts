import { renderBlock } from './lib.js'

export function renderUserBlock (userName:string, urlImg:string, favoriteItemsAmount:string) {
  const favoritesCaption = Number(favoriteItemsAmount) ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = Number(favoriteItemsAmount) > 0

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${urlImg}" alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
