import { ScoreList, scoreColorEvent } from "./sports/ScoreList.js"
import { NewsList, newsColorEvent } from "./news/NewsList.js"
import { FavoritesList, favoriteColorEvent } from "./favorites/FavoritesList.js"
import { ThemeOptions } from "./theme/ThemeOptions.js"

export const Dashboard = () => {
    return `
        ${ThemeOptions()}
        ${ScoreList()}
        ${NewsList()}
        ${FavoritesList()}
        ${scoreColorEvent()}
        ${newsColorEvent()}
        ${favoriteColorEvent()}
    `
}
