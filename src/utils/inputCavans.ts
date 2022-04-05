const paint = (canvas: HTMLElement, fillColor: string, lineWidth: number) => {
  // @ts-ignore
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = fillColor
  ctx.strokeStyle = fillColor
  ctx.lineWidth = lineWidth
  ctx.lineCap = 'round'
  function drawline(x1: number, y1: number, x2: number, y2: number) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
  }
  let painting = false
  let last: number[]
  const isTouchDevice = 'ontouchstart' in document.documentElement
  if (isTouchDevice) {
    canvas.addEventListener('touchstart', c => {
      const x = c.touches[0].pageX
      const y = c.touches[0].pageY
      last = [x, y]
    })
    canvas.addEventListener('touchmove', c => {
      const x = c.touches[0].pageX
      const y = c.touches[0].pageY
      // console.log(last)
      drawline(last[0], last[1], x, y)
      last = [x, y]
    })
  } else {
    canvas.addEventListener('mousedown', e => {
      painting = true
      last = [e.pageX, e.pageY]
    })
    canvas.addEventListener('mousemove', e => {
      if (painting) {
        drawline(last[0], last[1], e.pageX, e.pageY)
        last = [e.pageX, e.pageY]
      }
    })
    canvas.addEventListener('mouseup', () => {
      painting = false
    })
  }
}

export default paint
