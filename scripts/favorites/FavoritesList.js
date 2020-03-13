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

export const favoriteColorEvent = () => {
    eventHub.addEventListener("colorChosen", event => {
      const allFavoriteComponents = document.querySelectorAll('.favoriteItem')
        const color = event.detail.color
        
        // Get current classes of favoriteItem
        const currentClasses = allFavoriteComponents.classList

        // Change all elements with class favoriteItem and add the selected color
        for (const favorite of allFavoriteComponents) {
          favorite.classList = currentClasses
          if(favorite.classList.color == true){
            favorite.classList.replace()
          }
          else {
            favorite.classList.add(`${color}`)
          }
        }
    })
  }