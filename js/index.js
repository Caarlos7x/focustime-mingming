import Controls from "./controls.js" 
import Timer from "./timer.js"
import Sound from "./sounds.js"
import { 
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay
 } from "./elements.js"

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = Sound()


// ======================= PLAY ===============================================
// adicione um evento por click e dentro da função adicione o hide
buttonPlay.addEventListener('click', function () {
 controls.play()
 timer.countdown()
 sound.buttonPress()
})

// ======================= PAUSE ===============================================
// adicione um evento por click e dentro da função adicione o hide
buttonPause.addEventListener('click', function () {
  controls.pause()
  timer.hold()
  sound.buttonPress()
})

// ======================= STOP ===============================================
buttonStop.addEventListener('click', function () {
  controls.reset()
  timer.reset()
  sound.buttonPress()
})

// ======================= SOUND OFF ===============================================
buttonSoundOff.addEventListener('click', function () {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
  sound.bgAudio.play()
})

// ======================= SOUND ON ===============================================
buttonSoundOn.addEventListener('click', function () {
  buttonSoundOn.classList.add('hide')
  buttonSoundOff.classList.remove('hide')
  sound.bgAudio.pause()
})

buttonSet.addEventListener('click', function(){
  let newMinutes = controls.getMinutes()

  if (!newMinutes) {
    timer.reset()
    return
  }

  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})

 