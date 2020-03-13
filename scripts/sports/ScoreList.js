import { useScores } from "./ScoreProvider.js"
import { Score } from "./Score.js"


const eventHub = document.querySelector("#container")

export const ScoreList = () => {
    const scores = useScores()
    return render(scores)
}

const render = scoreCollection => {
    return `
        <article class="container__panel scores">
            ${scoreCollection.map(score => Score(score)).join("")}
        </article>
    `
}

const scoreColorEvent = () => {
  eventHub.addEventListener("colorChosen", event => {
    const allScoreComponents = document.querySelectorAll('.score')
      const color = event.detail.color
      
      for (const score of allScoreComponents) {
        score.classList = ['score']
        score.classList.add(`${color}`)
      }
  })
}

const scoreFontEvent = () => {
  eventHub.addEventListener("fontChosen", event => {
    const allScoreComponents = document.querySelectorAll('.score')
      const font = event.detail.font
      
      for (const score of allScoreComponents) {
        score.classList = ['score']
        score.classList.add(`${font}`)
      }
  })
}

const scoreBorderEvent = () => {
  eventHub.addEventListener("pixelBorder", event => {
    const allScoreComponents = document.querySelectorAll('.score')
      const pixel = event.detail.borderSize

      for (const score of allScoreComponents) {
        score.classList = ['score']
        score.classList.add(`${pixel}`)
      }
  })
}

export const scoreEvents = () => {
  scoreBorderEvent()
  scoreColorEvent()
  scoreFontEvent()
}