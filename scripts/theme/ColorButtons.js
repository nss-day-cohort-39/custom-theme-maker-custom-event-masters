const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector("#container")

// Listen for browser generated click event in this component
contentTarget.addEventListener("click", clickEvent => {

    // Make sure it was one of the color buttons
    if (clickEvent.target.id.startsWith("btnTheme--")) {

        // Get the chosen color
        const [prefix, chosenColor] = clickEvent.target.id.split("--")
        
        const colorChosenEvent = new CustomEvent("colorChosen", {
            detail: {
                color: chosenColor
            }
        })

        eventHub.dispatchEvent(colorChosenEvent)
    }
})

export const ColorButtons = () => {
    return `
        <article class="colors">
            <fieldset>
                <legend>Background Colors</legend>

                <button id="btnTheme--red">Red</button>
                <button id="btnTheme--purple">Purple</button>
                <button id="btnTheme--blue">Blue</button>
                <button id="btnTheme--green">Green</button>
            </fieldset>
        </article>
    `
}
