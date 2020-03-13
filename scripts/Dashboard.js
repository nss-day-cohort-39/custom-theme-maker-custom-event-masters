import { ScoreList, scoreColorEvent, scoreBorderEvent } from "./sports/ScoreList.js"
import { NewsList, newsBorderEvent } from "./news/NewsList.js"
import { FavoritesList, favoriteBorderEvent } from "./favorites/FavoritesList.js"
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
    `
}
