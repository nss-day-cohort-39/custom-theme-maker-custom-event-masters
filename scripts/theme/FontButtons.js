const eventHub = document.querySelector("#container")
const contentTarget = document.querySelector("#container")

// Listen for browser generated click event in this component
contentTarget.addEventListener("click", clickEvent => {

    // Make sure it was one of the font buttons
    if (clickEvent.target.id.startsWith("btnFont--")) {

        // Get the chosen font
        const [prefix, chosenFont] = clickEvent.target.id.split("--")

        /*
            Create a new custom event, with a good name, and
            add a property to the `detail` object that specifies
            which font was chosen
        */
        const fontChosenEvent = new CustomEvent("fontChosen", {
            detail: {
                font: chosenFont
            }
        })

        eventHub.dispatchEvent(fontChosenEvent)
    }
})


export const FontButtons = () => {
    return `
        <article class="fonts">
            <fieldset>
                <legend>Font Sizes</legend>

                <button id="btnFont--xsmall">Extra Small</button>
                <button id="btnFont--small">Small</button>
                <button id="btnFont--large">Large</button>
                <button id="btnFont--xlarge">Extra Large</button>
            </fieldset>
        </article>
    `
}
