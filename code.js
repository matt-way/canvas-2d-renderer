export const run = ({ state, element, events, iteration }) => {
  const { data, width, height } = state
  const MAX_CANVASES = 1000
  const totalCanvases = Math.min(data.length, MAX_CANVASES)

  element.style.padding = '2px 0px 0px 2px'

  for (var c = 0; c < totalCanvases; c++) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    canvas.width = width
    canvas.height = height
    canvas.style.display = 'inline-block'
    canvas.style.margin = '0px 2px 2px 0'

    element.appendChild(canvas)

    const imageData = ctx.getImageData(0, 0, width, height)
    const idata = imageData.data
    const d = data[c]

    for (var i = 0; i < idata.length; i += 4) {
      const val = d[i / 4] * 255
      idata[i] = idata[i + 1] = idata[i + 2] = val
      idata[i + 3] = 255
    }
    ctx.putImageData(imageData, 0, 0)
  }
}
