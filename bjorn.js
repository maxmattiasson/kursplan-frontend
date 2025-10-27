// HTML elements setup

// Virtual elements creation

const container = document.querySelector("#bjorn")
const scanOverlayImage = document.createElement("img")
const scanOverlayMask = document.createElement("div")

// Virtual elements starting styles
scanOverlayImage.src = `/assets/images/tn-bjorn-boman.jpg`
scanOverlayMask.style = `mask-image: linear-gradient(#000);
width: 100%;
height: 2rem;
position: absolute;
top: -1rem;
left: 0;
`

// Animation

let startTime
let reqID

function frame(timestamp) {
  if (!startTime) {
    startTime = timestamp
  }
  const elapsedTime = timestamp - startTime

  let shift = Math.min(0.1 * elapsedTime, 100)
  let ran = Math.random()

  container.style.filter = `brightness(${ran * 1.1})`
  container.style.backgroundPosition = `center ${
    (Math.max(ran - 0.95, 0) / 0.05) * 200 - 10
  }px`

  scanOverlayMask.style.transform = `translateY(${shift}px)`
  scanOverlayImage.style = `width: 4.5rem; height: 4.5rem; transform: translateX(0px) translateY(calc(1rem - ${shift}px)) skewX(${
    (ran - 0.5) * 20
  }deg); scale = ${ran * 0.1 + 1} 1; 
  filter: hue-rotate(${(Math.max(ran - 0.5, 0) * 720) / 0.5}deg)`

  if (shift < 100) {
    reqID = requestAnimationFrame(frame)
  } else {
    shift = 0
    startTime = timestamp
    reqID = requestAnimationFrame(frame)
  }
}


// Mouse events

container.addEventListener("mouseover", () => {
  container.append(scanOverlayMask)
  scanOverlayMask.append(scanOverlayImage)

  reqID = requestAnimationFrame(frame)
})

container.addEventListener("mouseout", () => {
  window.cancelAnimationFrame(reqID)
  scanOverlayMask.removeChild(scanOverlayImage)
  container.removeChild(scanOverlayMask)
  container.style.backgroundPosition = "center"
  container.style.filter = ""
})

container.addEventListener("dblclick", () => {
  window.confirm("Gå till Björns profil på Github?")
    ? window.open("https://github.com/bjorneboman")
    : "Oh well"
})
