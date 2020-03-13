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

export const scoreColorEvent = () => {
  eventHub.addEventListener("colorChosen", event => {
    const allScoreComponents = document.querySelectorAll('.score')
      const color = event.detail.color

      for (const score of allScoreComponents) {
        score.classList = ['score']
        score.classList.add(`${color}`)
      }
  })
}

export const scoreBorderEvent = () => {
  eventHub.addEventListener("colorChosen", event => {
    const allScoreComponents = document.querySelectorAll('.score')
      const color = event.detail.color

      for (const score of allScoreComponents) {
        score.classList = ['score']
        score.classList.add(`${color}`)
      }
  })
}