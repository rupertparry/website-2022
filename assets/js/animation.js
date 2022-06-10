const icon = document.querySelector('#globe-icon')

let index = 0
let emojis = ['🌏', '🌎', '🌍']

setInterval(() => {
  icon.innerText = emojis[index]
  index += 1
  if (index >= emojis.length) index = 0
}, 650)