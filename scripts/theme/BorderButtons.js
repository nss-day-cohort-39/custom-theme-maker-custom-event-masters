const eventHub = document.querySelector('#container')

eventHub.addEventListener('click', clickevent => {
  
  if(clickevent.target.id.includes('pixel')) {
    const truePixel = clickevent.target.value;

    const pixelEvent = new CustomEvent('pixelBorder', {
      detail: {
        borderSize: truePixel
      }
    })

    eventHub.dispatchEvent(pixelEvent);
  }
})

export const BorderButtons = () => {
    return `
        <article class="borderSizes">
            <fieldset>
                <legend>Border Sizes</legend>

                <label for="onepixel">1px</label>
                <input id='onepixel' type="radio" name="pixelsize" value="onepixel" />

                <label for="threepixels">3px</label>
                <input id='threepixels' type="radio" name="pixelsize" value="threepixels" />

                <label for="fivepixels">5px</label>
                <input id='fivepixels' type="radio" name="pixelsize" value="fivepixels" />
            </fieldset>
        </article>
    `
}
