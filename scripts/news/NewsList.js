import { useNews } from "./NewsProvider.js"
import { NewsItem } from "./NewsItem.js"

const eventHub = document.querySelector("#container")

export const NewsList = () => {
    const newsItems = useNews()
    return render(newsItems)
}

const render = newsCollection => {
    return `
        <article class="container__panel scores">
            ${newsCollection.map(news => NewsItem(news)).join("")}
        </article>
    `
}

export const newsBorderEvent = () => {
  eventHub.addEventListener("pixelBorder", event => {
    const allNewsComponents = document.querySelectorAll('.newsItem')
      const pixel = event.detail.borderSize

      for (const news of allNewsComponents) {
        news.classList = ['newsItem']
        news.classList.add(`${pixel}`)
      }
  })
}

export const newsColorEvent = () => {
    eventHub.addEventListener("colorChosen", event => {
      const allNewsComponents = document.querySelectorAll('.newsItem')
        const color = event.detail.color
        
        for (const news of allNewsComponents) {
          news.classList = ['newsItem']
          news.classList.add(`${color}`)
        }
    })
  }
