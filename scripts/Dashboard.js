import { ScoreList, scoreEvents } from "./sports/ScoreList.js"
import { NewsList, newsEvents } from "./news/NewsList.js"
import { FavoritesList, favoriteEvents } from "./favorites/FavoritesList.js"
import { ThemeOptions } from "./theme/ThemeOptions.js"

export const Dashboard = () => {
    return `
        ${ThemeOptions()}
        ${ScoreList()}
        ${NewsList()}
        ${FavoritesList()}
        ${scoreEvents()}
        ${newsEvents()}
        ${favoriteEvents()}
    `
}
