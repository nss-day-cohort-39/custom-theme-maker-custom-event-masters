import { ScoreList, scoreColorEvent, scoreBorderEvent } from "./sports/ScoreList.js"
import { NewsList, newsColorEvent, newsBorderEvent } from "./news/NewsList.js"
import { FavoritesList, favoriteColorEvent, favoriteBorderEvent } from "./favorites/FavoritesList.js"
import { ThemeOptions } from "./theme/ThemeOptions.js"

export const Dashboard = () => {
    return `
        ${ThemeOptions()}
        ${ScoreList()}
        ${NewsList()}
        ${FavoritesList()}
        ${scoreColorEvent()}
        ${scoreBorderEvent()}
        ${newsBorderEvent()}
        ${favoriteBorderEvent()}
        ${newsColorEvent()}
        ${favoriteColorEvent()}
    `
}
