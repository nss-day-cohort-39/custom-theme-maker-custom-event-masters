import { useFavorites } from "./FavoritesProvider.js"
import { FavoriteItem } from "./FavoriteItem.js"

const eventHub = document.querySelector("#container")

export const FavoritesList = () => {
    const favoriteItems = useFavorites()
    return render(favoriteItems)
}

const render = favoriteCollection => {
    return `
        <article class="container__panel favorites">
            ${favoriteCollection.map(favorite => FavoriteItem(favorite)).join("")}
        </article>
    `
}

const favoriteBorderEvent = () => {
  eventHub.addEventListener("pixelBorder", event => {
    const allfavoriteComponents = document.querySelectorAll('.favoriteItem')
      const pixel = event.detail.borderSize

      for (const favorite of allfavoriteComponents) {
        favorite.classList = ['favoriteItem']
        favorite.classList.add(`${pixel}`)
      }
  })
}

const favoriteColorEvent = () => {
  eventHub.addEventListener("colorChosen", event => {
    const allFavoriteComponents = document.querySelectorAll('.favoriteItem')
      const color = event.detail.color
      
      for (const favorite of allFavoriteComponents) {
        favorite.classList = ['favoriteItem']
        favorite.classList.add(`${color}`)
      }
  })
}

const favoriteFontEvent = () => {
  eventHub.addEventListener("fontChosen", event => {
    const allFavoriteComponents = document.querySelectorAll('.favoriteItem')
      const font = event.detail.font
      
      for (const favorite of allFavoriteComponents) {
        favorite.classList = ['favoriteItem']
        favorite.classList.add(`${font}`)
      }
  })
}
  
export const favoriteEvents = () => {
  favoriteBorderEvent()
  favoriteColorEvent()
  favoriteFontEvent()
}