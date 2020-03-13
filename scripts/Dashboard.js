import { ScoreList, scoreColorEvent, scoreBorderEvent, scoreFontEvent, } from "./sports/ScoreList.js"
import { NewsList, newsColorEvent, newsBorderEvent, newsFontEvent, } from "./news/NewsList.js"
import { FavoritesList, favoriteColorEvent, favoriteBorderEvent, favoriteFontEvent } from "./favorites/FavoritesList.js"
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
        ${scoreFontEvent()}
        ${newsFontEvent()}
        ${favoriteFontEvent()}
    `
}
