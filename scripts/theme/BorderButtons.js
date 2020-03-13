const HTMLTarget = document.querySelector('.borderSizes');
const eventHub = document.querySelector('#container')

HTMLTarget.addEventListener('click', clickevent => {
  
  if(clickevent.target.value.endsWith('pixel')) {
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
                <input type="radio" name="pixelsize" value="onepixel" />

                <label for="threepixels">3px</label>
                <input type="radio" name="pixelsize" value="threepixels" />

                <label for="fivepixels">5px</label>
                <input type="radio" name="pixelsize" value="fivepixels" />
            </fieldset>
        </article>
    `
}
